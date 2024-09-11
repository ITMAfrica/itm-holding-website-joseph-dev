export function setCookie(cname: string, cvalue: any, exdays: number = 1) {
  if (typeof window !== 'undefined') {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
}
