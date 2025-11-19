class Wallet {
    money = 100000;
    color = "noir";
    weight = 10;
    cardHolder = "";
    brand = "maky";
    lostWallet = false;

    getMoney(expense) {
        this.money = this.money - expense;
        return this.money;
    }

    addMoney(gain) {
        this.money = this.money + gain;
        return this.money;
    }

    checkMoney() {
        return this.money;
    }

    addCard(name) {
        if(this.cardHolder === "") {
            this.cardHolder = name;
            return this.cardHolder;
        }
        else {
            return this.cardHolder;
        }
    }

    walletIsLost() {
        return this.lostWallet;
    }

    showWalletStatus() {
        return "The wallet contains "+this.money+", this color is "+this.color+", it has a weight of "+this.weight+
        "g, the card is in the name of "+this.cardHolder+", branded "+this.brand+".";
    }
}

const walletOfNiavo = new Wallet();
console.log(walletOfNiavo.showWalletStatus());