/* eslint-disable-next-line */
export default function getLanguage(lang: string, arr: any[]){
    const filtered = arr.filter(kind => kind.lang === lang)[0]
    return filtered
}