import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { debounce, debounceTime, finalize, Observable } from "rxjs";
import { SpinnerService } from "src/app/services/spinner.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    requestCount = 0;
    constructor(private spinnerSvc: SpinnerService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requestCount++;
        this.spinnerSvc.show();

        return next.handle(req).pipe(
            debounceTime(1000),
            finalize(() => { 
                this.requestCount--;
            if (this.requestCount === 0) {
                this.spinnerSvc.hide();
            }
        })
            
        );
    }
}

