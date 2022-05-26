<template>
	<div class="information">
		<transition-group name="information__container">
			<information-field-item
				class="information__item"
				key="1"
				:counter="information.total">
				Tasks
			</information-field-item>
			<information-field-item
				class="information__item"
				key="2"
				:counter="information.done">
				Tasks Done
			</information-field-item>
			<my-button
				v-if="visibleRemoveDoneBtn"
				key="3" @click="$emit('removeDone')"
				class="information__remove-button">
				Remove Done
			</my-button>
			<my-button
				@click="$emit('removeAll')"
				key="4" class="information__remove-button">
				Remove All
			</my-button>
		</transition-group>
	</div>
</template>

<script>
import InformationFieldItem from './InformationFieldItem.vue';

export default {
	components: {
		InformationFieldItem,
	},
	props: {
		information: {
			type: Object,
			require: true,
		},
		visibleRemoveDoneBtn: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped>
.information {
	height: 50px;
	background-color: rgb(245, 245, 245);
	text-align: end;
	display: flex;
	align-items: center;
	justify-content: end;
}

.information__item {
	margin-right: 10px;
}

.information .information__remove-button {
	margin-right: 10px;
	border-radius: 20px;
	display: inline-flex;
	background-color: rgb(255, 0, 0);
	color: #fff;
	padding: 7px 15px;
	border-radius: 15px;
	align-items: center;
	font-size: 16px;
}

.information .information__remove-button:hover {
	background-color: rgb(195, 22, 22);
}

.information .information__container-move,
.information .information__container-enter-active,
.information .information__container-leave-active {
	transition: all 0.5s ease;
}

.information .information__container-enter-from,
.information .information__container-leave-to {
	opacity: 0;
}

.information .information__container-leave-active {
	position: absolute;
}
</style>
