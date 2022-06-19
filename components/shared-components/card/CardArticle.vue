<template>
  <div class="col-lg-4 column-td-half">
    <div class="card-item blog-card">
      <div class="card-image">
        <div class="card__img">
          <img :src="data.image" alt="" v-if="data.image" />
          <img src="~/assets/theme/images/img9.jpg" alt="" v-else />
        </div>
        <div class="card-badge">
          <span class="badge-label">{{$moment(data.created_at).format('DD MMM YYYY')}}</span>
        </div>
      </div><!-- end card-image -->
      <div class="card-content">
        <h3 class="card__title mt-0">
          <p @click="toDetail()">{{data.title}}</p>
        </h3>
        <div class="card-action">
          <!-- {{edit}} -->
          <ul class="card-duration d-flex align-items-center">
            <li v-if="edit">
              <b-button
                size="sm"
                v-b-tooltip.hover="'Edit'"
                @click="$emit('edit', data)">
                <b-icon icon="pencil-fill" aria-label="Edit"></b-icon>
              </b-button>
            </li>
            <li v-if="detail">
              <b-button
                @click="$emit('detail', data)"
                size="sm"
                variant="success"
                v-b-tooltip.hover="'Detail'">
                <b-icon icon="eye-fill" aria-label="Detail"></b-icon>
              </b-button>
            </li>
            <li v-if="del">
              <b-button
                @click="$emit('del', data)"
                size="sm"
                variant="danger"
                v-b-tooltip.hover="'Hapus'">
                <b-icon icon="trash-fill" aria-label="Detail"></b-icon>
              </b-button>
            </li>
          </ul>
        </div>
      </div><!-- end card-content -->
    </div><!-- end card-item -->
  </div><!-- end col-lg-6 -->
</template>

<script>
import moment from 'moment'

export default {
  name: 'CardArticle',
  props: {
    data: {
      default: () => []
    },
    edit: {
      default: () => false
    },
    del: {
      default: () => false
    },
    detail: {
      default: () => false
    }
  },
  emits: ['toDetail'],
  methods: {
    toDetail() {
      this.$emit('toDetail', this.data)
    }
  }
}
</script>

<style>

</style>
