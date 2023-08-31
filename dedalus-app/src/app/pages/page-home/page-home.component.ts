import { Component } from '@angular/core';
import { CrlPageHome } from 'src/app/model/page/crlPageHome';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
	public dataHome: CrlPageHome = {
		title: "<span>NUESTRO ENFOQUE:</span> LA CONTINUIDAD ASISTENCIAL",
		text: "Desde un enfoque&nbsp;<strong>“centrado en episodios”</strong><br>a un modelo comprometido con la&nbsp;<strong>“continuidad asistencial”</strong>."
	};
}
