import { Pipe } from '@angular/core';
@Pipe({
	name: 'filterName'
})

export class CustomPipe {

	public transform(filter): any[] {
		let list: any[] = [];

		for (let i = 0; i < filter.length; i++) {
			if (filter[i].name.substring(0, 1) === "A") {
				var obj = { name: filter[i].name, hobby: filter[i].hobby };
				list.push(obj);
			}

		}
		return list;
	}

}