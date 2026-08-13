const fs = require('node:fs');

let armor_pieces = ["helmet", "chestplate", "leggings", "boots"]
let armor_materials = [["leather", true], ["sturdy_leather", true], ["copper", false], ["chainmail", false], ["iron", false], ["golden", false], ["diamond", false], ["netherite", false], ["steel", false], ["shakudo", false], ["electrum", false], ["bronze", false], ["turtle", false]]
let trim_materials = ["silver", "electrum", "bronze", "palatinate", "steel", "amethyst", "copper", "diamond", "emerald", "gold", "iron", "lapis", "netherite", "quartz", "redstone", "resin"]



for (const p of armor_pieces) {
  for (const material of armor_materials) {
    let m = material[0]
    let has_overlay = material[1]
    if (m == "turtle" && p != "helmet") break;
    let items_name = "items/" + m + "_" + p + ".json"
    let items_content = {
      "model": {
        "type": "minecraft:select",
        "cases": [],
        "fallback": {
          "type": "minecraft:model",
          "model": "minecraft:item/" + m + "_" + p
        },
        "property": "minecraft:trim_material"
      }
    }
    if (has_overlay) {
      items_content.model.fallback["tints"] = [
          {
            "type": "minecraft:dye",
            "default": -6265536
          }
        ]
    }

    let item_blank = {
      "parent": "minecraft:item/generated",
      "textures": {
        "layer0": "minecraft:item/" + m + "_" + p
      }
    }
    if (has_overlay && !((p == "chestplate" || p == "boots") && (m == "sturdy_leather"))) {
      item_blank.textures["layer1"] = "minecraft:item/" + m + "_" + p + "_overlay"
    }

    fs.writeFile("models/item/" + m + "_" + p + ".json", JSON.stringify(item_blank, null, 2), err => {})

    for (const t of trim_materials) {
      let item_model_name = "models/item/" + m + "_" + p + "_" + t + "_trim.json"
      let item_model_content = {
        "parent": "minecraft:item/generated",
        "textures": {
          "layer0": "minecraft:item/" + m + "_" + p,
        }
      }
      if (has_overlay && !((p == "chestplate" || p == "boots") && (m == "sturdy_leather"))) {
        item_model_content.textures["layer1"] = "minecraft:item/" + m + "_" + p + "_overlay"
        item_model_content.textures["layer2"] = "minecraft:trims/items/" + p + "_trim_" + t
      } else {
        item_model_content.textures["layer1"] = "minecraft:trims/items/" + p + "_trim_" + t
      }
      if (m == t || (m == "golden" && t == "gold")) {
        item_model_content.textures.layer1 += "_darker"
      }
      fs.writeFile(item_model_name, JSON.stringify(item_model_content, null, 2), err => {})
      let a = {
        "model": {
          "type": "minecraft:model",
          "model": "minecraft:item/"+ m + "_" + p + "_" + t + "_trim"
        },
        "when": "minecraft:" + t
      }
      if (has_overlay) {
        a.model["tints"] = [
            {
              "type": "minecraft:dye",
              "default": -6265536
            }
          ]
      }
      items_content.model.cases.push(a)
    }
    fs.writeFile(items_name, JSON.stringify(items_content, null, 2), err => {})
  }
}