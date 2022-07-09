export const CHECKONLYNUMBERS = /^d+$/;
export const CHECKONLYLETTERS = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüçÇ]+$/;
export const CHECKEMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const CHECKPASSWORD2 = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s:])([^\s]){8,16}$/;
export const CHECKPASSWORD = /^(?=.*d)(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;