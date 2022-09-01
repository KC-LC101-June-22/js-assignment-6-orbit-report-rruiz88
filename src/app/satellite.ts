// import { style } from "@angular/animations";
// import { NgStyle } from "@angular/common";
// import { emitWarning } from "process";

export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		return this.type === "Space Debris"
}

	
}
// TODO 3a: fix isSpaceDebris check
