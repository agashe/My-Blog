<template>
  <div class="row">
    <div class="col-12">
      <card>
        <h4 slot="header" class="title">
          <i class="tim-icons icon-book-bookmark"></i>
          Books

          <base-button
            type="brand"
            class="btn-sm float-right"
            @click="goToCreateBook()"
          >
            Add Book
          </base-button>
        </h4>

        <div class="table-responsive mt-3">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Published At</th>
                <!-- <th>Downloads</th> -->
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(book, index) in books">
                <td>{{ index + 1 }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.createdAt }}</td>
                <!-- <td>500</td> -->
                <td>
                  <base-button
                    type="success"
                    icon
                    title="Edit"
                    class="mx-1"
                    @click="editBook(book._id)"
                  >
                    <i class="tim-icons icon-pencil"></i>
                  </base-button>
                  <base-button
                    type="danger"
                    icon
                    title="Delete"
                    class="mx-1"
                    @click="deleteBook(book._id, index)"
                  >
                    <i class="tim-icons icon-trash-simple"></i>
                  </base-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      books: null,
    };
  },
  async created() {
    const response = await axios.get("books", {
      headers: {
        Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
      },
    });

    this.books = response.data;
  },
  methods: {
    goToCreateBook() {
      this.$router.push("/books/create");
    },
    editBook(id) {
      this.$router.push("/books/edit/" + id);
    },
    async deleteBook(id, index) {
      if (!confirm("Are you sure?")) return;

      try {
        const response = await axios.delete("books/" + id, {
          headers: {
            Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
          },
        });

        this.books.splice(index, 1);

        this.$notify({
          message: "Book was deleted",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
          timeout: 0,
        });
      } catch (error) {
        // console.log(error)
      }
    },
  },
};
</script>
<style></style>
