import { reactive } from "vue";
const routerAdd = [
	"backgroundBorder",
	"shape",
	"visualEffect",
	"fontTypography",
	"userExperience",
	"structureLayout",
	"transitionsAnimations",
];
export const store = reactive({
	count: 0,
	comName: routerAdd[0],
    chooseComName(index){
        this.comName = routerAdd[index]
    }
});
