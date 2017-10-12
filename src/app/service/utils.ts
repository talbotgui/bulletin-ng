
export class Utils {

    public static readonly REGEX_CR: RegExp = new RegExp('\\n', 'g');

    public static formatDate(date?: Date, formatLong: boolean = false): string {
        if (date) {
            const mapJours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
            const jour = mapJours[date.getDay()];
            const j = Utils.formatNumber(date.getDate());
            const m = Utils.formatNumber(date.getMonth() + 1);
            const y = date.getFullYear();
            if (formatLong) {
                return jour + ' ' + j + '/' + m + '/' + y;
            } else {
                return j + '/' + m + '/' + y;
            }
        } else {
            return '';
        }
    }

    public static formatNumber(n: number): string {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }

    public static nettoieString(chaine: string): string {
        if (chaine) {
            return chaine.replace(Utils.REGEX_CR, '<br/>');
        } else {
            return chaine;
        }
    }

    private constructor() { }
}
