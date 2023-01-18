export class Result {
  res: any;
  errors: string[];
  constructor(response: any){
    this.res = response.res
    this.errors = response.errors
  }
}
