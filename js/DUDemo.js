

// VARIABLE TO RESPRESENT ITEM IN ARRAY THAT IS SELECTED
let currentItem = 0;
let itemtoColor;
let colorItem;
let i;

const character = {
    base:   {
        index:   1,
        hue:            0,
        brightness:     100
    },
    hair:   {
        index:   1,
        hue:            0,
        brightness:     100
    },
    top:    {
        index:   1,
        hue:            0,
        brightness:     100
    },
    bottom: {
        index:   1,
        hue:            0,
        brightness:     100
    },
    shoes:  {
        index:   1,
        hue:            0,
        brightness:     100
    }
}

// ALL ITEMS IN EACH ITEM TYPE
const allBases = ['base_1', 'base_2', 'base_3', 'base_4', 'base_5', 'base_6', 'base_7', 'base_8', 'base_9', 'base_10'];
const allHairs = ['hair_1', 'hair_2', 'hair_3', 'hair_4', 'hair_5', 'hair_6', 'hair_7', 'hair_8', 'hair_9', 'hair_10'];
const allTops = ['top_1', 'top_2', 'top_3', 'top_4', 'top_5', 'top_6', 'top_7', 'top_8', 'top_9', 'top_10'];
const allBottoms = ['bottom_1', 'bottom_2', 'bottom_3', 'bottom_4', 'bottom_5', 'bottom_6', 'bottom_7', 'bottom_8', 'bottom_9', 'bottom_10'];
const allShoes = ['shoes_1', 'shoes_2', 'shoes_3', 'shoes_4', 'shoes_5'];

const itemType = ['base', 'hair', 'top', 'bottom', 'shoes'];

const hueSlider = document.getElementById('hue');
const brightnessSlider = document.getElementById('brightness');

const itemTypetoColor = (radio) => {
    let tempItem = radio.id;
    itemtoColor = tempItem.replace('-color', '');
    hueSlider.value = character[itemtoColor].hue;
    brightnessSlider.value = character[itemtoColor].brightness;
}

const changeColor = () => {
    if (itemtoColor === undefined) return;
    item = document.getElementById(itemtoColor);
    let hueValue = hueSlider.value;
    let brightnessValue = brightnessSlider.value;
    item.style.filter = `hue-rotate(${hueValue}deg) brightness(${brightnessValue}%)`;
    character[itemtoColor].hue = parseInt(hueValue);
    character[itemtoColor].brightness = parseInt(brightnessValue);
}

