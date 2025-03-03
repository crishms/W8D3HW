// Navigation Bar Component
Vue.component('navbar-component', {
    template: `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Food Blog</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">About</a></li>
              </ul>
          </div>
      </nav>
    `
  });
  
  // Food Image Component
  Vue.component('food-image', {
    template: `
      <div class="text-center">
          <img src="images/chili.jpg" alt="White Chicken Chili" class="img-fluid rounded">
      </div>
    `
  });
  
  // Blog Post Component
  Vue.component('post-component', {
    props: ['post'],
    data() {
      return {
        profilePic: 'images/profile.png',
        showProfile: false
      };
    },
    methods: {
      openProfile() {
        this.showProfile = true;
      },
      closeProfile() {
        this.showProfile = false;
      }
    },
    template: `
      <div class="card mt-3">
          <div class="card-body">
              <div class="d-flex align-items-center">
                  <img 
                    :src="profilePic" 
                    alt="Profile Picture"
                    class="profile-pic mr-2"
                    @click="openProfile"
                  />
                  <h5 class="mb-0">{{ post.author }}</h5>
              </div>
              <small class="text-muted">{{ post.date }}</small>
              <p class="mt-2">{{ post.text }}</p>
  
              <!-- Modal for Profile -->
              <div class="modal fade" v-if="showProfile" id="profileModal" tabindex="-1">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title">{{ post.author }}</h5>
                              <button type="button" class="close" data-dismiss="modal" @click="closeProfile">&times;</button>
                          </div>
                          <div class="modal-body">
                              <p><strong>Foodie Level:</strong> {{ post.foodieLevel }}</p>
                              <p>{{ post.bio }}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `
  });
  
  // Vue Instance
  new Vue({
    el: '#app',
    data: {
      posts: [
        {
          author: 'Brianna',
          date: 'February 18, 2021 @ 3:30 pm',
          text: `Was amazing! My Walmart didn’t have coriander...`,
          foodieLevel: 'Novice',
          bio: `Food enthusiast. Love to cook and experiment.`
        },
        {
          author: 'LINH',
          date: 'February 15, 2021 @ 9:46 am',
          text: `I just made this soup today and it’s so tasty!...`,
          foodieLevel: 'Newcomer',
          bio: `Love food! Grew up with meat and potatoes.`
        },
        {
          author: 'CATHERINE LEONARDO',
          date: 'February 13, 2021 @ 12:58 pm',
          text: `I LOVE this White Chicken Chili! You are right...`,
          foodieLevel: 'Mentor',
          bio: `I never was the adventurous type until 2 years ago.`
        },
        {
          author: 'KALI',
          date: 'February 13, 2021 @ 11:31 am',
          text: `This recipe is dynamite! My partner usually won’t eat beans...`,
          foodieLevel: 'Novice',
          bio: `Food is my passion. So is cooking.`
        }
      ]
    }
  });
  