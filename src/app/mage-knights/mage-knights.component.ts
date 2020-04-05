import { Component, OnInit } from '@angular/core';

import { MageKnight } from '../models/mage-knight';
import { MageKnights } from '../models/mage-knights.enum';

@Component({
	selector: 'app-mage-knights',
	templateUrl: './mage-knights.component.html',
	styleUrls: ['./mage-knights.component.scss']
})
export class MageKnightsComponent implements OnInit {
	mageKnight: MageKnight = {
		name: MageKnights[0],
		reputation: 0,
		fame: 0
	};

	constructor() {}

	ngOnInit() {}

}
