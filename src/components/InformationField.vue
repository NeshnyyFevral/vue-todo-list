<template>
  <div :class="$style.header">
    <div
      :class="$style.information"
    >
      <information-field-item
        :class="$style.item"
        :counter="props.information.total"
      >
        Tasks
      </information-field-item>
      <information-field-item
        :class="$style.item"
        :counter="props.information.done"
      >
        Tasks Done
      </information-field-item>
    </div>
    <transition-group
      :name="$style.container"
      tag="div"
    >
      <button
        v-if="props.visibleRemoveDoneBtn"
        :key="1"
        :class="$style['remove-button']"
        @click="$emit('removeDone')"
      >
        Remove Done
      </button>
      <button
        :key="2"
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
.header {
	height: 50px;
	background-color: rgb(245, 245, 245);
	text-align: end;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.item {
	margin-left: 10px;
}

.remove-button {
	margin-right: 10px;
	border-radius: 20px;
	display: inline-flex;
	background-color: rgb(255, 54, 107);
	color: #fff;
	padding: 6px 13px;
	border-radius: 15px;
	align-items: center;
	font-size: 16px;
  border: 2px solid #333;
  cursor: pointer;
  transition: background-color 0.1s linear;
}

.remove-button:hover {
	background-color: rgb(223, 0, 0);
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
  .header{
    justify-content: center;
    white-space: nowrap;
  }
  .item{
    margin-left: 0;
    margin-right: 10px;
  }
}

@media screen and (max-width: 700px){
  .header{
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

</style>
