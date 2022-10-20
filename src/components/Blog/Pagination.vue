<template>
  <div class="row">
    <div class="col-xxl-12">
      <div class="basic-pagination mt-30">
        <ul class="d-flex align-items-center">
          <li class="prev">
            <router-link to="/blog" class="link-btn link-prev">
              Prev
              <i class="fal fa-long-arrow-left"></i>
              <i class="fal fa-long-arrow-left"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/blog">
              <span>1</span>
            </router-link>
          </li>
          <li class="active">
            <router-link to="/blog">
              <span>2</span>
            </router-link>
          </li>
          <li>
            <router-link to="/blog">
              <span>3</span>
            </router-link>
          </li>
          <li class="next">
            <router-link to="/blog" class="link-btn">
              Next
              <i class="fal fa-long-arrow-right"></i>
              <i class="fal fa-long-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationArea",
};
</script>