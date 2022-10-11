<template>
  <card>
    <h4 slot="header" class="title">
      <i class="tim-icons icon-single-copy-04"></i>
      Edit Article
    </h4>

    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Title" type="text" placeholder="Title" v-model="title"> </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Description" type="text" placeholder="Description" v-model="description">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Keywords" type="text" placeholder="Keywords" v-model="keywords">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <div class="form-group">
          <label for="cover" class="control-label">Cover</label>
          <input type="file" class="form-control" @change="filesChange($event.target.name, $event.target.files)" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <base-input>
          <label>Body</label>
          <ckeditor :editor="editor" v-model="editorData"></ckeditor>
        </base-input>
      </div>
    </div>

    <base-button slot="footer" type="brand" fill @click="submit">Save</base-button>
  </card>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

export default {
  data() {
    return {
      title: null,
      description: null,
      keywords: null,
      cover: null,
      editor: ClassicEditor,
      editorData: "",
    };
  },
  async created() {
    const response = await axios.get("articles", {
      headers: {
        Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
      },
    });

    let articleId = this.$route.params.id;
    const article = response.data.find(article => article._id == articleId);

    this.title = article.title;
    this.description = article.description;
    this.keywords = article.keywords;
    this.body = article.editorData;
  },
  methods: {
    filesChange(fieldName, fileList) {
      if (!fileList.length) return;
      this.cover = fileList[0];
    },
    submit: async function (e) {
      e.preventDefault();

      try {
        const formData = new FormData();
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("keywords", this.keywords);
        formData.append("cover", this.cover);
        formData.append("body", this.body);

        const response = await axios.put("articles/" + this.$route.params.id, formData, {
          headers: {
            Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
            "Content-Type": "multipart/form-data",
          },
        });

        this.$notify({
          message: "Article was updated",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
          timeout: 0,
        });

        this.$router.push("/articles");
      } catch (error) {
        this.$notify({
          message: "Error: " + error,
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "danger",
          timeout: 0,
        });
      }
    },
  },
};
</script>
<style>
.ck.ck-content:not(.ck-comment__input *) {
  height: 300px;
  overflow-y: auto;
}

.card .ck-content h1,
.card .ck-content h2,
.card .ck-content h3,
.card .ck-content h4,
.card .ck-content h5,
.ck-content .card h6,
.card .ck-content p {
  color: #000000 !important;
}
</style>