const itemSelector = (button) => {

    // SETTING UP THE VARIABLES TO USE LATER
    const url = 'url(/img/dress_up_game/';
    let itemList;
    //THIS IS TO HAVE A SEPERATE index FOR EACH ITEM TYPE CHANGE TO PREVENT BUG FROM LOGIC METHOD 1
    let itemTypeindex;

    // SELECTING WHICH TYPE OF ITEM NEEDS TO BE CHANGED
    //FOR BASES
    if (button.id.includes('base')){
        // AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('base-color');
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        // SETTING THE VARIABLE OF THE INDEX OF THE CURRENT ITEM IN THE CHARACTER OBJECT TO USE LATER TO SET THE STRING FOR THE CURRENT ITEM WITHIN THE ITEMlIST ARRAY
        i = character.base.index;

        document.getElementById('base-color').checked = true;
        itemTypeindex = itemType.indexOf('base');
        itemList = allBases;
            // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.base.index++;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.base.index === itemList.length ? character.base.index = 0 : character.base.index = character.base.index;
        }
        else {
            character.base.index--;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.base.index === -1 ? character.base.index = itemList.length - 1 : character.base.index = character.base.index;
        }
    }
    //FOR HEADS
    if (button.id.includes('hair')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('hair-color');
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        // SETTING THE VARIABLE OF THE INDEX OF THE CURRENT ITEM IN THE CHARACTER OBJECT TO USE LATER TO SET THE STRING FOTHE CURRENT ITEM WITHIN THE ITEMlIST ARRAY
        i = character.hair.index;

        document.getElementById('hair-color').checked = true;
        console.log('Pressed Hair');
        itemTypeindex = itemType.indexOf('hair');
        itemList = allHairs;
            // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.hair.index++;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.hair.index === itemList.length ? character.hair.index = 0 : character.hair.index = character.hair.index;
            console.log(character.hair.index);
        }
        else {
            character.hair.index--;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.hair.index === -1 ? character.hair.index = itemList.length - 1 : character.hair.index = character.hair.index;
        }
    
    //FOR TOPS
    }
    if (button.id.includes('top')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('top-color');
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        // SETTING THE VARIABLE OF THE INDEX OF THE CURRENT ITEM IN THE CHARACTER OBJECT TO USE LATER TO SET THE STRINFOTHE CURRENT ITEM WITHIN THE ITEMlIST ARRAY
        i = character.top.index;

        document.getElementById('top-color').checked = true;
        itemTypeindex = itemType.indexOf('top');
        itemList = allTops;
        // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.top.index++;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.top.index === itemList.length ? character.top.index = 0 : character.top.index = character.top.index;
        }
        else {
            character.top.index--;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.top.index === -1 ? character.top.index = itemList.length - 1 : character.top.index = character.top.index;
        }
    }

    //FOR BOTTOMS
    if (button.id.includes('bottom')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('bottom-color');
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        // SETTING THE VARIABLE OF THE INDEX OF THE CURRENT ITEM IN THE CHARACTER OBJECT TO USE LATER TO SET THE STRINFOTHCURRENT ITEM WITHIN THE ITEMlIST ARRAY
        i = character.top.index;

        itemTypeindex = itemType.indexOf('bottom');
        itemList = allBottoms;
        // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.bottom.index++;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.bottom.index === itemList.length ? character.bottom.index = 0 : character.bottom.index = character.bottom.index;
        }
        else {
            character.bottom.index--;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.bottom.index === -1 ? character.bottom.index = itemList.length - 1 : character.bottom.index = character.bottom.index;
        }
    }

    //FOR SHOES
    if (button.id.includes('shoe')){
        //  AUTOMATICALLY SETTING TO CHANGE THE COLOR OF THE CHANGED ITEM
        colorItem = document.getElementById('shoes-color');
        colorItem.checked = true;
        itemTypetoColor(colorItem);

        itemTypeindex = itemType.indexOf('shoes');
        itemList = allShoes;
        // CHECKING DIRECTION TO SWITCH ITEMS
        if (button.id.includes('next')){
            character.shoes.index++;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.shoes.index === itemList.length ? character.shoes.index = 0 : character.shoes.index = character.shoes.index;
        }
        else {
            character.shoes.index--;
            //MAKING SURE index DOES NOT PASS THE ARRAY LENGTH
            character.shoes.index === -1 ? character.shoes.index = itemList.length - 1 : character.shoes.index = character.shoes.index;
        }
    }

    const charaItem = itemType[itemTypeindex];
    // USING ALL VARIABLES TO SET THE IMAGE OF THE CHARACTER (yes it's a mouthful this line here)
    document.getElementById(charaItem).style.background = url + charaItem + '/' + itemList[i] + '.png)';
    console.table(character);
}

// SO I ENDED UP DOING THE ABOVE SECOND METHOD TO MAKE IT CLEANER AND EASIER TO READ AND ALSO GET RID OF BUG FROM FIRST ONE ... BUT HONESTLY I THINK IT TURNED OUT MROE COMPLICATED LMAO
// I GUESS THE ABOVE METHOD HAPPENS WHEN YOU TAKE ON THE CHALLENGE OF MAKING ONE FUNCTION WORK FOR ALL THE BUTTONS INSTEAD OF SEPARATING THEM (I was trying to not repeat code on a bunch of different functions)
// I'm not sure what's better ... one big function for all buttons(almost) or a seperate function for each button ? I guess it would depend on scalability factor ? I mostly did one big function for all as they do the
// save for the gender button. I would definitely do a different function for other buttons

// Added a way to change the hue and breightness but when changing them together on same object it only changes the original color ... have to build a way to hold both values together on the character