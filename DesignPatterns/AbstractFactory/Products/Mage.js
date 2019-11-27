var Mage = (function () {
    function Mage() {
        this.type = "Mage";
        this.cost = 10;
        this.healthPoints = 10;
        this.movements = 2;
        this.defense = 3;
        this.attack = 6;
        this.range = 3;
        this.storageCapacity = 2;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-hat-wizard\"></i>";
        this.powerUp = null;
        this.gems = 0;
    }
    Mage.prototype.saveMemento = function () {
        throw new Error("Method not implemented.");
    };
    return Mage;
}());
//# sourceMappingURL=Mage.js.map