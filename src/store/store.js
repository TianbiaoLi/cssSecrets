import { reactive } from "vue";
const routerAdd = [
	"backgroundBorderVue",
	"shapeVue",
	"visualEffectVue",
	"fontTypographyVue",
	"userExperienceVue",
	"structureLayoutVue",
	"transitionsAnimationsVue",
];
export const store = reactive({
	count: 0,
	comName: "",
    chooseComName(index){
        this.comName = routerAdd[index]
    }
});
