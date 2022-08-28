import {ShenZhenStockClient} from './shenzhenStockClient';

console.log('This is what would run if your app gets started.');

const client = new ShenZhenStockClient();

client.fetchConvertibleBondData().subscribe(console.log);
