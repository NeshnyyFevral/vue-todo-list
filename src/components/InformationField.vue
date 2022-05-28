<template>
  <div :class="$style.information">
    <transition-group :name="$style.container">
      <information-field-item
        :key="1"
        :class="$style.item"
        :counter="props.information.total"
      >
        Tasks
      </information-field-item>
      <information-field-item
        :key="2"
        :class="$style.item"
        :counter="props.information.done"
      >
        Tasks Done
      </information-field-item>
      <button
        v-if="props.visibleRemoveDoneBtn"
        :key="3"
        :class="$style['remove-button']"
        @click="$emit('removeDone')"
      >
        Remove Done
      </button>
      <button
        :key="4"
        :class="$style['remove-button']"
        @click="$emit('removeAll')"
      >
        Remove All
      </button>
    </transition-group>
  </div>
</template>

<script setup>
import InformationFieldItem from './InformationFieldItem.vue';

const props = defineProps({
	information: {
		type: Object,
		required: true,
	},
	visibleRemoveDoneBtn: {
		type: Boolean,
		default: false,
	},
});
</script>

<style module lang="scss">
.information {
	height: 50px;
	background-color: rgb(245, 245, 245);
	text-align: end;
	display: flex;
	align-items: center;
	justify-content: end;
}

.item {
	margin-right: 10px;
}

.remove-button {
	margin-right: 10px;
	border-radius: 20px;
	display: inline-flex;
	background-color: rgb(255, 0, 0);
	color: #fff;
	padding: 7px 15px;
	border-radius: 15px;
	align-items: center;
	font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.1s linear;
}

.remove-button:hover {
	background-color: rgb(195, 22, 22);
}

.container{
  &:global(-move),
  &:global(-enter-active),
	&:global(-leave-active){
		transition: all 0.5s ease;
	}

	&:global(-enter-from),
	&:global(-leave-to){
		opacity: 0;
	}

  &:global(-leave-active){
			position: absolute;
	}
}

@media screen and (max-width: 700px){
  .information{
    justify-content: center;
    white-space: nowrap;
  }
}

@media screen and (max-width: 700px){
  .information{
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    padding: 10px 5px;
    gap: 5px;
  }

  .item {
    width: 140px;
    justify-content: center;

  }

  .remove-button {
    width: 140px;
    justify-content: center;
  }
}

@media screen and (max-width: 540px){
}
</style>
