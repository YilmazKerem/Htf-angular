export class LocalStorageManager
{

  private static jwt: string = "";

  public static SetJWT(jwtToken: string)
  {
    this.jwt = jwtToken;
    localStorage.setItem('jwt', this.jwt);
  }

  public static GetJWT()
  {

    var tempuid = localStorage.getItem('jwt');
    if (tempuid == null) {
      this.jwt = "";
    } else {
      this.jwt = tempuid;
    }


    return this.jwt;
  }
}
