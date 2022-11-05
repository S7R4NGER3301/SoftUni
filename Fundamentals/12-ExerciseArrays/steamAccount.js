function steamAccount(input){

    let games = input[0]
     for(let i = 0; i < games.length; i++){
        console.log(games[i]);
     }
}
steamAccount(['CS WoW Diablo',
            'Install LoL',
            'Uninstall WoW',
            'Update Diablo',
            'Expansion CS-Go',
            'Play!'])