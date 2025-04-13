import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es', 'eu']);
    this.translate.setDefaultLang('es');
  
    const browserLang: string = this.translate.getBrowserLang() || 'es';
    this.translate.use(this.translate.getLangs().includes(browserLang) ? browserLang : 'es');
  }

  changeLang(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);
  }
  
}
