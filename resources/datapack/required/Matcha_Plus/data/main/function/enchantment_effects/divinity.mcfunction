scoreboard players set @a divinity 0
execute as @a if entity @s[nbt={SelectedItem:{components:{"minecraft:enchantments":{"main:divinity":1}}}}] run scoreboard players add @s divinity 1
execute as @a if entity @s[nbt={equipment:{head:{components:{"minecraft:enchantments":{"main:divinity":1}}}}}] run scoreboard players add @s divinity 1
execute as @a if entity @s[nbt={equipment:{chest:{components:{"minecraft:enchantments":{"main:divinity":1}}}}}] run scoreboard players add @s divinity 1
execute as @a if entity @s[nbt={equipment:{legs:{components:{"minecraft:enchantments":{"main:divinity":1}}}}}] run scoreboard players add @s divinity 1
execute as @a if entity @s[nbt={equipment:{feet:{components:{"minecraft:enchantments":{"main:divinity":1}}}}}] run scoreboard players add @s divinity 1
execute unless stopwatch divinity30s ..29.9 run execute as @a if score @s divinity matches 1 run effect give @s minecraft:absorption 30 0 true
execute unless stopwatch divinity30s ..29.9 run execute as @a if score @s divinity matches 1 run effect give @s minecraft:absorption 30 1 true
execute unless stopwatch divinity30s ..29.9 run execute as @a if score @s divinity matches 1 run effect give @s minecraft:absorption 30 2 true
execute unless stopwatch divinity30s ..29.9 run execute as @a if score @s divinity matches 1 run effect give @s minecraft:absorption 30 3 true
execute unless stopwatch divinity15s ..14.9 run execute as @a if score @s divinity matches 1 run effect give @s minecraft:absorption 15 4 true
