#Breach Bot Starter Code
breachYear = 2019

#Greets user
print("Hello! I'm Breach Bot.")
userName = input("What is your name?\n")
print("Nice to meet you, " + userName + "!")

#Recounts year of breach
todaysYear = input("What year is it?\n")
timePassed = int(todaysYear) - breachYear
print("Wow! That means it has been " + str(timePassed) + " years since the 2019 Facebook data breach!")


#Introduces breach
print("Would you like to learn about the 2019 Facebook data breach?")
giveInfo = input("Type 'yes' or 'no'\n")

#Explains breach
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) breach details, (b) Facebook's response, (c) I would like to hear your reflection")
  topic = input()
  
  if topic.lower() == "a":
    print("The personal information of 533 million users from 106 countries was stolen from Facebook including names, phone numbers, locations, some email addresses, and more. Facebook said that “malicious actors” exploited a vulnerability in a feature that let users find each other by phone number. This feature has since been removed.")
  
  elif topic.lower() == "b":
    print("Facebook found and fixed the issue in August 2019. It decided to not individually notify users that were involved in the breach because the information was public and it was not an issue that the users could fix themselves.")
  
  elif topic.lower() == "c":
    break
  
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")

#Introduces my take
print("\nI'm excited to share my perspective with you. Are you ready to hear my take?")
giveInfo = input("Type 'yes' or 'no'\n")

#Shares my take
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) relation to CIA triad, (b) my reaction, (c) my advice, or (d) none")
  topic = input()
  
  if topic.lower() == "a":
    print("This data breach connects to confidentiality because data that was supposed to be private was exposed.")
  
  elif topic.lower() == "b":
    print("We disagree with the organization's response because we think Facebook should have alerted users that there was a hack and their information may have been exposed.")

  elif topic.lower() == "c":
    print("I would convince victims to take action by saying that their personal information can be used to steal thousands of dollars and that it only takes two seconds to protect themselves.")
    print("My advice would be to change their passwords to be randomized and unique for every account they have.")
  
  elif topic.lower() == "d":
    break
  
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")

#Chatbot ends conversation
print("Thanks for chatting with me, and I hope you learned something new!")