public class chatBotTel {
    public static void main(String args[]){
        StdOut.println("Hi! My name is Tel. I'm here to teach you about the effect of using plastic bottles on our oceans, and to provide you alternatives.");
        StdOut.println("What's your name?");
        String name = StdIn.readString();

        StdOut.println("Hi, " + name + ". Do you use plastic water bottles? (yes/no)");
        String answer1 = StdIn.readString();
        StdOut.println();
        if (answer1.equals("yes")){
            StdOut.println("How many plastic water bottles do you use?");
            int bottles = StdIn.readInt();
            StdOut.println("Wow, " + bottles + " every day.");
        } else {
            StdOut.println("Awesome! You don't use plastic water bottles! I hope you're staying hydrated with a reusable water bottle.");
        }
        StdOut.println();
        
        StdOut.println("Do you want to hear more about water bottles? (yes/no)");
        String answer2 = StdIn.readString();
        StdOut.println();
        if (answer2.equals("yes")){
            StdOut.println("On average, a plastic water bottle holds 2 cups of water, while a reusable water bottle can carry 4 cups.");
            StdOut.println("That's double the amount of water! Not only is it better for our environment, ");
            StdOut.println("but it saves you time because you're spending less time on refilling your bottles.");
            StdOut.println("Humans use 1.2 million plastic bottles per minute, according to EarthDay.com.");
            StdOut.println("Americans buy 50 billion water bottles per year.");
            StdOut.println("That's about 13 bottles per month per person in the US.");
        } else {
            StdOut.println("Ok. Come back later to hear more about water bottles, single-use plastics, ocean pollution, marine life, and cleanup efforts!");
        }
        StdOut.println();

        StdOut.println("Do you want to hear more about single-use plastics? (yes/no)");
        String answer3 = StdIn.readString();
        StdOut.println();
        if (answer3.equals("yes")){
            StdOut.println("Disposable, single-use plastics include: water bottles, grocery bags, food and drink to-go containers, cutlery, straws, and even cigarette butts.");
            StdOut.println("Five trillion plastic bags are produced every year around the world. This is about 307 bags per person.");
            StdOut.println("Each of these bags takes 1,000 years to disintegrate completely.");
            StdOut.println("Americans throw away 25 billion Styrofoam coffee cups every year.");
        } else {
            StdOut.println("Ok. Come back later to hear more about single-use plastics, ocean pollution, marine life, and cleanup efforts!");
        }
        StdOut.println();

        StdOut.println("Do you want to hear more about ocean pollution? (yes/no)");
        String answer4 = StdIn.readString();
        StdOut.println();
        if (answer4.equals("yes")){
            StdOut.println("Fourteen million tons of plastic end up in our oceans because of poor waste system infrastructure.");
            StdOut.println("When plastics break down, they become invisible micro plastics. These microplastics are smaller than human hair.");
            StdOut.println("These microplastics enter our soil, waterways, and food chain.");
            StdOut.println();
            StdOut.println("The largest accumulation of ocean plastic is in the Pacific Ocean. It's called the 'Great Pacific Garbage Patch'.");
            StdOut.println("There are 80,000 tones of plastic in the GPGP, which is estimated to be 1.8 trillion plastic pieces.");
            StdOut.println("More than 75% of GPGP plastics comes from fishing activities.");
        } else {
            StdOut.println("Ok. Come back later to hear more about ocean pollution, marine life, and cleanup efforts!");
        }
        StdOut.println();

        StdOut.println("Do you want to hear more about marine life? (yes/no)");
        String answer5 = StdIn.readString();
        StdOut.println();
        if (answer5.equals("yes")){
            StdOut.println("In the GPGP, 84% of samples contained toxic chemicals.");
            StdOut.println("Plastic is not only strangling and trapping wild animals, often resulting in death, ");
            StdOut.println("but microplastics are also building up in their bodies, making it hard for them to survive.");
            StdOut.println("These plastics persist in humans too, through a process called bioaccumulation.");
        } else {
            StdOut.println("Ok. Come back later to hear more about marine life, and cleanup efforts!");
        }
        StdOut.println();

        StdOut.println("Do you want to hear more about cleanup efforts? (yes/no)");
        String answer6 = StdIn.readString();
        StdOut.println();
        if (answer6.equals("yes")){
            StdOut.println("You may have noticed in New Jersey that single-use plastic grocery bags have been banned!");
            StdOut.println("The GPGP is the subject of research and cleanup by a group called The Ocean Cleanup. They aim to clean up 90% of floating ocean plastic pollution.");
        } else {
            StdOut.println("Ok. Come back later to hear more about cleanup efforts!");
        }
        StdOut.println();

        StdOut.println("Did you learn something today? (yes/no)");
        String answer7 = StdIn.readString();
        StdOut.println();
        if (answer7.equals("yes")){
            StdOut.println("Awesome! I hope you have learned a lot about about water bottles, single-use plastics, ocean pollution, marine life, and cleanup efforts!");
        } else {
            StdOut.println("If I couldn't help you learn, check out resources online from ____.");
        }

        StdOut.println();
        StdOut.println("Thanks for talking with me, " + name + "!");
        StdOut.println("[Your chat with Bot Tel has ended.]");
        
    }
}
