new Vue({
    el: '#app',
    data: {
        myHealth: 100,
        myDamage: 0,
        myMaxDamage: 7,

        monsterHealth: 100,
        mosnterDamage: 0,
        monsterMaxDamage: 10,

        gameEnded: true,
        history: []
    },
    methods: {
        atack: function ()  {
            this.myDamage = this.getValue(this.myMaxDamage);
            this.addLog({turn: 'player', action: 'player hits monster for', damage: this.myDamage})
            this.runRound();
        },
        specialAtack: function ()  {
            this.myDamage = this.getValue(this.myMaxDamage * 1.5);
            this.addLog({turn: 'player', action: 'player hits monster for', damage: this.myDamage})
            this.runRound();
        },
        heal: function ()  {
            var heal = this.getValue(this.monsterMaxDamage * 1.5);
            this.myHealth += heal;
            this.addLog({turn: 'player', action: 'heals', damage: heal})
            this.myDamage = 0;
            this.runRound();
        },
        giveUp: function ()  {
            this.endGame();
        },
        startNewGame: function ()  {
            this.gameEnded = false;
        },
        endGame: function ()  {
            this.monsterHealth = 100;
            this.myHealth = 100;
            this.gameEnded = true;
            this.history = [];
        },
        runRound: function () {
            var msg = '';

            this.mosnterDamage = this.getValue(this.monsterMaxDamage);

            this.myHealth -= this.mosnterDamage;
            this.addLog({turn: 'monster', action: 'monster hits player for', damage: this.mosnterDamage})
            this.monsterHealth -= this.myDamage;


            if(this.myHealth <= 0) {
                this.myHealth = 0;
                msg = 'You are Dead!';

            } else if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                msg = 'Congratulations, you killed the mosnter!';
            }

            if (msg) {
                alert(msg);
                this.endGame();
            }

        },
        getValue: (max) => {
            return Math.floor(Math.random() * (max - 1) + 1);
        },
        addLog: function (log) {
            this.history.push(log)
        }
    }
});