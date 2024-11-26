import { Pipe, PipeTransform } from '@angular/core';
const BTC = 90000;
@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = true): number {
    if (isBtcToUsd)
      return amount * BTC;
    return amount / BTC;
  }

}
