export function setCookie(cname: string, cvalue: any, exdays: number = 1) {
  if (typeof window !== 'undefined') {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
}

export function getCookie(cname: string, doc: any): string {
  if (typeof doc !== "undefined") {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(doc);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
}

export const CODE: string = "cd"