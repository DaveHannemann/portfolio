import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Lang } from '../types/lang.type';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  constructor(public langService: LangService) {}

  get activeLang(): Lang {
    return this.langService.activeLang;
  }

  texts = {
    headline: {
      DE: 'Rechtlicher Hinweis',
      EN: 'Legal Notice',
    },
    imprint: {
      DE: 'Impressum',
      EN: 'Imprint',
    },
    board: {
      DE: 'Die Seite erkunden',
      EN: 'Exploring the Board',
    },
    terms: {
      DE: 'Akzeptanz der Bedingungen',
      EN: 'Acceptance of terms',
    },
    termsTextPre: {
      DE: 'Durch den Zugriff auf und die Nutzung von',
      EN: 'By accessing and using',
    },
    termsTextSuf: {
      DE: ' (Produkt) erkennen Sie die folgenden Geschäftsbedingungen sowie alle Richtlinien, Vorgaben oder Änderungen derselben an, die Ihnen von Zeit zu Zeit präsentiert werden können. Wir, die aufgeführten Studierenden, können die Geschäftsbedingungen jederzeit ohne vorherige Ankündigung aktualisieren oder ändern.',
      EN: ' (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.',
    },
    scope: {
      DE: 'Umfang und Eigentum des Produkts',
      EN: 'Scope and ownership of the product',
    },
    scopeTextFirst: {
      DE: 'wurde im Rahmen eines studentischen Gruppenprojekts in einem Web-Development-Bootcamp an der',
      EN: 'has been developed as part of a student group project in a web development bootcamp at the',
    },
    scopeTextSecond: {
      DE: '. Es dient zu Bildungszwecken und ist nicht für umfassende private oder geschäftliche Nutzung vorgesehen. Daher können wir keine konsistente Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder andere Qualitätsaspekte dieses Produkts garantieren.',
      EN: '. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.',
    },
    scopeTextThird: {
      DE: 'Das Design von',
      EN: 'The design of',
    },
    scopeTextFourth: {
      DE: 'gehört der',
      EN: 'is owned by the',
    },
    scopeTextFifth: {
      DE: '. Eine unautorisierte Nutzung, Vervielfältigung, Modifikation, Verbreitung oder Reproduktion des Designs ist strengstens untersagt.',
      EN: '. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.',
    },
    proprietary: {
      DE: 'Eigentumsrechte',
      EN: 'Proprietary rights',
    },
    proprietaryPre: {
      DE: 'Abgesehen vom Design, das der ',
      EN: 'Aside from the design owned by ',
    },
    proprietaryMid: {
      DE: 'gehört, behalten wir, die aufgeführten Studierenden, alle Eigentumsrechte an',
      EN: ', we, the listed students, retain all proprietary rights in',
    },
    proprietarySuf: {
      DE: ', einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Marken und sonstigen Eigentumsinformationen.',
      EN: ', including any associated copyrighted material, trademarks, and other proprietary information.',
    },
    use: {
      DE: 'Nutzung des Produkts',
      EN: 'Use of the product',
    },
    usePre: {
      DE: ' darf nur für rechtmäßige Zwecke und im Einklang mit allen geltenden Gesetzen und Vorschriften verwendet werden. Jegliche Nutzung von',
      EN: ' is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of',
    },
    useMid: {
      DE: ' für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist strikt untersagt. Sie sind allein für Ihre Interaktionen mit anderen Nutzern von',
      EN: ' for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of',
    },
    useSuf: {
      DE: ' verantwortlich.',
      EN: '.',
    },
    disclaimer: {
      DE: 'Haftungsausschluss und Begrenzung der Haftung.',
      EN: 'Disclaimer of warranties and limitation of liability',
    },
    disclaimerPre: {
      DE: ' wird „wie besehen“ bereitgestellt, ohne jegliche Gewährleistung, weder ausdrücklich noch stillschweigend, einschließlich, aber nicht beschränkt auf stillschweigende Gewährleistungen der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung von Rechten Dritter. In keinem Fall haften wir, die aufgeführten Studierenden, oder die',
      EN: ' is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the',
    },
    disclaimerMid: {
      DE: ' für direkte, indirekte, zufällige, besondere, Folgeschäden oder beispielhafte Schäden, einschließlich, aber nicht beschränkt auf Schäden durch entgangenen Gewinn, Geschäftswert, Nutzung, Daten oder andere immaterielle Verluste, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden, die sich aus der Nutzung oder Leistung von ',
      EN: ', be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of ',
    },
    disclaimerSuf: {
      DE: ' ergeben.',
      EN: '.',
    },
    indemnity: {
      DE: 'Entschädigung',
      EN: 'Indemnity',
    },
    indemnityPre: {
      DE: 'Sie erklären sich damit einverstanden, uns, die aufgeführten Studierenden, die ',
      EN: 'You agree to indemnify, defend and hold harmless us, the listed students, the ',
    },
    indemnityMid: {
      DE: ' sowie unsere verbundenen Unternehmen, Partner, leitenden Angestellten, Direktoren, Vertreter und Mitarbeiter von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Verbindlichkeiten (einschließlich angemessener Anwaltsgebühren) freizustellen, zu verteidigen und schadlos zu halten, die sich aus oder im Zusammenhang mit Ihrer Nutzung von',
      EN: ', and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of',
    },
    indemnitySuf: {
      DE: ' und/oder Ihrem Verstoß gegen diese rechtlichen Hinweise ergeben.',
      EN: ' and/or your breach of this Legal Notice.',
    },
        contact: {
      DE: 'Bei Fragen oder Mitteilungen kontaktieren Sie uns bitte unter',
      EN: 'For any questions or notices, please contact us at',
    },
        date: {
      DE: 'Datum: 24. Oktober 2025',
      EN: 'Date: October 24, 2025',
    },
  };
}
