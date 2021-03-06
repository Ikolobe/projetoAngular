export class AppConstants {

    public static get baseServidor(): string { return "http://localhost:8080/"}

    public static get baseLogin(): string { return this.baseServidor + "restapi/login" }

    public static get baseUrl(): string { return this.baseServidor + "restapi/usuario/"}

    public static get baseBuscarPorNome(): string { return this.baseServidor + "restapi/usuario/usuarioPorNome/"}


}
