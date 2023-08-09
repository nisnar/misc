import discord
from discord.ext import commands
import os

intents = discord.Intents.all()
client = commands.Bot(command_prefix='$', intents=intents)

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Greetings! *ribbit*')
      
    if message.content.startswith('$ribbit'):
        await message.channel.send('Oh my! A fellow frog! *ribbit*')

    if 'ribbit' in message.content.lower():
      await message.channel.send('Oh my! A fellow frog! *ribbit*')
      user_id = '935299769633484860'
      frog = '🐸'
      await message.channel.send(f"<@{user_id}> Would you care to join us ribbiters?")
client.run(os.getenv('token'))