import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";

// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import("@/pages/Dashboard.vue");
const Login = () => import("@/pages/Auth/Login.vue");
const Profile = () => import("@/pages/Profile.vue");
const Notifications = () => import("@/pages/Notifications.vue");
const Icons = () => import("@/pages/Icons.vue");
const Maps = () => import("@/pages/Maps.vue");
const Typography = () => import("@/pages/Typography.vue");
const TableList = () => import("@/pages/TableList.vue");

const ArticlesList = () => import("@/pages/Articles/ListArticles.vue");
const ArticlesCreate = () => import("@/pages/Articles/CreateArticle.vue");
const ArticlesEdit = () => import("@/pages/Articles/EditArticle.vue");

const BooksList = () => import("@/pages/Books/ListBooks.vue");
const BooksCreate = () => import("@/pages/Books/CreateBook.vue");
const BooksEdit = () => import("@/pages/Books/EditBook.vue");

const ProjectsList = () => import("@/pages/Projects/ListProjects.vue");
const ProjectsCreate = () => import("@/pages/Projects/CreateProject.vue");
const ProjectsEdit = () => import("@/pages/Projects/EditProject.vue");

const Settings = () => import("@/pages/Settings.vue");

import store from '../store/index';
import axios from "axios";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    beforeEnter(to, from, next) {
      if (!store.getters.isAuthenticated && to.name !== 'login') {
        next('login');
      }
      else if (store.getters.isAuthenticated) {
        axios.get(
          'dashboard',
          {
            headers: {"Authorization" : `Bearer ${store.getters.StateAccessToken}`}
          }
        )
        .then(function() {
          next();
        })
        .catch(function() {
          next('login');
        })
      }
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "articles",
        name: "articles.list",
        component: ArticlesList,
      },
      {
        path: "articles/create",
        name: "articles.create",
        component: ArticlesCreate
      },
      {
        path: "articles/edit/:id",
        name: "articles.edit",
        component: ArticlesEdit
      },
      {
        path: "books",
        name: "books.list",
        component: BooksList,
      },
      {
        path: "books/create",
        name: "books.create",
        component: BooksCreate
      },
      {
        path: "books/edit/:id",
        name: "books.edit",
        component: BooksEdit
      },
      {
        path: "projects",
        name: "projects.list",
        component: ProjectsList,
      },
      {
        path: "projects/create",
        name: "projects.create",
        component: ProjectsCreate
      },
      {
        path: "projects/edit/:id",
        name: "projects.edit",
        component: ProjectsEdit
      },
      {
        path: "settings",
        name: "settings",
        component: Settings
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "*",
    component: NotFound
  },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
