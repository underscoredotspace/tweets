angular.module('ngTweetomatic', [])

.constant('_', window._)

.service('tweets', function() {
    return {
        getafter: function(from, count) {
          if (from != this._tweets[this._tweets.length-1].id) {
            start = this._tweets.indexOf(_.findWhere(this._tweets, {id: from}))+1;
            return this._tweets.slice(start, count+start);
          } else {
            return [];
          }
        },
        getbefore: function(from, count) {
          if (from != this._tweets[0].id) {
            end = this._tweets.indexOf(_.findWhere(this._tweets, {id: from}));
            return this._tweets.slice(end-count, end);
          } else {
            return [];
          }
        },
        get: function(count) {
          return this._tweets.slice(0, count);
        },
        _tweets: [
            { "id" : 684110988740792300, "text" : "@NatWest_Help its the 4th jan i have direct debits going out at the start of every month which havent shown up on mini statement!!" },
            { "id" : 684111157007937500, "text" : "@NatWest_Help I have a transaction of £41.85 which I don't recognise. What can you do" },
            { "id" : 684111313006637000, "text" : "@_TK_O Hi Tanya, that text is not from us as it's a scam. Can you please forward to us on Phishing@natwest.com &amp; then delete. Thanks. ZY" },
            { "id" : 684111853925089300, "text" : "@NatWest_Help hi, I need to make an urgent transfer but can not do it online due to the amount. What number can I call?" },
            { "id" : 684112232951738400, "text" : "@NatWest_Help Will do, thanks for the confirmation" },
            { "id" : 684112283316924400, "text" : "@NatWest_Help I've just filed a complaint. You'll find it on the system. I look forward to a response." },
            { "id" : 684112364480905200, "text" : "@ladyvicsterx Hi Vici, what is it you are looking for on the website? LH" },
            { "id" : 684112523466043400, "text" : "@NatWest_Help selfridges Manchester city centre branch." },
            { "id" : 684112798662680600, "text" : "@NatWest_Help where to fill in the consent to let application I spoke to someone on the phone and they said this can be done online" },
            { "id" : 684112876769030100, "text" : "@SianMoses_ Hi Sian, is there anything we can assist you with here? ZY" },
            { "id" : 684113494720004100, "text" : "@NatWest_Help #natwestques getting worse .. https://t.co/lE4mxdlePr" },
            { "id" : 684113842134224900, "text" : "@NatWest_Help #natwestcustomerservice - getting worse https://t.co/CADM3iDSbt" },
            { "id" : 684113856491335700, "text" : "@NatWest_Help I want to update my details and change my number but I have to order a card-reader to do it" },
            { "id" : 684113882974142500, "text" : "@LFC_RV Hi Roopa, you can try our security team on 0800 161 5152 and they will be able to help. SM" },
            { "id" : 684114383388151800, "text" : "@flapojacks Hi there, we have not had any reports of issues with the digital banking service. Are you getting a specific error message? SM" },
            { "id" : 684114384730361900, "text" : "@_TK_O Thanks and you're most welcome. Please do drop us a tweet if you need anything else. ZY" },
            { "id" : 684114492570136600, "text" : "@NatWest_Help well done on losing a customer" },
            { "id" : 684114622882943000, "text" : "@NatWest_Help It's actually broken again. I've tried reinstalling and no difference. (I haven't touched my phone in the last 40 mins!)" },
            { "id" : 684115077541302300, "text" : "@NatWest_Help   There is a transaction I don't recognise what can I do ?" },
            { "id" : 684115643294183400, "text" : "@RussellHillArt Hi Russell, please DM your full name and sort code and I can take a look into this for you. SM" },
            { "id" : 684116028075446300, "text" : "@NatWest_Help Why won't my debit card work with Apple Pay when it says so on your app?" },
            { "id" : 684116214252175400, "text" : "So, @HSBC_UK, has become the new @NatWest_Help!  Let's see if they can top NatWest's online outage record... #TheWorldsOfflineBank" },
            { "id" : 684116351326236700, "text" : "@SianMoses_ Yes, to this online a reader is required for security reasons. Have you ordered one yet? ZY" },
            { "id" : 684116354329362400, "text" : "@LivvyCates Thank you, I will just take a look into this for you. SM" },
            { "id" : 684118109557514200, "text" : "@LivvyCates Can you have a direct chat with me now? If so please use link to begin and quote reference 160103-000220. 1/2" },
            { "id" : 684118110752915500, "text" : "@LivvyCates https://t.co/khqDlw9N2S. 2/2 SM" },
            { "id" : 670229490824532000, "text" : "RT @JudgeDrokk: Dont buy this  if u have a dust allergy.! Its a job for  for Kim &amp; Aggie.. @futurewas8bit  https://t.co/7iVXw9thjR https://…" },
            { "id" : 670231287702122500, "text" : "Bayelsa: Navy hands over rescued woman to Police  Commodore Yakubu Wanbai, the Commander, Nigerian Navy Naval Base… https://t.co/SNs1cQoiY6" },
            { "id" : 670231443793174500, "text" : "RT @futurewas8bit: .@DonJornson Cheapest cased version is £36.11 today.. Posh Limited Edition £41.90 #Fillyaboots #SD2IEC #Commodore #C64" },
            { "id" : 670231772219777000, "text" : "#newsnow Navy hands over woman rescued from kidnappers to Police in Bayelsa- Commodore Yakubu Wanbai, the... https://t.co/rbfw8z3tB5" },
            { "id" : 670232192656785400, "text" : "RT @textfiles: The C64 Preservation Project released 6,000+ Commodore 64 Disk images this month. They're now mirrored here: https://t.co/Os…" },
            { "id" : 670233170600730600, "text" : "@aidan_kills Hi Aiden, can you please reinstall the app to see if this resolves it? JL" },
            { "id" : 670233220647149600, "text" : "@NoleneMay Hi there, the main difference is Banks are listed on the stock market whilst Building Society are Mutually owned. PH" },
            { "id" : 670233621383553000, "text" : "@Daynamichie_ Hello, no issues raised at present. Have you spoken to your employer? JL" },
            { "id" : 670233641872703500, "text" : "@NatWest_Help trying to use my card but it keeps saying my bank have declined the transaction I have 6x the amount I'm spend in the account" },
            { "id" : 670234881314725900, "text" : "@sharongoLdstar Hi there, if you have access to online banking or our app, this will give you an up to date available balance. PH" },
            { "id" : 670235140510113800, "text" : "@NatWest_Help all set up a few weeks ago, I already had the cashback plus. Thought I'd changed it to my name." },
            { "id" : 670235191466721300, "text" : "@JoeONeilll What error message did you get when you tried to login? JL" },
            { "id" : 670235295338635300, "text" : "@NatWest_Help shows all three debit cards we have, linked. Just the utilities etc not showing anything on statement" },
            { "id" : 670235323029409800, "text" : "@NatWest_Help Can I get paperless statements? How do I switch?" },
            { "id" : 670235375395315700, "text" : "@RBS_Help yes my employer said i should have been paid as my pay slip states i have been" },
            { "id" : 670235382861209600, "text" : "@JoeONeilll Sorry I mean when you tried to make the payment? JL" },
            { "id" : 670235396526186500, "text" : "@NatWest_Help the app is now missing on my watch despite it saying \"it's installed\" ☹️" },
            { "id" : 670235530160963600, "text" : "@RBS_Help it came up as that https://t.co/cGKqHGQQLB" },
            { "id" : 670235617670864900, "text" : "@NatWest_Help still queuing in Natwest, Allerton Road on my lunch break. Never waited less than 25 minutes in here. Terrible." },
            { "id" : 670235639208656900, "text" : "@gemmadanieIs I see, the payment should not credit after the bank holiday, if it's not there today, it should credit tomorrow. JA" },
            { "id" : 670235641221922800, "text" : "@NatWest_Help  Hi I've DM you. If you could get back to me that would be great. Thank you." },
            { "id" : 670236897638285300, "text" : "@GrumpyRevJames I understand, we're now following so if you can DM your full name, post code &amp; sort code, we can look into raising this. JA" },
            { "id" : 670237241277620200, "text" : "@Awayday05 Sorry to hear this Lee, can you please DM us your full name, post code and sort code so we can look into this for you. PH" },
            { "id" : 670238204268838900, "text" : "@NatWest_Help my card finally arrived in branch but is utterly useless because there is no PIN number. Expected delivery of PIN? Next week." },
            { "id" : 670238504929075200, "text" : "@RBS_Help Do you do cards for teens / students?" },
            { "id" : 670238649586421800, "text" : "@NatWest_Help first thing in the morning I'm opening account with another bank and moving all my money. Soz NatWest, but this is ridiculous" },
            { "id" : 670239323447521300, "text" : "@RBS_Help called Croydon 8 times NO RESPONSE!!!!!!!" },
            { "id" : 670240088874459100, "text" : "It's so typical that @RBSGroup are causing problems with my account when I have to pay off a ski holiday and it's Black Friday. @RBS_Help" },
            { "id" : 670240165651198000, "text" : "@sharongoLdstar If the account is closed, we can either arrange for a statement to be posted to you if you know your 1/2" },
            { "id" : 670240206600147000, "text" : "@sharongoLdstar account details or your local branch can help too. 2/2 PH" },
            { "id" : 670240969774735400, "text" : "@crazymuseumlady Hi Helen, I can confirm the branch is closed from 27/11/15 to 20/11/15. Apologies for any inconvenience. JA" },
            { "id" : 670240970764623900, "text" : "@NatWest_Help I don't know my customer number as its automatically logged in on the app could I ring you without that information?" },
            { "id" : 670240971473469400, "text" : "@NatWest_Help Must say, excellent service from Jo at the Blackpool branch yesterday. 2 hour meeting, #happycustomer" },
            { "id" : 670241426257682400, "text" : "@NoleneMay Yes we do, here is a link to our revolve account: https://t.co/rTig5ty7XL PH" },
            { "id" : 670243387098996700, "text" : "#FF our #GivingTuesday sponsors @NatWest_Help @RBSGroup @Interdirect @SUBWAYUKIreland TY for all your support" },
            { "id" : 670244073295474700, "text" : "@NatWest_Help why has my online banking been disabled?" },
            { "id" : 670245987462602800, "text" : "@NatWest_Help thanks, can this form be used to combine 2 ISAs into 1 fixed ISA?" },
            { "id" : 670246000301383700, "text" : "@josephgbaker Hi Joseph, do you have Online Banking? If so you can change this under the 'Statements' section. RH" },
            { "id" : 670246216102314000, "text" : "@NatWest_Help Hi. My card is working in no machines in Thailand. Please help." },
            { "id" : 670246963602980900, "text" : "@aidan_kills Glad you have sorted this now, if we can help with anything else, please let us know. PH" },
            { "id" : 670247087875993600, "text" : "Only 3 days left to nominate a lady for the Inspirational Women award  #SOUTHAMPTON @NatWest_Help @PeterCooperVW https://t.co/dVZ8TiIpMU" },
            { "id" : 670247831194746900, "text" : "@NatWest_Help could this be true? https://t.co/JQw5cG6HCN" },
            { "id" : 670249650738364400, "text" : "@NatWest_Help yes after 35 mins! Short staffed and lots of angry customers." },
            { "id" : 670252544095068200, "text" : "@tommcmurtrie Hi Tom, what's happened please? Have you been able to pay the holiday? RH" },
            { "id" : 670253000871538700, "text" : "@sianyherm Were you able to take cash out for the weekend in branch? We can get this raised as a complaint for you if you like? RH" },
            { "id" : 670253138767646700, "text" : "@RBS_Help no, and I don't feel like I'm getting anywhere with anyone. Going into my local branch again today to speak about it" },
            { "id" : 670253254941495300, "text" : "RT @MKComFoundation: #FF our #GivingTuesday sponsors @NatWest_Help @RBSGroup @Interdirect @SUBWAYUKIreland TY for all your support" },
            { "id" : 670253753367416800, "text" : "@lucylou2728 I will forward your feedback to the branch so this can be looked into. PH" },
            { "id" : 670254704975347700, "text" : "@NatWest_Help Hi, being told to upload ID for Digidocs or loan will expire but I am unable to on the supplied link, please advise" },
            { "id" : 670255053949837300, "text" : "@vlrimmer Hi Victoria, many thanks for taking the time to let us know about this, I can forward you comments to the branch 1/2" },
            { "id" : 670255095515361300, "text" : "@vlrimmer about this, was this our one on Corporation Street or Blackpool South? 2/2 PH" },
            { "id" : 670255629186031600, "text" : "I'm pleased to say @NatWest_Help have now removed this awful advice from their site.\n\nJust the tweet to delete :)\n https://t.co/ctVzfhZ8R5" },
            { "id" : 670255771540697100, "text" : "@gemmadanieIs You're welcome, don't spend it all at once when it credits :) JA" },
            { "id" : 670255833637371900, "text" : "@RBS_Help hahahah thanks" },
            { "id" : 670256196977340400, "text" : "@NatWest_Help can you get money changed into coins in a branch still?" },
            { "id" : 670256210336198700, "text" : "@m5rcc 1 @NatWest_Help 0 #BOOM" },
            { "id" : 670256243139813400, "text" : "@NatWest_Help Is there problem with Visa Verification facility due to overload? Tried to place Ocado order but kicked back to me twice!" },
            { "id" : 670256319581040600, "text" : "@chloedymondxx Hi Chloe, we can look up your customer number for you, can you please DM us your full name, sort code and post code. PH" },
            { "id" : 670256345363431400, "text" : "@NatWest_Help Hi, it was Blackpool south and its the first time we've left a bank smiling! hehe" },
            { "id" : 670256529766015000, "text" : "RT @Paul_Reviews: I'm pleased to say @NatWest_Help have now removed this awful advice from their site.\n\nJust the tweet to delete :)\n https:…" },
            { "id" : 670257329384894500, "text" : "@MaddiesOwners Hello, you will continue to earn Cashback on bills (if registered before 5/10/15) until the end of the year. 1/2" },
            { "id" : 670257572318982100, "text" : "@MaddiesOwners The Cashback on debit cards will continue until further notice and we will be letting customers know nearer the split. 2/2 RH" },
            { "id" : 670258295681245200, "text" : "@NatWest_Help On recent online transactions the Verified by VISA stage appears but then skips. Used to have to enter password. Why is this?" },
            { "id" : 670258841532108800, "text" : "RT @LizSheppardJone: Newly refitted  @Natwest_help looking bordello chic in #Croydon High Street after weeks of building site chaos" },
            { "id" : 670258953591332900, "text" : "@NatWest_Help thanks for your help. You need to also pass the link to your Webchat team who said the form was not available online." },
            { "id" : 670259251089170400, "text" : "@NatWestBusiness @NatWest_Help how about paperless email instead of 4 bits of paper to tell me my balance is zero? https://t.co/xiKLDGlzmg" },
            { "id" : 670259547269898200, "text" : "@vlrimmer That's lovely to hear, glad Jo was able to put a smile on your face, I will ensure we forward your lovely comments to her. PH" },
            { "id" : 670259548352086000, "text" : "@m5rcc @NatWest_Help #BOSH" },
            { "id" : 670260679379689500, "text" : "@NatWest_Help okay thankyou, will do that now" },
            { "id" : 670261137674543100, "text" : "@krisconway2 Hi Kris. @RBS_Help Can you help here?" },
            { "id" : 670261343975526400, "text" : "@RBSGroup @RBS_Help id rather not speak bout my problem were everybody can read what im writting." },
            { "id" : 670261350048915500, "text" : "@doyoupunctuate Hi there, yes you can, if this is for a large change order it maybe best to order this in advance 1/2" },
            { "id" : 670261399327764500, "text" : "@doyoupunctuate here is the link to do this: https://t.co/QAIiYFfL1k 2/2 PH" },
            { "id" : 670262857003585500, "text" : "@analiensaturn Hello, if you're worried about your card we can get you another ordered for you. It can also be done Online under 'Cards'. RH" }
        ]
    }
})