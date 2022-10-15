<template>
  <card>
    <h4 slot="header" class="title">
      <i class="tim-icons icon-book-bookmark"></i>
      Edit Book
    </h4>

    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input
          label="Title"
          type="text"
          placeholder="Title"
          v-model="title"
        >
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input
          label="Description"
          type="text"
          placeholder="Description"
          v-model="description"
        >
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input
          label="Link"
          type="text"
          placeholder="Link"
          v-model="link"
        >
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <div class="form-group">
          <label for="cover" class="control-label">Cover</label>
          <input
            type="file"
            class="form-control"
            @change="filesChange($event.target.name, $event.target.files)"
          />
        </div>
      </div>
    </div>

    <base-button slot="footer" type="brand" fill @click="submit"
      >Save</base-button
    >
  </card>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      title: null,
      description: null,
      link: null,
      cover: null,
    };
  },
  async created() {
    const response = await axios.get("books", {
      headers: {
        Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
      },
    });

    let bookId = this.$route.params.id;
    const book = response.data.find((book) => book._id == bookId);

    this.title = book.title;
    this.description = book.description;
    this.link = book.link;
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
        formData.append("link", this.link);
        formData.append("cover", this.cover);

        const response = await axios.put(
          "books/" + this.$route.params.id,
          formData,
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.$notify({
          message: "Book was updated",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
          timeout: 0,
        });

        this.$router.push("/books");
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
<style></style>
