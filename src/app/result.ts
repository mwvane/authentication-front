export class Result {
  res: any;
  error: string;
  constructor(response: any){
    this.res = response.res
    this.error = response.error
  }
}
