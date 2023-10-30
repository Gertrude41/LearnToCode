price=53000
rate=7.625
years=15
months=years*12
f=rate/1200
console.log(
    months
)
console.log(f)
payment = price*(f * Math.pow((1 + f), months))/(Math.pow((1 + f), months) - 1);
console.log(payment)