import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as CookieConsent from "vanilla-cookieconsent";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'biozuglo';

  ngAfterViewInit(): void {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,  // this category is enabled by default
          readOnly: true  // this category cannot be disabled
        },
        analytics: {}
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'Sütiket használunk',
              description: 'Kedves Látogató! Tájékoztatjuk, hogy a honlap felhasználói élmény fokozásának érdekében sütiket alkalmazunk.' +
                  ' A honlapunk használatával ön a tájékoztatásunkat tudomásul veszi.',
              acceptAllBtn: 'Összes elfogadása',
              acceptNecessaryBtn: 'Összes elutasítása',
              showPreferencesBtn: 'Sütik kezelése'
            },
            preferencesModal: {
              title: 'Manage cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Accept current selection',
              closeIconLabel: 'Close modal',
              sections: [
                {
                  title: 'Somebody said ... cookies?',
                  description: 'I want one!'
                },
                {
                  title: 'Strictly Necessary cookies',
                  description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                  //this field will generate a toggle linked to the 'necessary' category
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Performance and Analytics',
                  description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                  linkedCategory: 'analytics'
                },
                {
                  title: 'More information',
                  description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#">contact us</a>'
                }
              ]
            }
          }
        }
      }
    });
  }
}
