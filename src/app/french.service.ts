import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FrenchService {

  constructor() {
  }
  public getYoutubeUrl(url: any) {
    return '//www.youtube.com/embed/' + url;
  }
  pages: Array<{ title: string, component: any }>=[];
  fontSize: number = 15;
  startPage: number = 0;
  endPage: number = 0;
  currentPage: number = 0;
  fontColor: any;
  bgColor: any;
  navigationFrom: any = null;
  mainItem = 0;
  routes!:Routes;
  selectedItem = 0;
  subItem = 0;
  language:string='en';
  networkStatus: any = "OFFLINE";
  bible: any = [

{
chapterName: "Le chemin de Dieu",
chapterNumber: 0,
pageNumber: 0,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  There was some history before the arrival of Jesus on Earth. There is also some history after His death. The history recorded prior to His birth is known as the <b>Old Testament,</b> while the history documented after His arrival is called the <b>New Testament.</b> The Old Testament covering the period before His birth, His life in the New Testament, and the propagation of the Christian community after His death, holds great significance for the Christian community. The compilation of both the Old and New Testaments is known as the <b>Holy Bible.</b> While the Christian Bible and the Hindu Bhagavad-Gita both aim to uplift and guide humans towards God, they have their differences. The Bhagavad-Gita consists solely of Krishna’s teachings, while the Holy Bible encompasses historical accounts before and after Jesus. Christian teachings are drawn from the Old Testament prior to Christ’s birth and from the propagation by His devotees in the New Testament after His death. While there’s nothing inherently wrong with this, upon deeper reflection, it becomes evident that only a portion of the Bible is essential for guiding people on the path to God. Just as in a play, we tend to favor certain characters, and in a drama with multiple episodes, we may prefer one over the others, in the case of the Bible, it’s the portion of the New Testament focusing on Jesus Christ—from His arrival on Earth to His departure—that holds the utmost sanctity and importance in achieving liberation (moksham). It’s crucial to understand that the core essence of the Bible lies in the history of Jesus. Jesus’ words are like a bag of diamonds within the Bible, and all that humanity needs to grasp can be found in the <b>Gospels of Matthew, Mark, Luke, and John.</b> The divine closeness humanity seeks can be discovered in these four Gospels. The loftiest wisdom contained in these Gospels can be found in the Gospel of John, surpassing human intelligence. Despite the Bible spanning 1029 pages, the history of Jesus occupies only 102 pages in the New Testament. If the Bible were divided into ten parts, one part outshines the other nine, and those who appreciate the value of Jesus recognize the profound wisdom contained within this one part.

  We are here to elucidate some of Jesus’ words from the Gospels of Matthew, Mark, Luke, and John, which are replete with profound wisdom. One might wonder why we are reiterating these words when many Fathers, pastors, and bishops have already offered their interpretations. Here’s my answer: while preachers effectively teach verses from the Old Testament and the New Testament, there appears to be a gap in the explanation of verses from the four Gospels, which encompass the history of Christ. Just as Hindus may not yet have fully unraveled the secrets of the Bhagavad-Gita, there might be numerous hidden truths within the four Gospels that Christians have yet to discover. This is not a statement of envy towards preachers; rather, it’s an expression of faith in Christ. Our purpose is to share the truth and ensure that people can gain a correct understanding of Jesus, appreciating His <b>greatness and power.</b>

  Hindus, upon seeing my books featuring Christ’s name, often assume they are Christian literature and refuse to read them. Conversely, Christians may be wary of books authored by a Hindu Guru and prefer to stick to Christian texts. Hindus hate my work, thinking that a Christian author cannot be a true Hindu, while some Christians may warn against my books, believing they are intended to convert Christians to Hinduism and should be avoided. Hindus accuse us of converting their people to Christianity, and Christians accuse us of turning them into Hindus. However, it’s essential to clarify our intent. We do not seek to convert anyone, but rather, our goal is to encourage people to seek the wisdom of the true God. Every child of God has the <b>right</b> to express their beliefs about God. Thus, we patiently share God’s teachings, regardless of what others may think or assume.

  I have a question for those who may harbor doubts or jealousy. <b>God has come to Earth as a man and departed, but He also promised to return. Can anyone confidently assert that God only appears once?</b> Such a claim would seem incompatible with true wisdom. God has proclaimed His return whenever there is a need on Earth. He comes in times of adversity when the principles of dharma are under threat. This declaration is evident both in the Bhagavad-Gita and the Bible. God can take any form and deliver His teachings. <b>It’s a mistake for Hindus to anticipate Krishna’s return as Krishna or for Christians to expect Jesus to return as Jesus.</b> When God chooses to come, there are no constraints regarding timing, place, or form. He might manifest in forms beyond human recognition, but His message remains unchanged over time. Dharma, as divine principles, is inherently consistent and unchanging, akin to scientific laws. Consequently, God will always impart the same dharma, irrespective of His name, form, or the religion through which He is born.

  God has never established a specific religion on Earth when He appeared. His teachings are not bound by any particular religious framework, and He did not endorse or belong to any one religion. Instead, He conveyed His divine principles, or dharmas, without referencing any specific religion. The creation of religions is a human endeavor. When God observed wrongdoing among people of any religious group, He pointed out their errors, guided them on the <b>God’s correct path,</b> and encouraged the practice of dharma regardless of religious affiliation. Dharmas themselves did not create religions. Humans formed religions based on their understanding of divine wisdom, the language they spoke, and their behaviors.

  Each religion follows its unique methodology and worships a specific deity. It is customary for adherents of a religion to observe the rituals associated with that faith. However, it’s vital to understand that these religious practices are human creations. When God takes on human form on Earth, He does not adhere to any specific religious rituals or customs. Nor does He engage in the worship of other deities. Religious practices and rituals are for humans, not for God. Instead, God’s role is to guide people on the <b>right path,</b> revealing any shortcomings in their devotion. When God incarnates as a human, His focus is on imparting knowledge about God and God’s dharmas, rather than participating in deity worship, as humans do.

  When God incarnated as Krishna in the Dvapara Yuga, He did not engage in the worship of any deity. Instead, He fully revealed the wisdom of Paramatma (the Supreme Soul) when the time was right. Similarly, when God incarnated as Jesus Christ in the Kali Yuga, He did not engage in deity worship but preached the wisdom He intended to convey. His true greatness and divinity become apparent when He imparts <b>wisdom.</b> During other times, He may appear as an ordinary individual, much like everyone else. The ignorant may mistake Him for a common person, but those with wisdom can recognize Him as God. Those possessing complete wisdom can identify Him whenever He descends to Earth. However, individuals under the influence of Maya fail to recognize Him in any circumstance. Moreover, humans sometimes perceive Him as an ordinary individual, subjecting Him to insults and causing various troubles.

  When God comes to Earth as a human once in a few thousand years, humans who are serpent brood cannot recognize him. Not only do they not recognize Him, but they also subject Him to torture. Some may wonder why He is subjected to torment when humans typically do not torture their fellow beings. The answer lies in the fact that when God incarnates as a human, He does not lead an ordinary life. His purpose is to impart divine wisdom in alignment with dharma. Consequently, those who are ignorant and lack understanding of dharma develop animosity towards Him, and this hatred can lead to the persecution of Him. In the absence of divine teachings, there would be no such adversaries. However, when He points out adharmas in human conduct, those adhering to adharmas, while believing they are following dharma, will become angered. Throughout history, humans have shown disrespect towards Him in every incarnation as a human. Some were envious of Jesus when He taught divine wisdom. They failed to appreciate His greatness and wisdom, ultimately condemning Him to death. He died because of the religious followers who thought they were gnanis. The serpent brood has the poison of ignorance. So, the life of Christ ended at the hands of the serpent brood.

  God knows all things about God, and humans know nothing. Humans can only grasp God’s dharmas (divine principles) when God reveals them. Divine revelation is essential for humans to gain insights into God’s nature and teachings. A portion of God, present in every atom of the universe, incarnates as a human. To exist in the world for a certain period, a system known as karma is involved. The cause of human birth is attributed to karma, but God Himself is beyond karma. Therefore, God generates the karma necessary for His own birth and incarnates with that karma. Such an individual is referred to as <b>Svayambhu,</b> meaning ‘self-born,’ not bound by karma. Such a being is known as <b>Bhagavan or Comforter (Adarana Karta).</b> It is believed that God may have manifested on Earth as Bhagavan many times in the past, although the precise number of times dharma has been restored on Earth remains unknown. Many mysteries have unfolded over the past millions of years, and recorded history spans only a few thousand years. As a result, our knowledge of past events is limited, but historical records indicate instances where God incarnated as a human to guide humanity.

  <b>It becomes evident that God incarnates and dies as a human being on Earth occasionally.</b> Upon deep reflection and with the wisdom we possess, it becomes evident that God was born approximately 5,000 years ago in India and around 2,000 years ago in Israel. This divine incarnation was known as Jesus Christ during His time in Israel. He was present among humans on Earth for a limited span of 33 years, guided by His own predetermined karma. During the first 30 years of His life, Jesus lived as an ordinary Jeevatma. It was in the subsequent three years that He imparted Atma’s wisdom to humanity while living as Atma at times.

  Some individuals may question my statement that ‘The divinity is born as a man on earth. The divinity (God) spreads to every atom of the universe.’ Does God not spread throughout the entire universe when He is born as a man? Does God, who is said to be present in all, not present in all of us after being born as Bhagavan on the earth? Let’s explore the answer using an analogy. Consider the sea, which is full of water. If we take a portion of that water from the sea in a small container, the container now holds seawater, but the sea remains full of water. The water in the container is referred to as ‘separated water,’ while the water in the sea is ‘unseparated water.’ Both the sea and the container share the same water, with no difference in the water’s properties, except that the container water is separated from the sea. In a similar vein, we can liken God to the sea. Bhagavan is like the separated water in the container, distinct from God as the sea. Yet, the container water and seawater are one and the same; similarly, Bhagavan and God are identical. When water is placed in a container, it doesn’t deplete the sea, and the sea remains full. Likewise, when a part of God incarnates as Bhagavan, God continues to be omnipresent as before. There’s no alteration in God, His divine principles, or His omnipresence when He appears as Bhagavan. A part of God becomes Bhagavan, but not the entire God. Even though Bhagavan is only a part of God, He has the same properties. Therefore, nothing is wrong with saying that God is born, although only a part of God is born on earth. Hence, there is nothing wrong with saying that Jesus is ‘God.’

  Some individuals may pose another question: If Jesus is God, why did He endure suffering when people harmed Him? Why was He subjected to human torture and humiliation? They may also ask why Jesus did not reveal His divine identity to them and employ His divine power to punish those who mistreated Him. Here is our response: To understand this, we must first grasp a divine secret. Within an ordinary person's body, there exist three souls – Jeevatma, Atma, and Paramatma. Among these three souls, Jeevatma and Atma both reside within the body. These two souls are not external to the body. The third soul, Paramatma, extends within and beyond the body, permeating every atom in the universe. However, Paramatma does not actively engage in actions within or outside the body. The second soul, Atma, is responsible for all bodily functions. The first soul, Jeevatma, does nothing except experiencing pleasure and sorrow. Many individuals may think that they (Jeevatma) are the ones performing every action, but that is not the case within the human body. Atma, which resides within us without our conscious awareness, carries out all the work. Even Atma does not do anything according to its own will. <b>Atma</b> works according to <b>karma</b>, which is the underlying cause of every task. According to the law of karma, Jeevatma is destined to experience pleasure and sorrow. For Jeevatma to undergo these experiences within the body, Atma, which is spread throughout the body, facilitates these bodily functions. This includes physiological processes like digesting food, regulating the heartbeat, and managing bodily functions such as the separation of urine and sweat from the blood. Atma’s role in performing these bodily functions enables Jeevatma to coexist within the body. Inside the body, Jeevatma’s primary function is to experience. This is an inherent law governing every human body, unchanging and constant.

  Even though God is born as a human, His body operates with a system akin to that of an ordinary human being. In His body, Paramatma must be present, Atma performs all the work, and Jeevatma experiences. This same process occurs within God’s body when He takes human form. When God came as Jesus, His body was no different from an ordinary human body. Consequently, He experienced suffering and pleasures just as any Jeevatma would. Jesus faced numerous challenges in life, all of which He had to undergo as a Jeevatma. To undergo these experiences in His earthly life, He created His own karma and incarnated as a human. Now, you might ask what sets Him apart from us. There is indeed one significant difference. We previously learned that only Atma operates within every human body. In Bhagavan’s body, it is likewise Atma that carries out the functions. Nevertheless, there are unique instances where something different transpires within Bhagavan’s body. On certain occasions, the three souls deviate from their conventional roles and operate differently. During such moments, Jeevatma enters a state where there is no experience, allowing Atma to assume the role of Jeevatma. The words spoken from Bhagavan’s body in this state, coming from Atma, are entirely spiritual in nature. The profound spiritual truths and God’s dharmas are only revealed when Atma speaks directly. On rare occasions, Atma and Jeevatma become silent, and Paramatma takes over and speaks. Such occurrences may happen once or twice in Bhagavan’s lifetime. In the lives of Jesus, Krishna, and Ravana Brahma, there were instances when Paramatma spoke. When Paramatma speaks, Prakruti (the material nature) follows His words. Similarly, when Atma speaks, profound wisdom is under His control. In the lives of these divine incarnations, the following happened: <b>1) Paramatma’s words wielded command over Prakruti. 2) Atma’s words conveyed pure Atma wisdom. 3) Jeevatma experienced pleasure and sorrow.</b> Paramatma spoke when a storm broke out in the sea during Jesus’ life and when He commanded the storm to calm down. It became evident that Prakruti followed His words and subsided. As Atma, He expressed pure wisdom. He also experienced various joys and sorrows as a Jeevatma during the rest of His life. Similar events occurred in Krishna’s life, where He commanded the Sun and killed Saindhava. There was also an occasion when Krishna revealed a universal form and declared, “I am Paramatma.” As Atma, He conveyed profound wisdom in the form of the Bhagavad-Gita, and experienced life’s pleasures and sorrows as a Jeevatma for the remaining time. This interplay of the three souls taking on distinct roles happens exclusively within Bhagavan’s body. Divinity assumes human form only once in thousands or even millions of years. When God is born on Earth, He predominantly lives as a Jeevatma, akin to others. However, He occasionally speaks as Atma a few times a year for brief periods when needed. Speaking as Paramatma happens very rarely, if at all. The necessity for speaking as Atma arises because He has come to impart dharmas. This represents God’s system, distinct from Maya’s system.

  There is no trouble as long as God behaves like an ordinary man. Maya, however, opposes when God imparts wisdom as Atma. Maya is fundamentally opposed to God’s wisdom. Therefore, Maya, often referred to as Satan, is vigilant in preventing individuals from shifting their allegiance from Maya’s side to embracing God’s wisdom. Furthermore, Maya actively seeks out those who exhibit an interest in and understanding of wisdom, attempting to divert them back to its side. This is why many people have only limited interest in embracing true divine wisdom, largely due to the influence of Maya. Consequently, even those who possess some wisdom may veer off the path. You might raise a question at this point: “There are numerous devotees today who are deeply committed to their faith. They seek wisdom from various spiritual gurus and display unwavering devotion to deities. Almost everyone is devoted to God, except for a few atheists. Is it possible to change the devotees of Sai Baba and Ayyappa? Besides the longstanding temples in the country, numerous new temples are being constructed in honor of Shirdi Sai Baba and Ayyappa Swamy. It seems that Maya has not obstructed their devotion. How can we accept your perspective?” Here is my response.

  Maya stands in direct opposition to God’s path and supreme wisdom. Its opposition to God’s profound wisdom demonstrates the great power of Maya, which is referred to as <b>‘Maya duratyaya’</b> in the Bhagavad-Gita. God said in Bhagavad-Gita that <b>it is impossible to conquer Maya;</b> hence it becomes known that <b>Maya is unimaginably</b> <b>deceiving humans.</b> Thus, the workings of Maya remain largely elusive and mysterious, leaving individuals susceptible to its deceptions. Maya operates by creating its own version of wisdom. As God rarely incarnates on Earth as Bhagavan once in thousands of years, Maya produces numerous imitations of Bhagavans to confuse and divert people from recognizing the genuine Bhagavan. It introduces many types of wisdom, making it difficult for many to distinguish true wisdom from the counterfeit. When there are many Bhagavans associated with Maya on earth, who will recognize the true Bhagavan who rarely comes upon earth? When there are Bhagavans who exhibit numerous supernatural feats and miracles (mahatyas), who can identify the true Bhagavan who demonstrates only one or two mahatyas in a lifetime? In this way, it has become impossible to recognize God’s wisdom and Bhagavan. God showed His reality in the universal form, something that no one has ever seen and can ever understand. But Maya influenced some people to write that many devatas showed universal form, including Saibaba and Veerabrahmam so that people do not count Krishna’s universal form as the highest. Who thinks the universal form Krishna showed in Bhagavad-Gita is the greatest of all? Thus, Christians could not recognize Jesus Christ as Bhagavan; similarly, Hindus could not know Krishna as Bhagavan. Hindus could not consider Krishna as the true God. While some view Him as the last of all other Gods, others fail to recognize Him as even a minor deity due to their perception of His actions as mischievous. No one even counts Krishna as God, like Shirdi Sai Baba. Similarly, in the Christian tradition, despite considering Jesus Christ as the Son of God, many have not grasped the essence of His teachings. Under the influence of Maya, Christians venerate the cross, which was instrumental in Jesus’ crucifixion, instead of Jesus Himself. They thought they would be counted as Hindus if they worshipped <b>Jesus’ idol;</b> hence, they pray to the cross. While Jesus said, <b>“He who has seen me has seen my Father,”</b> is it not Maya’s work that made Christians respect the cross, which caused Jesus’ death, instead of Jesus’ idol? Maya strategically leads people away from God’s path, even when they believe they are firmly on that path. It works to undermine the credibility of those who understand God’s wisdom and speak the truth, making their words appear inferior or unheard. Moreover, Maya has contributed to the formation of various religions and the illusion that distinct Gods exist for each religion. Despite there being one supreme power governing the universe, Maya has fostered the belief in multiple Gods corresponding to different religions. The influence of Maya is profound, leading to the emergence of a multitude of Gods and religious beliefs. Within the Christian faith alone, some devotees worship Mary while others worship Christ. Similarly, Hinduism boasts numerous deities. In light of this diversity, it is now essential to embark on a quest to discern the ultimate head of all deities and religions. However, this task is not easy. <b>By first recognizing Maya and its impact, we can subsequently seek the path to God.</b> Therefore, it is important to determine whether the path you are currently on leads to God or is influenced by Maya.

  There is an infinite supernatural power that is formless, nameless, and undefined. Let’s refer to it as ‘Paramatma.’ Very little is known about Paramatma, the source of all existence. Paramatma must personally manifest and reveal Himself because, despite permeating every atom, we remain limited to understanding only the Pancha Bhutas (five basic elements). Our senses can only perceive what is within their range, and Paramatma is beyond the grasp of our senses. We can only comprehend Him when He takes on human form, making Himself visible and revealing His wisdom. Otherwise, we remain unaware of Him. Therefore, Paramatma must incarnate as a human and impart His wisdom. He emerges to disclose His dharmas, but these teachings fade over time, necessitating His return to reinstate them. Paramatma, the creator of the universe, often chooses to manifest as a human, leading an existence similar to an ordinary person, and fulfilling His purpose. Identifying Paramatma in such a form is a challenging task. Despite Paramatma’s numerous incarnations on Earth, humans have struggled to recognize His presence even to this day.

  Those who fail to recognize Bhagavan when He is present often begin to worship Him with great devotion after He has left. They do not worship Him because He is Paramatma, but rather because they believe He possesses great wisdom or that their desires will be fulfilled. However, they still do not realize that He is Paramatma. We can recognize the incarnations of Paramatma through certain principles. In this way, we can identify that Paramatma came as Krishna at the end of the Dvapara Yuga and later as Jesus in the Kali Yuga. Paramatma may have also come at a later time, but we do not know.

  Regardless of how many births Paramatma has had, there are no similarities from one birth to another except in His dharmas. Although Paramatma’s essence remains the same in Krishna, who was born in the Dvapara Yuga, and Jesus, who was born in the Kali Yuga, their outward lives are vastly different. Sri Krishna enjoyed a life of wealth and had eight wives. He also abducted His first wife with her consent and killed His enemies. After observing all of this, it becomes challenging for anyone to recognize Him as Bhagavan, who is imbued with a part of Paramatma.

  There were no lies or deceptions in the life of Jesus, who was born in the Kali Yuga. Jesus was meek and would turn the other cheek if slapped by an enemy. He had no lust for women. Krishna and Jesus are very different in worldly matters. Even Gurus in both religions are mistaken about these two. Hindu Gurus criticize Jesus by asking, “Why did Jesus die at the hands of ordinary people, and why did He not save himself? Why did He have to die if He had the divine power to raise the dead? Why did He suffer when He was nailed to the cross?” Similarly, church pastors criticize Krishna by arguing, “How can He become God when He had many wives?” In this way, they focus on the worldly aspects of the lives of Jesus and Krishna, but no one contemplates why such events occurred in their lives. Paramatma Himself said that no one could recognize Him when He came to the Earth. His role is to pretend so that no one recognizes Him. His mission is to be an unidentified thief among us, stealing our ignorance.

  Earlier, we mentioned that God cannot be understood through worldly matters. <b>God can only be recognized through God’s wisdom.</b> Even those who claim to be Gurus often fail to grasp this principle and attempt to measure God using worldly standards. Consequently, when God comes to Earth, no one recognizes Him. Those who perform miracles based on worldly matters may appear great and godlike, but the true God is often overlooked. This is because God’s presence cannot be identified based on external, worldly factors. Instead, God’s incarnation can be recognized based on dharma. The same dharma can be found in the Bhagavad-Gita and in the teachings of Jesus, which allow us to recognize them as one. However, there are no other similarities between them in external, worldly matters.

  There is only one God for the entire world, who incarnates as a man with many names and forms to guide humanity toward him. Unfortunately, many humans fail to realize this and create religions that argue over whose God is greater. They fail to understand that God in their religion and God in other religions are the same. Humans tend to love their religion more than God, which is a great ignorance. It is essential to know that there is only one God, even though we call Him by different names. Paramatma decides His role based on time, nation, and people, and incarnates as Bhagavan to teach His dharmas. His births are not the same, but His aim is always the same - to teach His dharmas. When He came as Jesus or Krishna, the dharmas He taught were the same. God and His dharmas may appear different because when Paramatma was born as Krishna and Jesus, their names, countries of birth, and personalities differed.

  Let’s take the dharma stated by Paramatma as an example. Sri Krishna said in the Gita, <b>‘Paritranaya Sadhunam vinasaya chaturskrutam,’</b> which means, <b>“I will protect the righteous and destroy the wicked.”</b> Some Christian preachers take these words and say to Hindus, “Your religion offers no protection, and your God will only kill sinners.” However, in our religion, there is protection for all sinners, and Jesus came to Earth to save sinners. While your God may destroy sinners and wicked people in your religion, my God (Jesus) will protect you. Therefore, Christians claim that their God is the true God. The Christians did not understand the true meaning of what Lord Jesus said in this regard, and the Hindus did not understand the meaning of the sloka that Krishna said in the Gita. Thus, Krishna’s words and Jesus’ words seem different to them. They believed that Krishna and Jesus were different, but they did not know that they were the same and that the words they uttered had the same meaning. The words ‘destroying the sinners and the wicked’ mean that they use the weapon of <b>‘teaching’</b> to remove the karma of sin and evil and make them pure. When the wicked become pure, they will not be caught in sins but become righteous. Then there will not be any evil people. Thus, the two phrases, ‘to say in the Gita that Krishna will do away with the wicked’ and ‘to say in the Bible that Jesus will protect you from sins,’ mean the same thing.

  Even though Jesus and Krishna spoke different languages, were different individuals, and had different names, the purpose of their words was the same. Due to people’s inability to fully grasp God’s concept and their tendency to interpret His words to suit their preferences, they divided the God who proclaimed the same dharma. When Hindus criticize Jesus, and Christians claim that Krishna is not God or Paramatma, the King and Father of paraloka, the Head of the universe who pervades the entire world and resides within us, laughs, knowing that these people are blind despite having eyes. Krishna said in the Gita, “I will come when there is a threat to dharma.” However, Hindus recognize Him as God only if He appears in the same way as before - with peacock feathers, a flute, and the chakra. If God is born in a different form, they say, “You are not our God.” In the Bible, Jesus Christ said that He would come again. Christians will recognize Jesus Christ only if He appears in the same way as before - with nail scars on His hands and spear marks on His side. They will say, “You are not our Lord,” if He comes in a different form. Due to the differences in their appearances and behaviors, Christians could not recognize that Jesus was Krishna, and similarly, Hindus could not acknowledge that Krishna was Jesus. That is why God said in the Gita, <b>“People dishonor me, for they do not know me and my mahatya.”</b> Some Hindu gurus will teach wisdom and provide upadesa to Krishna if He comes again. Similarly, if Jesus comes again, as mentioned in the Bible, Christian preachers, who may not recognize Him, will baptize Him. As long as there are Gurus who will teach wisdom to Krishna if He changes His form and name, it can be said that there is ignorance in the Hindu religion. Similarly, as long as there are Christians who will explain the Bible verses to Jesus if He changes His form and appears before them, it may be said that they are not fully aware of God.

  There is a strong reason why even the great gnanis could not recognize God or understand God’s wisdom when God came upon Earth. Before understanding the reason, one should be familiar with the visible <b>creation.</b> There is a significant opponent to God, which is why God is not fully understood. Christians call it ‘Satan,’ Hindus refer to it as ‘Maya,’ and Muslims call it ‘Shaitan. ’ To comprehend the secret of something with names like <b>Maya, Satan, or Shaitan,</b> one must first understand the secret of creation. Let’s delve into the details below.
</div></div>
</span>`
},
{
chapterName: "Le secret de la création",
chapterNumber: 1,
pageNumber: 1,
verse: ``,
meaning: ``,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Paramatma (God) was neither male nor female before the universe was created. Paramatma wanted to create the universe and thus brought into existence feminine Prakruti or Maya (Satan). He determined the required characteristics and all the necessary methods for it. Since Prakruti was female, Paramatma stood in stark contrast to her, and this characteristic is known as Purusha (male). Paramatma desired Prakruti to be entirely opposite to Him, so He granted her equal authority because He believed that the game would be more exciting when both opponents possessed equal strength. Prakruti (Satan) is contrary to Paramatma but not an enemy. Although it is natural for God (Paramatma) to face opposition from Satan (Prakruti), they are not enemies of each other.

  Paramatma, who created Prakruti, will eventually absorb her into Himself. He is the father, husband, and destructor of Prakruti, as well as the force within her. Paramatma, who is vast, created Prakruti and is engaged in a game called ‘Jagath.’ In this game, Paramatma disguises Himself as Purusha (male) even though outside of the play, He is neither male nor female. Prakruti is divided into five elements - Sky, Air, Fire, Water, and Earth - and is named Prapancha. After creating Prakruti, Paramatma desired to create a Jagath consisting of living beings that experience birth and death. He achieved this by creating living beings with Atma and constructing Jagath within the Prapancha. In Telugu, <b>‘Ja’</b> means birth, and <b>‘Gati’</b> means death. Hence, all living beings are aptly named <b>‘Jagath,’</b> indicating that it consists of birth and death.

  Paramatma created Jagath, consisting of living beings within Prakruti. While Prakruti (female) and Paramatma (Purusha) are considered equals, Jagati was born separately later. Thus far, Paramatma has created Prakruti (Prapancha) and Jagath, resulting in three components, including Paramatma. Initially, Paramatma, who was neither male nor female, created Prakruti. Then, Paramatma transformed into Purusha (Atma), took Prakruti as His wife, and together, they brought forth a unique offspring named Jagath. If we disregard these relationships, Paramatma created three distinct parts - Prakruti, Purusha, and Jagath. Prakruti is female, Paramatma is male (Purusha), and Jagath should be considered as non-binary (neither male nor female). The primary game is that Paramatma and Prakruti drag Jagath (non-binary), which exists between them. There are rules for this game. Although Paramatma defined the rules, He participates in the game according to the very rules He established, even though He is the creator of all and superior to all. This game, like others, has a time limit. The time limit for the game of Jagath is 1000 Yugas or 108 crores of years, similar to how football has a 90-minute time limit or cricket has a limit of 50 overs. The game experiences break during the night and continues during the day, with each playing and resting period spanning 108 crores (1.08 billion) years.

  Paramatma, non-specific and undefined, initially created Prapancha (without life- form) and subsequently brought forth the living beings (Jagath). Paramatma created Prakruti and became recognized as Purusha. He created Atma and divided Prakruti, which conceives with Atma’s seed, into five parts. Such Prakruti is called Pancha Bhutas or Prapancha. Paramatma divided Atma and Jeevatma into three parts: Jeevatma (the life-form Jagath), Atma, and Paramatma. He became recognized as Paramatma after creating Jeevatmas and Atma. He became recognized as Paramatma alongside Atmas (Jeevatma and Atma) and as Purusha alongside Prakruti. There is a basis for calling Him Purusha when there is Prakruti and Paramatma when souls are present. If Prakruti and Atmas do not exist, it is not possible to define Him. The life-form Jagath was born of Prakruti and Purusha. Paramatma planned so that the mother and father in Jagath have the attributes of Prakruti and Purusha.

  Prakruti possesses characteristics opposite to those of Purusha. However, Jagath consists of attributes from both Prakruti and Purusha. The life-form Jagath embodies both Paramatma-related Jeevatma and Atmas, as well as Prakruti-related bodies and gunas. The belief in the existence of God aligns with Atma, while the opposing view that God does not exist aligns with Prakruti. Human beings in Jagath exhibit characteristics of both Prakruti and Purusha. To symbolize the traits of Prakruti and Purusha, women’s bodies were created to resemble Prakruti, while men’s bodies were designed to represent Paramatma. Non-binary individuals were also created to symbolize Jagath, indicating that Jagath exists in addition to Prakruti and Paramatma. Women, men, and non-binary individuals symbolize Prakruti, Paramatma, and the living Jagath. Prakruti = Women, Jagath = Non-binary, and Paramatma = Purusha (Male). God made His creation known by creating females to resemble Prakruti, non-binary individuals to symbolize Jagath, and males to represent Paramatma. God brought children into the world through the union of males and females to illustrate that the living Jagath is born of Atma and Prakruti. The visible mother, father, and offspring illustrate how creation initially occurred. Many individuals, despite their intelligence, often do not contemplate why men differ from women and why offspring are born from both men and women. To truly grasp spirituality, it is essential to understand the basics of the <b>‘Secret of Creation’</b> in spiritual education.

  It is important to understand that the game between God and Prakruti is friendly in nature. Prakruti and Paramatma engage in a gentle tug-of-war, each attempting to draw Jeevatma to their respective sides in this game. Paramatma’s duty is to impart wisdom to Jeevatma, guiding them towards Him. Conversely, Prakruti, in the form of Maya with its weapon of gunas, keeps human beings occupied, preventing them from contemplating God. Prakruti ensnares individuals in their daily activities, diverting their full attention towards worldly pursuits, and obstructing them from turning towards God through the influence of desire and associated gunas. The grandest game between Paramatma and Prakruti remains nameless. In the form of Maya, Prakruti subtly pulls everyone toward its side, often without their awareness. If anyone within Jagath thinks about God and seeks knowledge about Him, Maya (Prakruti) tends to focus on and ensnare them. Maya (Satan) appears stronger than God in this ongoing struggle between God and Satan. Currently, it holds the allegiance of 99 percent of human beings. In such a scenario, when God’s defeat may seem inevitable, Paramatma should strive to prevail.

  As part of His endeavors, Paramatma will incarnate as a human among humanity and speak of Himself, aiming to guide people toward Him. As previously mentioned, there is no true adversary, and each side employs its own strategy. Both Satan (Maya) and God coexist within every human being, but individuals are often unaware of their presence and struggle to recognize God or Maya. Humans frequently remain oblivious to whose side they are on. God strives to liberate individuals ensnared by Maya’s influence, and in this pursuit, Paramatma is born on Earth as the Son of God. However, following the rules of the cosmic game, He must not reveal His identity as the Son of God. Thus, when God incarnates as a human, He speaks of Paramatma as an ordinary individual. Paramatma imparts His wisdom and re-establishes His dharma. Conversely, Maya formulates strategies to depict the Son of God as ignorant and foolish. It creates Gurus and Swamijis who promote Maya’s adharmas as dharmas and present the Son of God’s teachings as adharmas. Maya competes with the Son of God through these Gurus and Swamijis, leading humans to embrace its teachings instead of God’s wisdom. Maya employs terms such as Paramatma, moksham, wisdom, and practice to convey its adharmas to humans, making it challenging to distinguish God’s dharma from Satan’s adharmas.

  If someone seeks to find God, Maya renders them unable to distinguish between dharmas and adharmas, leading them to believe whatever is presented to them. It is a fundamental rule of the cosmic game that both Satan (Maya) and God should not overtly reveal their presence on Earth. When Paramatma incarnates as Bhagavan on Earth, He refrains from declaring, “I am Paramatma.” By the same rule, when Prakruti is born on Earth, it does not proclaim, “I am Maya.” However, when Maya incarnates, it can assert, “I am Bhagavan.” Following this principle, Maya (Satan) proclaims itself as Bhagavan (the Son of God), performs numerous miracles, and manifests in the form of various Swamijis. When Paramatma is born in one place on Earth, Prakruti creates many individuals bearing the name Bhagavan. Paramatma’s birth is intended solely to impart His dharmas without being openly recognized as Bhagavan. Concurrently, Maya generates many with the name Bhagavan even before the birth of Paramatma. Maya causes humans to hear its words and prevents them from listening to the words of the genuine Bhagavan. In this cosmic game, Maya exerts its influence, and God fulfills His purpose.

  While Maya continually takes the form of gunas within the human body, God exists in the form of Atma within the body. We previously mentioned that Maya and Paramatma would incarnate as human beings on Earth. It is important to understand the bodies they will assume. Maya incarnates in a male body as Bhagavan and a female body as Bhagavati. Paramatma consistently incarnates in a male body. Prakruti, as a female, typically wears a female body, but she can also manifest in a male body to deceive others. It may be challenging to discern the true Bhagavan in the forms of Bhagavati and Bhagavan. It’s crucial to note that Bhagavan is always incarnated as a male. The Heavenly Father, Paramatma, was incarnated as Jesus in male form. His birth occurred through a virgin womb without the involvement of a human father. Paramatma incarnates on Earth when the need arises, with <b>Jesus</b> being one such incarnation. The Holy Spirit is also expected to be incarnated on Earth in the future. We have written this scripture to inform you that no matter how many times the same Paramatma is born, He will reveal the same dharmas. The purpose of this scripture is to help readers understand the essential words of Jesus in the New Testament of the Bible and to compare them with the teachings of the Bhagavad-Gita. By reading this, we hope you will come to know the greatness of Jesus and the inner spirit of Krishna.
</div></div>
<ion-row><ion-col class="ion-text-center">
<b>By  <br><br>
The only Guru of Three Religions, Originator of Thraitha Theorem, The Author of One Hundred Divine Scriptures </b><br><br>
<span style="font-size:20px;font-weight:bold">Sri. Sri. Sri Acharya Prabodhananda Yogeeshwarulu</span>
</ion-col></ion-row>
</span>`,

},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 2,
verse: `<b>(1) The Gospel of Mathew, 3rd chapter, 7th verse.</b>`,
meaning: `<b>
(7) You brood of vipers! Who warned you to flee from the coming wrath?
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> In this verse, <b>‘brood of vipers’</b> is a new term. The term was used to refer to humans. However, there is doubt about whether humans can be considered the offspring of snakes. This raises a question for anyone who reads this verse. In this verse, we also need to delve into the detailed meaning of <b>‘coming wrath.’ </b>Additionally, another word in this verse is <b>‘Who warned you?’</b> This phrase refers to a past time, and we should seek to understand who warned humans in the past. There are three questions we need answers to in this verse.

  A bird is an enemy to a snake. The bird can kill the snake. The snake initially hisses to scare the bird, but the bird is not afraid. The bird can eat the snake as its food. This is common knowledge. The serpent and the bird are used as metaphors in the context of spiritual education. The pigeon among the birds is compared to Atma, while the serpent is compared to Maya. Although the verse doesn’t mention the bird, it does mention the serpent. When the serpent is compared to Maya (Satan), ‘brood of vipers’ can be understood as ‘offspring of Maya.’ To be more precise, ‘brood of vipers’ is used instead of ‘human beings with Maya.’

  Maya refers to the composition of gunas. Those who are constantly preoccupied with gunas and show no concern for God are referred to as the ‘brood of vipers.’ It becomes known that impending wrath awaits those who are entangled in Maya. <b>Wrath, in this context, signifies something terrible or difficult to bear.</b> The term ‘coming wrath’ suggests that it does not currently exist but will manifest in the future. What humans do not initially possess but will acquire due to Maya (gunas) are all kinds of good (punya) and bad karma (sin). The experiences resulting from bad karma can be quite terrible. Therefore, <b>‘coming wrath’ alludes to the karma that will manifest in human life.</b> Every human who is born accumulates karma, which is why the verse <b>‘You brood of vipers! Who warned you to flee from the coming wrath?’</b> serves as a warning to humans.

  When the verse mentions, ‘who warned you?’ it suggests that someone in the past provided humans with wisdom to escape karma. This verse implies that there was an individual who told an idea in the past to help people evade impending karma. Consequently, it’s important for humans to uncover the identity of this person, understand what he said, and determine when he conveyed this wisdom. Recalling historical events from the past can be a challenging task. If the answer to the initial question posed in the first chapter of the four Gospels is not known, the matter in the second divine scripture will not be understood. Subsequently, the following verses from the second divine scripture cannot be understood. Thus, it is essential to discern the answer to the initial question. Prior to uncovering the truth in this regard, let’s explore the significance of this second divine scripture.

  The wisdom God imparted became a scripture approximately five thousand years ago. This scripture comprises 18 chapters and is situated in the middle of the 18 parvas of the Mahabharata. These eighteen chapters are referred to as the first divine scripture. At the beginning of creation, God communicated wisdom through the Sky. This wisdom was known as <b>‘Japara</b> wisdom’ at that time. In Telugu, <b>‘Para’</b> signifies separate or different, while <b>‘Ja’</b> means born. ‘Japara’ thus translates to ‘separate or distinct from birth.’ It earned this name because God is never subject to birth. Japara wisdom initially became the first divine scripture and also became the second divine scripture after three thousand years i.e. approximately two thousand years ago from now. Roughly 1400 years ago, the same wisdom was transcribed as the third divine scripture. We are now interpreting the sentence from the second divine scripture.

  When the question ‘Who warned you?’ is raised, we should talk about the one who told wisdom in the past. According to this, the one who told wisdom in the first divine scripture is the one who warned humans first. There is a reason for knowing the one who told in the past. Since only God can tell His wisdom and God is the only one, the same God teaches His wisdom whenever and wherever required. Therefore, the same one who told earlier told again in verses. Hence, if we want to know the one who told the wisdom in the second divine scripture, we first should know the one who said the wisdom in the past. Hence it became necessary to ask the question - who warned you? If you can find out who said it in the past, you will have the opportunity to recognize who is saying it now. We encourage you to approach this scripture with the <b>belief</b> that the individual who communicated the first divine scripture is also the source of the second divine scripture.

  Before reading the second divine scripture, we need to know what verses God, who told the first divine scripture, told in the Bible scripture. The Bible comprises a total of 66 chapters, of which four contain verses directly spoken by God. The other 62 chapters have verses from other gnanis. These chapters are known as 1) The Gospel of Matthew, 2) The Gospel of Mark, 3) The Gospel of Luke, and 4) The Gospel of John. These four Gospel accounts are situated in the central portion of the Bible, effectively dividing it into three main sections. The initial 39 chapters form the first part, followed by the four Gospels as the second part, with the remaining 23 chapters constituting the third part. Of particular note is the designation of these four chapters as <b>‘Gospels,’</b> emphasizing their significance as they contain the words of Jesus during His earthly life.

  <b>
  The first part of the Bible has 39 parts.
  The second part of the Bible has 4 Gospels.
  The third part of the Bible has 23 parts.
  </b>

  In the first and third parts, other gnanis conveyed God’s wisdom. Jesus, an incarnation of the one who delivered the first divine scripture, reiterated verses in the four Gospels. Therefore, to understand this, the question, <b>‘Who warned you to flee from the coming wrath?’</b> is posed. Hence, it can be said that this verse, placed above all others, holds great significance.
</div></div>
</span>`
},

{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 3,
verse: `<b>The Gospel of Mathew, 3rd chapter, 11th verse.</b>`,
meaning: ` <b>
(11) I baptize you with water for mind change. But after me comes one who is more powerful than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire.
</b>`,
pageText:`<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This verse contains the words <b>‘change of manas’</b> and <b>‘baptize,’</b> as well as ‘with water and with fire.’ To fully grasp the meaning of this verse, it’s essential to understand these four words. If any one of these words remains unclear, the essence of the verse remains elusive. So, let’s delve into the meanings of these four words. The first word is ‘change of manas. ’ Manas (mind) in our body retains and recalls what has been learned and stored. Here, ‘change of manas’ refers to the alteration of manas. Manas is responsible for remembering the events of our life. When the first manas undergoes a change and the second manas takes its place, all the memories of the first manas are erased. The second manas has no recollection of the first manas. The first manas ceases to exist with death, and the second manas emerges with birth. When the first manas is replaced by the second manas, it’s termed a ‘change of manas. ’ This natural transition of manas happens with each cycle of birth and death. Baptism is unnecessary for the ‘change of manas’ because it occurs naturally with the process of death and rebirth.

  When a person dies and is reborn, they shed their old body and acquire a new one. This physical transformation that occurs is known as birth. It’s important to recognize that humans possess two distinct types of bodies: the visible (physical) and the invisible (subtle). Just as the old, visible body is replaced by a new one in the process of birth, similarly, when the unseen, subtle body undergoes a change, Hindus (Indus) refer to it as <b>‘upadesa,</b> ’ while Christians term it <b>‘baptism.</b> ’ As mentioned in this verse, baptism signifies the transformation of the unseen manas. Much like how the old manas, laden with memories, fades away in death, and a new manas emerges in birth, during baptism, the manas undergoes a profound change. It ceases to remind us of mundane, ignorant memories and begins to <b>recall wisdom and divine-related memories</b>. Baptism is the process through which an individual, guided by the teachings of a <b>Guru</b>, attains a change of manas in life. In this transformation, an ignorant manas is replaced with one that is attuned to wisdom.
  <b>
  Change of Manas = Turning from ignorance to wisdom.
  Baptism = Attaining upadesa from Guru.</b>

  Baptist John offered ‘upadesa’ with water, declaring, “I baptize you with water, but someone more powerful than me will come after, who will baptize you with the Holy Spirit and fire.” We’ve previously explored the concepts of ‘change of manas’ and ‘baptism’ in detail. Now, let’s delve into the meanings of ‘water’ and ‘fire (the opposite of water). ’ We obtain baptism from Guru, but there are two types of Gurus. Some possess wisdom power (Gnana Shakti), while others do not. Many Gurus commonly perform baptism or ‘upadesa’ using water. Some may use milk, both of which are visible liquids, while others use sacred ash or incense smoke as part of the process. Additionally, during ‘upadesa,’ a Guru imparts a mantra, a word, or an image, and there are numerous such ‘upadesas’ in existence, offered by various Gurus. John was one of these Gurus, and he openly admitted to his method, stating, “I baptize you with water.” However, he also foretold the arrival of someone greater, who would baptize with the Holy Spirit and fire. We’ve defined ‘baptism’ as the path to the transformation of the manas from ignorance to wisdom. When this transformation occurs through baptism, it has the power to cleanse all of a person’s sins. Guru gives the appropriate divine fire through his baptism to burn sins. Guru should possess the divinity of fire. The first verse in the chapter of ‘Atma Samyama Yoga’ in the Bhagavad-Gita, the first divine scripture, emphasizes the necessity of this divine fire, stating, ‘cha yogee cha na niragnir nachaakriyah,’ meaning <b>“One who lacks this divine fire (Gnana Shakti), and ceases to act is not a yogi (Guru).”</b>

  A genuine yogi (Guru) is not one who refrains from action but is characterized by the presence of inner fire, which symbolizes <b>wisdom power.</b> This is what the verse mentioned as ‘baptism with fire.’ Here, ‘fire’ signifies the <b>divine power (Gnana Shakti),</b> which is not visible to the naked eye. When a person receives this divine fire from their Guru, it ignites a transformative power within them, capable of burning away their accumulated karma. The fire of wisdom (Gnana Shakti) bestowed upon the baptized individual begins to destroy his karma. While a guru like John administered baptism for the purpose of ‘change of manas,’ he <b>did not possess the wisdom power</b> in his baptism required to burn away karma. Thus, he stated, “I can only baptize you with water.” John explained to the people that his baptism, <b>performed with water</b>, would not burn away their karma. Instead, he anticipated that the one who would come after him would administer a baptism capable of accomplishing this.
  <b>
  Baptism with water = Upadesa that does not burn karma.
  Baptism with fire = Upadesa that burns karma
  </b>
</div></div>
</span>`,
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 4,
verse: `<b>(3) The Gospel of Mathew, 3rd chapter, 12th verse.</b>`,
meaning: `<b>
(12) His winnowing fork is in his hand, and he will clear his threshing floor, gathering his wheat into the barn and burning up the chaff with unquenchable fire.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  <ion-row><ion-col class="ion-text-center">
  <img src="assets/img/chaata.png"/><br>
  <img src="assets/img/kallam.png"/>
  </ion-col></ion-row>
<div class="poem"><div class="poemtext"> John, a renowned guru of his time, was the one who spoke the verse in question. During that era, he imparted ‘upadesa’ (baptism) to many people. John was a great ‘gnani (wise person)’ and had foreseen the arrival of Jesus. He baptized Jesus Christ (Bhagavan), the Son of God. He was also the guru of Jesus. Although John was a famous guru and baptized many people at that time, he was humble. Before he baptized Jesus, he showed humility by saying, “the one who comes after me is more powerful than me, whose sandals I am not worthy to carry.” When Jesus approached him for baptism, John acknowledged Jesus’s greater spiritual power, saying, <b>“You should baptize me. Are you coming to me for baptism?”</b> These words were spoken by John when he foresaw about the arrival of the Lord. The verse also contains references to <b>a winnowing tray, wheat,</b> and an <b>unquenchable fire.</b> Some might wonder about the significance of these elements since they appear commonplace. If the wheat is picked up with the winnowing tray and crushed and burned with fire, it becomes bread. We are all looking at the winnowing tray, the wheat, and the fire in the oven. Some may ask what is so great about this sentence. This verse is part of the second divine scripture, and every verse from this scripture conveys divine wisdom. When viewed with wisdom and spiritual insight, this verse holds a special meaning, emphasizing the greatness of Jesus Christ.

  In ancient times, it was customary to place newborn babies on a winnowing tray (basket). As soon as a baby was born, rice would be poured into the winnowing tray, flattened, and the baby laid on it according to the custom. This practice was prevalent across all sections of society, from the poor to the wealthy, from the knowledgeable to the ignorant. The belief was that Brahma, the creator deity, would inscribe the infant’s future, often referred to as <b>‘karma writing’ or ‘Brahma Vrata,’</b> on the baby’s forehead during the two minutes they spent on the winnowing tray. Regardless of personal beliefs, John’s words, particularly in the context of Jesus, hold true. John used an analogy, comparing deeds to wheat. Wheat, as a staple food, sustains life, but it depletes as we consume it. In a similar vein, Jeevatma experiences karma in the form of deeds. As we undergo karmic experiences, the ‘karma’ of our deeds diminishes. Karma writing, also known as forehead writing or God’s judgment, signifies that the karma we experience is inscribed in our body, and our life experiences reflect this inscription. John likened the deeds influenced by our karma to wheat, and the ‘winnowing tray’ was symbolically the head where these deeds were stored. Just as we harvest grains from a winnowing tray to prepare food, our head is described as a ‘winnowing tray’ because it stores the karma we experience.

  Karma is inscribed in a human being’s head without their awareness. As a result, no one can predict the future. Every human is bound by karma and cannot escape its influence. While all humans seem to be mere puppets manipulated by karma, the Holy Spirit or Paramatma remains outside the control of karma. When God chooses to incarnate as a human, He creates His own karma by writing it upon His own head, thus coming to Earth. He possesses no inherent karma but deliberately authors His own destiny to impart wisdom to humanity. Concerning God, who takes charge of His own karma, John expressed, <b>‘His winnowing tray is in His hand.’</b> No one else in the world possesses such control over their karma. In contrast to human limitations, God shapes His own karma and descends as a human being on Earth to share His wisdom. It’s essential to understand that Jesus’ life, from birth to death, was a consequence of self- constructed karma. His birth in a humble barn, his suffering, and his crucifixion were all products of his self-created destiny. No external force could bring about His birth or torment Him without His consent. He determined the course of His earthly existence, indeed holding His own winnowing tray.

  All ordinary people accrue new karma for every deed they perform. Each action on Earth generates new karma. Just as smoke is closely linked to fire, karma is intrinsically associated with deeds. It is a fundamental principle of Prakruti that every action carries karmic consequences. When God incarnates and appears as the Son of God (Bhagavan), every action He undertakes also generates new karma. Ordinary individuals are unable to escape the impending karma. However, Bhagavan Jesus possesses the full fire of wisdom (Gnana Shakti), allowing Him to burn the karma naturally arising from His actions. Christ, the consummate gnani, always has full wisdom power. All karma is consumed in the unquenchable fire of wisdom. Actions are intrinsically connected to karma, much like grains are linked to chaff. John expressed this as, <b>‘He burns the chaff with unquenchable fire,’</b> signifying how Christ eradicates the karma associated with deeds through His wisdom. Jesus purifies Himself from the dust of gunas and incinerates the karma entwined with His actions. John compared Jesus’ body to a threshing floor, symbolizing His removal of the influence of gunas, just as one cleanses a threshing floor. He equated deeds to wheat, the karma originating from those deeds to chaff, and the fire that consumes the karma to an unquenchable fire. John encapsulated the greatness of Jesus in a single sentence, yet, regrettably, we have not fully grasped its significance.

  The verse may appear straightforward, but it contains profound and subtle meanings. The four Gospels are rich in verses with similar depth. Due to my limited wisdom, I haven’t provided explanations for all 66 chapters of the Bible but have focused on descriptions for the crucial four Gospels, rarely touching on other sections.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 5,
verse: `<b>(4) The Gospel of Mathew, 3rd chapter, 16th and 17th verses.</b>`,
meaning: `
<b>
(16) As soon as Jesus was baptized, he went up out of the water. At that moment the sky was opened, and he saw the Spirit of God descending like a dove and alighting on him.
<br><br>
(17) And a voice from the sky said, “This is my Son, whom I love; with him, I am well pleased.”
</b>
`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> John baptized Jesus with water. Baptism is also referred to as ‘upadesa.’ In Telugu, ‘upadesa’ means a country adjacent to your own. In other words, it’s synonymous with a neighboring country. A neighbor resides in a neighboring country. There is a neighboring country within your body, and within that neighboring country of your body resides a neighbor. Every human has a neighboring country and a neighbor, although these entities are not visible in a human being. The Guru reveals the unseen neighboring country during baptism or ‘upadesa.’ John baptized Jesus with water, and there is no fire involved in this ‘upadesa.’ Therefore, it pertains to the name and lacks a neighboring country and neighbor. Nevertheless, the process of ‘upadesa’ must be carried out in this manner. This is why Jesus said in verse 3:15, <b>“Let it be so now; it is proper for us to do this to fulfill all righteousness (wisdom).”</b>

  Although Jesus received upadesa with water, He was aware of the neighboring country within His body. He could see both the visible external world and the invisible neighboring country all the time. Therefore, it was considered genuine upadesa, even though the upadesa given by John pertained only to the name. Jesus was baptized after living thirty years as an ordinary Jeevatma. From that point on, He began to speak about divine matters in the form of wisdom not as a Jeevatma, but as Atma. To demonstrate that Jesus, as Atma, conveyed Paramatma’s wisdom, Atma descended like a dove and landed on him immediately after He emerged from the water following His baptism. Furthermore, Paramatma (the Holy Spirit) declared, <b>“This is my son, whom I love; with him, I am well pleased.”</b> The Holy Spirit (God) affirmed that Atma was His beloved Son, and He expressed His joy in His beloved Son, Jesus. By this, it becomes evident that the Holy Spirit is the Father, and Atma is the Son known as Jesus. All of this indicates that the Holy Spirit (Paramatma) did not appear as Atma but instead lived in this world as an ordinary man, appearing as a Jeevatma. I did not say this to praise Christians or promote Christianity. I am sharing with you what I believe to be the absolute truth about how God manifested on Earth.
</div></div>
</span>`,
},

{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 6,
verse: `<b>(5)	The Gospel of Mathew, 4th chapter, 10th verse.</b> `,
meaning: ` <b>
(10) Jesus said to him, “Away from me, Satan! For it is written: Worship the Lord your God and serve him only.”
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> The word <b>‘Satan’</b> is introduced in this verse. In the preceding verses, Satan is occasionally referred to as a ‘tempter (shodakudu in Telugu)’ and in other instances as a ‘defamer (apavadi in Telugu). ’ The term "apavadi" means one who judges wrongly and tells lies, while "shodakudu" implies someone who seeks out evil within you and, if it exists, brings it to the surface. ‘apavadi’ or ‘shodakudu’ is referred to as Satan in this sentence. Both ‘apavadi’ and ‘shodakudu’ belong to the Telugu language, but the word ‘Satan’ is not from Telugu. The word ‘Satan’ appears frequently in this scripture. In the realm of spiritual education, ‘Satan’ is used interchangeably with <b>‘Maya.</b> ’ Since Satan and Maya are essentially the same, descriptions of Maya can also be applied to Satan.

  In the first divine scripture, Maya refers to the essence of gunas within the head. Concerning Maya, the first divine scripture states, <b>‘Gunamayee mama maaya,’</b> where ‘mama maaya’ means ‘Maya is mine,’ as proclaimed by God. According to this, it is said that Maya is the combination of gunas. God is the creator of all things, including Maya, and thus, God declared that Maya is His own. Maya is of feminine gender, while God and the two souls, Atma and Jeevatma, who separated from God, are masculine (a total of three). Everything else created by God can be said to be feminine. Therefore, Maya is referred to as feminine. We should not consider Maya as being external; rather, the Maya that tempted Jesus was within His own head. Residing in His head, Maya tempted Jesus and engaged in arguments with him. Similarly, the gunas within the head of every person act as their Maya, constantly tempting and debating with them. Following Jesus’ baptism, Maya initially tempted him three times, and Jesus responded with His wisdom on all three occasions.

  Jesus set an example in His life that humans should emulate. Whenever Maya tested Jesus, He responded with wisdom. Therefore, every person should learn to do the same. When Satan asked Jesus to bow down to her, Jesus gave Satan (Maya) a fitting reply. Jesus responded to Satan, saying, <b>“Worship the Lord your God, and serve Him alone.”</b> Jesus uttered these words, but it’s crucial to understand that it was the Atma within His body that spoke those words. The Holy Spirit, Paramatma, doesn’t communicate directly with anyone. Instead, He conveys His wisdom through the Atma. So, we should recognize that the wisdom was imparted by Paramatma Himself, even though it was expressed by Atma within the body. In the third and final divine scripture, in 3:7, God states, “God’s wisdom is not known to any person except God.” This emphasizes that the complete wisdom revealed by the Atma within the body is conveyed by Paramatma (God).

  There are twelve major religions in the world today, and Hinduism is unique in that it encompasses all devatas not present in other religions. God created both devatas and human beings. However, humans have forsaken God and turned to the worship of devatas, without fully understanding God’s wisdom. This choice underscores that humans did not prioritize God’s teachings as found in their scriptures. Those who abandon God and worship devatas can be seen as being under the influence of Maya, heeding the words of Maya. In the grand scheme, there are essentially two sides: God’s side and Maya’s side. However, in some religions, people exclusively worship God without turning to other devatas. It’s primarily within Hinduism that worship of multiple devatas, apart from God, is more common. Consequently, it becomes evident that those who worship devatas are aligning themselves with Maya’s influence.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 7,
verse: ` <b>(6)	The Gospel of Mathew, 5th chapter, 10th verse.</b>`,
meaning: `<b>
(10) Blessed are those who are persecuted because of righteousness (wisdom), for theirs is the kingdom of paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> The verse includes the word ‘righteousness,’ but it should be <b>‘wisdom’ instead of ‘righteousness.’</b> In the Hebrew language, Jesus likely used the word ‘wisdom.’ However, when translated into English, the word equivalent to the Hebrew term was not accurately represented, and ‘righteousness’ was used instead of ‘wisdom.’ It’s essential to distinguish between ‘righteousness’ and ‘wisdom.<b>’ Righteousness and justice are concepts related to worldly matters, while wisdom and dharma are of a divine nature.</b> Righteousness and justice are associated with karma, while wisdom and dharma have the power to burn karma. This distinction underscores that righteousness pertains to the material realm, while wisdom is of a divine nature. In the world, we encounter righteousness, corruption, justice, and injustice. Righteousness leads to punya (good karma), whereas corruption results in sin. Similarly, justice yields punya, while injustice gives rise to sin. In light of these differences, it’s clear that the verse in question should use ‘wisdom’ in place of ‘righteousness.’

  Those who face persecution for their pursuit of wisdom and those who endure hardships on the path of wisdom can be considered blessed. This is because, through their suffering for the sake of wisdom, they can attain moksham, which signifies liberation from the bondage of karma. When a person achieves moksham, they transcend this worldly existence and enter a different state beyond the world. Such an individual is said to have entered paraloka, which is a state devoid of worldly experiences. It’s important to note that not everyone’s journey toward wisdom involves persecution or violence. Some individuals will acquire wisdom and attain moksham (paraloka) without any obstacles.
</dv></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 8,
verse: ` <b>(7)	The Gospel of Mathew, 5th chapter, 17th verse.</b> `,
meaning: ` <b>
(17)Do not think that I have come to abolish the Law (Dharma Shastra) or the Prophets; I have not come to abolish them but to fulfill them.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> No one can condemn the Dharma Shastra. It cannot be condemned. It has been in existence since the dawn of creation, with numerous prophets and teachers imparting its wisdom. When Paramatma (the Supreme Being) descends to Earth as Bhagavan, He not only practices the Dharma Shastra but also makes its principles understandable to all. However, when Bhagavan, as the Son of God, reveals and practices the dharmas outlined in the Dharma Shastra, they may not appear as dharmas to some individuals. This discrepancy arises from the fact that some people mistakenly believe adharmas to be dharmas. Consequently, the true dharmas may seem like adharmas when Bhagavan imparts His teachings. This is why Jesus stated in the verse above, <b>‘Do not think that I have come to abolish the Law (Dharma Shastra) but to fulfill it.’</b>

  People in the world have fallen into the influence of Maya (Satan) and have come to believe that adharmas are dharmas. Consequently, they engage in various forms of worship, thinking it to be sincere devotion. Maya has redirected people’s understanding of God towards itself, leading them to believe they are progressing towards God. In this process, it steers them to practice adharmas rather than dharmas, effectively leading them in the opposite direction of God. In such a state, even when God incarnates as a human and practices the true dharmas, those actions may appear misleading to those influenced by Maya. People may mistakenly think that what they are doing is the true dharma and that they are genuine believers. They might accuse God who has come as a human of following adharmas and may even label Him as a blasphemer. When the real God came to Earth as Jesus, what He said and practiced were indeed dharmas. However, these dharmas appeared to contradict the teachings of scholars, swamis, and gurus. This discrepancy is why the chief priests, scribes, and Caiaphas opposed and denounced Jesus. Hence, Jesus emphasized in the verse, <b>“I have not come to abolish them but to fulfill them.”</b>
</div></div>
</span>  `
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 1,
pageNumber: 9,
verse: ` <b>(8)	The Gospel of Mathew, 5th chapter, 18th verse.</b>`,
meaning: `<b>(18) For truly I tell you, until sky and earth disappear, not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law (Dharma Shastra) until everything is accomplished.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In this verse, the term <strong>&lsquo;Dharma Shastra&rsquo;</strong> is unique, and some may wonder what it means. To address such inquiries, it&rsquo;s essential to understand the concept of shastra (science), the various types of sciences, and the distinctiveness of Dharma Shastra within the field of sciences. First, if we grasp the meaning of the word <strong>&lsquo;shastra&rsquo;</strong>, we will understand shastra to some extent. The word &lsquo;shastra&rsquo; is derived from the Telugu word &lsquo;<strong>shasanam</strong>, &rsquo; which conveys the idea of <strong>&lsquo;must be enforced.&rsquo;</strong> Consequently, &lsquo;shastra&rsquo; implies <strong>&lsquo;whatever is stated must come to pass.&rsquo;</strong> Additionally, the term &lsquo;<strong>shapam</strong>&rsquo; is derived from &lsquo;shastra,&rsquo; and it signifies<strong> &lsquo;must be executed.&rsquo;</strong> Thus, all three words - <strong>shasanam&rsquo; (statute), &rsquo;shapam&rsquo; (curse), and &rsquo;shastra&rsquo; (science)</strong> share the same underlying meaning. Shastra is typically categorized into six distinct areas of study. Some may argue that the six sciences can be grouped into two kinds, while others propose three categories. Broadly speaking, shastras can be considered two types. In other words, we can describe shastras as threefold. If we categorize them as two types, one set is related to worldly matters, and the other pertains to matters related to Paramatma (the Supreme Being). In the threefold classification, four shastras are associated with worldly concerns, one relates solely to Paramatma, and other falls into the category of being partially related to Paramatma and partially related to worldly matters.

The six shastras are as follows: 1) Mathematics, 2) Astronomy, 3) Chemistry, 4) Physics, 5) Astrology, and 6) Brahma Vidya. Of these, the first four are concerned with worldly matters, while the fifth, Astrology, has connections with both worldly concerns and the divine. Alternatively, if Astrology is also considered within the category of worldly shastras, the first five shastras are classified as worldly, while Brahma Vidya Shastra remains as the sole science related to the Divine. There are a total of six sciences, with Brahma Vidya being the most significant. This is why it is known as the Brahma Vidya shastra, with ‘Brahma’ signifying greatness. ‘Brahma’ is not a name, but a term used to denote God’s greatest and supreme nature. <b>As it is a science dedicated to the understanding of God, it is appropriately named the Brahma Vidya shastra.</b> Given that Brahma Vidya pertains to the science of God, it carries the ‘vidya’ designation. The other five worldly sciences, namely Mathematics, Astronomy, Chemistry, Physics, and Astrology, lack the <b>‘vidya’</b> suffix in their names. The term ‘vidya’ is reserved for the science related to God. Some may wonder about the reason for this distinction, and the answer is as follows.

  Sciences can be divided into two types: worldly-related and Paramatma-related. The five material sciences can be fully comprehended by anyone. However, Brahma Vidya, the greatest of all, which reveals God’s dharmas, is the only one that includes the term ‘vidya’ in its name, earning it the title of the greatest Vidya shastra. The word ‘vidya’ (education) originates from the sound <b>‘vith,</b> ’ which means knowing. Vidya implies knowledge that should be acquired. A ‘vidyarthi’ (student) is someone who seeks knowledge, asking for something they do not yet possess and acquiring it from those who possess the knowledge. Students acquire essential education from knowledgeable teachers. Vidya refers to knowledge that can be known but not fully comprehended. In a similar manner, no one can claim to fully understand the subject of God. No one can assert that they possess complete knowledge of God. Learning about God is a lifelong pursuit, and people continue to gain understanding throughout their lives. There is no one who can say that this is the limit and that they know everything. Humans will always continue to learn about the matter of God, but will never know it fully. Therefore, the science of God is always referred to as Vidya shastra, and it is perpetually the Brahma Vidya shastra. In contrast, one can fully grasp the other five sciences, leaving nothing more to be known. As a result, the term ‘vidya’ is not added to their names.

  The one who possesses complete knowledge of God (the Brahma) can share this wisdom with others. If an individual lacks knowledge of God’s wisdom, who else can confidently convey it? Our response to this question is as follows: Only God himself fully knows His own wisdom. Consequently, God must personally convey His wisdom. However, God does not communicate directly with anyone. Instead, God, while not appearing as God, imparts His wisdom by taking on the form of a man. It is important to note that while God may come in a human-like form, He is not a human being. In the guise of a man, God has revealed His wisdom in its entirety, presenting it as a science with prescribed principles and ordinances. Therefore, what God has revealed is referred to as the Brahma Vidya shastra. God Himself communicated the Brahma Vidya shastra, and it is incumbent upon humanity to comprehend it. When a person gains full understanding of the Brahma Vidya, they are liberated from karma and can unite with God. Consequently, individuals must persist in acquiring knowledge of God’s science until they attain moksham (liberation). Therefore, it is aptly named Brahma Vidya, as it is the highest form of education in the world.

  God’s dharmas are articulated in the Brahma Vidya shastra, which is why it is referred to as the Dharma Shastra in the divine scriptures. God initially revealed His shastra with ordinances at the very dawn of creation. Subsequently, three divine scriptures emerged at different times and in distinct locations. These three divine scriptures can be regarded as the three Dharma Shastras, all of which exclusively contain dharmas. Consequently, all three Dharma Shastras share the same principles and are rooted in God’s dharmas. They are unified in their adherence to the Brahma Vidya and teach God’s dharmas. As a result, the three Dharma Shastras mutually corroborate with one another and do not contradict each other. <b>The first divine scripture is known as the Bhagavad-Gita, the second divine scripture is named the Bible, and the third divine scripture (the final divine scripture) is called the Quran.</b> While these three scriptures bear different names, they convey the dharmas of the same God.

  Following the Brahma Vidya shastra, three prophets conveyed God’s wisdom, which subsequently became three distinct divine scriptures. Although these three divine scriptures are separate, they all expound on the same God’s dharmas from three different perspectives. Since the dharmas presented within these scriptures are based on science, they will be realized exactly as they have been stated, as affirmed in the verse <b>‘until sky and earth disappear.’</b> The outer world’s Sky and Earth are eternal, as God has made them so. However, the invisible counterparts of Earth and Sky within the human body are entirely perishable. Hence, the phrase ‘until sky and earth disappear’ must be understood as ‘until the human body dies (disappears).’ When an individual seeks God’s wisdom, they must adhere to all of God’s commandments (dharmas). Without wholeheartedly practicing God’s dharmas, one cannot attain paraloka. As outlined in the Dharma Shastra, moksham (liberation) can only be achieved when all the dharmas have been fulfilled. Even if a person does not practice even a little of what is outlined in the Dharma Shastra, they will not attain moksham. Instead of merely suggesting, <b>‘even if a little thing is not followed from the prescribed dharmas,’</b> it is expressed <b>as ‘not the smallest letter, not the least stroke of a pen.’</b> Therefore, it is crucial to follow every aspect of the Dharma Shastra without leaving anything overlooked. It is important to know that the letter and stroke of a pen mentioned are not related to the writing in the book.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 10,
verse: ` <b>(9)	The Gospel of Mathew, 5th chapter, 19th verse.</b>`,
meaning: `<b>
(19) Therefore, anyone who sets aside one of the least of these commands and teaches others accordingly will be called least in the kingdom of paraloka, but whoever practices and teaches these commands will be called great in the kingdom of paraloka. </b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> While there are some fundamental dharmas outlined in the Dharma Shastra, many are interconnected with them. God’s dharmas are also referred to as <b>commandments.</b> There are primarily <b>two</b> most essential of God’s commandments, but several others are connected to them. Anyone who transgresses even the tiniest of these connected commandments and imparts such teachings is acting against righteousness. A person should not transgress any of the dharmas, whether they are minor or significant, as instructed by God. Every single dharma, no matter how small, should be diligently practiced without exception. However, some individuals, instead of adhering to even the smallest dharmas, have strayed from the path of dharmas. They have not only embraced adharmas but also spread such teachings. Despite being regarded as Gurus by society, they have failed to comprehend God’s commandments correctly. Regrettably, they have misconstrued God’s dharmas as adharmas and have become proponents of adharmas. They misguide people by imparting such teachings, asserting that they are imparting true wisdom and the genuine commandments of God. Even though they may be esteemed as great Gurus in the eyes of the world, in God’s eyes, they are considered the least.

  Those who grasp the dharmas accurately impart them as dharmas to those interested, even if they are not well-known Gurus. Some individuals misinterpret God’s dharmas as adharmas and, in turn, teach these adharmas. Consequently, those who teach adharmas cannot attain the kingdom of paraloka. The ignorant will never attain the kingdom of paraloka, as it remains permanently closed to them, deeming them unworthy. Even if someone who comprehends God’s commandments from the scriptures is not considered a Guru, they will attain a significant place in paraloka when they teach the dharmas they know. Such an individual is not just known as a follower of dharmas but also holds high regard in God’s eyes. A true dharma follower is one who meticulously imparts even the smallest of God’s dharmas in great detail.
</div></div>

</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 1,
pageNumber: 11,
verse: `<b>(10)	The Gospel of Mathew, 5th chapter, 20th verse.</b> `,
meaning: ` <b>
      (20) For I tell you that unless your righteousness surpasses that of the Pharisees and the teachers of the law, you will certainly not enter the kingdom of paraloka.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In the world, there are many Pharisees, devotees, and teachers. It is essential to possess a greater depth of wisdom than they do. God has stated that those who possess less wisdom than Pharisees, devotees, and teachers cannot enter paraloka. As the verse suggests, when you possess more wisdom than Swamis and Pharisees, who engage in yajnas (ritual sacrifices) and act contrary to what God has instructed, you will easily attain paraloka.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 12,
verse: `<b>(11)	The Gospel of Mathew, 5th chapter, 28th verse.</b> `,
meaning: `<b>
(28) But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart. </b>     `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Human actions can be categorized into two distinct approaches: external actions that are observable and internal actions that occur within a person's thoughts and feelings. Both of these dimensions are present in every individual. In one approach, a person engages in actions related to their gunas with internal thoughts and emotions. In the other approach, the same actions are performed through the interaction of gunas and the physical body. The consequences of these actions result in either punya (good karma) or sin (bad karma). It is important to note that there are two types of actions: physical (visible) and non-physical (invisible). <b>When evaluating a person’s character, society often relies on their observable physical actions to determine whether they are considered good or bad. However, it becomes more challenging to make such judgments when a person’s actions are internal, involving thoughts and emotions, as they are not readily discernible.</b> It is difficult to ascertain whether a person is good or bad when we are unaware of their actions.

  A person’s <b>aham</b> (the ego or sense of self), whether present in their physical actions or non-physical thoughts, plays a crucial role in the generation of karma. Sin or punya karma is received by an individual due to the presence of aham in their body. While the external organs of the body are involved in physical actions, it is the functioning of aham that influences the karmic outcome of those actions. Even when a person does not physically engage in an action, their aham, located next to buddhi (intellect), attaches karma based on what aham senses in the thoughts of buddhi when contemplation is undertaken with the influence of gunas. If aham is not active, a person will not accumulate karma, even if they are involved in physical or non-physical work. This concept is reflected in the first divine scripture, specifically in the 17th verse of Moksha Sanyasa Yoga, which states, <b>“Although a person eliminates all beings in the world without the presence of aham in their feelings, they will not incur sin for the act of killing, and they will not be considered a murderer.”</b> This emphasizes the importance of aham in determining the moral consequences of one’s actions. Jesus also conveyed a similar message when He said, <b>‘You will incur sin through your thoughts because of aham, even if you haven’t physically carried out the action.’</b> This reveals the unity in the teachings of both the first and second divine scriptures, as well as the consistency of the wisdom conveyed. A person’s actions performed without aham are considered as if they were not done, and thoughts that involve aham are treated as if the action was executed. Hence, the presence of aham within the body influences the accumulation of punya and sin by the Jeevatma. Consequently, it was stated from the outset of creation that ‘performing actions without aham is Karma Yogam,’ a concept reiterated in both the first and second divine scriptures.
</div></div>
</span>`
    },
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 13,
verse: `<b>(12)	The Gospel of Mathew, 5th chapter, 29th and 30th verses.</b>`,
meaning: ` <b>
(29) If your right eye causes you to stumble, gouge it out and throw it away. It is better for you to lose one part of your body than for your whole body to be thrown into hell.
<br><br>
(30) And if your right hand causes you to stumble, cut it off and throw it away. It is better for you to lose one part of your body than for your whole body to go into hell.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> Verse 29 mentions <b>‘eye,’</b> and verse 30 mentions <b>‘hand.’</b> Upon closer examination, it becomes apparent that the human body consists of two types of body parts: physical or visible and non-physical or subtle. There are a total of ten (10) physical body parts and fifteen (15) subtle body parts, bringing the combined count to 25, including Jeevatma. Each body part corresponds to a distinct function within the body. The human body possesses five gnanendriyas (sensory organs) and five karmendriyas (motor organs). These two sets of organs collectively enable physical actions. The gnanendriyas, which include the eye, ear, nose, tongue, and skin, serve as receptors that transmit external information to the inner faculties. Similarly, there are five karmendriyas- hands, legs, mouth, anus, and sexual organ. The manas (mind) then conveys this information from the senses to the buddhi (intellect). While the gnanendriyas serve to transmit external information from the surroundings into the internal faculties, the inner buddhi conveys instructions through the manas to the karmendriyas, which subsequently carry out the actions as directed by the buddhi.

  Humans perform actions coordinated by the interplay of gnanendriyas (sensory organs) and karmendriyas (motor organs). Notably, the <b>eye</b> among the gnanendriyas and the <b>hand</b> among the karmendriyas hold particular importance, which is why both are mentioned in these verses. Even if the buddhi (intellect) does not direct the karmendriyas to carry out a task, sin can still be attributed to a person based on the thoughts of the buddhi when aham (ego), closely connected to the buddhi, is active. This underscores the pivotal role of the eye in potential sin. For example, when a person gazes at a woman with lustful thoughts, they may incur sin due to the influence of aham, even if they haven’t physically harmed the other person. The eye, in this manner, creates the possibility of attaching sin to an individual for actions that may never occur in the physical realm. Therefore, the verse advises us to ‘gouge the eye out and throw it away.’ However, it’s essential to note that this should not be taken literally, as physically removing one’s eye is not the intended meaning of the verse. The verse specifically mentions ‘your right eye,’ but it’s important to understand that both the right and left eye are capable of leading to similar outcomes. Sin can arise from both eyes. The mention of the right eye alone prompts contemplation about the reason behind this distinction.

</div></div>

<div class="container" style="color:black;font-size: 11px;">
          <img src="assets/img/gnanendriyalu.png"  style="width:100%;">
          <div class="io-jeeva">
            Jeeva
          </div>
          <div class="io-mind">
            Mind
          </div>
          <div class="io-chittam">
            Chittam
          </div>
          <div class="io-intellect">
            Intellect
          </div>
          <div class="io-ego">
            Ego
          </div>
          <div class="so-eye">
            Eye
          </div>
          <div class="so-nose">
            Nose
          </div>
          <div class="so-ear">
            Ear
          </div>
          <div class="so-tongue">
            Tongue
          </div>
          <div class="so-skin">
            Skin
          </div>
          <div class="ao-hands">
            Hands
          </div>
          <div class="ao-legs">
            Legs
          </div>
          <div class="ao-mouth">
            Mouth
          </div>
          <div class="ao-anus">
            Anus
          </div>
          <div class="ao-sex-organ">
            Sex Organ
          </div>
        </div>

  The human body naturally exhibits differences between its right and left sides, often associated with strength and weakness. In the mentioned verse, both right-side body parts, namely the right eye and right hand, are specified. Another essential point to consider in this verse is the statement, <b>“It is better for you to lose one part of your body than for your whole body to be thrown into hell.”</b> It's crucial to recognize that neither the eye nor the hand, as external body parts, are the direct sources of sin. The primary driver of sin is the presence of aham (ego) within the body. This perspective aligns with the teachings found in both the first and second divine scriptures. Hence, it becomes evident that external bodily components have no direct involvement in the acquisition or experience of sin. <b>It is the feeling of aham within the body that brings sin. The Jeeva residing in the body experiences the sin.</b> The responsibility for karma acquisition lies with the feeling of aham, and it is the duty of Jeeva to experience the repercussions of karma. Therefore, the external eye (gnanendriya) and hand (karmendriya) function without regard to karma.

  Some may wonder why Jesus advised gouging out the eye and cutting off the hand when they are unrelated to karma. Our response is that when the eye transmits external information, it reaches the buddhi (intellect). Subsequently, the buddhi processes this information in accordance with the gunas. However, if the <b>aham (ego) is suppressed and disengaged</b> from these sensory inputs, it prevents sin and punya from manifesting in the gunas that the buddhi processes or in the sight perceived by the eye. By dissociating the inner aham from the information provided by the eye, one can effectively prevent the sin associated with the eye, akin to removing the eye itself. Similarly, when the aham is not connected to what is heard, it’s as if the ear were removed. It’s essential to recognize that sin and punya originate not only from the eyes but also from the other four senses. Given the critical role of the eye among the gnanendriyas and the natural predominance of the right eye in visual perception, Jesus emphasized ‘gouge the right eye out’ in the verse. While the verse may seem straightforward, its subtle significance should be understood.

  Likewise, the mention of the right hand among the karmendriyas carries significance. Karma does not solely emanate from the right hand but also from the actions performed by other karmendriyas. Karma occurs even when the gnanendriyas do not engage in physical tasks and is generated through the functioning of the karmendriyas. When referring to the five gnanendriyas, we group the two eyes as one entity, just as both ears are counted as one. Although there are two nostrils, they are collectively treated as one nose. The remaining components consist of the skin and the tongue. Similarly, in the karmendriyas, the two hands are considered as one, and the same applies to the two legs. The remaining three are the mouth, the anus, and the sexual organ and are not in pairs. Given that the right eye and right hand are comparatively more dominant in these paired organs, the verse singles out the right eye and right hand. The right eye possesses superior vision, and the right hand is more versatile in executing tasks. In a subtler interpretation of the verse, Jesus told us to <b>suppress aham to prevent sin arising from the sight of the eye and the actions of the hand.</b> However, it’s crucial to grasp that eliminating the right eye or right hand does not halt the inflow of karma, as other bodily organs can also give rise to karma. This verse underscores the idea that aham is the fundamental source of sin, emphasizing the need to control it. The body’s organs do not generate sin, nor do the body bear the burden of sin. Instead, it’s the aham that accumulates sin within the body. Moreover, Jeevatma, a component of the body, experiences bad and good karma. The body encompasses five gnanendriyas, five karmendriyas, five vayus, five tanmatras, and five antahkaranas, with the Jeevatma being part of the antahkaranas. This sums up to a total of twenty-five components, including the Jeevatma within the body’s framework. In essence, a profound understanding of the body’s mechanisms can lead to a deeper comprehension of Jesus’ verses. A true gnani recognizes this intricate composition of the body. As a spiritualist once poetically conveyed, anyone lacking such knowledge should not be deemed a gnani.

        <i>
      Panchatatvamulanu panchikarinchaka
      Manchi yatulamanna maatalanna
      Kunchamandu gajamu gruddupettina chandambu
      Akhila jivasanga aatmalinga.
  </i>
<b>Meaning: -</b> The term sankhya refers to the comprehensive knowledge of Pancha Bhutas, which include Sky, Air, Fire, Water, and Earth. This knowledge encompasses the understanding of how each of these elements was created, how they were divided into five distinct components, and how these twenty-five parts collectively form the various organs and components of the body, both visible and invisible. Assuming oneself to be a gnani (a knower or enlightened individual) without possessing a deep understanding of the Sankhya of the body is akin to making a false claim. It’s tantamount to asserting that an elephant laid an egg beneath a basket. In reality, even if an elephant were to be securely tethered with chains and placed beneath a basket, it would not lay eggs. Therefore, the assertion that an elephant laid eggs beneath a basket is entirely baseless. In a similar vein, it is erroneous for an individual to declare themselves a gnani when they lack knowledge of the intricate details concerning the body's organs. True wisdom requires a profound understanding of the body’s composition, including its visible and invisible parts.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 14,
verse: `  <b>(13)	The Gospel of Mathew, 6th chapter, 3rd and 4th verses.</b>`,
meaning: ` <b>
(3) But when you do dharma, do not let your left hand know what your right hand is doing.
<br><br>
(4) So that your giving may be in secret. Then your father, who sees what is done secretly, will reward you.
</b>`,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Many preachers have misinterpreted this verse, suggesting that it pertains to donation. In certain places of worship, it is even suggested that the money given for God’s service should be so discreet that “the right hand should not know what the left hand is doing.” As a result, contributions are often hidden or wrapped in one's hand before being donated. However, it is important to clarify that this verse is not about donation; it is about dharma. There is a significant difference between dharma and donation. <b>Donation involves giving to others, while dharma refers to the principles one practices.</b> To truly understand how to practice dharma, it is essential to comprehend what these dharmas entail. In this verse, there is no mention of donation; rather, it emphasizes dharma. God’s dharmas are primarily two, as outlined in the divine scripture. The third one is physical. There are also other dharmas that are interconnected with these three primary ones. To reach God, a person primarily needs to focus on these three essential dharmas, while other dharmas revolve around aspects of God. These three core dharmas are the key practices for attaining God.

  The three dharmas, Brahma, Karma, and Bhakti Yoga, are necessary to reach God. Two of them involve internal practice with feelings or thoughts, while one involves external practice. The practice of the first two dharmas is not recognizable by others. However, when it comes to the third dharma, there is a possibility of it being noticed b others. This is why, in the verse, Jesus refers to a singular ‘dharma’ rather than ‘dharmas.’ He emphasizes that one should practice a dharma that might be noticed by others with caution and in secret. He conveys this by saying, <b>“do not let your left hand know what your right hand is doing.”</b> The underlying message is that when others observe your dharma practice, they might misinterpret it or become influenced negatively. Hence, Jesus advises that when practicing dharma, it should be done discreetly and without seeking recognition from others.
</div></div>
</span>`
},
{
  chapterName: "L'Évangile selon Matthieu",
  chapterNumber: 2,
  pageNumber: 15,
  verse: `  <b>(14)	The Gospel of Mathew, 6th chapter, 6th verse.</b> `,
  meaning: `<b>
  (6) But when you pray, go into your room, close the door, and pray to your Father, who is unseen. Then your father, who sees what is done secretly, will reward you.</b>`,
  pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When praying to God, it is essential to ensure that your prayers are filled with dharma. Mere verbal expressions without dharma do not constitute genuine prayer and won’t connect you with God. Therefore, when engaging in prayer that may be observed by others, Jesus told to go into a private room, close the door, and offer your prayers to the inner Atma, the divine presence within you. Atma, who is in the body, is the father of humans. A prayer that may be known to others should be conducted in such a way that no one is aware of it. By doing so, Atma, who is secretly in the body, shall reward you. In the first divine scripture, this practice is referred to as <b>‘Brahma (Great) Yogam.’</b>
</div></div>
  </span>`
    },
    {
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 16,
verse: `  <b>(15)	The Gospel of Mathew, 6th chapter, 7th and 8th verses. </b> `,
meaning: `  <b>
(7) When you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words.
<br><br>
(8) Do not be like them, for your father knows what you need before you ask him.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Many people in society today pray with futile words rather than <b>‘Yogam,’</b> which adheres to dharma in reaching God. They assume that God will fulfill their desires if they use many words. Their intention is not to unite with God, but rather to seek worldly desires and benefits. However, you should not pray like them. Your father, Atma, already knows everything even before you ask. He knows what should or should not be granted to you. Therefore, it is of no use to inquire about material benefits. Your Father, Atma, guides you according to your karma. Hence, Atma provides you with what you have earned through your past karma. Whether you ask or not, Atma bestows everything according to karma. Atma is the Father of all humans, and the Holy Spirit, the Father of Atma, is the witness to all things.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 17,
verse: ` <b>(16)	The Gospel of Mathew, 7th chapter, 13th and 14th verses.</b> `,
meaning: `<b>
(13) Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it.
<br><br>
(14) But small is the gate and narrow the road that leads to life, and only a few find it.
</b> `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  There are two paths in this world: one is the path of Paramatma (The Holy Spirit), and the other is the path of Maya. While there are very few who seek God, many are drawn to the vast path of Maya. The gateway to moksham is narrow and challenging to traverse. God’s path is likewise narrow, and only a few manage to discover it.

  The verse mentions God’s gate (entrance) and the road. The first is the entrance, and the next is the path. There are only two roads for all human beings. One is narrow, and the other is wide. The gate to the narrow road is narrow, and the entrance to the broad road is wide. The entrance and the path must be a few times larger than the one who enters. Then it is only possible to enter the gate and the road. The narrow gate’s size and the narrow path’s width equal the size of the person who enters. But in the second choice, the wide gate’s size and the width of the broad road are 108 times bigger than the person who enters. In this way, there are only two paths in this world—one with a gate 108 times wider and a broad road, and the other with a gate and path of exact size. The Lord compared these two types of gates and paths to wisdom and ignorance. The path of wisdom is very narrow, and the entrance size is limited, making it challenging to walk. The ignorant path is 108 times larger and is free from hindrances. The path of wisdom is narrow and has obstacles, but its destination is Paramatma. Even though there are no obstacles on the wide gate and the broad ignorant path, it leads to Satan. Paramatma’s path is without birth and death, without destruction, and is always in a state of no change. Satan’s path has birth, death, and destruction and is always in a state of change. Although the path of Paramatma is far superior, and Satan’s way is the worst, most people choose to walk on Satan’s road. When a person enters Satan’s path, all their associates support them and do not cause any trouble. There will be no financial difficulties, and life will feel comfortable. However, when a person chooses the path of wisdom, their relatives and spouses may become enemies and obstruct their journey. Life may become challenging. Hence, very few, if any, among the millions choose the path of wisdom.

  Many people are journeying along the vast, ignorant path, which presents no hindrance or opposition. Surprisingly, they remain oblivious to the existence of a narrow passage leading to moksham and the Father of the paraloka. In the Bhagavad-Gita, Krishna states that not even one among thousands wishes to traverse the narrow path. Rarely does someone enter it, and even rarer is reaching the destination due to obstacles posed by Maya. Krishna, in the Bhagavad-Gita, further emphasizes that the person who overcomes these obstacles and reaches the destination is considered ‘the blessed one,’ and such an individual will unite with the eternal Paramatma. Both Krishna and Jesus represent the Paramatma. Krishna elucidated the paths of wisdom and ignorance in the Bhagavad-Gita towards the end of Dvapara Yuga, while Jesus conveyed a similar message in the holy text, three thousand years into Kali Yuga. Those who comprehend the paths of wisdom and ignorance as explained by Sri Krishna and Jesus Christ should embark on the suggested path of wisdom, persisting despite all obstacles, until they ultimately reach Paramatma, which is eternal moksham.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 18,
verse: ` <b>(17)	The Gospel of Mathew, 7th chapter, 7th and 8th verses.</b>
`,
meaning: `
<b>
(7) Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.<br><br>
(8) For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.
</b> `,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> In this verse, three essential verbs—<b>ask, seek, and knock.</b> Jesus instructed us to perform these three things in a spiritual context. The Lord’s teachings do not revolve around worldly matters, unlike many others. Unfortunately, many have misunderstood this verse, interpreting it as a call for material blessings. Consequently, people began requesting earthly favors from the Lord, contrary to His original message. Even though people read the Holy Bible, Satan has entered their hearts, clouding their understanding of Jesus’s teachings and leading them to seek material desires. Man’s intent is not to transgress God’s word, but Satan capitalizes on their lack of comprehension, deceiving them into thinking they are not violating divine commandments. In reality, this leads them to transgress God’s word. Satan, a creation of God, exists wherever God’s presence is felt. Wherever God’s word abides, the influence of Satan may also be present. Therefore, it is crucial to diligently comprehend God’s verses and safeguard ourselves against the influence of Satan when interpreting the scripture.

  We should ask God, seek God, and knock on God’s door. This is the way of God. If you ask for something else or seek something else, it will be the way of Satan (Maya). Those who follow God’s path seek God’s wisdom. You may have many questions: How is God? How can we reach God? How can we understand all the details about God? Do not assume that no one on Earth can answer these questions. God comes and provides the answers you seek when humans on Earth are unable to access God’s information due to the influence of Satan. You can find answers to your questions, but you may not recognize who provides these answers. Even when God is born on Earth and offers answers, we often perceive Him as a regular human being rather than God. If you ask, you will gain complete wisdom. If you search, you will discover that God has come to Earth in human form. When God incarnates on Earth, He does not claim to be God and does not reveal Himself to anyone. This is His rule. According to this rule, those who do not seek will not find, but the seekers will recognize Him. Since only a few asked wisdom when the Lord Jesus was on Earth, He shared His wisdom with them. Because there were so few seekers, He did not appear as God to anyone; to all, He seemed like an ordinary man. His twelve disciples, too, perceived Him as a preacher and were unaware that Paramatma, who encompassed the entire universe, had incarnated as Jesus. He intentionally behaved in a manner that prevented anyone from recognizing Him as God.

  The King of Paraloka, Paramatma, washed the feet of His disciples during His time on Earth as a man. This humble act made it challenging for His disciples and others to recognize Him. Regrettably, people failed to identify Him as the Lord and treated Him disrespectfully, regarding Him as an ordinary man. He endured spitting on His face, a crown of thorns on His head, beatings, and crucifixion. Even when Jesus died and rose again with the same body on the third day, some of His disciples mistook Him for a devil. This highlights that His disciples were inquisitive but not truly seeking. As the saying goes, <b>"seeing is greater than listening,"</b> those who witnessed Him in person held a higher status than those who merely heard His teachings. While people had the opportunity to see the God of the entire world in the form of Jesus, it was as if they hadn’t truly seen Him. In this context, the Lord described His disciples as blind, despite having physical sight. To avoid such blindness, one should actively seek God. As the verse suggests, everyone who asks receives, and everyone who seeks finds. Therefore, the asker receives God’s words, the seeker gets God’s form. The one who sees is greater than the one who listens and the one who experiences is greater than the one who sees. Based on this principle, the one who knocks gains access to the realm of moksham. Knocking, in this context, isn’t about knocking on a neighbor’s or a stranger’s door but rather about seeking entry into the kingdom of moksham and the gates of the kingdom of Paraloka. Those who seek moksham unite with Paramatma and experience His true essence. Those accustomed to asking and seeking should definitely try to unite with God. That means they will definitely become a knocker. Through the processes of asking, seeking, and knocking, anyone can come into union with God. Thus, these three essential qualities should be cultivated by every individual, as outlined in the aforementioned verse. Following God’s guidance, the asker gains wisdom, the seeker finds Bhagavan, and the one who knocks gains access to the house of moksham.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 19,
verse: `<b>(18)	The Gospel of Mathew, 7th chapter, 15th verse.</b>`,
meaning: ` <b>
(15) Watch out for false prophets. They come to you in sheep’s clothing, but inwardly they are ferocious wolves.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Human beings require guidance to find their path to God, and this guidance often comes from others. To walk in God’s path, a person must place their trust in another. Those who follow this spiritual path rely on their guides to show them the way. The follower’s journey depends on the guide, as they must follow the path the guide illuminates. This makes the follower reliant on the guide, and if the guide provides the correct direction, the follower will progress correctly. Conversely, if the guide offers the wrong direction, the follower may stray from the path. The ultimate destination of an ordinary person is strongly influenced by the chosen guide or guru. Once a person is recognized as a guru, individuals tend to believe and trust their guidance throughout their lives. Therefore, great care should be exercised when selecting someone as your guru or guide. In the verse mentioned above, the Lord warned, <b>‘Beware of false prophets.’</b> He cautioned that some contemporary gurus may not be genuine guides. They may present themselves in sheep’s clothing, pretending to be genuine gurus, but in reality, they are like ferocious wolves in disguise. According to the teachings of Jesus, many individuals may dress and act like gurus, even using words such as God, wisdom, and Atma in their discourse. However, their true nature may not lead you closer to God. Just as a wolf concealed under sheep’s skin is not a sheep, these individuals, despite their appearance, are not genuine gurus. Therefore, the Lord’s advice is to be vigilant and cautious about false prophets to avoid wasting one’s life by following those who do not offer true guidance.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 20,
verse: `<b>(19)	The Gospel of Mathew, 7th chapter, 21st verse.</b>`,
meaning: ` <b>
(21) Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of paraloka, but only the one who does the will of my Father who is in paraloka. </b>
`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Lord Jesus emanated from Paramatma. Jesus is Bhagavan incarnate in human form, whereas Paramatma, the Father of Paraloka, is God in a formless state, omnipresent throughout the entire universe. When Bhagavan, embodied as Jesus, walked the Earth, some recognized His divine magnificence and revered Him for their material desires. They addressed Him as ‘Lord, Lord,’ seeking personal gains. However, approaching the visible form of the Lord and calling Him great without attaining divine wisdom is insufficient. Although the one in a visible form and the one in an invisible form are the same, there are inherent limitations to the visible form, whereas the invisible Father of Paraloka is limitless. The boundless Paramatma occasionally assumes a tangible form to impart His divine teachings to humanity. Jesus is the form chosen by Paramatma for this purpose. While the Lord presented Himself to us as Jesus, the Father of Paraloka spoke through the words of Jesus. God incarnated as Jesus to proclaim His dharmas.

  Merely calling Jesus ‘Lord’ without putting God’s wisdom into practice and aligning with the will of the Father of Paraloka brings no real benefits. The one who actively practices God’s wisdom stands higher than the one who merely utters the Lord’s name. The one who abides by God’s words is more important than the one who merely salutes to God. A person who lives in accordance with God’s commandments is truly following God’s will, and such individuals are destined for Paraloka (moksham). God does not seek flattery and does not yield to it; rather, God is pleased by those who embrace and apply His wisdom. Therefore, it is more meaningful to practice God’s teachings rather than merely offering praise. God possesses an understanding of the thoughts and intentions of all beings and can distinguish between those who truly comprehend and live by His wisdom and those who do not. Those who comprehend and live by God’s wisdom hold special importance to God. Those who misunderstand or disregard wisdom and fail to act in accordance with God’s cannot attain moksham.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 21,
verse: ` <b>(20)	The Gospel of Mathew, 7th chapter, 22nd and 23rd verses. </b>`,
meaning: ` <b>
(22) Many will say to me on that day, ‘Lord, Lord, did we not prophesy in your name and in your name drive out demons and, in your name, perform many miracles?
<br><br>
(23) Then I will tell them plainly, ‘I never knew you. Away from me, you evildoers!’</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Some people who recognize the greatness of the Lord (Jesus) may overlook Paramatma, the ruler of paraloka, and focus solely on praising Jesus. Paramatma, the Father of the entire world, sent a part of Himself as Jesus. Jesus possesses as much power as Paramatma. Praising the Lord Jesus is akin to praising the Father, Paramatma. Many people offer their praise to the Lord, but there are those who do so out of selfish motives, while others are selfless in their devotion to God. The Father of paraloka conveyed his message through Jesus, whom He sent, on numerous occasions. Many are familiar with the words of the Supreme Father but do not comprehend His true nature. It might be asserted that not even one out of millions who read the Father’s words, listen, and offer their praise, truly understands the Father’s actual essence. The Lord proclaimed God’s commandments, wisdom, and verses. The visible Lord (Jesus) serves as the symbol of the invisible God, and He is the image and representative of God. Those who fail to grasp the wisdom and commandments contained in the verses cannot fully benefit from their praise of the Lord.

  Humanity can only derive some profit from praising the Lord as supreme. It is imperative to recognize that the ultimate benefit for a person is to attain paraloka. The most significant achievement one can reach is paraloka. It is crucial to understand that the ultimate goal for anyone is to break free from Satan’s (Maya) world and enter God’s realm. The ultimate and most significant gain for humanity is to unite with God’s paraloka without ever returning to this world where Satan resides. There is nothing more valuable for a person than gaining access to paraloka. To reap such enormous benefits and avoid entanglement with Satan, one must fully grasp God’s wisdom. Those who do not delve into the profound wisdom contained in Jesus’ verses and His commandments will only be partial devotees rather than complete believers. Blessed is the one who follows all of the Lord’s teachings without exceeding the boundaries of His commandments. Even those who may not fully comprehend Paramatma’s wisdom are not complete believers, despite being great preachers and fervent praisers of the Lord. This is not to dismiss such individuals, but to emphasize that they have faith in God without being complete believers. Doubt lies within every person until they completely understand God’s wisdom, even if it may not be apparent now. Great preachers who believe they are wholehearted devotees of the Lord may still harbor doubts until they gain a thorough understanding of God’s wisdom. Therefore, the Lord proclaimed, <b>“The one who places trust in me with their manas is superior to the one who flatters me.”</b> Complete faith requires the full wisdom of God.

  It can be said that those who do not understand that Jesus and God are one and those who believe that Jesus will return as Jesus do not comprehend the vastness of God. The one who does not realize that God is eternal, without a beginning or an end, that God has descended to Earth many times, and that He will come whenever necessary, lacks complete wisdom. Those with perfect wisdom can discern the arrival of God, while those without absolute wisdom cannot recognize His coming. Even when God has taken human form and stood before a person, the one who only sees His outward appearance and actions may fail to recognize God. When the Lord comes incognito, some Christians may not recognize Him and may be unaware of His presence, even to the point of attempting to baptize Him.

  On Earth, believers are better than non-believers, and absolute believers surpass ordinary believers. Only absolute believers can enter paraloka. God does not accept them until they become absolute believers. When entering paraloka, God acknowledges only absolute gnanis. If someone is not an absolute gnani, God will say, “I do not know them.” Hence, one must strive to attain absolute wisdom. Many aspire to draw near to God and enter His kingdom. However, as they are within Satan’s dominion (Maya), Satan exerts its utmost efforts to prevent them from reaching God and from becoming complete gnanis. Even preachers who are aware of Satan’s opposition to God may not fully comprehend the extent of Satan’s influence. Those who lack a comprehensive understanding of Satan’s activities may inadvertently follow Satan’s path while believing they are on the path to God. This is why God has stated that preachers who assume they are close to God may still fall short of entering His presence.

  In the verse, Jesus said, <b>“Even though you cast out demons and perform miracles in my name, and heal the sick in my name, you are evildoers. Depart from me.”</b>

  In today’s society, people often regard those who perform miracles in the name of God as true devotees, believing them to be close to the Lord. Even those who work wonders themselves may think they are in close communion with the Lord. This perception arises because they see the glory of the Lord manifested through their actions. When they lay their hands on a patient while reciting God’s words, and the patient experiences healing, they attribute it to the Lord’s miracles occurring through them. While it is true that miracles can indeed happen, making the Lord’s presence known to all, they overlook why the Lord expressed displeasure with such actions, as mentioned in the above verse. In doing so, they forget the Lord’s words. The question arises: Why did the Lord reprimand them if what they were doing seemed to be good and a manifestation of the Lord’s miracles? Why did Jesus state that they were walking on an evil path? If the Lord has said so, it is undoubtedly true.

  The unbelievable truth becomes evident when you contemplate what the truth means in the Lord’s teachings. It is a grave mistake for a person not to discern whether the miracles performed in the Lord’s name are of God or Satan. Many who appear as preachers and gurus in the eyes of the people believe they are on God’s path but are, in fact, on Maya’s path. This realization can be quite distressing. It’s possible that many preachers may become upset with my words, but please remember that these are not my words; they are the words of God. As stated in the Gospel of Matthew 7:22, the Lord said, <b>“This is evil. I never knew you.”</b> We should acknowledge that the same Maya (Satan) that tempted the Lord in the past is still attempting to deceive us today. Understanding Maya (Satan) is also an essential part of divine wisdom. Without recognizing Maya, we may mistakenly follow Satan, who assumes the guise of God, instead of following God. Today, many speakers, gurus, and preachers make the same mistake. Satan (Maya), which can assume many forms, performs tricks and miracles in the name of God. Those who are unaware that this is not pleasing to God cannot progress. The distressing truth is that many people on Earth blindly follow Satan, believing it to be God. They are oblivious to the fact that they are pursuing Satan’s path, not God’s. It may seem almost impossible for them to break free from Satan’s influence. Even if God Himself were to convey this truth, they might criticize God but remain unchanged. To them, Maya appears as God, and God appears as a mere human being.

  Those who aspire to enter God’s kingdom and have faith in God should reflect upon the previously mentioned verse and contemplate why God disapproved of and referred to those who perform miracles as evildoers. Consider who is favored by God and who is not. It is essential to familiarize yourself with God’s verses, wisdom, and commandments. You should fully embrace God’s wisdom without transgressing His commandments, recognizing them as the boundaries set around you. Keep in mind that God’s kingdom is within these boundaries, while Satan’s dominion lies outside. Stay vigilant in the face of Satan’s influence, remembering the boundaries delineated by Jesus in his holy scripture for all of humanity.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 22,
verse: ` <b>(21) The Gospel of Mathew, 8th chapter, 22nd verse. </b>`,
meaning: ` <b>
(22) Jesus told him, “Follow me, and let the dead bury their own dead.”</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The above verse mentioned was Jesus’s response when one of His disciples said to Him, “Lord, first let me go and bury my father.” Jesus’s words may seem unclear to some, prompting questions about their meaning. When we consider this, we can classify humanity into two categories: those who possess wisdom and practice it as yogam will attain eternal life (moksham). Such people are very few in number. Those who are eligible for everlasting life will not be counted among the dead. Those who attain everlasting life will never truly experience death and can be said to have achieved moksham. On the other hand, those who are ignorant or do not engage in the practice of yogam can be considered as spiritually dead. Such individuals do not possess eternal life and will ultimately face death. It can be said that they are destined to experience death at some point. The ignorant are often buried by other ignorant individuals. Hence, Jesus’s statement, “Let the dead bury the dead,” conveys the idea that those who lack wisdom are referred to as the spiritually dead. It emphasizes that those who possess wisdom should not associate themselves with the ignorant. Therefore, Jesus told the disciple, “You understand the wisdom and follow me. Let the ignorant bury the ignorant.”
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 23,
verse: ` <b>(22)	The Gospel of Mathew, 9th chapter, 12th and 13th verses.</b>`,
meaning: ` <b>
(12) On hearing this, Jesus said, “It is not the healthy who need a doctor, but the sick.”
<br><br>
(13) For I have not come to call the righteous, but sinners.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  As we’ve previously discussed, God occasionally descends upon the Earth to establish dharmas. Similarly, Jesus stated that He came to guide the ignorant onto the path of wisdom. He mentioned that He came to call sinners, not the righteous. Here ‘sinners’ represent those who are ignorant and lack wisdom, while the ‘righteous’ denote those who possess wisdom. God takes on the role of a spiritual physician, often referred to as a preacher, to heal those afflicted by the ailment of ignorance. Through the medicine of wisdom, He cures the spiritually sick. Those who are already spiritually healthy with wisdom do not require the guidance of such a physician or preacher. When the disease of ignorance spreads globally, affecting all people, God incarnates to provide His divine medicine of dharmas and transform the ignorant into gnanis (wise individuals). If God did not assume this role as a spiritual physician, the entire world would be plagued by ignorance. Therefore, God incarnates to reveal His wisdom to those in need.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 24,
verse: ` <b>(23) The Gospel of Mathew, 8th chapter, 23rd, 24th, 25th and 26th verses. </b>`,
meaning: `<b>
(23) Then He got into the boat and His disciples followed Him.
<br><br>
(24) Suddenly a furious storm came up on the lake, so that the waves swept over the boat. But Jesus was sleeping.
<br><br>
(25) The disciples went and woke Him, saying, “Lord, save us! We’re going to drown!”
<br><br>
(26) He replied, “You of little faith, why are you so afraid?” Then He got up and rebuked the winds and the waves, and it was completely calm.   </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This event is a significant incident from Jesus’ life. While Jesus may not have directly taught a lesson here, there is much we can learn from this event. Both the sea and the storm are connected to Prakruti. The air in the storm and the water in the sea are integral components of Prakruti. Prakruti is under the sole control of Paramatma, the supreme divine entity. Prakruti consists of five elements: Sky, Air, Fire, Water, and Earth. Even Atma, which possesses divinity following Paramatma, holds no authority over Prakruti. Atma within the body governs only the Chara (Changeable) Prakruti, which exists in the form of the body. It does not exert any authority over the Achara (Unchangeable) Prakruti. Prakruti does not heed Atma; it solely obeys the command of Paramatma. Prakruti is composed of five bhootas, which can be understood as life forces or Jeevas. These five Jeevas represent the five elements of Prakruti and, as such, they adhere to the divine word of God. They follow the instructions of Paramatma.

  Because Jesus was the Holy Spirit who appeared as an ordinary man, the storm in the sea ceased at His command. Only God can control Prakruti, so Jesus can be considered God’s incarnation. It is mentioned in verses 7, 8, and 9 of Gnana Yoga in the Bhagavad-Gita, the first divine scripture, that God descends to Earth in human form to impart His wisdom. When God takes on a human form, He outwardly resembles an ordinary man, even though He is not an ordinary individual. Because He appears as an ordinary man, identifying Him is challenging. However, there are two key indicators to recognize Him: <b>1) The presence of God’s incarnation wherever divine dharmas are taught.2) The ability to command Prakruti can be recognized as God’s incarnation.</b> The calming of the sea at Jesus’ command is a manifestation of this divine power, demonstrating that only God can perform such feats. When dharmas are taught and Prakruti is commanded, the human form of God becomes recognizable. Jesus not only taught God’s wisdom but also practiced it and commanded Prakruti. Therefore, Jesus can be identified as God in human form. The immediate cessation of the storm on the sea served as proof of Jesus’ divinity.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 25,
verse: ` <b>(24)The Gospel of Mathew, 9th chapter, 6th verse.</b>`,
meaning: `<b>
(6) I want you to know that the Son of Man has authority on earth to forgive sins. So, he said to the paralyzed man, “Get up, take your mat and go home.” Then the man got up and went home.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  Jesus Himself said that the Son of Man has authority on Earth to forgive sins. When a paralyzed man was brought to Jesus, He said to him, “Your sins are forgiven.” Some of the scribes said to themselves that Jesus was blaspheming. Knowing their thoughts, Jesus said, “Why do you entertain evil thoughts in your hearts? Which is easier: to say, ‘Your sins are forgiven,’ or to say, ‘Get up and walk?’ But I want you to know that the Son of Man has the authority to forgive sins.” So, He said to the paralyzed man, “Get up, take your mat and go home.” Then the man got up and went home.

  If we observe this, Jesus forgave sins because the scribes thought evil of Him. He also declared that the Son of Man has authority on Earth to forgive sins. Despite coming to Earth as the Son of God, He humbled Himself by identifying as the Son of Man. He told and proved that He alone possesses the authority to forgive sins. Those who understand that only God (The Holy Spirit) can forgive sins will recognize who Jesus truly is. By claiming to be the Son of Man, Jesus deliberately obscured His divinity, even though He originated from the Holy Spirit. The paralyzed man immediately rose and went home when Jesus instructed him to do so. The crowd was astonished after witnessing this miracle. Despite performing such a remarkable deed, Jesus was treated as an ordinary man and brought to court as if He were guilty. This illustrates how humans often forget the help they receive.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 26,
verse: ` <b>(25) The Gospel of Mathew, 10th chapter, 20th verse.</b>`,
meaning: `<b>
(20) For it will not be you speaking, but the Spirit of your Father speaking through you. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  While this verse may appear ordinary, it holds profound spiritual wisdom. It’s essential to understand that the term <b>‘Your Father’</b> in this verse does not refer to one’s biological father but to the spiritual Father of Jeevatma. Atma, the Father of Jeevatma, resides within the body and guides it. It’s crucial to remember that the Father of Atma is Paramatma. Every human being represents Jeevatma. Depending on a person’s karma, Atma influences and guides them (Jeevatma), causing them to experience karma (sins and punya karma). Atma controls all bodily functions and determines the pleasure and pain experienced by Jeevatma within the body.

  Jeevatma does not actively engage in any bodily functions. Despite its apparent inaction, Jeeva silently experiences the consequences of its actions, both joy and sorrow. Although Jeevatma identifies itself as the individual within the body, he lacks the capacity to act. Instead, it is the Atma that orchestrates all activities within the body. Due to ignorance, Jeevatma mistakenly believes he is the one performing actions by listening to the words of ‘aham’ (the ego). In reality, Atma is the true actor within the body, but Jeevatma often forgets Atma’s presence and believes that he is the doer of everything. In the context of the verse, Jesus aimed to enlighten those in ignorance. He conveyed, <b>“Your father, Atma, resides within you and communicates through you. You are not the one speaking.”</b> According to this verse, it is evident that not only the deeds performed but also the spoken words are not articulated by Jeevatma. Jesus stated that it is sheer ignorance for people to believe that they are speaking, whereas it is Atma who articulates the words. Jeevatma does not perform the deeds executed by the ten physical body parts (organs of action); it is Atma that accomplishes everything through these body parts. Recognizing this truth represents the highest form of wisdom among all wisdom.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 27,
verse: ` <b>(26) The Gospel of Mathew, 10th chapter, 30th verse.</b>`,
meaning: ` <b>
(30) Even the very hairs of your head are all numbered.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In a temple, people often share their thoughts with God, believing that God is unaware of their innermost feelings. They exhibit respect and awe when in the temple but may behave differently outside. For instance, after leaving the temple, some individuals may occupy two train seats without allowing other passengers to sit, displaying inconsiderate behavior. This action stems from the misconception that God is aware of their actions inside the temple but not outside. However, what <b>many fail to realize is that God is omniscient and omnipresent, perceiving all actions, even in the most secluded places.</b> This verse spoken by Jesus highlights the glory of God and serves as a reminder that God’s awareness extends everywhere.

The verse highlights God’s extraordinary carefulness towards humans, as God has established a precise system for all aspects of human existence. This divine system encompasses even the minutest details, such as ‘karma-visarga’ —the division of karma into tiny parts. Through karma-visarga, God determines how many times a person should open and close their eyelids, ensuring a precise count. God also dictates the number of hairs on our heads and when and which hairs should fall out, all through karma-visarga. Additionally, God orchestrates the challenges that individuals face and the extent of their suffering. In the Bhagavad-Gita, the Lord affirms that God possesses knowledge of everything that has occurred, is happening, and will transpire on Earth. This reinforces the notion that there is nothing beyond God’s awareness.
</div></div>

</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 28,
verse: ` <b>(27) The Gospel of Mathew, 10th chapter, 34th, 35th and 36th verses.</b>`,
meaning: `<b>
(34) Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword.
<br><br>
(35) For I have come to turn “‘a man against his father, a daughter against her mother, a daughter-in-law against her mother-in-law.
<br><br>
(36) A man’s enemies will be the members of his own household.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  While it may not be fair to say that Jesus intentionally aimed to create conflicts among humans, it’s evident that such conflicts have arisen. Jesus came with the intention of leading people from ignorance to wisdom rather than sowing discord. He shared his wisdom with good intentions, but it often led to disputes among those who didn’t fully comprehend His teachings. Much like how cold water sprayed on sand cools it, while limestones become warm, altering their appearance, and turning into lime, the reception of Jesus’ wisdom varies. Those with a deep understanding of wisdom find happiness in Jesus’ teachings, while conflicts arise among the ignorant. In some cases, when one spouse seeks wisdom, the other may disagree, leading to disagreement within families. This unexpected consequence can lead to divisions within households, where fathers may turn against sons, mothers against daughters, and mothers-in-law against daughters-in-law. Though Jesus’ intentions are noble, they inadvertently lead to humans forgetting their kinship and fostering enmity. That is why if Jesus gives a flower, it turns into a thorn. If He gives bendable wood, it becomes a sturdy sword. It’s important to note that this outcome is not Jesus’ fault, but rather the result of human nature and the influence of different gunas.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 29,
verse: `<b>(28)	The Gospel of Mathew, 10th chapter, 37th verse.</b>`,
meaning: `<b>
(37) Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me.
</b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  It is a fundamental aspect of human nature for parents to love their children, just as it is natural for children to love their parents. The bond between parents and their offspring is often characterized by profound love, surpassing any other attachment in the world. However, the human mind is also significantly influenced by its inherent qualities, known as gunas. When a person harbors an <b>intense love for wisdom and God,</b> they naturally gravitate towards the pursuit of wisdom rather than material or worldly things. It becomes challenging to prioritize wisdom when one’s affection is primarily directed elsewhere. The human mind operates under the influence of six good and bad gunas, akin to shackles made of gold and iron, respectively. Both types of gunas serve the purpose of binding an individual. However, it’s important to note that neither extreme love (a good guna) nor jealousy (a bad guna) leads a person toward wisdom. What truly matters is the individual’s genuine interest in wisdom. The six bad gunas include greed (kaama), anger (krodha), avarice (lobha), passion (moha), arrogance (madam), and jealousy (matsara). In contrast, the six good gunas encompass charity (dana), mercy (daya), benevolence (audarya), dispassion (vairagya), humbleness (vinaya), and love (prema).
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 30,
verse: `<b>(29)	The Gospel of Mathew, 10th chapter, 38th verse.</b>`,
meaning: `<b>
(38) Whoever does not take up their cross and follows me is not worthy of me.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Christians often speak of and hold deep reverence for the cross. It’s common to see Christians wearing a cross around their necks, and this symbol holds great importance in their faith. It’s widely known that Jesus was crucified and died on the cross. The question that arises is why Christians hold in such high regard a symbol that was used as an instrument of Jesus’ execution. The answer lies in the profound nature of following someone greater than themselves and emulating their actions. However, no one has contemplated why the cross, a symbol associated with the Lord’s death, should be held in such high regard. Indeed, whether intentionally or unintentionally, there seems to be a gap in understanding the details of the cross. Let’s take a moment to contemplate the cross and delve into deeper details.

  In the verse, Jesus warned that <b>taking up the cross leads one to walk in God’s path, while if the cross picks you up, it means walking in Satan’s way.</b> A similar message is conveyed when Jesus said, “Whoever does not take up the cross and follow me is not worthy of me.” This implies that those who do not bear the cross are not worthy of God. It is important to understand that, according to this perspective, the cross symbolizes Satan. For a more detailed exploration of this concept, please consider reading my book, “Is the Cross God?”

  The cross represents the serpent in spiritual symbolism. It’s common to draw parallels between the serpent and Satan, and the dove with Atma. Satan, or Maya, resides within the human body and often leads individuals down the path of ignorance. When Satan lifts a person, it signifies the person’s weakness and Satan’s dominance. On the other hand, when a person carries the cross, it indicates that the individual’s strength surpasses that of Satan. This is why Jesus, at certain points in His life, carried the cross to demonstrate that humanity can conquer Satan. Likewise, when Jesus was crucified on the cross, it symbolized the cross bearing Him, signifying that Satan can lure anyone onto its path. To walk the path of wisdom, humans must be willing to carry their own cross, as Jesus emphasized in the verse, “Whoever does not take up their cross and follow me is not worthy of me.”

  We symbolize Satan in the form of a cross, which represents a colossal snake or serpent, akin to the concept of Maya. Maya has the power to lead individuals astray from the path to God and towards ignorance. To overcome such influence, we must first understand Maya. Upon analysis, Maya can be identified as the cluster of gunas within a person’s head. Anyone who aligns their actions with these gunas inadvertently follows the path of ignorance, essentially allowing Maya to control their course. To conquer Maya, one must gain mastery over the gunas, refusing to be swayed by their influence. When a person achieves this, it can be said that they have defeated Maya, or Satan, using their inner strength. Such a person can pick up Maya and walk the path of wisdom. Therefore, Jesus’ message in the verse emphasizes that by conquering the ‘cross’ —representative of Maya—one becomes worthy of God’s grace. It’s important to note that the ‘cross’ isn’t merely a wooden symbol but rather a representation of the python, a symbol of Satan. According to the elders, the cross symbolizes Maya, while the bird stands as a symbol of Atma. During Jesus’ baptism by John, it was said that the Spirit (Atma) descended like a dove and entered Jesus’ body. In this context, the ‘cross’ represents the opposing force to Atma. Therefore, Jesus’ teaching underscores that when a person, utilizing their wisdom and inner strength, carries the ‘cross’ and walks the path of wisdom, they become worthy of God and paraloka.
</div></div>

</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 31,
verse: `<b>(30)	The Gospel of Mathew, 10th chapter, 40th verse.</b>`,
meaning: ` <b>
(40) Anyone who receives you receives me, and anyone who receives me receives the one who sent me. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  While human beings are Jeevatmas, they are created by Atma. Paramatma, or the Holy Spirit, created both Atma and Prakruti. However, when Paramatma incarnates as a man, the question arises whether to refer to Him as Atma or Jeevatma. If God takes human form, He can be considered a Jeevatma based on His appearance. When human beings (Jeevatmas) pass away, Atma incorporates them into itself. Just as Atma encompasses human beings, it also includes God when He incarnates as a man and appears as a Jeevatma. This concept is echoed in the verse, <b>“Whoever receives you also receives me.”</b> The one who incarnated as a human being (Jeevatma) is, in reality, God. However, it is God who sent the man, such as Jesus. When Atma encompasses a man resembling a Jeevatma, it’s as if God, the sender of the man, is also included within Atma. Hence, in the verse, Jesus conveyed, <b>“The one who receives me receives the one who sent me.”</b>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 32,
verse: `<b>(31)	The Gospel of Mathew, 11th chapter, 9th verse.</b>`,
meaning: ` <b>
(9) What did you go out to see? A prophet? Yes, I tell you, and (I am) more than a prophet.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  It can be said that a prophet (pravaktha) is one who teaches knowledge that no one has told. In Telugu, <b>‘Pra’</b> denotes importance, and <b>‘Vaktha’</b> means the one who speaks. A prophet is thus someone who imparts essential wisdom. However, Jesus proclaimed that He is more than a prophet. There is only one individual surpassing a prophet, revealing wisdom beyond the capacity of prophets. The divine scripture asserts, <b>“God did not impart His wisdom to any human being. God’s wisdom remains unknown to all except God.”</b> In the final divine scripture, it is stated in verse 3:7 that God must convey His wisdom. Based on this, it is understood that although God comes as a prophet to share wisdom, He is more than a prophet. The last divine scripture, in 42:51, declares, <b>“God does not communicate directly with humans.”</b> However, God can manifest as a disguised man and convey His message. Whenever God takes on human form, even if referred to as a prophet, He is more than a prophet. In light of Jesus’ statement in this verse, it becomes evident that Jesus surpasses prophets and represents an incarnation of God. Despite Jesus openly declaring his identity on multiple occasions, many failed to recognize Him.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 33,
verse: `<b>(32)	The Gospel of Mathew, 11th chapter, 28th verse.</b>`,
meaning: ` <b>
(28) Come to me, all you who are weary and burdened, and I will give you rest. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  It’s a common understanding that people get weary when carrying physical weight. However, humans also experience weariness without even bearing any visible burden. The invisible burden, in this case, is sin (karma), and everyone who undergoes karmic experiences tends to feel weary. Humans continually encounter karma, except during sleep when they are temporarily free from it. Even in dreams, the influence of karma persists, signifying a constant state of labor. Considering the perpetual nature of this burden, Jesus extends an invitation to all, saying, <b>“Come to me. I will give you rest.”</b>

  The question arises: How do we find rest when turning to Jesus, given that we consistently experience karma? The answer is as follows: When Jesus imparts divine wisdom to those who seek Him, the karma of all those acquainted with this wisdom is consumed in the wisdom power. Through the destruction of karma, individuals are liberated from its continuous impact, reducing the toil of suffering, and providing rest. This invitation is extended to people of all castes and religions, as evidenced by Jesus saying, <b>“All come to me.”</b> Some may refer to Jesus as a Christian Guru or prophet. However, labeling Him solely as Christian would be inaccurate, as His call is inclusive, inviting people of all backgrounds. Those who embraced His teachings and sought Him should not be confined to the label of Christians. Since God and divine wisdom are universally necessary, Jesus extends His invitation to all, as He declared, <b>“All come to me.”</b>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 34,
verse: ` <b>(33)	The Gospel of Mathew, 12th chapter, 17th,18th,19th, 20th and 21st verses.</b>`,
meaning: ` <b>
(17) This was to fulfill what was spoken through the prophet Isaiah.
<br><br>
(18) Here is my servant whom I have chosen, the one I love, in whom I delight; I will put my Spirit on him.
<br><br>
(19) He will proclaim justice (wisdom) to the nations; He will not quarrel or cry out; no one will hear his voice in the streets.
<br><br>
(20) A bruised reed he will not break, and a smoldering wick he will not snuff out, till he has brought justice (wisdom) through to victory.
<br><br>
(21) In his name the nations will put their hope. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  About 350 years ago, a great man named Veerabrahmam foretold the events and natural disasters that were about to take place. Similarly, a great man named Isaiah foretold the coming of Jesus. If we examine Isaiah’s words in detail, the greatness in his words will become known to all. It became clear who Isaiah was talking about. Isaiah lived many years before Jesus was born. In the 13th chapter, Isaiah conveyed a few more things. Looking at these verses, it becomes evident that God, the Holy Spirit, spoke of Jesus. Examining the verses where Jesus spoke about Himself in the scripture and the verses where the Holy Spirit talked about Jesus, it becomes apparent that the one who spoke about Jesus (the Holy Spirit) and Jesus are the same.

  In the first verse, it is stated, <b>“Here is my servant.”</b> There are various forms of materialistic service, but this verse does not refer to materialistic service. Instead, it speaks about the service of Paramatma. There is only one form of Paramatma’s service, and the genuine <b>Paramatma’s service involves preaching and spreading God’s wisdom to others.</b> Because Jesus was actively spreading God’s wisdom, the Holy Spirit declared, “Here is my servant.” Anyone who propagates God’s wisdom becomes the <b>most favored by God.</b> Therefore, Paramatma expressed love for Jesus, saying, <b>“I love him and am delighted in him.”</b> This sentiment is articulated in <b>15:28, 29, and 30 of the final divine scripture,</b> where it is described that the Holy Spirit creates a human being from clay and breathes His soul (the Holy Spirit’s soul) into them. Subsequently, angels recognize the human being as God and prostrate before Him. Therefore, in accordance with Isaiah’s words, “The Holy Spirit will put His spirit upon Him,” it becomes evident that Jesus, in human incarnation, is the soul of Paramatma.

  The 19th verse states, “He will proclaim justice to the nations.” It appears that the translators of the Bible into English may have used an inaccurate term. It is supposed to be written as <b>“wisdom”</b> instead of <b>“justice.”</b> Justice is more closely linked to the material world, and therefore, it might not be the most suitable term. While <b>righteousness and justice pertain to worldly matters, wisdom and dharma are associated with Paramatma.</b> The use of “righteousness” and “justice” instead of “wisdom” appears to be a translation error. Numerous such errors were identified, revised, and corrected.

  The 19th verse states, “He will proclaim justice to the nations.” Here, “proclaim” means to preach or teach. The verse could be better understood as, <b>“He will spread wisdom to the nations.”</b> This amendment aligns with the fact that, after living for 30 years, Jesus taught His wisdom for about two years and three months, as indicated by this verse. During this time, Jesus unselfishly preached his wisdom in various places, curing many people with different kinds of diseases. He restored sight to the blind, enabled the lame to walk, healed leprosy patients, and even raised the dead. Despite His miraculous actions, some accused Jesus of being a wizard and blamed Him for acting against God. Nevertheless, Jesus did not engage in quarrels or screams, as affirmed by the statement, <b>“He will not quarrel or cry out.”</b>

  Jesus conveyed his wisdom to those who approached Him, yet he refrained from shouting in the streets, as indicated in the verse, <b>“no one will hear His voice in the streets.”</b> The verse also emphasizes that He will not break a bruised reed, underscoring that His actions were solely focused on spreading wisdom. Additionally, the verse highlights Jesus’s role in ensuring that the power of wisdom, once ignited in a person, remains unextinguished until it burns away all the karma associated with that individual. Since karma comes in various forms, it is likened to a wick composed of many strands, explaining the phrase, <b>“He will not snuff out a smoldering wick.”</b> Furthermore, the verse expresses the anticipation of some for Jesus’s wisdom, stating, <b>“In His name, the nations will put their hope.”</b>
</div></div>

</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 35,
verse: `<b>(34)	The Gospel of Mathew, 12th chapter, 31st verse.</b>`,
meaning: `<b>
(31) So, I tell you, every kind of sin and slander can be forgiven, but blasphemy against the Spirit (Atma) will not be forgiven.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This verse holds particular significance in the scripture. When human beings grasp God’s wisdom, that wisdom transforms into fire (wisdom power). This fire has the capability to burn away various sins (karma). Knowing divine wisdom allows humans to avoid sins unrelated to Atma. However, it’s crucial to note that the wisdom power cannot absolve sins stemming from blasphemy and actions against Atma; such sins may remain unforgiven.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 36,
verse: `<b>(35)	The Gospel of Mathew, 12th chapter, 32nd verse.</b>`,
meaning: `<b>
(32) Anyone who speaks a word against the Son of Man will be forgiven, but anyone who speaks against the Holy Spirit will not be forgiven, either in this age (yuga) or in the age (yuga) to come.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  All human beings are commonly referred to as the sons of man; ordinary people acknowledge that their parents are human. But Jesus, despite His outward appearance as an ordinary man, should not be categorized as the son of man. When Jesus spoke of His Father, He specified that His Father existed in paraloka, not as a man on earth. Consequently, Jesus is appropriately identified as the Son of God. In contrast, the general term “son of man” can be applied to all people. Despite Jesus presenting himself with the name and experiences of an ordinary man, His true designation is the Son of God.

  The seed donor for an ordinary person is not a human. Any man claiming to have children is not truly a father. Atma, which serves as the head of the body and performs all functions within it, is the seed donor for humans and all living beings. Unfortunately, many humans are unaware of this fact. Consequently, a man asserts that he is the father of another human, even though he cannot carry out any functions within the body. It is emphasized multiple times in the first and second divine scriptures that Atma is the sole doer of all things. While a person, in reality, does not commit any sins because he is incapable of performing actions, the misconception that he is the doer leads to the accumulation of sin in his (Jeevatma) account. Thus, a person becomes responsible for sins he has not committed. Similarly, despite Atma being the true Father of a man, the man is considered the son of a human being when he claims his father is a man.

  Jesus is aware that His Father is the Father of paraloka. Unlike everyone else, He was not born of Atma. Jesus acknowledges that He is the Son of God, the Holy Spirit. Throughout the Bible scripture, Jesus is referred to as the Son of God because He explicitly stated on many occasions that His Father was the Holy Spirit. God’s wisdom has the power to forgive sins committed against ordinary individuals. However, the sin of blasphemy against the Son of God will never be forgiven. This sin of blasphemy is destined to be experienced for <b>two yugas</b> – in the current yuga (era) and the subsequent one.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 37,
verse: `<b>(36)	The Gospel of Mathew, 12th chapter, 36th and 37th verses.</b>`,
meaning: ` <b>
(36) But I tell you that everyone will have to give an account on the day of judgment for every empty word they have spoken.
<br><br>
(37) For by your words you will be acquitted, and by your words you will be condemned.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  From the moment of birth, humans engage in numerous actions and utter many words. They believe they are personally responsible for every small deed and word. In reality, they have not done anything. It is Atma within the body that performs all actions. However, an unaware individual falsely attributes every action and word to themselves, and consequently, the karmic consequences of their deeds and words accrue to them. Atma stores all accumulated karma in the karma chakra and assesses it on the day of death. On this judgment day, Atma evaluates every deed and word of the individual, weighing the sins and punya associated with each. A person is considered a gnani (wise person) if they acquire wisdom in life, and conversely, a person is regarded as ignorant if they perform deeds with ignorance. Additionally, Atma considers whether a person has acquired wisdom (gnani) or remains in ignorance. The judgment is based on the individual’s status as either a gnani or an ignorant one, determining their next life accordingly. The Holy Spirit does not judge a person based on karma. It is the Atma, responsible for all functions in the body, that judges the individual on the day of death and directs the Jeeva to the next life. This day is known as the <b>‘judgment day’</b> or <b>‘final day,’</b> also serving as the first day of the next life (birthday). Recognizing that Atma is the ultimate arbiter on the last and first days of life, one should understand that the Holy Spirit does not participate in these processes. The last day can be referred to as the day of counting karma. Atma is the one who performs all functions of the body. Understanding this, if a person believes they have not personally done anything, they are neither considered a sinner nor a virtuous person. It’s crucial to recognize that the Atma determines the karma in a person’s deeds and guides them to the next birth. Depending on one’s thoughts, they will be judged as either a gnani, ignorant, righteous, or a sinner.
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 38,
verse: `<b>(37)	The Gospel of Mathew, 12th chapter, 40th verse.</b>`,
meaning: ` <b>
(40) For as Jonah was three days and three nights in the belly of a huge fish, so the Son of Man will be three days and three nights in the heart of the earth.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This verse draws a parallel between the events preceding the time of Jesus and the prophesied occurrences. It notes that Jonah, after being swallowed by a giant fish, resided inside its belly for three days and three nights. The verse also prophesies, “Jesus will be three days and three nights in the heart of the earth.” While it is accurate that Jonah spent three days and three nights in the fish, it is not precise to state that Jesus, the Son of Man, lived for the same duration in the heart of the earth. Historically, Jesus was crucified on the cross on Friday evening and rose from the dead before dawn on Sunday morning. According to historical records, Jesus was likely crucified between 3:30 p.m. and 4 p.m. on Friday, and His body was placed in a tomb on Friday evening. Consequently, Jesus was not in the tomb during the daytime on Friday, but rather on Friday night and the entirety of Saturday. The resurrection is said to have occurred before dawn on Sunday. Therefore, Jesus spent Friday night and the entire day on Saturday in the tomb, rising from the dead before Sunday morning.

  The verse appears to indicate that Jesus was buried for only two nights and one day. Consequently, this verse in the scripture may seem incorrect, raising doubts about its accuracy. Nevertheless, the verse in the divine scripture is considered to be unfailingly accurate. When others questioned the authenticity of this particular verse, I too experienced a sense of doubt. Having said that there is no room for untruth except truth in this sentence, I had to answer what others asked me. Yet, recalling the guidance in Matthew 10:20, <b>“For it is not you who will be speaking, but the Spirit of your Father speaking through you,”</b> dispels the need for fear in providing an answer. The understanding is that the Spirit, or Atma, is the one posing questions and providing responses. As Jeevas, our role is to listen and comprehend what Atma is communicating.

  The one commonly referred to as the Son of Man is, in truth, the Son of God. Although we commonly label Jesus as the Son of God, it’s essential to recognize that He is not the son of any human but God himself. This assertion is made with certainty, grounded in the understanding that He is God incarnate. While the body inhabited by God experienced death, God himself is immortal. In fact, there are four types of death: natural death, unnatural death, temporary death, and the ultimate death. While the majority are familiar with the first type, those possessing spiritual wisdom, or ‘gnanis,’ know all four types. The last death occurs when God takes on human form or when a person attains moksham, merging with God. Despite the widespread belief in Jesus’ death on the cross, no one can say for certain the specific type of death He experienced.

  In this verse, it is stated that Jesus was in the heart of the earth for three days and three nights, yet it doesn’t explicitly mention His death. During His crucifixion, the prevailing belief was that He had died on the cross. However, upon emerging from the tomb on Sunday morning, Jesus claimed He had not experienced death. To address the skepticism of His disciples, He displayed the marks of the nails on His wrists and feet, along with the wound from the spear, making it clear that He had not died. Nevertheless, historical records affirm that His body was taken down from the cross and placed in a tomb after His death on Friday evening. This apparent contradiction, where He died on Friday yet appeared on Sunday as if He had not died, prompts questions about the seemingly untrue statement that <b>He would be three days and three nights in the heart of the earth.</b> As per 12:40, He wasn’t there for three nights and three days, but instead was only there for two nights and one day. Exploring the reason behind this seeming inconsistency unveils a deeper truth concealed within the apparent falsehood. Let us further examine how truth is concealed within this apparent contradiction.

  It is true that Jesus died on the cross, but no one knew that it was <b>temporary death.</b> Jesus experienced a temporary death out of four kinds of deaths and rose again early Sunday morning from temporary death. He informed His disciples that He was not dead. He would not have risen again if He had experienced a natural death. However, He got up on the third day because He got a ‘temporary death.’ Thus, the notion that Jesus died on the cross is a misconception and not true. Similarly, the scripture stating that Jesus was in the tomb for three days is accurate but warrants a deeper understanding.

  Jesus is present within the body as Jeevatma, while Atma, the Father of all, also resides within. Jeevatma experiences the consequences of karma within each human body, while Atma performs necessary actions in accordance with karma. Atma permeates the entire body, whereas Jeevatma is located within the head. Atma exerts control over the body through its ten parts and organs. The vitality of a person is often associated with bodily motion, and a person is considered alive when the body is in motion. Conversely, when the ten parts and organs cease functioning, accompanied by the absence of breathing, the person is deemed dead. In the event of natural death, both Atma and Jeevatma exit the body, resulting in the immobilization of the body due to the absence of Atma.

  In the case of temporary death, neither Atma nor Jeevatma departs from the body. Atma undergoes a contraction, shrinking from the outer edges to a tiny size, and enters the head similarly to Jeevatma. During this period, none of the body’s organs function, and breathing ceases, giving the appearance of death. The man is commonly perceived as dead since both external and internal bodily functions cease. Resurrection occurs when Atma, resuming its usual function, emerges and starts working again. This phenomenon is exemplified in the case of Jesus. During His crucifixion, Atma contracted within His body, maintaining this state for Friday night and the entirety of Saturday. Early Sunday morning, Atma resumed normal function, leading to Jesus’ emergence from the tomb alive. Atma experienced <b>temporary death</b> for only two nights and a day. While the Atma in Jesus’ body was in the tomb for two nights and a day, it is also accurate to say that Jesus (Jeevatma) was in the tomb for three nights and three days, depicting a process not fully understood by us. Let us see what it was.

  It can be said that Jesus was resurrected due to Atma’s actions within His body. However, before Atma died on the cross, Jeevatma had already been buried in the body. The connection between Jeevatma and buddhi was severed in Jesus’ body after He learned of His impending arrest on Thursday. Jesus entered an unknown state, completely unaware of His arrest, trial, flogging, and crucifixion, essentially being buried in His body tomb. He remained unconscious for three days, as if in a grave. Despite this, Atma carried out all necessary bodily functions, but Jesus was oblivious to these actions. To prevent Jesus from experiencing any pain or suffering associated with flogging and crucifixion, Atma sent him into an unknown state, similar to sleep. Jeevatma remained buried in the body until Atma awakened him on Sunday morning. Hence, the verse states, “Jesus was in the tomb for three days and three nights.” People knew that Jesus’ body was placed in the tomb, but the Jeevatma in His body entered a state of the unknown before that. Afterward, Jesus’ Atma experienced temporary death on Friday evening. However, people, who could only observe visible things, were unaware of the workings of Atma and Jeevatma in Jesus’ body. It is true that Jesus was in the grave for three days and three nights, and His Atma was in the grave for two nights and a day.

</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 39,
verse: `<b>(38)	The Gospel of Mathew, 13th chapter, 13th, 14th and 15th verses.</b>`,
meaning: `<b>
(13) Though seeing, they do not see; though hearing, they do not hear or understand.
<br><br>
(14) In them is fulfilled the prophecy of Isaiah: You will be ever hearing but never understanding; you will be ever seeing but never perceiving.
<br><br>
(15) For this people’s heart has become calloused; they hardly hear with their ears, and they have closed their eyes. Otherwise, they might see with their eyes, hear with their ears, understand with their hearts, and turn, and I would heal them. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The prophet Isaiah prophesied about this a long time ago. Both then and now, there have been ignorant people. They see with their eyes, hear with their ears, and divert their manas (mind) even after comprehending with their buddhi. Due to their lack of interest in what they have seen, heard, and known, their buddhi slows down to avoid destroying their karma through Jesus. Their ears become deaf to divine wisdom. They listen to everything that is said but do not understand what they hear and become entangled in material things. They can only see the money. To them, those who possess wisdom appear foolish.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 40,
verse: `<b>(39)	The Gospel of Mathew, 15th chapter, 7th, 8th and 9th verses.</b>`,
meaning: `<b>
(7) You hypocrites! Isaiah was right when he prophesied about you.
<br><br>
(8) These people honor me with their lips, but their hearts are far from me.
<br><br>
(9) They worship me in vain; their teachings are merely human rules.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  We have often said, “God knows the matter of God; humans do not know.” God can speak about Himself, and humans will come to know when God reveals how to worship Him. Although God has foretold how He should be worshipped, many preach different ways that differ from what God has said. Many swamis and gurus are teaching people human-created rules, such as upadesas and other methods of worship. God Himself reveals that “such upadesas and worship are futile” and cannot bring humans closer to Him. Many swamis and gurus talk about God in their speeches but preach anti-God and God-unspoken worships and upadesas. Even though these gurus and swamis talk about God and wisdom, they perform futile worships without understanding divine wisdom and lead others to do the same. For example, fasting has nothing to do with worshipping God. Not only are they suffering from fasting, but they are also bothering the God within. That is how they are harming the God within. Similarly, it was said in the Bhagavad-Gita five thousand years ago, <b>“You cannot know and reach me through studying the Vedas, making donations, or performing
sacrifices (yajnas), penances (tapas) etc.”</b> In the Bhagavad-Gita, God said that many people highly honor Him but worship Him in vain, in an adharma manner. The Lord has said the same thing in the holy scripture now.

  Words come from the mouth, but feelings come from the heart. Although many people speak highly of God, their hearts do not truly align with God’s principles. Despite their praise, they do not have God’s dharmas in their hearts. Maya’s dharmas took place in their hearts. They speak about God, but what they do under the influence of Maya is anti-God worship. Many gurus name what they say as God’s wisdom, but the worship they are performing, as God said, will not unite them with God. It is also warned in the Gita that those worships are on the wrong path. However, famous Peetadipatis perform futile yajnas, donations, fasting, Vedic chanting, and penance. The Holy Bible and Bhagavad-Gita state that those who engage in these practices are far from God. Therefore, from now on, let us not only glorify God in our words but also follow what God said, leaving behind futile and anti-God worship.

</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 41,
verse: `<b>(40)	The Gospel of Mathew, 15th chapter, 11th verse.</b>`,
meaning: ` <b>
(11) What goes into someone’s mouth does not defile them, but what comes out of their mouth, that is what defiles them. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Man consumes food through the mouth, and the variety of food is vast, not limited to a single type. Individuals can be categorized as either vegetarians or non-vegetarians. Some spiritual leaders, such as swamis and gurus, advocate vegetarianism as a path to understanding God’s wisdom, asserting that avoiding meat is essential. Here the Lord said, <b>“What goes into someone’s mouth does not defile them, but what comes out of their mouth, that is what defiles them.”</b> Various opinions exist regarding dietary practices for those on the path of divine wisdom. Some recommend abstaining from non- vegetarian food, while others suggest a diet of exclusively raw, uncooked food. Some propose a vegetarian diet limited to one meal a day. Despite these diverse dietary restrictions, it is emphasized that the sanctity or uncleanness of an individual is not determined by the food consumed. While the food we eat may have an impact on physical health, it does not influence spiritual purity. Eating any particular food does not obstruct the pursuit of divine wisdom. Man consumes food with his mouth and articulates words with the same organ. Notably, the process of ingesting food through the mouth poses no issue; rather, it is the words that emanate from the mouth that have the potential to defile a person. While man engages in actions and verbal expressions, his true nature is unveiled through his words. <b>Elders uphold the belief that one possessing divine wisdom is deemed holy, while those lacking wisdom are considered unclean.</b> A person with wisdom is regarded as pure based on their speech. Conversely, ignorance is exposed in the words of someone lacking wisdom. The defilement of an individual becomes evident through their speech; hence, Jesus conveyed the aforementioned verse. According to the teachings of the Bible and the Bhagavad-Gita, a person is not defiled by the food they consume. Rather, it is one’s karma that provides sustenance. Those on the path of wisdom are not bound by dietary restrictions. What matters to God is not the specific food consumed but the adherence to the wisdom path. Therefore, whatever food is consumed in accordance with one’s habits is inconsequential to God.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 42,
verse: `<b>(41)	The Gospel of Mathew, 15th chapter, 12th and 13th verses.</b>`,
meaning: `<b>
(12) Then the disciples came to him and asked, “Do you know that the Pharisees were offended when they heard this?”
<br><br>
(13)  He replied, “Every plant that my heavenly Father has not planted will be pulled up by the roots.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When the Lord proclaimed that man is not defiled by food and is free to consume any nourishment while still adhering to God’s path, the Pharisees raised objections. They contested that the Lord’s words lacked divine wisdom and outright rejected them. Accusing Jesus of promoting ignorance, they questioned the source of His authority to teach such principles. The Pharisees, considering themselves great teachers, asserted that only they possessed the rightful authority to impart wisdom about God. Upon learning of the Pharisees’ objections, the disciples apprised Jesus of the situation. In response, He declared, <b>‘Every plant not planted by my heavenly Father will be uprooted by the roots.’</b>

  The Paraloka Father, Paramatma, establishes His dharmas, which can wane on Earth but never truly perish. When such diminishment occurs, Paramatma incarnates as Bhagavan to reinforce these dharmas. As the dharmas weaken, adharmas proliferate. Dharmas are divine, belonging to God, while adharmas are affiliated with Satan. Paramatma sows the seeds of dharmas, whereas Satan sows those of adharmas. Upon Paramatma’s earthly incarnation to impart His dharmas, Satan takes on various forms such as scholars, Pharisees, teachers, and swamis. In this guise, Satan imparts its own version of wisdom, persuading humans that its dharmas are synonymous with God’s dharmas. Maya’s (Satan) dharmas occasionally undermine Paramatma’s dharmas. Some may question why Maya’s dharmas can weaken God’s powerful dharmas. Paramatma, as the Paraloka Father, incarnates as Bhagavan in a specific place and time to propagate His dharmas. Although these dharmas may gain strength during that period, they wane after a few thousand years. This is because God’s return as Bhagavan occurs only when deemed necessary. In contrast, Maya perpetually creates gurus and swamis, convincing them that its wisdom is synonymous with God’s wisdom. Through them, Maya propagates its dharmas continuously, ensuring a persistent influence on Earth.

  People are often drawn to swamis, gurus, and babas who consistently operate under Maya’s influence, rather than the infrequent appearance of an unidentified Bhagavan who arrives once in a thousand years. While God manifests in one place at a time, Satan is born in various forms across many places, assuming roles such as swamis, gurus, and babas, actively diminishing God’s dharmas. Similar to a field overrun with weeds affecting the growth of trees planted by a farmer, the influence of Satan proliferates around God’s planted dharmas. To counter this, God, akin to a diligent farmer, intervenes by uprooting the weeds, including their roots, to fortify the trees He has sown. However, over time, many weeds may resurface without any intentional sowing. Paramatma, likened to a farmer, initially planted His dharmas. Satan, in turn, fosters weeds (adharmas) around God’s plants (dharmas). The natural weakening of God’s plant occurs under the influence of Maya’s weeds. To address this, God intervenes, <b>extracting many of Maya’s dharmas</b> that have encroached upon His dharmas. This aligns with the essence of Jesus’ statement—God dismantles Satan’s dharmas undermining His own, thereby reinforcing and fortifying His divine principles.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 43,
verse: `<b>(42) The Gospel of Mathew, 15th chapter, 14th verse.</b>`,
meaning: `<b>
(14) Leave them; they are blind guides. If the blind lead the blind, both will fall into a pit. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Individuals under the influence of Maya, including Pandits and Pharisees, who are themselves part of Maya, criticized Bhagavan Jesus without comprehending God’s wisdom. They are unaware of God’s wisdom, lacking any insight into divine wisdom. They remain blind without wisdom sight. How can those devoid of God’s wisdom proclaim and guide others in it? They pretend to have wisdom sight and spread what they perceive as God’s wisdom. People, trusting these apparent seers, seek guidance, assuming they possess complete knowledge of God’s wisdom. Unbeknownst to them, these leaders themselves are blind. Imagine a scenario where a blind person leads others who are also blind, claiming to have sight and guiding them along the way. Inevitably, the blind leader stumbles into pit, leading the others into the same predicament. Similarly, those ignorant of God’s wisdom mock those with true wisdom, proclaiming themselves as great gurus. Those with wisdom need not engage in argument with them. Individuals lacking wisdom-sight cannot ascend to the pinnacle of moksham. Although many may follow a guru lacking wisdom-sight, none attains moksham; instead, they fall into the <b>pit of gunas.</b>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 44,
verse: ` <b>(43) The Gospel of Mathew, 16th chapter, 21st and 22nd verses.<br>
The Gospel of Mathew, 17th chapter, verses 22nd and 23rd verses.
<br>
The Gospel of Mathew, 20th chapter, verses 17th, 18th and 19th verses.</b>
`,
meaning: ` <b>
(16:21) From that time on Jesus began to explain to his disciples that he must go to Jerusalem and suffer many things at the hands of the elders, the chief priests, and the teachers of the law, and that he must be killed and on the third day be raised to life. (First time)
<br><br>
(16:22) Peter took him aside and began to rebuke him. “Never, Lord!” he said. “This shall never happen to you!”
<br><br>
(17:22) When they came together in Galilee, he said to them, “The Son of Man is going to be delivered into the hands of men.”
<br><br>
(17:23) They will kill him, and on the third day he will be raised to life.” And the disciples were filled with grief. (Second time)
<br><br>
(20:17) Now Jesus was going up to Jerusalem. On the way, he took the Twelve aside and said to them.
<br><br>
(20:18) We are going up to Jerusalem, and the Son of Man will be delivered over to the chief priests and the teachers of the law. They will condemn him to death.
<br><br>
(20:19) They will hand him over to the Gentiles to be mocked and flogged and crucified. On the third day he will be raised to life!” (Third time)
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus, in chapters 16, 17, and 20 of the Gospel of Matthew, foretold His own future. It is uncommon for ordinary humans to predict the time of their death, given the uncertainty and unknown nature of the future. Jesus, however, disclosed the circumstances of His death not just once but three times, showcasing something extraordinary within Him. This act served to demonstrate to the unaware that He was more than a mere human being. The ability to speak about one’s death in such detail is a rarity, but Jesus could do so because He had preordained His demise. Atma stands as the sole determiner of life’s karma within the body.

  Jesus, on three separate occasions, explicitly spoke about His impending death. His ability to foretell His fate stemmed from His predetermined karma. According to Jesus, Atma—the judge of karma—is the Son of Paramatma. Jesus consistently asserted that His Father is the Holy Spirit, identifying Himself as the Atma responsible for determining karma. Having decided His life’s karma, Jesus prophesied that He would be handed over to the elders and chief priests, be killed by them, and rise to life on the third day. Remarkably, these events unfolded exactly as He had predicted. Jesus spoke about His death without fear, a demonstration that every discerning individual can recognize, indicating that Jesus was no ordinary man; there was something extraordinary about Him.
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 45,
verse: `<b>(44)	The Gospel of Mathew, 19th chapter, 23rd and 24th verses.</b>`,
meaning: `<b>
(23) Then Jesus said to his disciples, “Truly I tell you; it is hard for someone who is rich to enter the kingdom of paraloka.
<br><br>
(24) Again, I tell you, it is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> Jesus conveyed a parable, stating, <b>“It is easier for a camel to pass through the eye of a needle than for a wealthy person to enter the kingdom of God.”</b> Just as it is impossible for a camel to navigate the eye of a needle, similarly, it is challenging for a rich individual to enter the kingdom of God. Some elders believe that wealth often begets arrogance, a trait considered one of the six negative qualities (gunas). Arrogance, the fifth of these qualities, accompanies greed (kaama), anger (krodha), avarice (lobha), passion (moha), and jealousy (matsara). Arrogance is present to varying degrees in every individual. Whether it be at 90%, 80%, 70%, 60%, 50%, 40%, or 30%, everyone possesses some level of arrogance. One person may exhibit 90% arrogance, while another might have 80%, and some may express as little as 30% arrogance.

  Not only does arrogance shape the thoughts of the Jeevatma within the body, but the other five associated gunas also play a significant role. The level of arrogance can vary, and it's observed that the poor generally exhibit less arrogance than the rich. The wealthier an individual is, the higher their level of arrogance tends to be. Someone with millions of dollars may manifest an even greater degree of arrogance and be more influenced by the other gunas. Wealth has the power to bring about significant changes in a person, often leading them away from wisdom. In the context of <b>moksham</b> being likened to the eye of a needle, the analogy extends to the rich being comparable to a camel. Just as a camel cannot pass through the eye of a needle, a wealthy person, with the strong influence of gunas akin to a camel, faces challenges in attaining liberation. The analogy emphasizes that just as a camel cannot fit through the eye of a needle, a wealthy person, under the influence of powerful <b>gunas,</b> encounters obstacles in entering paraloka (moksham).
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 46,
verse: `<b>(45)	The Gospel of Mathew, 22nd chapter, 36th, 37th, 38th, 39th and 40th verses.</b>`,
meaning: `<b>
(36) Teacher, which is the greatest commandment in the Law (Dharma Shastra)?
<br><br>
(37) Jesus replied: “Love the Lord your God with all your heart and with all your soul and with all your mind.”
<br><br>
(38) This is the first and greatest commandment.
<br><br>
(39) And the second is like it: ‘Love your neighbor as yourself.’
<br><br>
(40) All the Law and the Prophets hang on these two commandments.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Some people approached Jesus, posing a question about the most crucial commandment in the law (Dharma Shastra), with the intention to test and potentially mock Him if He stumbled. In response, Jesus promptly answered, <b>“Love the Lord your God with all your heart, soul, and mind.”</b> He emphasized that this directive was the primary and greatest commandment, followed by a second commandment. The use of the term ‘commandment’ in this verse underscores its significance, with Jesus asserting that these two commandments serve as the foundation for all the law and the Prophets. This verse is explained as follows.

  A commandment is essentially an instruction given to direct action. In the broader context, the question arises: who is the authority issuing the command? The answer lies in the understanding that elders commonly give commands to the younger. Extending this idea, God, the creator of the world, holds the highest authority, and what He communicates commandingly is considered a <b>commandment</b> or <b>law</b>. This law comprises unalterable acts and is commonly referred to as <b>dharma.</b> The term ‘dharma’ is employed because this law is inherently unchangeable. For instance, the spiciness of a chili pepper is an unalterable characteristic, or dharma, of the chili pepper. This spiciness is consistently present in all chili peppers. So, it can be said that the dharma of the chili peppers is its spiciness. Similarly, sourness is the dharma of tamarind, and bitterness is the dharma of neem.

  Dharma encompasses a set of rules and regulations. If one asks who has dharma, then anything that is created has dharma, just as the created tamarind, chili, and neem have dharma. Since God is the creator of creation, He does not possess any dharmas. The creator God stands beyond the constraints of dharma. Both Atma and Jeevatma, excluding God, are subject to dharmas. Additionally, the created Prakruti also possesses its own set of dharmas. To grasp Brahma Vidya or spiritual education, understanding the dharmas of Atma and Jeevatma becomes crucial. Jeevatma, specifically intended to comprehend Brahma Vidya, <b>only needs to be acquainted with the dharma of Atma.</b>

  In this verse, the method of understanding Atma is highlighted as significant. The Dharma Shastra delves into the nature of Atma, with the foremost dharma outlined as <b>“Loving the Lord your God is the first and greatest commandment.”</b> The Lord referred to here is primarily the one who is born. Jesus emphasized that the paramount commandment is to love the God who is born. However, a question arises: when God is the creator, uncreated, and devoid of dharma, how can the primarily born (the Lord) also be considered God? The dilemma centers around whether the self-existent is God or the one born is God. The answer to this quandary is elucidated as follows.

  God, the unborn and creator, did not undergo a birth. Initially, God created Prakruti. Following the creation of Prakruti, God (Paramatma) intended to bring forth living beings. Once Prakruti was formed, God chose not to engage in direct action. After creating the five elements—Sky, Air, Fire, Water, and Earth—God desired a state of inactivity. When God wished to manifest in a form, <b>Atma</b> (the Lord) came into existence to create, govern, and, ultimately, terminate living beings. Atma formulates rules and oversees the cycle of life and death for all living things. Since Atma is the creator of all living beings, it is fitting to refer to Atma as God. <b>Consequently, God, the creator of Prakruti, is recognized as the primary entity, while God, the creator of living organisms within Prakruti, is acknowledged as the secondary entity.</b>

  The first God, recognized as Paramatma, created Atma, is God to Atma, and remains distinct from Atma. The second God, known as Atma, is the creator of living beings. Although both Paramatma and Atma function as creators and Gods, <b>the first God (Paramatma) is beyond dharmas, while the second God (Atma) adheres to dharmas. The God without dharmas is the primary creator, whereas the God with dharmas is the secondary creator.</b> No one knows that there are two Gods in the world. Even though there are two Gods, with the first God being the greatest, Atma holds a special significance to humans as the creator of human beings. It is essential for humans to worship Atma exclusively. Individuals are encouraged to understand the dharmas associated with the second God. Importantly, all the dharmas revealed in scriptures are centered around Atma.

  If a person desires to worship and pray, it is directed towards the second God, Atma. No one can worship the first God. It is not possible for anyone to pray or worship Him. Worship and prayer to the first God are deemed unnecessary, for this <b>God neither begets nor is born,</b> as emphasized in the final scripture. Surah 112 further reinforces that <b>the first God is indifferent to prayers.</b> It is noteworthy that both Christians and Muslims may not recognize the existence of two Gods (two Allahs), as they uphold the belief in a singular God whom they worship. However, the distinction between <b>the God to be worshipped and the initial creator God</b> is often overlooked. The Hindus are unaware of God but worship many deities and walk in the wrong path (ignorant path) altogether.

  The first God transcends the realm of dharmas, making Him unknowable and beyond worship. To worship Atma, the God governed by dharmas, specific elements of the human body become essential. According to the Dharma Shastra, it is crucial for Jeeva to worship Atma, the God, using both manas and buddhi. This becomes significant dharma. The verse emphasizes, <b>“Love Atma, the God, with all your heart, soul, and mind,”</b> where love is interpreted as worship. This stands as the foremost commandment or dharma. <b>Interpreting the commandment as dharma, ‘all your heart’ signifies all your buddhi, and ‘all your soul’ refers to you, Jeeva. Love, in this context, implies worship. In the Dharma Shastra, it is said that you should worship Atma, the God, with your mind and your buddhi.</b> With the mention of the second commandment, let us delve into what it entails.

  The second commandment instructs, <b>“Love your neighbor as yourself.”</b> These two commandments form the cornerstone of the Dharma Shastra and the teachings of the Prophets, as stated in the verse. Essentially, they serve as the foundation for the dharmas within the realm of Brahma Vidya and the guidance provided by the Prophets in imparting these dharmas. The verse subtly suggests that self-love and the prioritization of personal well-being are universal tendencies. When faced with threats, individuals exhibit an innate instinct to safeguard their own lives, often going to extraordinary lengths, even at the cost of sacrificing possessions. The profound hope individuals harbor for their own lives is evident in their prayers to various deities and their willingness to undertake any measure to ensure their well-being. This observation highlights the innate tendency of individuals to prioritize self-love. The verse instructs, “Love your neighbor as yourself,” emphasizing the imperative to extend the same degree of care and consideration to one’s neighbor as one inherently seeks for their own well- being and values their own life.

  While the conventional understanding of a ‘neighbor’ often refers to someone living next door, the verse, “Love your neighbor as yourself” urges us to extend love to the one very close to us, not our next-door neighbor. Delving deeper, the verse prompts reflection on who our neighbor truly is. According to the verse, aside from your <b>Atma,</b> there is no one else within your body. If you identify as a soul (Jeevatma), there is another soul akin to you — the second God, Atma. In total, there are only three souls, signifying two souls besides yourself, with one being Paramatma. However, referring to Paramatma as your neighbor is impractical since He is omnipresent and all-pervading. Excluding Paramatma, the remaining Atma is your neighbor. This concept aligns with the understanding that, except for Atma and Paramatma, all of creation is considered feminine Prakruti, with Atma and Paramatma representing the masculine aspect.

  Atma, being the only masculine entity akin to you, is appropriately deemed your neighbor. The first God, Paramatma, stands beyond the realm of worship, relationships, and dharmas, making Atma the rightful subject of worship. The divine scriptures consistently assert the worthiness of worshiping Atma, labeling Him as <b>‘your Allah.’</b> This declaration is reiterated in Surah 6:102, 3:18, and 16:51. The significance of the two commandments, “Love your neighbor Atma as yourself,” is underscored in the Dharma Shastra. <b>Worshiping Atma emerges as the primary duty of gurus, preachers, and prophets.</b> This is evident in the response Jesus gave to a Pharisee when questioned about the most fundamental dharma in the law. Reflecting on this verse prompts a deeper consideration of the entity you are directing your worship towards.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 47,
verse: ` <b>(46)	The Gospel of Mathew, 23rd chapter, 8th, 9th and 10th verses.</b>`,
meaning: ` <b>
(8) “But you are not to be called ‘Rabbi,’ for you have one Teacher, and you are all brothers.
<br><br>
(9) And do not call anyone on earth ‘father,’ for you have one Father, and he is in paraloka.
<br><br>
(10) Nor are you to be called instructors, for you have one Instructor, the Messiah. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Some may refer to a preacher as a father or consider gurus who preach equal to a father. However, the verse states that no one should be called a preacher. It says not to call anyone Rabbi, as there is only one master, and all others are brothers, as stated in the verse. A preacher is someone who teaches, but the verse refers specifically to one who teaches divine wisdom. According to the verse, only one person knows divine wisdom, and no one else does. Why do the rest of them not know? Who is the one who knows? The answer to those questions is as follows.

  God’s wisdom is not known to anyone except God, as stated in the divine scriptures. It is also mentioned in the divine scriptures that God did not pass His wisdom onto any human being. This means that no person knows God’s wisdom. Therefore, no one can teach God’s wisdom. Hence, you should not be called Rabbi, as stated in the verse. Only God can teach the wisdom of God. Thus, it is said in the verse that your master is only one, and He is God. A human being is not a master (teacher), and all human beings are brethren, as stated in the verse.

  Everyone has biological parents. Everyone believes that the visible parents from childhood are the real parents. Many elders advise that you should respect your parents. Everyone respects their biological parents. It may be said that there are no other mother or father figures except for the visible parents. All of this is worldly related. However, every man has invisible, unknown parents according to divine wisdom. If asked whether visible parents are real parents or invisible parents are real parents, it becomes evident that invisible parents are real parents. The reason we say this is that the father is the seed donor for every human being. Accordingly, <b>God (Atma), the unseen father, is the seed donor of all living beings.</b> Hence, the invisible father becomes the real father. Whether we know it or not, our birth father is Atma. Therefore, <b>do not call any man your father upon the earth, for one is your father, who is in paraloka,</b> as said in the verse.

  The verse states that the visible preacher is not the true preacher, the biological father is not the actual father, and the visible guru is not the right guru. Many teach something and are called gurus. If you are called a guru, then you are playing a role that is not suitable for you. God alone can come to earth as a Guru at any time. When God incarnates as a human being, He becomes the Guru and teaches wisdom. Therefore, we should understand that <b>the incarnation of God as a man on earth is the true Guru.</b>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 48,
verse: ` <b>(47)	The Gospel of Mathew, 23rd chapter, 15th verse.</b>`,
meaning: `  <b>
(15) “Woe to you, teachers of the law and Pharisees, you hypocrites! You travel over land and sea to win a single convert, and when you have succeeded, you make them twice as much a child of hell as you are.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Religion did not exist until three thousand years after Kali Yuga. Two thousand years ago, when Christianity was born, Christians initially emerged as groups and later formed a Christian community. After some time, the Christian community claimed itself to be a Christian religion. Thus, the first religion was born. After claiming to be a Christian religion, they tried to expand their faith. Others later identified themselves as a religion based on their teachings. Thus, religions were created one after the other. Very soon, twelve religions formed on earth. After the creation of religions, some people became involved in expanding their faiths. They traveled over land and sea to convert others to their religion.

  Religion is created by people’s will, not by God’s wisdom. In these religions created by people, there appears to be divine wisdom, but the wisdom in them is contrary to the wisdom revealed by God. Hence, a person who relies on divine wisdom and scripture, regardless of religion, will understand God’s teachings and wisdom. If a person is tied to religion and claims to belong to a specific religious group, they will understand Maya’s wisdom. If a person embraces religion, he will become entangled in sin. On the other hand, a person without religious affiliation will be eligible to enter the kingdom of paraloka.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 49,
verse: `<b>(48) The Gospel of Mathew, 24th chapter, 35th verse.</b>`,
meaning: ` <b>
(35) Sky and earth will pass away, but my words will never pass away.       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> Paramatma (God) does not speak. Atma, which resides in the body, can speak. Atma is the second creator and the second God. Atma, present in the body, communicates through speech. The second God (Atma) imparts much wisdom to humanity. The wisdom taught in this manner is conveyed through words. Atma’s teachings from the body, in the form of words, will never pass away, even if the sky and earth were to pass away, as stated in the verse. What is important to note here is <b>that the sky and earth mentioned will pass away, but my words will never pass away.</b> But it can be said that the sky and the earth never pass away. However, the verse seems to convey that the sky and earth will pass away. Therefore, we should understand that both the sky and earth mentioned in the verse are not the sky and earth we see. The sky and the earth described in the verse are perishable. The earth and the sky that never perish are one type, while the perishable earth and sky are another kind. In Prakruti, which is in the form of the human body, there is the sky, air, fire, water, and earth. All of them—the first sky, the last earth, and the remaining air, fire, and water— in the form of the body are perishable. <b>The human body will perish, but the wisdom imparted from man will never pass away.</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 50,
verse: `<b>(49)	The Gospel of Mathew, 24th chapter, 42nd verse. </b>`,
meaning: ` <b>
(42) Therefore, keep watch, because you do not know on what day your Lord will come.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Whenever there is a threat to God’s dharmas on Earth, and Satan’s dharmas spread extensively, God sends a part of Himself to the earth to protect His commandments (dharmas). Whenever there is a need, God must come as a human being. Krishna in the Dvapara Yuga and the Lord Jesus in the Kali Yuga came in that manner. Remarkably, we could identify them after they arrived and left, but when they were on Earth, we could not identify who they were. No one recognized when God Himself came as the Lord. Even those who saw His glory could not know that He was God but thought He was great. In Dvapara Yuga, Krishna said, <b>“I will come when dharmas are polluted.”</b> He came again as Lord Jesus and reiterated His dharmas. There will not be any difference in the commandments He gave, either in Dvapara Yuga or Kali Yuga. But there are no similarities in their names, lives, and lifestyles. Hence, Satan emphasized their external differences and tricked humans into not realizing that both were the same. Man needs some wisdom in order to know who has come, who is to come, when He has come, and when He can come. As long as man is in ignorance, he does not know God’s coming and remains unaware even after God has come and gone. Therefore, if people want to know God’s arrival and recognize Him, they must possess wisdom related to God. Nowadays, God’s wisdom is not known, and Satan’s wisdom is widespread. Hence, <b>“You do not know on what day your Lord will come,” said the verse. “Stay awake to know Him,”</b> is also mentioned in the verse. Here<b> ’stay awake’ means having wisdom.</b>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 51,
verse: ` <b>(50) The Gospel of Mathew, 26th chapter, 26th, 27th and 28th verses.</b>`,
meaning: `<b>
(26) While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, “Take and eat; this is my body.”
<br><br>
(27) Then he took a cup, and when he had given thanks, he gave it to them, saying, “Drink from it, all of you.
<br><br>
(28) This is my blood of the covenant (God’s wisdom without the bonds of ignorance), which is being poured out for many for the forgiveness of sins. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  While Jesus and His twelve disciples were eating, Jesus took bread, blessed it, broke it, gave it to His disciples, and said, <b>“Take and eat; this is my body.”</b> He also took grape juice in a cup and said, <b>“All of you drink from it; this is my blood.”</b> He compared grape juice to His blood and elaborated further, stating, <b>“This is my blood of the covenant, which is being poured out for many for the forgiveness of sins.”</b> These seemingly ordinary words of Jesus should be considered among the most important of His teachings. Unfortunately, some Christians, unaware of the essence of these words spoken at mealtime, fail to grasp their significance. <b>Some interpret that Jesus spoke these words about His past or future although it was about the present.</b>

  Jesus gave grape juice in a cup and said, “This is my blood,” but He did not specify that it was the blood of His body that was shed on the cross. Nevertheless, many Christian preachers attribute the blood mentioned in this verse to Jesus’ body’s blood shed on the cross, claiming that a person’s sins are forgiven because Jesus spilled His blood for sinners. However, there is a discrepancy between what man says and what Jesus said. Jesus did not mention His body’s blood in the verse. In such cases, it would be unfair to say that Jesus shed His blood for sinners. On that day, those who put Jesus on the cross, made Him spill His blood, and caused His death committed a terrible and unforgivable sin. However, it would be incorrect to assert that people’s sins were forgiven and will be forgiven by Jesus’ death.

  When Jesus gave grape juice to His disciples and said, <b>“This is the blood of the covenant, which is being poured out for many for the forgiveness of sins,”</b> He used the present tense, indicating that it was happening at that moment, and did not mention a future event. He did not allude to the future spilling of His blood on the cross. Therefore, it would be incorrect to claim that the blood spilled on the cross was for the forgiveness of sins. <b>Those responsible for Jesus spilling His blood on the cross received sin, not forgiveness of sin.</b> What Jesus referred to was the blood of the covenant, signifying God’s wisdom, which is not bound by ignorance. He taught this divine wisdom daily, comparing it to the pouring out of the blood of the covenant from His mouth. He imparted the fire of wisdom each day to burn away human sins, likening His teachings to covenant blood flowing from His mouth. The true meaning of this verse can only be understood through careful analysis.

  The meaning of the statement is poorly understood because the word ‘covenant’ is often omitted from the phrase ‘covenant blood’ with only the word ‘blood’ being considered. It is not realized that ‘covenant’ means ‘wisdom with dharmas.’ Another reason for mentioning ‘blood’ in the verse is not physical blood. The physical body is full of blood, and as long as there is blood in the body, the body is alive. If the body sheds its blood, the body dies. According to this, it becomes known that the essence of the body is blood. While they were eating, Jesus first took bread and gave it to His disciples, saying, <b>“Take and eat; this is my body.”</b> Here He compared bread with His body. Then He took grape juice in a cup and gave it to them, saying, <b>“This is my blood of the covenant.”</b> He said about the bread, “This is my body. Eat this.” Jesus compared the bread to His body and instructed them to eat it. If you eat bread, then you are eating Jesus’s body. The basis and the essence of the body is its blood.

  When comparing divine wisdom to the covenant blood, the body of bread can be likened to the Holy Scripture and God’s wisdom. In this way, <b>the body contains blood, and the scripture contains wisdom. Eating the body means reading the scripture and reading it will reveal the essence of its wisdom. Drinking blood means understanding wisdom.</b> Unfortunately, people often focus only on the bread and grape juice that Jesus gave, without realizing that the bread represents the divine scripture, and the grape juice represents its wisdom. <b>Jesus compared the scripture to His body (bread) and the wisdom within it to blood (grape juice). The shedding of the blood of the covenant refers to the wisdom with dharmas being taught at that time.</b> Many have failed to recognize that Jesus compared the scripture to His body and its wisdom to blood, leading to the mistaken belief that the blood shed on the cross was for the forgiveness of sins.

</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 52,
verse: `<b>(51)	The Gospel of Mathew, 28th chapter, 18th verse.</b>`,
meaning: `<b>
(18) Then Jesus came to them and said, “All authority in paraloka and on earthhas been given to me. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In Telugu, ‘Loka’ means having experiences. In Loka, we encounter both hardships and pleasures. The experience of pleasure is called Svarga Loka (heaven), while the experience of hardship is referred to as Naraka Loka (hell). Loka is not a separate country or special place; rather, it is the sum of all experiences. According to one’s experiences of pleasure and sorrow, Loka is divided into heaven and hell. All experiences of heaven and hell take place on earth and are not separate physical locations. So, depending on the experiences, we may refer to them as heaven or hell, but in reality, both heaven and hell exist on earth.

  There are two types of lokas on earth – Ihaloka and Paraloka. <b>Ihaloka involves experiences, whereas Paraloka does not have any experiences.</b> Both Ihaloka and Paraloka exist on earth. ‘Para’ means different or separate. Paraloka means something different from experiences. In other words, Paraloka has no experience and is distinct from the loka. In Telugu, ‘manishi’ means the one who acquires experiences through the manas (mind). Therefore, all people on earth belong to Ihaloka. No man has seen Paraloka. A body-wearing man is never without experiences. Therefore, it can be said that every person belongs to the loka and is living in Ihaloka. It may be said that the one with no experience is in Paraloka. <b>“All authority in Paraloka and on earth has been given to me,” said</b> the above verse.

  If Jesus were an ordinary man, He would be in Ihaloka and not know Paraloka. Despite appearing to be an ordinary man, his body only had Atma and not Jeevatma. Atma lived in Jesus’s body and pretended to be a Jeevatma. Both Atma and Jeevatma exist in all humans, where Atma performs all body functions, and Jeevatma experiences joy and sorrow at work. In this way, it can be said that Jeevatma in a person’s body is in heaven at times and in hell at other times. But when God comes as a human, His body does not have Jeevatma. Although Atma works in the body of the Son of God, it does not experience anything. Therefore, He is said to be in Paraloka. Since Jesus was not an ordinary man, He has authority on earth (Ihaloka) and Paraloka. The Holy Spirit, Paramatma, gave Atma (Jesus) complete authority. Jesus, who is Atma, is also the head of divine wisdom. God’s wisdom is now known to anyone except to God. Therefore, the subject of souls is unknown to people. Jesus taught the wisdom of three souls and instructed His disciples, who knew the wisdom of the souls, to teach Atma’s wisdom to all people.
</div></div>
</span>
`
},
{
chapterName: "L'Évangile selon Matthieu",
chapterNumber: 2,
pageNumber: 53,
verse: ` <b>(52)	The Gospel of Mathew, 28th chapter, 19th and 20th verses.</b>`,
meaning: ` <b>
(19) Therefore, go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.
<br><br>
(20) Teaching them to obey everything I have commanded you. And surely, I am with you always, to the very end of the age (Yuga).       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The Gospel of Matthew has 28 chapters. The last verses, 19th, and 20th of chapter 28, contain the secret of the entire spiritual education. The information about the three souls mentioned in verse 19 is the most important wisdom in scripture. In this verse, the word ‘Father’ is used before the word ‘Son,’ requiring careful consideration to understand it. Those who reflect on this will know that the sequence is the Son, the Father, and the Holy Spirit. To further explain, <b>one must understand that the Son is Jeevatma, the Father is Atma, and the Holy Spirit is Paramatma.</b> There are no other souls in the world besides these three. According to the Thraitha theorem, these three souls are Jeevatma, Atma, and Paramatma.

  Baptism means upadesa. In Telugu, ‘Upa’ (sub) means adjacent. Upadesa means a neighboring or adjacent country. In more detail, it means “leaving this country where you are now and getting permission to go to the adjacent or neighboring country.” An officer must first give permission to go to the neighboring country. That officer can be called a Guru. Guru means the one who is the head of the neighboring country or Paraloka. No matter how many gurus are on earth, God, the head of Paraloka, is the true Guru. God, the ruler of Paraloka, is the true Guru who gives us true baptism when He comes to earth as a man. Although there are many gurus on earth, they are all gurus in name only. The baptism they give is in name only.

  When God, the real Guru, is not on earth as a human, according to the tradition of wisdom, preachers must make some disciples and give them upadesa. Upadesa is like permission to the neighboring country. In the upadesa process, the guru instructs disciples with water, with a mantra, word, or Vibhuti (sacred ash). Upadesa is permission to Paraloka, and the word or water is like a ticket recognizing the entry to Paraloka. Most gurus use a mantra or a word in the upadesa process. Similarly, Jesus told His disciples, <b>“Go and make people of all nations disciples.”</b> He also told His disciples to baptize them when they became disciples. When giving the disciples the permission ticket in the upadesa process, He said, “Baptize them in the name of the three souls - the Father, the Son, and the Holy Spirit.” According to the wisdom tradition, baptism should be done this way. So, when John, a Guru, gave baptism, He administered baptism with water. According to that method, Jesus also received upadesa from John. At that time, John saw Jesus and spoke.

  This is what the Gospel of Matthew says in verses 3:14 and 3:15. <b>When Jesus came to Him, John tried to deter Him, saying, “I need to be baptized by you, and do You come to me?” Jesus replied, “Let it be so now; it is proper for us to do this to fulfill all righteousness (wisdom).”</b> Even Jesus said one must receive baptism from the Guru according to the wisdom tradition. I also said the same thing about baptism. Jesus authorized His disciples to give baptism and said, “All people need to be baptized, not just a caste or a group.” He also told them to give an entry document of the Father, the Son, and the Holy Spirit. Jesus told His disciples to do the work because God could not always be on earth as a man to give upadesa. In addition to baptism, Jesus also told His disciples to teach them to obey all things He told His disciples.

  Jesus also said, “I am always with you,” without causing doubt in the disciples that they were not gurus. He notably said, <b>“I am with you always, even unto the end of yuga.”</b> Those who know about yugas may pose a question when they hear what Jesus said. Yuga (era) does not end, and another yuga starts at the end of the current yuga. In that case, why did Jesus say that there is an end to the yugas, when there is no end to them? The answer is as follows. Time is eternal and lasts forever, just like God (Paramatma). Time, being a nickname for God, is also eternal. Since time is Paramatma, the three souls are named after the time. Paramatma is divided into three souls – Jeevatma, Atma, and Paramatma. The names past, future, and present tense are given to the time so that the time has these three names appear in it. The name ‘yogam,’ necessary to reach God, is given to time. In this way, the four names are given to time, and the word ‘yogam’ is appended at the end of all four names to indicate ‘yogam’ is necessary to reach God.

  Time is divided into four parts named Kruta, Traita, Dvapara, and Kali, respectively. The word ‘yogam’ is added to the end of each name, creating the names Kruta Yuga, Traita Yuga, Dvapara Yuga, and Kali Yuga. <b>Kruta means the one (Atma) who does. Traita means three. Dvapara means the one (Paramatma) who is separate from the two. Kali means the one (Jeevatma) who gets destroyed.</b> The first divine scripture refers to these three souls as <b>Kshara, Akshara, and Purushottama.</b> In Telugu, Kshara means destructible Jeevatma, Akshara means indestructible Atma, and Purushottama means Paramatma, who is superior to both Jeevatma and Atma. In the final divine scripture, verse 50:21, these three are referred to as <b>the Passenger, the Driver, and the Witness,</b> and in the second divine scripture, <b>the Son, the Father, and the Holy Spirit. Yogam</b> is necessary to understand these three males (Purusha), which is why the word ‘yogam’ is added to the end of the four yuga names. Through yogam, Jeevatma can know himself; hence it is called Kali Yogam. With yogam, Atma will be known; hence it is called Kruta Yogam. By yogam, one can reach Paramatma; therefore, it is called Traita Yogam and Dvapara Yogam. Those who are rich in divine wisdom gave these names. Over time, Traita became Treta, and the word yogam became yuga. This is why in the verse, <b>‘end of the yuga’</b> is used instead of <b>‘end of the yogam.’</b> When the correct word is used, Jesus’ statement “I will always be with you until the end of the yogam” can be interpreted as “I am with you always until the conclusion of the yogam.” When Jeevatma reaches the end of yogam, He unites with God. When God and Jeeva are separate, yogam is necessary to union with God and God will be present with Jeevatma. <b>Once yogam is completed, Jeevatma will merge with God,</b> and there will no longer be a need for God to be present with Jeevatma. This is the meaning behind the statement <b>“until the end of the yuga.”</b>
</div></div>
</span>
`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 54,
verse: ` <b>(1)	The Gospel of Mark, 2nd chapter, 19th and 20th verses.</b>`,
meaning: `<b>
(19) How can the guests of the bridegroom fast while he is with them? They cannot, so long as they have him with them.
<br><br>
(20) But the time will come when the bridegroom will be taken from them, and on that day they will fast. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Some people came to Jesus and asked, “Why is it that John’s disciples and the disciples of the Pharisees are fasting, but not yours?” Jesus replied with the following verses. In this context, fasting refers to abstaining from food, a common worldly meaning. In Telugu, the word for the bridegroom is ‘Pellikoduku,’ which translates to ‘son of marriage.’ In Telugu, the phrase ‘son of marriage’ holds a special meaning because the word ‘marriage’ (or ‘Pelli’ in Telugu) symbolizes God in a spiritual sense. Therefore, the ‘son of marriage’ refers to the Son of God. When Jesus, the Son of God, is with His followers, they will experience joy and not fast. However, when the bridegroom (the Son of God) is taken away from them, those who were with Him will fast with grief because He is departing from them. Similarly, Jesus’ disciples will not fast as long as He is present with them. When Jesus is absent, they will fast in sorrow. The phrase ‘bridegroom’ (the son of marriage) should be understood as referring to the Son of God.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 55,
verse: `<b>(2) The Gospel of Mark, 4th chapter, 38th and 39th verses.</b>`,
meaning: ` <b>
(38) Jesus was in the stern, sleeping on a cushion. The disciples woke him and said to him, “Teacher, don’t you care if we drown?”
<br><br>
(39) He got up, rebuked the wind, and said to the waves, “Quiet! Be still!” Then the wind died down and it was completely calm. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When Jesus and His disciples were crossing the sea in a small boat, they encountered a storm, and the boat began taking on water due to the waves. The disciples were terrified and feared that they would drown. They awoke Jesus and informed Him of the perilous situation. Jesus rose, rebuked the wind, and commanded the waves to be still. The wind ceased, and a calm descended upon the sea. The disciples were amazed and asked one another, “It is a great wonder, and how did it happen?” They recognized Jesus’ power, but they didn’t fully understand the reason for it. There is remarkable wisdom in this incident.

  Jesus is not an ordinary man; it must be emphasized that He is God, who looked and behaved like an ordinary man. When God, the Holy Spirit, comes in human form, no one can recognize Him. The birth of God is a secret when He is a human being, and no one can ever know Him through worldly knowledge. It may only be possible to know Him through wisdom. There are two ways to recognize God’s incarnation based on wisdom: 1) It can be known that there is God’s incarnation wherever God’s dharmas, which no one has explained, are revealed scientifically. 2) It can be said that Paramatma is in human form wherever Prakruti is governed. No one can recognize God’s incarnation apart from these two methods.

  Devatas bowed down to Ravana Brahma in Traita Yuga. When He ordered the nine planets, it became known that He was no ordinary man. Ravana Brahma taught divine dharmas, which were unknown to anyone, and made people practice them. Thus, it became known that Ravana Brahma is God’s incarnation. Similarly, it became known that Krishna in Dvapara Yuga was God’s incarnation when He commanded Sun and taught dharmas in Bhagavad-Gita. Jesus, who came as a man 2,000 years ago, became recognized as God in two ways: by commanding the sea and teaching divine dharmas. The storm during the sea voyage seemed to serve the purpose of making people aware of who Jesus was. Even though God’s incarnation is secret, God provided this opportunity to know.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 56,
verse: `<b>(3)	The Gospel of Mark, 5th chapter, 38th, 39th, 40th, 41st, 42nd and 43rd verses.</b>`,
meaning: `<b>
(38) When they came to the home of the synagogue leader, Jesus saw a commotion, with people crying and wailing loudly.
<br><br>
(39) He went in and said to them, “Why all this commotion and wailing? The child is not dead but asleep.”
<br><br>
(40) But they laughed at him. After he put them all out, he took the child’s father and mother and the disciples who were with him and went in where the child was.
<br><br>
(41) He took her by the hand and said to her, “Talitha koum!” (which means “Little girl, I say to you, get up!”).
<br><br>
(42) Immediately the girl stood up and began to walk around (she was twelve years old). At this they were completely astonished.
<br><br>
(43) He gave strict orders not to let anyone know about this and told them to give her something to eat.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  It is a great surprise when a person comes back to life after being declared dead. Jesus brought several people back from the dead during His life. He not only resurrected others, but He also rose from the dead Himself. If we contemplate this event, some unknown mysteries will be uncovered. There are four types of death: timely death (natural death), untimely death, temporary death, and final death. Once a person experiences the final death, they will not be born again; instead, they attain liberation or moksham. Natural death is the most common form of death, in which a person leaves their current body and goes to the next birth. There is no option other than going to the next birth in natural death.

  In the case of an untimely death, a person does not entirely die but instead loses half of their body and continues to live with the remaining half. Although it may seem unbelievable, this is what happens. The human body consists of two parts. The human body and the bodies of all living beings consist of both physical (visible) and non- physical (subtle) parts. In the case of the human body, the physical body is comprised of ten parts, and the subtle body is comprised of fifteen parts. In the event of an untimely death, a person leaves behind their physical body of ten parts and continues to exist with their subtle body of fifteen parts. As a result, someone who has experienced an untimely death can be considered ‘half-dead.’ When the rest of the subtle body eventually dies, it leads to natural death, and the person goes to the next birth. During untimely death, the person is not visible, but they continue to exist with their subtle body until they experience natural death.

  Currently, no one is aware of what happens during temporary death. In a temporary death, all bodily functions cease, and the Jeevatma remains in the body but is in a state of sleep. In temporary death, the person appears dead, but the Jeevatma remains in the body. This has led to incidents where people who experienced temporary death were mistakenly declared dead and buried, even though they were still alive. No one can detect that a person who has undergone temporary death is not actually dead. As a result, there have been numerous instances of people being buried alive.
<ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
The Story of Abdul Aziz in Jammu and Kashmir
</b></ion-col></ion-row>
  On December 7, 2009, a story aired at 1:30 pm on the TV9 channel. Abdul Aziz, a 60-year-old man, had passed away a week earlier, on November 30, 2009, in Rajouri, a village in Jammu and Kashmir. Following Islamic tradition, as he was a Muslim, he was buried.

  Three days after his burial, the police received a complaint alleging that Abdul Aziz had not died naturally, and that foul play might be involved. The police promptly registered the case, proceeded to the cemetery, and exhumed Abdul Aziz’s corpse in the presence of his relatives. His body was then sent to a government hospital for a post- mortem examination.

  During the autopsy, the doctor first hit the head with a knife to examine the skull, and the head was injured. To the astonishment of everyone present, Abdul Aziz, presumed dead until then, woke up and inquired about the situation. The incredulous doctor, still processing the unexpected turn of events, sat down, and asked, “We are doing an autopsy.” Abdul Aziz calmly replied, “I am alive.” The doctor immediately informed Abdul Aziz’s relatives of the miraculous incident, and they arrived to take him back home.

  Three days before, the same doctor had examined Abdul Aziz for fifteen minutes and confirmed his death. The doctor, recognizing the extraordinary nature of this event, described it as a miracle. The people of Rajouri village were equally astonished that Abdul Aziz, whom they had buried with their own hands, had come back to life three days later. As of now, six years and seven months have passed since the incident occurred. All TV channels aired this news on the same day. Given that this incident transpired in the presence of doctors, it remains undeniable and beyond mere superstition.
  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  An Incident in Visakhapatnam district
  </b></ion-col></ion-row>
  Srungavarapu Kota is situated on the way to Araku Valley in Visakhapatnam. There is a village named Saarepuram, located 12 km away from Srungavarapu Kota. In this village, lived a 67-year-old woman named Samudramma who had been suffering from high blood pressure and diabetes for ten years. She received medical treatment from Dr. Dharmalingachari, a senior doctor at Srungavarapu Kota. Dr. Dharmalingachari was a well-known 60-year-old veteran with a degree in M.B.B.S.

  Six years ago, one evening at 6 PM, Samudramma was brought to Dr. Dharmalingachari after being pronounced dead by doctors at a government hospital. When the doctor examined her, he could not find a pulse. He declared her dead, stating that she did not need any medical treatment as she had no breathing or pulse. Her body was taken back to their village, 12 km away, to be buried the following day as it was already night. However, Samudramma’s body was kept in the porch for three days due to heavy rain that lasted for two days. To everyone’s surprise, she got up and called out to her relatives on the fourth morning. They immediately contacted Dr. Dharmalingachari and brought her to him after 15 days. The doctor then asked her if she had seen Yama’s servants or Yamaloka, as she had been declared dead for three days. She said she did not see anything.

  This incident occurred six years ago in the presence of a doctor, so it cannot be denied or dismissed as superstitious.
  <ion-row><ion-col class="ion-text-center" style="font-size:20px"><b>
  Survivor from Pyre (Translated from a Telugu Newspaper) July 10, 2012, Sakshi News
  </b></ion-col></ion-row>
<b>Chennai:</b> On Tuesday, doctors confirmed the death of 50-year-old Muttuswamy of Krishurayapuram in the Karur district of Tamil Nadu. They advised his relatives to proceed with the funeral rites. Believing that Muttuswamy had succumbed to old age and illness, the relatives gathered at the cemetery to perform the pyre.

  As they were about to commence the fire, Muttuswamy’s sister Paapatti approached the body. Overcome with grief, she fell onto the corpse and cried out, “Brother, will you leave me?” In that poignant moment, Muttuswamy’s legs and arms moved, and there was a slight groan. The tearful relatives were shocked and shouted, “Muttuswamy...Muttuswamy!” Muttuswamy woke up from the pyre as if he had just risen from sleep and asked his relatives what had happened. They all embraced Muttuswamy with happiness and took him back to the hospital. Notably, Muttuswamy’s daughter had gotten married just the day before.

  <b>Doctors’ Negligence:</b> Relatives criticized the doctors for their negligence in treating Muttuswamy, who had been admitted to a local hospital ten days ago after falling ill. They condemned the doctors for the incident, and the news quickly spread throughout the Karur district. This incident sparked widespread debate and was seen as another example of temporary death.
<img src="assets/img/temp_death.png"/>

  If someone experiences temporary death, they may survive in that state for up to a year or more. The revival can occur either spontaneously or with the help of someone tapping or waking them up. In many cases, individuals who undergo temporary death in the morning awaken in the evening, while others regain consciousness after a week or more. Recently, a man named Muttuswamy in Tamil Nadu came back to life after being on a funeral pyre. Similarly, Jesus resurrected a girl who had experienced temporary death, declaring that she was not actually dead. There is also a historical account of Jesus reviving Himself. It is important to note that all these incidents were attributed to temporary death. Our scripture, <b>‘The Mystery of Death,</b> ’ delves into the four types of death and their reality. Reading this scripture will provide you with a comprehensive understanding of the various types of death.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 57,
verse: `<b>(4)	The Gospel of Mark, 7th chapter, 15th, 16th, 17th, 18th, 19th, 20th, 21st, 22nd and 23rd verses.</b><`,
meaning: `<b>
(15) Nothing outside a person can defile them by going into them.
<br><br>
(15) Rather, it is what comes out of a person that defiles them.
<br><br>
(17) After he had left the crowd and entered the house, his disciples asked him about this parable.
<br><br>
(18) “Are you so dull?” he asked. “Don’t you see that nothing that enters a person from the outside can defile them?
<br><br>
(19) For it does not go into their heart but into their stomach, and then out of the body.”
<br><br>
(20) He went on: “What comes out of a person is what defiles them.
<br><br>
(21) For it is from within, out of a person’s heart, that evil thoughts come sexual immorality, theft, murder,
<br><br>
(22) adultery, greed, malice, deceit, lewdness, envy, slander, arrogance, and folly.
<br><br>
(23) All these evils come from inside and defile a person.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Man is born with six bad gunas and six good gunas. Gunas also grow along with the individual, influencing the buddhi located in the head and prompting external actions under its command. Buddhi instructs karmendriyas (organs of action) to perform actions outside the body, operating in accordance with gunas. As Buddhi works in alignment with gunas, the negative gunas influence buddhi, which then directs the actions of gunas, and the external senses respond according to buddhi’s command. These gunas manifest as undesirable qualities such as greed (kaama), anger (krodha), avarice (lobha), passion (moha), arrogance (madam), and jealousy (matsara). The gunas first impact the buddhi and subsequently govern the body from there. All the wrongs committed by humans are rooted in the influence of gunas within the body.

  Food consumed from the outside contributes to the body’s health but does not affect the buddhi. Such food is converted into nutrients, promoting physical well-being. The food humans eat has no direct impact on the buddhi; it enters the body, supporting overall health. When food benefits the body, it strengthens and maintains good health. Therefore, the food entering the body externally does not lead to undesirable behavior in humans. It is the effect of the gunas originating from within the body that can result in negative conduct. Consequently, deviating from dietary rules may be acceptable, but maintaining control over the gunas is crucial.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 58,
verse: ` <b>(5)	The Gospel of Mark, 3rd chapter, 35th verse.</b>`,
meaning: ` <b>
(35) Whoever does God’s will is my brother and sister and mother.     </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> When we question what God’s will is, we can understand that His commandments (dharmas) represent His will. By obeying His commandments, we align ourselves with God’s will. Conversely, if we act according to our own desires without adhering to His commands, we violate His guidance and follow Satan’s will. When God incarnates on earth as Bhagavan, those who comprehend His wisdom, act in accordance with it, propagate His teachings, and disseminate His commandments will draw closer to him. Conversely, those who choose the path of Satan become adversaries of God. Those who actively promote God’s words and adhere to His commandments are regarded as His sisters, brothers, and closest followers. Whether God is physically present on earth or not, it's crucial to recognize that gnanis (those possessing wisdom) within His boundaries who follow His commands will be considered close to God.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 59,
verse: ` <b>(6)	The Gospel of Mark, 4th chapter, 17th verse.</b>`,
meaning: `<b>
(17) But since they have no root, they last only a short time. When trouble or persecution comes because of the word, they quickly fall away. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In the Gita, Lord Krishna speaks of four kinds of devotees: 1) Those who worship in trouble, 2) Those who pray for wealth, 3) Those who are interested in knowing about God, 4) Those who possess wisdom (Gnanis). The Lord said in the Gita that He favors Gnanis. Similarly, Lord Jesus talks about four types of devotees in the Bible, but the verse referred to here pertains to only one of these types. Some individuals are curious about God’s wisdom and seek to follow it. Satan begins to tempt them in its way. They face many troubles in that process. When they encounter difficulties because of wisdom, Satan begins to preach in their heads. Satan says to them, “You are facing troubles because you know wisdom. Don’t be foolish. You can escape the coming problems by pretending to be on the wisdom path.” Those who do not understand the true essence of wisdom may start to act accordingly. After some time, if the person faces problems because of wisdom or Guru, and these issues lead to conflicts with others or fears of persecution, Maya will take advantage of the situation. Maya creates these kinds of thoughts in the person’s head, and individuals may start to think, “I should have been wiser from the beginning. I got into this situation because I followed the Guru for wisdom, even though my close relatives warned me not to. Why should I suffer for this wisdom? It is better to abandon wisdom and the Guru. Blindly following wisdom will only lead to ruin for my family and me. Since we are in the world, we must conform to its ways. Those in the forest face no problems regardless of their actions, but it would be foolish for us in the village to go against the norms.” Such thoughts can cause individuals to distance themselves from wisdom, even after being on the path for some time. Therefore, Jesus said that even those who have been on the path of wisdom for some time will object when there is toil and torture for the sake of wisdom.

  Those who truly value God’s wisdom and understand its importance will not fall prey to Satan’s temptations. One cannot escape the clutches of Satan unless they value wisdom and their Guru more than their wife, close friends, and even their own life, despite knowing that they may face persecution or death on the path of wisdom. Even the disciples of Lord Jesus were afraid of the guards on the day of His arrest and abandoned their Guru to save their own lives. They fled with fear due to trouble and persecution. If they had also been prepared to face death along with Lord Jesus on that day, their lives would have been blessed. Maya obstructed the disciples partially that day. Unlike them, we should stand firm in the face of any trouble or persecution on the path of wisdom. Blessed is the one who is willing to die for the divine path rather than living in fear on the path of ignorance. In the Bhagavad-Gita, the Lord said, <b>“It is better to die in Paramatma’s dharma, which is your dharma, than to fear in the path of Satan, which is not your dharma.”</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 60,
verse: ` <b>(7)	The Gospel of Mark, 4th chapter, 21st and 22nd verses.</b>`,
meaning: `<b>
(21) He said to them, “Do you bring in a lamp to put it under a bowl or a bed? Instead, don’t you put it on its stand?
<br><br>
(22) For whatever is hidden is meant to be disclosed, and whatever is concealed is meant to be brought out into the open.     </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In the present time, many gurus are saying that disciples should not share their wisdom with others. They say that their wisdom is confidential and should only be shared with those who have received upadesa. When someone asks them a question, they avoid answering it. However, wisdom should not be concealed. God Himself comes in human form and takes the trouble to convey wisdom. Although we do not know the true wisdom, we should not make excuses for sharing the little wisdom that we know. Wisdom is like a lamp that removes ignorance in others. Just as an object in darkness can be seen in the lamp’s light, an unknown thing in ignorance can be understood with wisdom. Wisdom is needed to dispel ignorance, just as a lamp is required to dispel darkness. Lighting a lamp and then keeping it under a bowl is foolish. Similarly, it is unwise not to share the wisdom that you have. Even secrets are meant to be disclosed. Bhagavan revealed the best divine wisdom in the world. In that case, anything of lesser value than wisdom cannot be concealed. No mystery in the world can be kept hidden; it will surely come out. God’s wisdom is necessary for everyone and should not be kept a secret. Those who want to conceal it cannot do so.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 61,
verse: `<b>(8)	The Gospel of Mark, 6th chapter, 4th verse.</b>`,
meaning: `<b>
(4) Jesus said to them, “A prophet is not without honor except in his own town, among his relatives and in his own home.”      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In Telugu, a prophet is defined as someone who teaches something important. The wisdom of Paramatma is the most essential thing for every human being. A person who imparts this wisdom is called a prophet. Ordinary humans do not know the wisdom of Paramatma, except for the one who comes from Paramatma. The one who comes from Paramatma and is born as a man is called Bhagavan or Prophet. The prophet is not honored in His own home, among His relatives, or in His own town because He appears to be an ordinary man. No matter how great someone is, it is natural to be underestimated at home and by relatives. Since they have seen the prophet since childhood, family members and relatives may ridicule Him, saying that He has no greatness and that only fools will listen to Him. They may also claim that He does not know anything beyond what they know. Even God cannot become a prophet to His own family members. Even when others recognize and speak about His greatness, His relatives and family members question what excellence He possesses. They do not recognize His importance and ridicule Him, pointing out things such as Him wetting the bed and soiling His underwear in His childhood. Therefore, while He is a prophet to others, He is not honored in His own home and town. According to this principle, Lord Jesus was not recognized as a prophet by His family and relatives.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 62,
verse: `<b>(9)	The Gospel of Mark, 8th chapter, 38th verse.</b>`,
meaning: `<b>
(38) If anyone is ashamed of me and my words in this adulterous and sinful generation, the Son of Man will be ashamed of them when he comes in his Father’s glory with the holy angels. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Some people learn wisdom in society but choose to keep it a secret. They feel that knowing wisdom is a mistake; hence, they do it confidentially. They may also feel ashamed to go to a Guru and learn wisdom from them, and therefore keep it confidential. Some individuals are in search of a Guru to become disciples but prefer a wealthy Guru due to their status and wealth. They are embarrassed to approach a poor Guru, even if that Guru has more wisdom. Consequently, they choose a wealthy Guru who may not possess much wisdom. Although some individuals have learned wisdom from a Guru, they do not want to be referred to as disciples of that Guru. Thus, many people feel ashamed and take great care to avoid being exposed.

  One may feel ashamed of material things, but one should not be ashamed of the wisdom of Paramatma. Let us consider an example. Two people are walking on the road. One is handsome but poor and unintelligent, while the other is unattractive but rich and intelligent. They are both close relatives. People who see them on the road will judge them by their outward appearance, not by their intelligence. After a while, a traveler sees them and asks the handsome person who the second person is. The handsome person is ashamed to say that the unattractive person is his close relative because of their appearance. Instead, he simply says that they know each other. The unattractive person thinks that he has been introduced as an acquaintance rather than a close relative because of his appearance. Later, another traveler sees them and asks the unattractive person who the other person is. Being intelligent, the unattractive person responds similarly by saying that they are merely acquaintances. The handsome person is pleased to be introduced as an acquaintance rather than a relative. The unattractive person thinks, "I am also ashamed to introduce this stupid person as my close relative." The unattractive person followed the behavior of the handsome person.

  The second traveler, who asked the unattractive person, had a rule for many years. His rule was to give 10,000 coins if he met close relatives. However, although they were close relatives, they did not receive the 10,000 coins because they did not introduce themselves as such. Consequently, the first poor person did not receive any money. Since the second person is rich, he does not care if he received the money or not. The first-person lost money because he was ashamed and lied. If you are ashamed of wisdom just because others do not like it, then wisdom is also ashamed of you. The first-person lost money because he was first ashamed and lied. Hence, they would not receive future profit liberation. Based on this, the Lord said, <b>“If anyone is ashamed of me and my words, I am also ashamed of them.”</b> Therefore, one should understand that it is okay to be ashamed of material matters, but one should not be ashamed of Paramatma’s wisdom.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 63,
verse: `<b>(10)	The Gospel of Mark, 9th chapter, 7h verse.</b>`,
meaning: `<b>
(7) Then a cloud appeared and covered them, and a voice came from the cloud: “This is my Son, whom I love. Listen to him!”</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Most people are not aware of the clouds in the sky. During the rainy season, the clouds produce thunder and make a loud noise. The clouds are alive and perform many tasks, but their specific roles are unknown. According to history, the Sun heard the divine wisdom that the clouds first revealed at the beginning of creation. There are no secrets unknown to the clouds on earth. God behind the clouds said about Jesus, <b>“This is my beloved Son. Listen to him.”</b> Therefore, it is God’s will that people should hear God’s wisdom from Jesus. What God says as a man is God’s wisdom, but when humans do not listen, God speaks from the clouds. Although humans may not always respect what others say, they value what the clouds say, which is why God spoke from the clouds in the sky.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 3,
pageNumber: 64,
verse: ` <b>(11)	The Gospel of Mark, 10th chapter, 17th and 18th verses.</b>`,
meaning: ` <b>
(17) As Jesus started on his way, a man ran up to him and fell on his knees before him. “Good teacher,” he asked, “what must I do to inherit eternal life?”
<br><br>
(18) “Why do you call me good?” Jesus answered. “No one is good—except God alone.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Some Christians claim that the Bible was originally written in Hebrew and then translated into many other languages. Hence, some words were not translated correctly. For example, the phrase “Good teacher” is used in the first verse, and in the second verse, “God is good.” However, based on what Jesus said, <b>“No one is good—except God alone,”</b> the word should neither be ‘Good teacher’ nor ‘Good God.’ A person who teaches wisdom eloquently can be called a good teacher, and someone who performs good deeds can be called a good person.

  There are good teachers and good people on earth. Therefore, it would be belittling God to compare them and say, <b>“No one is good—except God alone.”</b> Apart from that, there is no match between the words ‘good teacher’ in the first sentence and ‘good person’ in the second sentence. The second divine scripture, the Bible, has been translated into more languages than the other two holy scriptures. The Bible has been translated into 1,400 languages, making it the only scripture that has been translated into most languages.

  The first divine scripture is the basis for the second divine scripture, the Bible, and the last divine scripture, the Quran. The Quran provides testimony in 5:44, 5:46, 5:48, and 5:68 that <b>the wisdom of the first divine scripture, the Taurat (the Bhagavad-Gita), is also present in the other two scriptures.</b> Therefore, when we consider the words used in the Gospel of Mark, 10:17 and 10:18, we can understand that there may be many good teachers and good people in the world, but there is no Uttama Purusha (Supreme Being) among men. Hence, as stated in the Bhagavad-Gita, <b>“God alone is Purushottama.”</b> It can be said that unrelated words were used in the above verses, where the word should have been ‘Purushottama.’ This is well understood when you look at verses 16,17, and 18 in the 15th chapter of the Bhagavad-Gita, the Purushottama Prapti Yoga.

  According to the first divine scripture, there is only one Purusha. Although there is only one Purusha, God is divided into three - Jeevatma, Atma, and Paramatma. Among these three males, <b>the male who is better than Jeevatma and Atma is Paramatma, also known as Purushottama,</b> as mentioned in Bhagavad-Gita. It can be said that all except the three males are Prakruti, which is feminine. Men and women in the world are all related to feminine nature. Therefore, in the verse, Jesus said, <b>“Don’t call me Purushottama (Uttama Purusha). God alone is Uttama Purusha.”</b> There are three main religions on earth. The people of each religion took a divine scripture and said this is our scripture. However, in reality, these three scriptures are not related to any specific religion. They provide wisdom to all human beings, and therefore, they should be regarded as scriptures meant for all human beings.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Marc",
chapterNumber: 4,
pageNumber: 65,
verse: `<b>(12)	The Gospel of Mark, 16th chapter, 15th and 16th verses.</b>`,
meaning: `<b>
(15) He said to them, “Go into all the world and preach the gospel to all creation.
<br><br>
(16) Whoever believes and is baptized will be saved, but whoever does not believe will be condemned.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  After Jesus was crucified and laid in the tomb, He rose from the tomb at dawn on Sunday morning. He first appeared to Mary Magdalene and then to other disciples. Jesus appeared to the disciples thirty-three times after coming out of the tomb. He told the above two verses to the eleven disciples when they sat together for a meal. Since all humans in the world are immersed in ignorance, He instructed His disciples to go and <b>preach the gospel, which is God’s wisdom,</b> to them. The same message is conveyed in the 15th verse, <b>“Go into all the world and preach the gospel to all creation.”</b> Here, ‘all the world’ does not mean different worlds; it refers to people who earn their livelihoods on earth and suffer in various ways.

  Jesus also said, “Preach the gospel to all creation.” It means preaching the gospel, divine wisdom, to people of all ages. He said to preach them divine wisdom and grant them permission, ‘baptism,’ to go to paraloka. Baptism is like a permit to liberation or paraloka. Those who have been granted permission to paraloka will be saved by my wisdom and escape from the experience of sin. He said that the troubles of sins would punish those who are not baptized as they do not have protection from sins.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 66,
verse: `<b>(1)	The Gospel of Luke, 2nd chapter, 49th verse.</b>`,
meaning: ` <b>
(49) “Why were you searching for me?” he asked. “Didn’t you know I had to be in my Father’s business?”      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus’s parents were looking for Him, and when they saw Him, they were astonished. His mother said to Him, “Son, why have you treated us like this? Your father and I have been anxiously searching for you.” In response, Jesus said, <b>“Why were you searching for me? Didn’t you know I had to be in my Father’s business?”</b> Although Jesus’s visible (physical) father was also there, He was referring to his invisible (non- physical) Father. It is important to clarify which father Jesus was referring to so that we can understand the Father’s tasks and, consequently, comprehend the tasks Jesus would be doing and why He left his mother and father.

  In his own words, Jesus declared himself to be the Son of Man. On some occasions, He also claimed to be the Son of God. Therefore, He is both the Son of Man and the Son of God. If one asks whose sons all these people are, it can be said that all humans are sons of man. However, there is a secret involved here. For a man to be born, a seed(sperm) donor is required. Although it is natural to assume that the father is the seed donor for a man’s birth, it is important to note that, although a man appears to be male in appearance, He cannot be counted as a male because He is created as a model for a male. Both a man and his wife can be counted under the feminine Prakruti.

  Although Jeevatma, who is in a human body, is Atma-related-male, He cannot beget someone. Atma, which is in the body, made every human born. We have already stated that Atma does all the tasks in the body and is the seed donor for all beings. Jesus referred to himself as the “Son of Man,” even though He was not an ordinary man, to indicate that his Father was not the visible Joseph but rather Atma that resides within all human bodies. The first divine scripture teaches us that every living entity born from a mother’s womb has Atma as its father and Prakruti as its mother. However, Jesus was born directly without a physical father, as He was the Son of the Holy Spirit (Paramatma), who is different from Atma. This is why He is referred to as the Son of God. When Jesus met His parents, He told them He must be about His Father’s work but did not specify the father He was referring to (Atma or the Holy Spirit). In his own opinion, He considered Himself to be the Son of God. Jesus did not perform the tasks of Atma, which is in the body. He was focused on spreading God’s wisdom. The omnipresent Paramatma carries out the task of spreading divine wisdom. Therefore, Jesus intended to do His Father’s (the Holy Spirit) work. Paramatma Himself created a body and filled it with His own soul. Even though Jesus was God, He referred to Himself as the Son of Man at times and the Son of God at other times to prevent people from recognizing Him.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 67,
verse: `<b>(2)	The Gospel of Luke, 11th chapter, 37th, 38th, 39th, 40th and 41st verses.</b>`,
meaning: `<b>
(37) As Jesus was speaking, one of the Pharisees invited him home for a meal. So, he went in and took his place at the table.
<br><br>
(38) His host was amazed to see that he sat down to eat without first performing the hand-washing ceremony required by Jewish custom.
<br><br>
(39) Then the Lord said to him, “You Pharisees are so careful to clean the outside of the cup and the dish, but inside you are filthy—full of greed and wickedness!
<br><br>
(40) Fools! Didn’t God make the inside as well as the outside?
<br><br>
(41) So, clean the inside by giving gifts (dharmas) to the poor, and you will be clean all over.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The last verse states, <b>“Clean the inside by giving gifts (dharmas) to the poor, and you will be clean all over.”</b> Unfortunately, humans have not correctly understood this verse and have interpreted it in various ways. When Jesus mentions ‘giving gifts,’ people have construed it as donating money, clothes, and food to the poor. However, Jesus did not assert that external acts of charity would purify a person from within. His intention was that the practice of dharma should be internalized, and only then would inner evils be cleansed. Jesus did not prioritize external cleanliness but instead underscored the purification of inner qualities (gunas). Therefore, He encouraged others to follow the path of dharma, which opposes the gunas. Jesus Himself experienced inner purification and adhered to the path of dharma. That is why He urged others to traverse the same path.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 68,
verse: `<b>(3)	The Gospel of Luke, 12th chapter, 4th and 5th verses</b>`,
meaning: ` <b>
(4) I tell you, my friends, do not be afraid of those who kill the body and after that can do no more.
<br><br>
(5) But I will show you whom you should fear: Fear him who, after your body has been killed, has authority to throw you into hell. Yes, I tell you, fear him.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Humans can harm the body, but they cannot harm the Jeevatma within. Jeevatma, being invisible from the outside, remains unaffected. Since the body is visible, others can only inflict harm upon it, not the Jeevatma. Therefore, there is no need to fear such individuals. The only one to be feared is God. Even in death, God evaluates our sins, administers punishment, and causes suffering. The ties between individuals are severed after death. Even if the deceased is reborn in the murderer’s household, they will not recognize the murderer as an enemy. However, God recognizes the Jeevatma even after death and is aware of its subsequent births. Hence, it is crucial to fear God, who holds us accountable for our karma after death. There is no need to fear other humans who cannot harm the Jeevatma and will not recognize us after death.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 69,
verse: `<b>(4)	The Gospel of Luke, 12th chapter, 25th verse.</b>`,
meaning: ` <b>
(25) Which of you by worrying can add to his stature one cubit?       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Even though individuals believe that they are accomplishing everything through their intelligence, there is no inherent connection between them and their intelligence. People are not independent and are incapable of acting on their own. They are akin to puppets manipulated by karma. Those who believe they can act as they please are in a state of ignorance about themselves. According to the structure that God has created, karma is in God’s control, and individuals are in karma’s control. As karma governs them, they cannot make decisions independently. Regardless of how much they plan and utilize their intelligence, they cannot alter their height. If every individual understands themselves and contemplates the extent of their power, they will recognize their insignificance, realizing that God is infinitely greater than them.
</div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 70,
verse: `<b>(5)	The Gospel of Luke, 12th chapter, 33rd and 34th verses.</b>`,
meaning: ` <b>
(33) Sell your possessions and give them to the poor. Provide purses for yourselves that will not wear out, a treasure in paraloka that will never fail, where no thief comes near, and no moth destroys.
<br><br>
(34) For where your treasure is, there your heart will be also.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  There are two types of wealth: one that can buy anything in the world and another that can buy God, who is beyond the world. The former is material wealth, created by humans and visible to the naked eye, with which we buy material possessions, while the latter is wisdom wealth, created by the divine and not easily visible. There are many differences between wisdom-wealth and material wealth. While thieves can steal material wealth, they cannot steal wisdom wealth, as it is not a physical commodity. Moths can destroy material wealth, but they cannot damage wisdom wealth. Material wealth cannot eliminate even the smallest karma, but wisdom wealth can eliminate even big karma. One can acquire material wealth through work, but wisdom wealth is gained through intimacy with the divine. Material wealth can be appraised, but wisdom wealth cannot be measured. When a person dies, their connection with material wealth is severed, as not even a penny goes with the Jeevatma. In contrast, wisdom wealth accompanies the Jeevatma even after death, as all the wisdom one gains in life is carried forward into future births. Those who are rich in the world may be respected in society but not in God’s presence. God recognizes those with wisdom wealth, even if other humans do not respect them. In summary, there are many differences between material wealth and wisdom wealth.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 71,
verse: `<b>(6)	The Gospel of Luke, 12th chapter, 49th verse.</b>`,
meaning: ` <b>
(49) I have come to bring fire on the earth, and how I wish it were already kindled.       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In this context, the term ‘fire’ does not refer to the ordinary fire we see daily. Fire is of two types: ordinary fire and extraordinary fire (wisdom fire). Ordinary fire can burn firewood and other objects, while <b>gnanagni (wisdom fire) burns the firewood of karma.</b> As humans are ensnared in sin and suffer hardships, God descends to bring the wisdom fire to burn away their karma and liberate them from the cycle of birth and death, helping them reach God. When God imparts wisdom, He likens it to fire because gaining wisdom can lead to liberation. God brought this fire to earth in the past, and it kindled for a while before disappearing. Jesus came to reignite the fire and keep it burning. He wanted the fire to continue burning, so He proclaimed that He came to start a fire where there was none, and He wished for the fire He had previously ignited to persist.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 72,
verse: `<b>(7)	The Gospel of Luke, 12th chapter, 51st, 52nd and 53rd verses.</b>
`, meaning: `<b>
(51) Do you think I came to bring peace on earth? No, I tell you, but division.
<br><br>
(52) From now on there will be five in one family divided against each other, three against two and two against three.
<br><br>
(53) They will be divided, father against son and son against father, mother against daughter and daughter against mother, mother-in-law against daughter-in-law and daughter-in-law against mother-in-law.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Paramatma reveals His wisdom when He incarnates on earth in Bhagavan’s form. Bhagavan’s wisdom generates opposing sentiments for those on Satan’s path. In such cases, differences of opinion arise between those who comprehend wisdom and those who do not. Those who possess wisdom will disagree with those who lack it. When such a situation unfolds within the same household, family members may become hostile toward each other. If anyone attempts to gain wisdom at home, Satan will be vigilant. Satan fosters division, pitting fathers against sons, sons against fathers, mothers against daughters, daughters against mothers, mothers-in-law against daughters-in- law, and daughters-in-law against mothers-in-law. Even Bhagavan (Guru) may advise you to disagree with those who oppose you on matters of wisdom, knowing that a husband and wife are quarreling because of His wisdom. Consequently, their quarrel may intensify rather than subside. Therefore, <b>the Lord said, “I did not come to bring reconciliation but division.”</b> Do you think that Bhagavan, who has come to teach wisdom on earth, advises you to heed your household while neglecting His wisdom? Do you believe that the Lord, who instructed you to cut off your hand if it obstructs God’s wisdom, suggests reconciling with your wife and relatives? Never. He exhorted you not to compromise with them, even if it means sacrificing your life. Hence, many conflicts arise in families because of God’s wisdom. Notably, wherever true wisdom is proclaimed, there will be discord within the household. There are no disagreements when Satan’s wisdom is presented under the guise of divine wisdom. Everyone tends to support such wisdom. One can discern that if all household members become adversaries due to divine wisdom, then such wisdom is genuinely God’s wisdom.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 73,
verse: `<b>(8)	The Gospel of Luke, 13th chapter, 3rd verse.</b>`,
meaning: `<b>(3) Unless you change your mind, you too will all perish.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Manas (mind) is the most crucial part of the body, named so because it retains memories. It consistently operates under the influence of Maya (Satan), reinforcing worldly concerns. Since a person’s birth, the mind has been aligned with Satan and has never functioned in alignment with God. The transformation of such a mind from Satan’s influence to God’s alignment is termed a “change of mind.” No one can transition to God’s side without a change in their mind. When the mind undergoes transformation, gnanagni (wisdom fire) begins to manifest. Through the destruction of their entire karma by gnanagni, a person unites with God without experiencing birth and death. If the mind remains unchanged and continues to dictate thoughts, an individual must undergo cycles of birth, death, and endure the torments of hell. Therefore, it is imperative for everyone to undergo a change of mind.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 74,
verse: ` <b>(9)	The Gospel of Luke, 14th chapter, 26th verse.</b>`,
meaning: `<b>
(26) If anyone comes to me and does not hate father and mother, wife and children, brothers, and sisters—yes, even their own life—such a person cannot be my disciple.       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
  If anyone listens to this, they will be surprised and ask, “What kind of wisdom is this? What kind of Guru? What kind of disciples?” One may come to a Guru and question him, “Does any Guru tell their disciples that they are not a disciple unless they scold their family?” We need to think here. If a person scolds all of their household, the Guru is not a madman to be pleased and accept them as a disciple. It is not advised to hate everyone indiscriminately. The Guru becomes pleased when a disciple, in line with the Guru’s sentiments, scolds the ignorant who walk on Satan’s path. When a disciple opposes the ignorant, the Guru perceives that the disciple is aligned with his teachings and accepts them. If a disciple supports the ignorant instead of contradicting them, the Guru will not acknowledge them as a disciple. Hatred is common between two groups – gnanis (wise) and the ignorant. If father and mother, wife and children, brothers and sisters are on the ignorant list, the disciple should oppose them. The Lord said that one who does not oppose the ignorant and favors relatives is not his disciple. It is emphasized that one should not compromise on ignorance. Jesus said that the disciple should forsake their mother, father, brothers and sisters, wife, and children if they obstruct the path to wisdom.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 75,
verse: ` <b>(10)	The Gospel of Luke, 14th chapter, 27th verse.</b>`,
meaning: `<b>
(27) Whoever does not carry their cross and follows me cannot be my disciple.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When firewood is bundled, it becomes easier to pick up and carry for long distances; it would not be possible to carry it otherwise. Similarly, when the 108 gunas in a person’s mind are tied together in a dysfunctional condition, they become a bundle in the hands of man. There are two kinds of gunas - good and bad - in the human body. <b>The six bad gunas are greed (kaama), anger (krodha), avarice (lobha), passion (moha), arrogance (madam), and jealousy (matsara). Similarly, the six good gunas are charity (dana), mercy (daya), benevolence (audarya), dispassion (vairagya), humbleness (vinaya), and love (prema).</b> Each of the six bad and good gunas is further divided into nine parts. Thus, the six bad gunas are divided into 54 parts, and the six good gunas are divided into 54 parts as well. Together, the good and bad gunas make up a total of 108.

  The 108 parts of gunas are called <b>Maya</b> in the first divine scripture. In the second divine scripture, they are called <b>Satan</b>. In the final divine scripture, these gunas are named <b>Iblis</b>. God Himself spoke of Maya as “Guna-mayi mama maya” in the first divine scripture. It means that Maya, which God created, is in the form of gunas in the human body. God mainly created Maya to prevent humans from following the divine path. Maya can make a person stay by its side instead of following God’s way. It can be said that Maya is guna, or guna is Maya. In Telugu, Maya means ‘invisible.’ Maya is present in the head without being seen. Maya, which is present in our body, is also called the Cross. In the spiritual sense, Maya is compared to a python, while Atma is compared to a dove.

  A python is a mighty serpent. One who has been caught by it cannot become free. That means Maya is strong. Jesus said that whoever controls, bundles, and holds such strong Maya in their hand is my disciple. Jesus said that the conqueror of Maya was truly my disciple. <b>Whoever captures Maya (the Cross) and follows God’s path by carrying it is a true disciple of God.</b> One who carries the Cross that we talk about greatly today and follows Jesus is His disciple, as stated in this verse.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 76,
verse: `<b>(11)	The Gospel of Luke, 18th chapter, 29th verse.</b>`,
meaning: `<b>
(29) “Truly I tell you,” Jesus said to them, “no one who has left home or wife or brothers or sisters or parents or children for the sake of the kingdom of God will fail to receive many times as much in this age, and in the age to come eternal life.”   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The kingdom of God refers to Moksham, which is liberation from the cycle of rebirth. Once a person attains Moksham (liberation), they are not reborn on earth and do not suffer from Satan. Moksham means being released from Satan and merging with God. In other words, a person becomes one with God. The union of the Jeeva, which is small and has a specific form, with the infinitely vast, limitless, and omnipresent God is an outstanding achievement. To attain this position, a person must follow the path of wisdom and be willing to give up attachments to their spouse, children, parents, siblings, and home if these attachments hinder their spiritual journey. Such a person becomes a complete gnani in this world and attains God in the Paraloka. Giving up a spouse, children, siblings, and parents is a significant decision because Maya surrounds a person and ties them to their near and dear ones. Prahlada did not count his father, Mirabai left her husband and relatives, and Buddha abandoned a young wife, one-year-old son, parents, home, and kingdom for wisdom. However, those who distance themselves from their loved ones can come closer to God. For acquiring someone who is eternal, leaving behind someone who stays with you for a while is an intelligent decision. However, such a decision may seem foolish to the world. It is rare to find someone willing to leave everything behind in Satan’s kingdom for God’s sake. Because when anyone gets the idea of God in their mind, Satan mainly focuses on them and diverts them from the thought and the path of wisdom. It is impossible for a person to overcome Satan’s power and conquer it, as stated in Bhagavad-Gita, Vignana Yogam, verse 14. One may wonder how it is possible to go to God when Satan’s power is so great. Why attempt and fail? However, if a person completely trusts in God and continues their efforts despite their inability to stand against Satan, God Himself will pull them away from Satan to His side. Therefore, the only way for the tiniest human being to defeat Satan is to surrender completely to God. Bhagavad-Gita states, <b>“Maya metam tarantite,”</b> which means <b>“I will get him out of Maya,”</b> about those who trust God completely. Thus, if a person puts their complete trust and burden on God, God can save them from Satan.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 77,
verse: `<b>(12)	The Gospel of Luke, 21st chapter, 15th verse.</b>`,
meaning: ` <b>
(15) I will give you words and wisdom that none of your adversaries will be able to resist or contradict. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When young children, who have some knowledge of wisdom, question the teachings of renowned preachers and gurus, they do not find answers in their teachings. Therefore, preachers have made a rule that no one should question their teachings. The main reason for the lack of answers in their teachings is that they are not based on science. Unscientific teaching cannot provide answers to rational questions. Preachers continue to teach, but they do not answer when asked. When Paramatma incarnates as Bhagavan, He teaches the true wisdom of Paramatma. Therefore, those who know the wisdom taught by Bhagavan can teach and answer any question. Adversaries who see Bhagavan’s devotees, who know Paramatma’s wisdom, come to them with the ego that they are gurus and gnanis and speak contradictorily. The wisdom that adversaries cannot speak against has already been told to the devotees at such a time. The word of God says that many people are jealous and increase rivalry against those who know true wisdom. Even when God came down, adversaries confronted Him and said, “You don’t know wisdom yet and need to go to a specific place to learn genuine wisdom.” Some people came to me and said, “You do not know wisdom.” Such people will also come to you. God said in the above verse that He would give you the wisdom to answer them.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Luc",
chapterNumber: 4,
pageNumber: 78,
verse: ` <b>(13)	The Gospel of Luke, 21st chapter, 17th verse. </b>`,
meaning: `<b>
(17) Everyone will hate you because of me.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The wisdom revealed by Bhagavan, the Son of God, is against those who are possessed by Satan. There is a chance that ordinary people may misunderstand this wisdom, as it appears to be entirely against preachers and gurus who possess some wisdom. Pandits, preachers, and gurus often do not like the words of those who preach the name of God. They, and the people who follow them, begin to hate those who preach God’s path because they find God’s words contrary to their teachings. Hence, God said in the above verse, <b>“Everyone will hate you because of me.”</b>
  </div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 79,
verse: `<b>(1)	The Gospel of John, 1st chapter, 1st verse.</b>`,
meaning: `<b>(1) In the beginning was the Word, and the Word was with God, and the Word was God.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The Gospel of John comprises 21 chapters. In this scripture, I will provide explanations for some of the verses that humans have failed to understand, misunderstood, or might interpret incorrectly. I have chosen these verses as part of God’s service, feeling like a mere pen that God uses me to do this work. Earlier, I explained some verses from the first divine scripture, the Bhagavad-Gita, and the third divine scripture, the Quran. As I deeply desire to explain all three divine scriptures, I will now illustrate some verses from the second divine scripture, the Injeel (Bible). The wisdom provided in this scripture is scientific and authentic. Now, let’s examine the first verse from the first chapter of the Gospel of John, which consists of three short sentences that must be explained to understand it fully.

  Let us now discuss the first three words of the Gospel of John in the second divine scripture.
<b>
            Word was at the beginning.
            Word was with God.
            Word was God.</b>

  In the teachings of the Bible, let’s refer to these three verses as the beginning verses of the Bible. Some may argue that the verses from Genesis should be called the first words of the Bible. However, we have already explained our method. We consider teachings that humans need as scripture and will discuss the first verses from it. Following this principle, Bhagavan Jesus taught the four Gospels. Even though the Gospel of John was the last one, it started with the teachings. Similarly, we took the 11th verse of the second chapter as the beginning of the Bhagavad-Gita because God’s wisdom started from there. We also took verses 11th, 12th, and 13th from Sankhya- Yoga as the first three sentences. Likewise, the first verses were taken from the 43rd chapter of the Injeel (the Bible), and we took three verses from the Taurat (Bhagavad- Gita) as the first three sentences. Here, however, we took three sentences from one verse in the Gospel of John as the first three sentences, rather than three consecutive verses. The sequence of sentences is not important; we took the ones that conveyed three meanings as three sentences. Although these are three short sentences, each one of them has profound meaning.

  These three sentences convey subtle meanings. The first three sentences of the Bhagavad-Gita delve into the concepts of Jeevatma and Atma. However, the opening words of the Gospel of John teach a special meaning. The initiation of the Bhagavad- Gita discusses the three components - Jeevatma, Atma, and the body. Conversely, the initial three sentences of the Gospel of John explore the three aspects - Wisdom, Atma, and Paramatma. Nevertheless, these sentences don’t explicitly clarify the positions of Atma and Paramatma. Although the term ‘God’ appears in two of the sentences, wisdom and Atma remain ambiguously identifiable. Now, let’s scrutinize the first sentence of the trio.

  The first sentence is <b>“The Word was at the beginning.”</b> A word is articulated in speech, generated by sound emanating from the mouth. One can perceive a sound and discern whether a sentence is long or short based on the auditory cues. The language of the sentence may not necessarily be familiar and can vary in length. It is indeterminable whether the word (sentence) was spoken softly or loudly. Let’s analyze the sentence <b>“The Word was at the beginning.”</b> While we understand that the word was spoken at the beginning, humans did not possess any language skills at that initial stage. Therefore, a pertinent question arises about the language in which the word was spoken. To address this inquiry, let’s consider the events that transpired at the beginning.

  If we inquire about the origin of the sound in the beginning, we can attribute the sound heard by the human ear to Prakruti. Prakruti comprises five great bhootas - Earth, Water, Air, Fire, and Sky - each possessing life. The Sky, endowed with life, generated the sound at the beginning. This raises the question of how the Sky produces sound when it is seemingly void. This inquiry is rational, and understanding the answers transforms it into a scientific exploration. According to Brahma Vidya Shastra, did the Sky itself create the sound? Since the Sky is a Jeeva, Jeevatma is not capable and cannot act according to scientific principles; it is the dharma of Jeevatma. Paramatma also has one dharma. Paramatma (God) does not possess a name, form, or work. This is the primary dharma of God. God is not an agent of action; He does not engage in work. According to Jeevatma’s dharma, Jeevatma is not capable and cannot perform any work. Although God is capable, He does not engage in any actions. Therefore, Jeevatma and God have opposing dharmas. In the beginning, the word emanated through the Sky. As the Sky is also a Jeeva, it did not produce that sound. The sound that originated from the Sky is a factual occurrence, but the Jeeva of the Sky is not capable and cannot generate any sound. Thus, someone behind the Sky may have been the source of the sound. God did not create the sound because He does not engage in work. Although the sound from the Sky is true, neither the Jeeva of the Sky nor God is the cause of the sound. A doubt may arise whether there was someone apart from both.

  To dispel this doubt, it is essential to understand the entities in the universe. Initially, God created the universe. God, while being God, created Prakruti from Himself. He first created Prakruti as five parts and then created Atma and Jeevatma to infuse vitality into Prakruti, which was devoid of life. Similar to Himself, God created masculine (Purusha) Atma and Jeevatma. He designated Jeevatma as the passenger and Atma as the driver, entrusting Atma with the execution of all tasks. In every individual, Atma carries out all functions within the body while coexisting with Jeevatma. In His scriptures, God asserted that even great scholars may not fully comprehend Atma. Only dedicated yogis, as mentioned in the Bhagavad-Gita Purushottama Prapti Yoga 11th verse, can truly understand Atma, emphasizing that Atma remains concealed within the body without being known.

  If God does not work, some may ask how He made Prakruti, Atma, and Jeevatma. My reply is that it is true that God does not work. This principle was articulated by God after the creation of Prakruti, Atma, and Jeevatma. Before the act of creation, God was the sole existence and, during that period, God engaged in work. There was no entity other than God before creation. Consequently, God worked before the act of creation. God created Prakruti, followed by the creation of Atma and Jeevatma. Subsequently, God established His dharma. While God refrained from working after creation, He was active before the act of creation. God delegated all responsibilities to Atma and determined that Atma would execute all tasks. Consequently, Paramatma ceased engaging in the actions He used to perform after the creation of Atma. As Atma assumed the responsibilities, Paramatma became a passive observer (witness).

  God does not engage in work; Jeeva is incapable of action, and Atma is the one that performs all tasks. Therefore, it was Atma that produced the sound from the Sky at the beginning. Atma, concealed within the Sky, generated the sound. The sound created by Atma became God’s wisdom, hence referred to as the ‘word,’ signifying a sound with meaning. Describing the creation event, the phrase <b>“The Word was at the beginning”</b> is used to express that a meaningful sound originated from the Sky. We’ve learned what the ‘word’ is and who articulated it. The ‘word’ was spoken with God’s wisdom by Atma in the form of sound. What Atma articulated from the Sky became the first wisdom for the world. Though the sound from the Sky held wisdom, it manifested as a loud sound in the form of thunder, beyond the comprehension of human language. The Sun comprehended the thunderous sound in the Sky and, recognizing its unintelligibility for humans, conveyed the message to a man named Manu on Earth in a language understood by humans.

  God’s wisdom manifested in the form of an incomprehensible sound at the outset of creation. This is articulated in the first sentence of the first chapter of John’s Gospel, stating that the <b>“The Word was at the beginning.”</b> On that day, humans were unaware that the sound bore God’s wisdom; They only understood somewhat when the Sun conveyed the message. Krishna conveyed the same wisdom in the form of the Bhagavad- Gita, stating that it was the same wisdom spoken at the beginning of creation. However, human attention did not initially focus on the thunderous sound at the beginning, and to this day, no one realizes that the sound of thunder encapsulates the wisdom of the Bhagavad-Gita. The Sun conveyed the same wisdom to Manu that Krishna had spoken, translating the wisdom originating from the sky in the form of thunder. The wisdom from the sound of the Sky emerged from the Atma of the Sky. Atma’s wisdom originated from Atma itself. Atma itself became the wisdom, and the same wisdom came out of Atma. This wisdom from Atma is comparable to how cotton transforms into thread, and the thread emerges from the cotton. While cotton and thread are distinct, cotton becomes the thread. Similarly, Atma and wisdom are different, but Atma’s wisdom emanates from Atma. If the thread is separated, it consists of cotton fibers; likewise, if Atma’s wisdom is dissected, it contains the essence of Atma.

  In the beginning, God conveyed His wisdom through the sound of the Sky, as described in Quran 42:51, where one of the ways God reveals His wisdom is through the revelation from the Sky. God transmitted His wisdom through the Atma of the Sky during the initiation of creation. The wisdom, presented in the form of thunder, was not comprehensible to humans as it lacked a language they could understand. Consequently, the Sun, having grasped the wisdom in the thunders, relayed it to a man on earth in human language. Eventually, this wisdom spread throughout the earth. However, as time progressed, adharmas replaced dharmas, causing the initially conveyed wisdom to fade from human memory. In Dvapara Yuga, Bhagavan assumed the form of Krishna and informed Arjuna that He was sharing the same wisdom the Sun had conveyed. Despite having the same wisdom presented in the form of the Bhagavad- Gita, the first divine scripture, humans have forgotten its origins.

  The first three sentences in the Gospel of John were written 3000 years after the Bhagavad-Gita was spoken, as humans had forgotten the wisdom imparted by God. The sentence <b>“The Word was at the beginning”</b> is now understood. It is recognized that the wisdom in the form of thunder originated from the Atma of the Sky, as indicated in the second sentence. Therefore, it is asserted that <b>“The Word was with God.”</b> Further exploration reveals that the sound of the word was born out of Atma. Just as the twisted thread emerges from cotton fiber, Atma’s mobility transformed into energy, and the wisdom in the energy manifested in the form of sound. Similar to how the thread contains cotton fiber, the sound of wisdom encompasses Atma’s power. Atma’s wisdom is in the form of both Atma’s power and Atma itself. Atma’s wisdom and Atma are one and the same, and it is hence said: <b>“The Word was God.”</b>

  So far, we have discussed that God created Jeevatma and Atma, with God actively working before creation. However, after the act of creation, God empowered Atma to carry out the tasks, seemingly disappearing and making His presence unknown. God refrained from performing any tasks, and, in this state, He became akin to one who did not exist. Consequently, Atma assumed the responsibility of performing God’s work. Although Atma executes the functions of both Jeevatma and Paramatma, its actions remain concealed from others. The aforementioned statements outline the entire operational process of Atma. Initially, when Paramatma created the universe, there were three souls, but after creation, only two souls—Jeevatma and Atma—are recognized. In the absence of Paramatma’s presence, Atma took on the role of Paramatma, which is why Atma can be referred to as God. Despite not being God (Paramatma), Atma performs God’s tasks and occupies God’s position.

  The wisdom of Atma originates from Atma itself. By asserting that Atma is God, it is affirmed that <b>The Word (wisdom) was with God.</b> This statement is accurate when we consider Atma as God. Even though Atma is not God, it must be acknowledged as God because God has bestowed upon Atma the authority to act as God. Therefore, when the Word (wisdom) is identified as Atma, it can be declared that the same wisdom (Atma) is God. This explanation aligns with the statement in the Gospel of John that <b>The Word was God.</b> Having addressed questions such as “What is the Word?”, “How is the Word connected to Atma?” and “Why is Atma considered God?”, I assume that the meaning of the first three sentences from the Gospel of John 1:1 is now comprehensible. If one fails to grasp this after such a detailed explanation, the wisdom of Atma may remain elusive. Understanding Atma’s wisdom is crucial to comprehend God’s system. To discern God’s ways, one must begin with an understanding of the wisdom of the Word. Once this wisdom is known, it becomes evident that the wisdom is Atma, and Atma is God.
<b>
At creation God  (Paramatma)  Prakruti  Atma Jeevatma
After creation   (Paramatma)  Prakruti  Atma Jeevatma
After creation   Atma (God)   Prakruti  Atma Jeevatma</b>

  In the act of creation, God worked to create both the feminine Prakruti and the masculine Atma and Jeevatma. Initially, God, as the Purusha (male), created two souls, Atma and Jeevatma, similar to Him. Following the creation of Prakruti, Atma, and Jeevatma, God transitioned into a role of witnessing without active involvement. Given God’s innate nature of not engaging in work, it may seem as if there is no God, despite His existence. When the balance of dharmas is disrupted, and adharmas prevail on Earth, God sends His soul as Bhagavan to restore dharmas. In reestablishing dharmas, God’s representative is sent, eliminating the need for God to directly engage in the work. Atma, on the other hand, assumes responsibility for all other tasks. Consequently, after creation, God becomes inert and seemingly irrelevant. It could be stated that God, in this state, appears non-existent. Atma steps in to fill the perceived void of God and effectively becomes God, making us oblivious to the absence of God. Hence, the phrase <b>“The Word was God”</b> is presented in the second divine scripture, signifying a distinction between God and the word. While the word is not inherently God, it transformed into God. The expression <b>“The Word was God”</b> highlights the transformation of the word (wisdom) into God. Since the word (wisdom) is identified with Atma, and Atma is considered God, it is asserted that Atma, being the word, is God. Everyone is mistaken in knowing who God is and who Atma is.

  In reality, God no longer exists after the act of creation. Without anyone knowing that there is no God in the world, Atma takes over the role of God, performing the duties of both Jeevatma and Prakruti. Simultaneously, Atma assumes a position akin to God. After creation, God transformed into a formless, nameless entity with no assigned tasks. Describing such a God as non-existent might be more accurate than asserting His existence. As there is no entity in God’s place, Atma steps into the role of God, elucidated by the phrase <b>“The Word was God”</b> in the third sentence. Despite many people hearing and studying these sentences, the underlying secret remains unknown.

  To elucidate the reality about Atma, which embodies the role of God, it is stated that <b>“The Word was God.”</b> When Atma, personifying God, engages in any action, it attributes the action to “Jeevatma has done” or “God has done,” convincing everyone of God’s existence. Questions may arise regarding who holds authority over the universe if there is no God, or whether this perspective aligns with God’s wisdom or atheism. The response to these inquiries is as follows: We are saying that God is not in the place of God, but we are not saying that God does not exist at all. God’s actions remain unknown, and it is emphasized that He lacks a name, work, or form, hence having no direct relationship with humans, but we never said that God didn’t exist at all. In times of a threat to dharmas, God sends His representative to restore order. Even in this scenario, the representative refrains from explicitly claiming to be God, adopting the moniker ‘Bhagavan.’ The mystery surrounding God’s identity and qualities persists. God is there, yet no one knows what God is like. No one has seen or directly communicated with God since creation. Anything can be said about anything in the world, but nobody can say anything definitive about God. Terms like ‘Allah’ in Kruta Yuga signify God’s limitless nature, and designations like ‘Parabrahma’ emphasize God’s superiority over Atma, who fulfills various roles. Additionally, the term ‘Paramatma’ highlights God’s distinction from Atma, and ‘Purushottama’ denotes God’s supremacy compared to Jeevatma and Atma. It is better to admit that neither you nor I know anything about God.
  </div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 80,
verse: ` <b>(2) 	The Gospel of John, 1st chapter, 9th verse.</b>`,
meaning: `<b>
(9) The true light that gives light to everyone was coming into the world.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  If there is light in the outside world, it is because of a burning fire. However, in this context, true light is mentioned in the verse. The true light is kindled without fire and enters every human being, illuminating the entire body from head to toe. There is only one such light without fire, and that is Atma, which comes from God and is designated by God (the Creator). Atma provides light of consciousness to the entire body. When Atma enters the body, the 25 trillion cells in the human body are filled with its light. Each cell becomes a burning lamp without fire. The light of the lamp has a specific temperature. The human body has a temperature of 98.4 °F because of Atma’s light. When Atma leaves the body, the body becomes cold without any heat. A body without Atma’s light is called a dead body. In verse 24:35, it is said, <b>“Atma is the light, and the body is the niche.”</b> It can be stated that Atma, which illuminates the body, can be called the true light.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 81,
verse: ` <b>(3)	The Gospel of John, 1st chapter, 10th verse.</b>`,
meaning: ` <b>
(10) He was in the world, and though the world was made through him, the world did not recognize him.        </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The term ‘Loka (World)’ in Telugu refers to something that undergoes experiences. Atma is present in humans who undergo experiences, and it is the creator of all human beings. However, it is crucial to recognize the distinction between Atma and God. God created Atma, and Atma, in turn, created humans. It is important to understand that God did not directly create humans; instead, He formed the entire Prapancha, initially devoid of any living beings. God first brought forth Prakruti and then empowered Atma to generate, govern, and terminate human life. Since then, Atma has been continuously creating humans, functioning as the sustaining light of human life, and orchestrating the processes of death and rebirth. Despite this, humans often remain oblivious to the presence of Atma, which is near and within them and is essentially God. Atma gives birth to human beings; hence Atma is the Father to humans. God created Atma; hence He is the Father to Atma. Although Atma is sometimes referred to as God, the true God is the Holy Spirit, while Atma is the Father of humans.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 82,
verse: ` <b>(4)	The Gospel of John, 1st chapter, 11th verse.</b>`,
meaning: `  <b>
(11) He came to that which was his own, but his own did not receive him.       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The term “His own” encompasses all those whom He created. Atma, acting upon the commandment of the Holy Spirit, brought humans into existence, and manifested to them in the form of divine wisdom, referred to as the Word. Even though Atma came to humans in the form of wisdom, humans tend to perceive their own knowledge as significant, often overlooking or dismissing the offered wisdom.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 83,
verse: `  <b>(5)	The Gospel of John, 1st chapter, 12th verse. </b>`,
meaning: `<b>
(12) Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Those who comprehend the wisdom offered by Atma will embrace Atma. Those who are acquainted with Atma’s wisdom and hold faith in Atma have the prospect of becoming Atma’s heirs. Consequently, the verse asserts, “He gave the right to become children of God.” The term “God’s children” denotes those who are familiar with Atma’s wisdom.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 84,
verse: ` <b>(6)	The Gospel of John, 1st chapter, 13th verse.</b>`,
meaning: `<b>
(13) Men born not of natural descent, nor of human decision or a husband’s will, but born of God.      </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  All human beings originate from Atma. They are not born of women’s blood nor the will of males or females.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 85,
verse: `<b>(7)	The Gospel of John, 1st chapter, 14th verse.</b>`,
meaning: ` <b>
(14) The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The God Atma (Wisdom) assumed a physical form, resembling that of a human, and dwelled among humans, radiating grace and wisdom.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 86,
verse: `  <b>(8)	The Gospel of John, 1st chapter, 18th verse.</b>`,
meaning: ` <b>
(18) No man has seen God at any time; the only begotten Son, which is in the bosom of the Father, revealed him.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The word ‘God’ is used for both Atma and Paramatma. In the final divine scripture, the term ‘Allah’ is used for both Gods — Atma and Paramatma. Hence, Muslims could not recognize two Gods. To avoid this mistake, the Bible states that Atma is the Father, and Paramatma is the Holy Spirit. The term ‘begotten Son’ refers to <b>the only son created by God.</b> Paramatma (the Holy Spirit) is eternal. After creating Prakruti in the beginning, Paramatma created a son called Atma to bring all living beings into existence. Atma created all living beings according to the commandments of the Holy Spirit. Therefore, there is only one Father (created God) for all living beings. The Father of the created Atma is the Holy Spirit. <b>“No one has ever seen God (the Holy Spirit or Paramatma),”</b> as stated in the verse. God (the Holy Spirit) does not have a form, name, or work; hence, no one has ever seen Paramatma. Atma, the only begotten Son, reveals the unseen God through His wisdom. Atma is the only begotten Son separated from the heart of the Great God, Paramatma. Because no one has seen the Holy Spirit, only Atma can speak about his Father, the Holy Spirit.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 87,
verse: ` <b>(9)	The Gospel of John, 1st chapter, 51st verse.</b>`,
meaning: `<b>
(51) He then added, “Very truly I tell you, you will see sky opens, and the angels of God ascending and descending on the Son of Man.”  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This is the word that Jesus spoke to Nathanael Himself. Jesus claimed to be the Son of Man, even though Nathanael had referred to Him as the Son of God. Jesus did not deny being the Son of God but instead reduced Himself to the Son of Man. He assured Nathanael and others that they would witness extraordinary events. As we’ve emphasized before, God’s servants, the angels, serve as rulers in the human world. These angels, often referred to as Bhutas and Planets (Grahas), are numerous in the sky, totaling billions. During an encounter with Jesus, the servants of God, aware of His identity, descended from the sky and bowed before Him. However, many human beings remain unaware of who Jesus truly is and do not bow down before Him. Similar references are found in the Quran, the final divine scripture, specifically in verses 15:28, 15:29, and 15:30. In the mentioned verse, it is prophesied that Nathanael would witness the presence of Bhutas and Grahas around the Son of Man, as if the doors to the sky had opened. The phrase ‘ascending and descending’ denotes coming and going, with ‘descending on the Son of Man’ implying angels’ arrival at Jesus. When Nathanael acknowledged Jesus as the Son of God, Jesus, recognizing Nathanael’s wisdom vision, assured him in verse 50 that he would witness even greater phenomena. Verse 51 follows, expressing that Nathanael, possessing wisdom vision, could perceive things beyond the ordinary sight of others. The events described in verse 51 are visible only to those with divine wisdom, providing insight into the true identity of Jesus.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 88,
verse: `<b>(10)	The Gospel of John, 3rd chapter, 3rd verse.</b>`,
meaning: ` <b>
(3) Jesus replied, “Very truly I tell you, no one can see the kingdom of God unless they are born again.       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The verse should not be interpreted literally, as it carries a deeper, symbolic meaning. God and His kingdom are beyond physical visibility for anyone. Jesus explicitly conveyed that understanding and perceiving God’s kingdom requires a spiritual rebirth. This does not imply a physical death and subsequent rebirth. If taken literally, it would mean that anyone seeking to know God would need to undergo a physical death, which is a misunderstanding. Nicodemus, who held a literal interpretation, raised a question based on this misconception.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 89,
verse: `<b>(11)	The Gospel of John, 3rd chapter, 4th, 5th, 6th, 7th and 8th verses.</b>`,
meaning: `<b>
(4) “How can someone be born when they are old?” Nicodemus asked. “Surely they cannot enter a second time into their mother’s womb to be born!”
<br><br>
(5) Jesus answered, “Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit (Atma).
<br><br>
(6) Flesh gives birth to flesh, but the Spirit (Atma) gives birth to spirit.
<br><br>
(7) You should not be surprised at my saying, “You must be born again.”
<br><br>
(3:8) The wind blows wherever it pleases. You hear its sound, but you cannot tell where it comes from or where it is going. So, it is with everyone born of the Spirit (Atma).” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When a man dies and is reborn, it is called rebirth. If the rebirth happens physically, all the organs of the man will change. If that happens, the desire to see God and God’s kingdom will also vanish. The body should not die to keep the organs and ambitions as they are. The body contains both wisdom and ignorance, but the ignorance in the body should completely die. When a man gets rid of ignorant thoughts and desires, he is considered dead in ignorance and born of wisdom. One who gets rid of ignorance and gains wisdom can be said to be born of Atma. <b>The duty of man is to know Atma in the body.</b> To know Atma, one must know Atma’s wisdom. When a man knows the wisdom of Atma, he is considered born of Atma. When the body dies, a man gets a new body, but changing one’s will in the same body without getting a new body is like a new birth. The wind blows wherever it pleases, and we hear its sound depending on where it blows. As the wind changes its direction, if a man changes his purpose, it will be a new birth for him. One who desires Atma knows Atma in the same body and the same life. There is no need to go to another life to know Atma.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 90,
verse: `<b>(12)	The Gospel of John, 3rd chapter, 13th verse. </b>`,
meaning: `<b>
(13) No one has ever gone into Paraloka except the one who came from Paraloka the Son of Man. </b>`,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Ihaloka, Heaven (Swarga-Loka), Hell (Naraka-Loka), and Paraloka are the names of the four worlds. The world (Loka) where we all live is called Ihaloka. Heaven and hell are not separate worlds; both are on earth. Loka is neither a kingdom nor a territory. The place and time of experience together are called loka. The place where one experiences hardship is called Yamaloka, Naraka-Loka, or hell. Similarly, the place where one experiences happiness is called Swarga-Loka or heaven. Since both these experiences occur on earth, it can be said that this world (Ihaloka) is both heaven and hell. However, Paraloka is different from hell and heaven. While both hell and heaven involve experiences, Paraloka does not have any experiences. The state in which there is no experience is called Paraloka. When a person transcends karma, they do not experience happiness or sorrow and enter Paraloka. It is called the state of being one with God, Mukti, or Moksham. A person in Ihaloka is always bound by sin and punya karma. Whoever is in Paraloka does not have any karma. If a person dies in Ihaloka, they cannot go to Paraloka but return to Ihaloka. On the other hand, a person in Paraloka, when coming into this world for any necessity, goes back to Paraloka. Therefore, although the resident of Paraloka who came from Paraloka stays in this world for some time according to His will, He will later enter Paraloka. Hence, the verse <b>“No one has ever gone into Paraloka except the Son of Man who is in Paraloka”</b> implies that the one who is in Paraloka is God. Even if someone who became God is born as a human, He will return to Paraloka. The same thing is expressed in John 3:13.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 91,
verse: ` <b>(13)	The Gospel of John, 3rd chapter, 15th verse.</b>`,
meaning: `<b>
(15) That whosoever believes in Him should not perish but have eternal life.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Everyone who believes in God will attain eternal life without undergoing death. However, it is written that, “Eternal life is through Him only.” Paramatma exists both within and outside the body. <b>When Jeevatma merges with Paramatma, it is stated that Jeevatma has achieved Paraloka, also recognized as the kingdom of God.</b> It can also be articulated that Jeevatma has attained eternal life (moksham). The verse declares, “Whoever believes in God will ultimately be liberated from karma and receive eternal life.” Paraloka, representing eternal life, pervades everywhere, irrespective of one’s physical location. Consequently, whoever achieves moksham unites with the Holy Spirit (Paramatma) within their body.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 92,
verse: `<b>(14)	The Gospel of John, 3rd chapter, 17th verse.</b>`,
meaning: `<b>
(17) For God did not send his Son into the world to judge the world, but to save the world through Him.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  God sent his Son as a man into the world to save humans, not to judge them. The responsibility of the man who came from God is to teach God’s wisdom to humans and save them from their sins. He did not come to judge the sins and punya of human beings. God did not send His representative to earth for judgment; instead, He came to save people. This verse is crucial in the Bible. Atma judges a man when he dies. The one who came from God teaches humans how to escape from karma, while the Atma performs the task of judging them.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 93,
verse: `<b>(15)	The Gospel of John, 3rd chapter, 18th verse. </b>`,
meaning: `<b>
(18) Whoever believes in Him is not judged, but whoever does not believe stands judged already because they have not believed in the name of God’s one and only Son.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The verse says, “One who believes in Him,” which refers to either the invisible God or the visible God’s representative who came from God. The verse also states, “They have not believed in the name of God’s one and only Son,” which implies that it should be understood as referring to God’s representative who came from God. God Himself came to earth in the disguise of man to teach wisdom to humans. Jesus said, <b>“I am the Son of God, or the Son of Man, or God’s one and only Son,” </b>so as not to be recognized. In Hinduism, God is called Bhagavan when He disguises Himself and comes to earth as a man. Krishna is the one who came like that; hence He is called Bhagavan in the Bhagavad-Gita. Although Jesus, who is the Son of God, appeared as a man, He should also be called Bhagavan. When God incarnates as a man on earth, Hindus call Him Bhagavan, and Christians call Him the Son of Man. While it is said in the final divine scripture (15:28, 29, 30) that <b>God sends His representative by breathing His soul into Him,</b> Muslims believe that God does not come as a man. Whoever does not have faith in God’s representative, the Son of God, is already judged.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 94,
verse: `<b>(16) The Gospel of John, 3rd chapter, 19th, 20th, 21st verses.</b>`,
meaning: ` <b>
(19) This is the verdict: Light has come into the world, but people loved darkness instead of light because their deeds were evil.
<br><br>
(20) Everyone who does evil hates the light and will not come into the light for fear that their deeds will be exposed.
<br><br>
(21) But whoever lives by the truth comes into the light, so that it may be seen plainly that what they have done has been done in the sight of God. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Paramatma, who remains unknown to anyone, symbolizes darkness. Atma, brought into existence by Paramatma, embodies the true light. Paramatma has created two Sons: an invisible Atma, serving as the light within the body, and another Atma that incarnates as a human among humans. While the Atma, unseen and illuminating the body, is referred to as the Son, the other Son of God, manifesting as a man, is distinctively termed <b>the only begotten Son.</b> Jesus, the only begotten Son, descended to earth. However, due to their malevolent actions, people cherished their own darkness and refrained from approaching Jesus, the light of wisdom.

  Every ignorant individual harbors aversion towards God’s representative who brings the <b>light of wisdom</b> to the world. They fear that their nefarious deeds will be exposed in the presence of God’s representative, leading them to shun the light and conceal their actions. Those who anticipate that God’s light, taking human form on earth, will unveil their dark deeds avoid coming to the Son of God when He appears. Those who adhere to God’s wisdom comprehend that Atma is accountable for all their actions within the body. They approach God’s Son because all their deeds are within <b>God’s light, guided by wisdom.</b> However, only a small fraction of people on earth recognizes that Atma, who is God, is responsible for all their actions. Consequently, only a limited number approach the Son of God when He appears. Since the earth is populated with individuals who believe they are solely responsible for their actions, they refrain from seeking the Son of God. Not only do they steer clear of the Son of God, but they also harbor animosity and inflict hardships upon God’s representative, who infrequently manifests on earth. They deride the Son of God, subjecting Him to numerous tribulations.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 95,
verse: ` <b>(17)	The Gospel of John, 5th chapter, 19th verse.</b>`,
meaning: ` <b>
(19) Jesus gave them this answer: “Very truly I tell you, the Son can do nothing by Himself; He can do only what He sees his Father doing, because whatever the Father does the Son also does.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In this verse, the mention of ‘Father and Son’ is accompanied by the statement that “The Son will do the things which the Father does.” It’s crucial to discern the identities of the Father and Son, given that the Holy Spirit (God) is the only one. Although God has one eternal Son, there is also another Son who occasionally incarnates on Earth. It’s important to ascertain which Son the verse is addressing. John 3:17 emphasizes, <b>“For God did not send His Son into the world to condemn the world, but to save the world through Him,</b> ” referring to God’s son, who manifests on Earth. This verse (5:19) refers to the Son, Atma, who serves as the light within the human body. Atma is eternal on the earth, providing <b>‘the light of mobility’</b> to everyone’s body. Based on this, especially when reading the verse, one should determine which of the two sons God, the Holy Spirit, has spoken about in the verse. John 5:19 characterizes Atma as God’s eternal son, stating that Atma mirrors the actions of the Holy Spirit and engages solely in inherited tasks from the Father, doing nothing independently.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 96,
verse: `<b>(18)	The Gospel of John, 5th chapter, 20th verse.</b>`,
meaning: ` <b>
(20) For the Father loves the Son and shows Him all He does. Yes, and He will show Him even greater works than these, so that you will be amazed. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When we ask who said, <b>“Paramatma (the Holy Spirit) loves the Son and shows Him all He does,”</b> we find that Jesus, the second Son of God, spoke these words to His disciples while He was on earth. No one was able to fully recognize the Son of God when He walked among humans as a man. Despite His teachings and miracles, some subjected Him to great suffering and humiliation, ultimately leading to His death. However, God’s only begotten Son, named Jesus, was in their midst and said, <b>“The Father will show Him (Atma) even greater works than these so that you will be amazed.”</b> God commanded Atma to rule over the Jeevas and to show even greater things. Let us now explore what those great things are.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 97,
verse: `<b>(19)	The Gospel of John, 5th chapter, 21st, 22nd, 23rd verses. </b>`,
meaning: `<b>
(21) For just as the Father raises the dead and gives them life, even so the Son gives life to whom He is pleased to give it.
<br><br>
(22) Moreover, the Father judges no one, but has entrusted all judgment to the Son.
<br><br>
(23) That all may honor the Son just as they honor the Father. Whoever does not honor the Son does not honor the Father, who sent Him.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  There is something noteworthy here. Although there is a mention of <b>‘two Allahs’</b> in the Quran, Muslims could not find it. Similarly, there is a mention of <b>‘two Sons’</b> in the Bible, but Christians could not understand it and talk about only one Son. All three of these verses have the word ‘Son.’ One needs to determine which of the two Sons is mentioned in these verses. Many are not able to comprehend that there is a second Son because only one Son at a time is mentioned in the verses. God said, <b>“For God did not send his Son into the world to judge the world but to save the world through Him” in John 3:17, and “The Father has entrusted all judgment to the Son” in John 5:22.</b> Based on this, one should understand that God has two Sons.

  God said about Atma, “As the Father, the Holy Spirit, raises the dead and gives them life, the Son also raises the dead and gives life.” Just as the Father raises the dead and gives life, Atma decides a person’s next life experiences after death based on their past life’s sins and punya. Therefore, “Like the Father, the Son gives life to whom He is pleased,” is said in the verse. <b>“Whom He likes”</b> means <b>“those who are determined by karma”</b> from Atma’s perspective. As Atma is the hidden light in the body that determines a person’s next life’s karma, “He will resurrect the one He judged,” is said in the verse. “To resurrect” means “to be born again.”

  God gave Atma the power to judge the dead and bring them back to life so that everyone could glorify his Son, Atma, just as everyone glorifies the Holy Spirit as the great God. At the very moment of a person’s death, Atma, the light in the body, determines their karma for the second life based on their past life’s sins and punya and immediately takes them to the second life. Atma decides the second life based on the person’s karma and gives them life again. Those who do not know that Atma does such great things do not see Atma with great respect. One who does not respect Atma will not respect God who sent Atma. Such ignorance neither respects Atma, which is in the body, nor Paramatma, which is inside and outside of the body.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 98,
verse: `<b>(20)	The Gospel of John, 5th chapter, 24th verse.</b>`,
meaning: ` <b>
(24) Very truly I tell you, whoever hears my word and believes Him who sent me has eternal life and will not be judged but has crossed over from death to life. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Previously, verses 5:21, 5:22, and 5:23 discussed the Soul (Atma), who is the mobility in the body. The verse 5:24 states about the Soul, which came in human form with the name Jesus. Whoever believes in the Holy Spirit, who sent Jesus, the only begotten Son, will attain moksham. Such a person attains moksham without undergoing judgment immediately after their death.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 99,
verse: ` <b>(21)	The Gospel of John, 5th chapter, 26th verse.</b>`,
meaning: ` <b>
(26) For as the Father has life in Himself, so He has granted the Son also to have life in Himself.       </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  God, the Holy Spirit, is eternal forever. Just as Paramatma is eternal, Atma, His son, has been granted the authority to be eternal forever. The Holy Spirit, the Father of Atma, bestowed upon Him that authority. In the first divine scripture when comparing Jeevatma to Atma, Jeevatma is referred to as Kshara (Perishable soul), while Atma is designated as Akshara (Imperishable soul).
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 100,
verse: ` <b>(22)	The Gospel of John, 5th chapter, 37th verse.</b>`,
meaning: `<b>
(37) You have never heard His voice nor seen His form.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In this context, ‘His’ refers to Paramatma (the Holy Spirit). God, known as Paramatma or the Holy Spirit, is devoid of a name, form, or specific tasks. No one has witnessed such a God because He lacks a discernible form. Consequently, no human has ever laid eyes on God. God does not communicate with anyone as He remains inactive. Therefore, it can be asserted that no living person has truly seen God. Any assertion of having witnessed God can be regarded as false. God is neither visible nor vocal.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 101,
verse: `<b>(23)	The Gospel of John, 5th chapter, 38th verse. </b>`,
meaning: `<b>
(38) Nor does His word dwell in you, for you do not believe the one He sent.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Although the first creator, the Holy Spirit, does not actively engage in work, there are certain responsibilities that fall within His domain. Nevertheless, He refrains from direct action. Instead, God, Paramatma, has assigned His servants to carry out His work. These millions of servants constitute His dominion and execute all the tasks designated for Him. While God Himself remains inactive, His servants fulfill the roles He is supposed to undertake. Paramatma, however, has a crucial task at hand – the imparting of divine wisdom. God Himself is required for this task, as His servants cannot perform it. The final scripture states, <b>“God should teach God’s wisdom because no man knows God’s wisdom except God.</b> ” In disguise, God comes to teach the wisdom of God. Though He speaks in disguise, His identity remains unknown, as no one can discern the one in disguise. Despite God imparting His wisdom, it often goes unrecognized as His words. As God is wise, He assumes the guise of <b>‘Bhagavan’</b> and imparts wisdom.

  Even when God personally comes to earth disguised as a man to teach wisdom, He also foretells sending a special man whose true identity will remain unknown. “One who comes from God will teach God’s wisdom,” God Himself declared in His divine scriptures. Consequently, everyone anticipates that the one sent from God will convey God’s wisdom. Thus, God’s incarnation remains veiled to all. Although God came to earth as a man during the Treta Yuga, no one recognized Him. During the Dvapara Yuga, God came as a man and imparted the teachings of the Bhagavad-Gita, even declaring <b>“I am God”</b> in the Bhagavad-Gita, yet no one recognized Him. Similarly, when God incarnated as Jesus in the Kali Yuga, no one recognized Him, causing Him numerous challenges. None realized that He was the real God. Some who professed to be God’s believers claimed Jesus was the Son of Man, failing to acknowledge Him as God. Others identified Jesus as the Son of God but still fell short of recognizing His divinity.

  Although Jesus was God incarnate, He stated, <b>“You did not believe the one He sent”</b> in this verse without revealing His true identity. He expressed that people lacked faith in the man sent by God, stating, “God’s word did not live in you.” If there is no faith in the man sent by God, why does God’s word not resonate with humans? The reason lies in the disbelief in the divine messenger, who is God Himself and the bearer of wisdom. Consequently, God’s word fails to take root in those who lack faith in Him.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 102,
verse: ` <b>(24)	The Gospel of John, 6th chapter, 25th, 26th, 27th verses.</b>`,
meaning: ` <b>
(25) When they found Him on the other side of the lake, they asked Him, “Rabbi, when did you get here?”
<br><br>
(26) Jesus answered, “Very truly I tell you, you are looking for me, not because you saw the signs I performed but because you ate the loaves and had your fill.
<br><br>
(27) Do not work for food that spoils, but for food that endures to eternal life, which the Son of Man will give you. For on Him God the Father has placed His seal of approval.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This verse emphasizes two types of food: Perishable food and Imperishable food. Many humans seek perishable food, as illustrated when a crowd approached Jesus, asking, “When did you come here?” Jesus responded, <b>“You are not seeking God’s wisdom; you are seeking me, hoping for loaves of bread. ”</b> He further advised them, “Do not toil for perishable food.” Everyday food, which is consumed, digested, and destroyed within three hours, falls into the category of perishable food. Digestion, in essence, is a process of destruction, where all ingested food is broken down in the digestive tract and transformed into waste, much like burning wood into ashes.

  In contrast, the wisdom a person acquires through their ears, entering their mind in the form of words, is considered imperishable food. <b>God’s wisdom is the only food that cannot be destroyed. Reading or hearing God’s wisdom is akin to consuming imperishable food for the mind.</b> The Son of Man provides this undestroyable food, as indicated by the verse, <b>“For on Him God the Father has placed His seal of approval.”</b> ‘Seal’ means acceptance or decision. God, having decided, sent His begotten Son to share His wisdom. The term ‘seal of approval’ in the verse signifies God’s decision or consent. In the Quran, it is stated that God did not reveal His wisdom to any human being, highlighting that the one who imparts God’s wisdom is no ordinary person. God asserted that His wisdom is known only to Himself, implying that the begotten Son who comes to reveal God’s wisdom is God Himself. The phrase "the Son of God" may mislead humans, but it can be understood as ‘Son’ meaning "God’s manifestation." God, choosing not to come directly as God to speak to humans, adopts the guise of the Son. This interpretation finds support in the following verse.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 103,
verse: `  <b>(25)	The Gospel of John, 6th chapter, 32nd verse. </b>`,
meaning: ` <b>
(32) Jesus said to them, “Very truly I tell you, it is not Moses who has given you the bread from paraloka, but it is my Father who gives you the true bread from paraloka. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In the mentioned verse, Jesus declared, <b>“Moses did not give you the bread of wisdom from Paraloka.”</b> This raises questions: Is the Dharma Shastra taught by Moses false? Does Moses’ Dharma Shastra lack wisdom with dharmas? If what Moses taught is not the true bread of God, why is it called Moses’ Dharma Shastra? These questions prompt various considerations. On one hand, it is false to claim that what Moses taught is not Dharma Shastra. On the other hand, in alignment with God’s statement, it can be asserted that what Moses taught is not Dharma Shastra. It is also accurate that Moses did not provide imperishable bread from Paraloka. Such questions and doubts arise, creating a need for proper answers to understand the true divine wisdom.

  Prophet Moses is well-known among Christians, yet many Muslims might not be aware that the name ‘Moses’ in the Bible transformed into ‘Musa’ over 1400 years. It is crucial to note that Moses and Musa are, indeed, the same name. The statement that Moses did not convey the Dharma Shastra can be both true and false, presenting an intriguing ambiguity with a strong, unknown reason. This revelation may surprise some and face disagreement from others, but its truth remains independent of opinions. It is true that the prophet Moses existed a few thousand years ago. Approximately five thousand years ago, the prophet Moses shared the wisdom he possessed. A prophet, by definition, is someone who imparts God’s wisdom, and Moses earned this title through divine thoughts from a young age. At the age of 20,<b> Bhagavan,</b> who had descended upon the earth, provided Moses with the first divine scripture, known as ‘<b>Taurath.</b> ’ Moses continued to share the wisdom contained in that scripture.

  Since it was rooted in dharmas, it became known as Moses’ Dharma Shastra. Moses passed away at the age of 54. After Moses’ death, Bhagavan entered his body and conveyed dharmas that Moses had never spoken of for nine years. Despite Bhagavan leaving Moses’ body at the age of 63, this fact remained unknown, leading people to believe that Prophet Moses had lived for 63 years and taught the dharmas himself. Although God provided Moses with a divine scripture, He did not directly impart wisdom to him. Hence, the statement, “Moses was not given the bread from Paraloka,” holds true. The wisdom imparted through Moses’ body by God is known as Moses’ Dharma Shastra. This is why the verse states, “The Father of Paraloka, the Holy Spirit, gave true bread.” Moses’ actual lifespan was 54 years, and no one knew that God extended Moses’ life to 63 years. All these mysteries are elucidated in my scripture, <b>Krishna Musa</b>.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 104,
verse: ` <b>(26)	The Gospel of John, 6th chapter, 46th verse.</b>`,
meaning: `<b>
(46) No one has seen the Father except the one who is from God; only He has seen the Father. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Understanding this verse is not a challenging task. Upon reading the Bhagavad- Gita, the Bible, and the Quran in their entirety, it becomes evident that the verses in these final divine scriptures carry subtle meanings. The Quran’s verses, in particular, hold a depth that surpasses other divine scriptures, making their meanings elusive to many. While verses in the Bible might appear straightforward, their true reality often eludes comprehension. Consequently, God is providing a comprehensive understanding of every verse through us.

  God, represented as the Holy Spirit, exists both before and after creation. He is the primary God. The true appearance or nature of God remains unknown to humans. In the final divine scripture, the Quran, the primary God is named Allah, and the second God, Atma, is also referred to as Allah. Hence, Paramatma is the first Allah, and Atma is the second Allah. In the second divine scripture, the Bible, Paramatma is designated as God, and Atma is addressed as the Father. It is crucial to recognize that the Holy Spirit is the Father of Atma, and Atma is the Father of humans. The Quran affirms that both Paramatma and Atma are Gods, while the Bible distinguishes one as God and the other as the Father. It is essential to understand that the Father of humankind is Atma, and the Father of Atma is the Holy Spirit. The verse emphasizes that no human has seen the Father (Atma) and is ignorant of Atma’s nature. <b>However, Atma is the only one who originated from God and has therefore witnessed his Father, the Holy Spirit. In contrast, Jeevatma has never witnessed his Father, Atma.</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 105,
verse: `<b>(27)	The Gospel of John, 7th chapter, 37th and 38th verses.</b>`,
meaning: ` <b>
(37) On the last and greatest day of the festival, Jesus stood and said in a loud voice, “Let anyone who is thirsty come to me and drink.”
<br><br>
(38) Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The verse carries a subtle meaning. Just as a thirsty person naturally seeks water, the pursuit of those seeking wisdom is likened to thirst. The verse states, <b>“Whoever thirsts for wisdom should come to me and quench their thirst.</b> ” When someone approaches Jesus and receives divine wisdom, it is akin to satisfying their <b>thirst for wisdom</b> from Jesus. Those who believe in Jesus attain complete divine wisdom, becoming repositories of wisdom and sharing it with others. Jesus proclaimed that rivers of living water would flow from within them. In this context, <b>living water symbolizes divine wisdom,</b> which bestows moksham (liberation) upon humans and keeps them in a perpetual state. Hence, wisdom is referred to as living water. Just as humans satisfy their physical thirst by drinking water through their mouths, they should similarly <b>nourish their intellect(buddhi) with divine wisdom by listening through their ears.</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 106,
verse: `<b>(28)	The Gospel of John, 8th chapter, 12th verse.</b>`,
meaning: ` <b>
(12) When Jesus spoke again to the people, he said, “I am the light of the world. Whoever follows me will never walk in darkness but will have the light of life.”  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  God, known as the Holy Spirit, created Atma to carry out His rule and work through others. He declared Atma to be his son and gave him the power to perform His tasks. Atma received the authority to take human lives, passing judgment based on their karma from previous births, and facilitating their rebirth. In the role of a judge, Atma acts in accordance with each individual’s karma. Human entanglement in karma influences their thoughts, and Atma, responding to this karma, imparts ignorance as sought by individuals. Consequently, over time, adharmas increase on Earth.

  The Holy Spirit, or God, must incarnate on Earth in human form as Bhagavan to curb adharmas and promote dharmas when adharmas emerge due to human interests and Atma-induced ignorance. When God takes on the guise of a man, He is called Bhagavan. This incarnation teaches divine wisdom without revealing His divine identity, often being referred to as the Son of God, with God being His Father. According to this perspective, there is one God, the creator, who has two Sons—one as the permanent Atma within humans and another as a temporary Son in human form. When the first Son (Atma) within humans develops adharmas, the second temporary Son, incarnated as a human, imparts dharmas. Thus, there is only one God with two Sons. The Son in the form of Jesus proclaimed, <b>“I am the light of the world.</b> ” Wisdom transforms into a wisdom fire (Gnana Shakti), burning away human karma. Jesus, embodying the wisdom fire, is the light of wisdom. He came to teach wisdom to humanity, and those who follow and comprehend His wisdom will not dwell in ignorance but in wisdom. Hence, Jesus declared, “Whoever follows me will never walk in darkness but will have the light of life.” Only God, who incarnates in human form, can bestow the light of wisdom, and establish dharmas.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 107,
verse: `<b>(29)	The Gospel of John, 8th chapter, 14th verse.</b>`,
meaning: `<b>
(14) Jesus answered, “Even if I testify on my own behalf, my testimony is valid, for I know where I came from and where I am going. But you have no idea where I come from or where I am going.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Jesus, in His outward appearance, resembled an ordinary man without any distinct features. As individuals dwelling within bodies made of Prakruti, the external appearance of every being appears the same. Jesus, too, presented Himself as an ordinary human being. There’s a saying among elders that no one knows what kind of snake resides in a termite mound, drawing a parallel to the mysterious nature of the Jeeva within a body. Every born Jeeva comes into a body from somewhere, guided by the decisions of the Atma based on its karma. Upon completing karma and death, the Jeeva enters a new body under the judgment of the Atma. Despite residing in the body, the Jeeva remains unaware of its origin for each new birth. The manas (mind) is the organ responsible for remembering, but it, too, dies with each passing life, causing the loss of memory from previous births. Consequently, an individual, say, at the age of 40, only recalls the last 40 years of the current birth and not the numerous previous ones.

  This process applies not only to humans but also to every living creature. Although Jesus may seem like an ordinary man, it is essential to consider whether the same cyclical process applies to Him. Jesus was born in Israel, signifying He came from elsewhere. But He was conscious of His origin, stating, <b>“I know where I came from.”</b> Unlike ordinary individuals who are unaware of their future births upon death, Jesus was acutely aware of His destination after death. This stark difference between Jesus and an ordinary man prompts one to inquire about the uniqueness of Jesus. The answer to this question holds the key to the best wisdom, revealing that Jesus was not an ordinary man but was born with a specific purpose.

  An individual born with a predetermined purpose before birth is termed "born for a cause." No human being possesses such a pre-birth purpose. In contrast, God is born with the specific intent of establishing dharma on Earth. Only God, and not any human, has the capability to establish dharma. God remains eternal and unchanged, unaffected by birth or death, maintaining consistent memory. When God incarnates on Earth in the form of a disguised man, imparts teachings on dharma, and departs, He does not undergo rebirth after death, a fate common to ordinary humans. In death, a human’s manas (mind) is destroyed, but God neither dies nor is born elsewhere. He assumes a unique disguise as a man, fulfills His purpose, and then returns to His origin. Thus, in the verse, Jesus declared, <b>“I know where I am going,”</b> emphasizing the distinctive nature of God’s existence and purpose.

  Humans lack knowledge of the whereabouts or nature of God. When God incarnates as a man, His origin remains unknown. Unlike a conventional human birth, God’s birth is distinct; He does not undergo rebirth elsewhere after dying in some other place. The omnipresent God, existing even in the womb, transforms His form and appears to be born as a baby. Given that God is present where He is born, it becomes challenging to pinpoint His origin. Those unaware that God is omnipresent remain oblivious to where Jesus originated. Moreover, the destination of God after assuming a different form remains unknown. Consequently, in the verse, Jesus stated, <b>“You have 115 no idea where I come from or where I am going,”</b> emphasizing the mysterious nature of God’s existence and movements.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 108,
verse: `<b>(30)	The Gospel of John, 8th chapter, 19th verse.</b>`,
meaning: `<b>
(19) Then they asked him, “Where is your Father?” “You do not know me or my Father,” Jesus replied. “If you knew me, you would know my Father also.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Does God exist? If He does, how is He? Where is He? If you know the answers to these questions, you will understand who the Father and the Son are. There is only one God, but we should know where the Son came from. The words ‘Father’ and ‘Son’ are frequently used in the Bible. <b>One should understand that ‘Father’ means God; the term was used to refer to God in the Bible. In the Quran, God is called ‘Allah,’ and in the Bhagavad-Gita, God is referred to as ‘Paramatma.’</b> Although these words are different, they all signify God. The essence of God should be seen in the term ‘Father.’ When Jesus was on earth, the Pharisees asked Him about his Father. Jesus replied, <b>“You did not see me or my Father.”</b> The Pharisees did not inquire about Jesus, even though He was before them. They wanted to know about his physical father, not realizing that Jesus’ father was God. They might have been surprised when Jesus directly spoke about Himself and his Father. They thought they were seeing Jesus in person and asked him to find out about his unknown father. Then Jesus said, <b>“You did not see me or my Father.”</b> We need to understand the meaning of that word.

  Jesus’ Father is the Holy Spirit. Atma, the Holy Spirit’s Son, is present in all bodies and governs their operations. The Holy Spirit, referred to as the Father, and Atma, known as the Son, are ever-present. The Holy Spirit, Paramatma, is eternal and has existed since before creation. Atma, the Holy Spirit’s Son, has been present in all bodies since after creation.

  Besides the permanent Son, Atma, God (the Holy Spirit) has another Son called <b>‘the only begotten Son,’</b> who occasionally comes upon the earth. There are significant differences between the permanent Son (Atma) and the temporary Son (the only begotten Son). For example, when Atma comes with a normal human body, the body has a separate Jeevatma. Although the entire body belongs to Atma, and Atma is the body’s head, Jeevatma also resides with Atma in the body and thinks that the body is mine. If the temporary Son, the only begotten Son, comes upon the earth with a body, there is no Jeevatma in that body. In an ordinary person’s body, God and Atma are different. Atma performs every task in that body, and God does not work. But in the only begotten Son’s body, Paramatma (God) resides as Atma and performs tasks in Atma’s form. Because there is no Jeevatma in the only begotten Son’s body, the one who acts as Atma also acts as Jeevatma. Although the one in the only begotten Son’s body is God, He pretends to be Jeevatma. <b>The one who came in disguise as the only begotten Son is the Holy Spirit (God). That God is acting like Jeevatma.</b> There are many differences between God’s permanent Son and the temporary Son.

  It can be said that most people are unaware that God has a permanent Son and the only begotten Son who comes occasionally. By acquiring wisdom, one can understand the existence of Atma and Atma’s wisdom, but recognizing the only begotten Son is challenging. Identifying the only begotten Son among so many humans is difficult. Therefore, no one identified the only begotten Son who came in Treta Yuga, Dvapara Yuga, and Kali Yuga. Although Jesus was the only begotten Son of God in the Kali Yuga, people could not recognize Him as the second Son of God. Despite His proclamation of being the Son of God, people could not identify Him and subjected Him to many insults and torture. People failed to recognize those who came in Dvapara Yuga and Kali Yuga as the Son of God, even though they declared, “I am the Son of God.” I hesitate to affirm that the one who came in Treta Yuga was the Son of God. On that day, God Himself came in disguise as the Son and imparted wisdom on earth. Even though He was known as a great gnani and taught wisdom, I am also hesitant to say that He was Bhagavan because He was portrayed as an evil man among the people. Yet, I do not fear to say, <b>“Ravana Brahma is the only begotten Son.”</b>

  In the Dvapara Yuga, Krishna came as Bhagavan. Both Bhagavan and the only begotten Son are the same. However, because Krishna was portrayed as cunning, many people are still unaware of His greatness today. Even though God came in disguise as a man and taught divine dharmas, humans did not focus on the wisdom He imparted; instead, they mostly scrutinized His behavior during that time. Only a few, out of millions, recognized His wisdom and declared that Krishna was God, but the majority spoke ill of Him. Those who were unaware of Krishna’s incarnation in the Dvapara Yuga found it challenging to recognize Jesus as the Son of God in the Kali Yuga. Because Krishna and Jesus anticipated that humans might not recognize the wisdom they taught, they both stated, <b>“We are Gods,”</b> in the context of their words, believing that humans can recognize their wisdom by doing so. Similarly, Jesus said, <b>“You do not know me or my Father,”</b> with the intention of making people realize that God and Jesus are the same.

  Those who claim to have devotion to God often speak sarcastically when they encounter others who possess more wisdom than themselves. The Pharisees spoke to Jesus with the same attitude. Knowing that Jesus was born to Mary without a father, they asked Him, “Where is your father?” Jesus understood that they were mocking Him and not asking with devotion. He replied with a mind-boggling answer, <b>“You do not know me or my Father.”</b> Those who comprehend His words correctly will understand that the visible Jesus and the invisible God are one and the same. Jesus also said, <b>“If you knew me, you would know my Father also.”</b> However, it can be said that those who heard His words did not understand what He was saying. If they had comprehended His message, they would have recognized who Jesus was on that day. They would have realized that He was not an ordinary man. Despite Jesus’ words, they treated Him as if He were an ordinary man. It seems they knew nothing remarkable about Jesus.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 109,
verse: `  <b>(31)	The Gospel of John, 8th chapter, 21st verse.</b>`,
meaning: ` <b>
(21) Once more Jesus said to them, “I am going away, and you will look for me, and you will die in your sin. Where I go, you cannot come.”  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus spoke many words to let people know about Himself, and the words above are one example. <b>“I am going away, and you will look for me. Where I go, you cannot come,”</b> Jesus said to the people. On the surface, this verse might not seem particularly profound. When someone goes somewhere without informing others, we don’t know where they have gone, and even if we search, we may not be able to find them. The lack of information means that we cannot go where they have gone. You might wonder what wisdom lies in this common occurrence. Let’s look at it from another angle. In our youth, we used to play the game of ‘Thief and Police.’ In this game, the thief hides, and after a couple of minutes, the police start searching to catch them. To catch the thief, the police must go to the place where the thief is hiding. If the police cannot reach the hiding place, they cannot find the thief even after searching elsewhere. One day, when I was ten, we played this game. I was the thief, and the others were the police. Before hiding, I said, “I am going, and you cannot find me.” They confidently replied, “We will find you in ten minutes.” Then I added, “Where I go, you cannot come,” and went to hide from them.

  Two minutes later, the police started the chase but could not find me for half an hour. Despite searching all the places, they couldn’t reach where I was hiding. On that day, I was sitting in the pooja room in my house, and I had closed the doors. The others playing as police searched everywhere, including the house where I was hiding, but they didn’t come to the pooja room because the doors were closed, and they didn’t search inside. Initially, I thought there was nothing special in the above verse, as it resembled the game of ‘Thief and Police.’ However, I later realized that the phrase <b>“You will die in your sin”</b> in the verse held significant meaning. Although it resembled a game, I discovered that it contained profound wisdom. I then delved into a comprehensive understanding of the meaning of this word. Here is what it means.

  Jesus was visible to everyone on earth for some time, but unfortunately, no one believed in Him. Despite performing many miracles to prove that He was not an ordinary man—giving sight to the blind, enabling the lame to walk, curing leprosy, and even bringing the dead back to life to demonstrate His ability to forgive sins—people failed to recognize His true greatness. Even those who did not recognize Jesus during His lifetime would later search for Him, seeking relief from their suffering. However, there will be no benefit in searching for Him once He is gone, as He will not be visible to anyone. People who die in their sins cannot have them forgiven by Jesus, as they do not know where He went. Even if those who denied Jesus during His lifetime later acknowledge Him as God, their sins will not be forgiven. Jesus had foretold all these things to the people in advance. When Jesus said, <b>“I am going away,”</b> no one asked Him to stay longer. Instead, people shouted for Him to be crucified, leading to His death on the cross.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 110,
verse: `<b>(32)	The Gospel of John, 8th chapter, verses 23 and 24.</b>`,
meaning: `<b>
(23) But he continued, “You are from below; I am from above. You are of this world; I am not of this world.
<br><br>
(24) I told you that you would die in your sins; if you do not believe that I am He, you will indeed die in your sins.”   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In these two verses, the 24th verse seems similar to the 21st verse, but the 23rd verse is unique. Jesus gave the people a second chance to recognize that He was not an ordinary man and said, “You are from below; I am from above. You are of this world; I am not of this world.” This verse is divided into two parts: the first one is “You are from below; I am from above,” and the second one is “You are of this world; I am not of this world.” Based on the first part of the verse, “You are from below; I am from above,” there have been two kinds of people since Kruta Yuga – the lower people and the upper people. There is a reason behind how these two names – the lower and the upper – came into existence. This is how people are divided into the lower and upper categories.

  The age of Kruta Yuga spans 1,728,000 years. During the first thousand years of Kruta Yuga, two tribes emerged among the people - the gnanis (those with wisdom) and the ignorant. There were very few gnanis on Earth during that time, while the ignorant were innumerable. In that yuga, the world population was only about 30 million, and the Indian population was not more than 300,000. The Sun descended upon the Earth and imparted divine wisdom to a person named Manu. Only two or three individuals learned the wisdom directly from Manu, and all other people held great respect for these gnanis, learning the divine wisdom from them. In those days, people held gnanis in high esteem, making them sit on the upper seat while they themselves sat on the floor, listening to the wisdom. It was customary for people to give the upper seat to gurus and sit on the floor. Based on this, Jesus said, “You are from below; I am from above.” This means, <b>“I am your teacher (Guru) to you all.”</b>

  It was common for teachers to sit on the upper seat while people who sought wisdom sat on the floor. Teachers used to convey to the people that they were below the teachers who were above them. The teachers who imparted divine wisdom were known as teachers of Brahma Vidya. ‘Brahma’ means great, and ‘Brahma Vidya’ means great teaching. The teachers who possessed knowledge of Brahma Vidya were called Brahmins. In those days, Brahmins meant teachers. Only two or three teachers in the entire India were referred to as Brahmins. Those Brahmins used to categorize the rest of the people as ‘lower people.’ All those who lacked wisdom were designated as ‘lower people.’ This way, the entire country had ‘lower people.’ After some time, the caste system began based on this division. As the caste system took shape, those who knew Brahma Vidya began to say, “We are Brahmins.” Similarly, those who were ignorant were labeled “You are below us (Maa-diguvavaru in Telugu).” Thus, two tribes - <b>the upper (Eguvavaru in Telugu) and the lower (Diguvavaru in Telugu)</b> - formed. Although the word ‘lower (Maadiguva vaaru)’ exists even today, people may not fully understand its historical meaning. Over time, the term ‘Maadiguva vaaru’ transformed into the Madiga caste (scheduled caste), which is now counted as a lower caste.

  When the caste system originated, there were two castes—the Brahmins and the Madiga (Scheduled Caste). The term ‘Madiga’ was initially used to refer to those who were considered ignorant and lacked wisdom. However, over time, even among those who lack wisdom, numerous castes emerged, and those who remained unclassified were still labeled as Madiga. Looking back into history, Madiga was not originally a caste but rather a name given to the ignorant by two or three teachers. Based on this, people from all castes who lack wisdom can be called Madiga. People are divided into castes due to an unknown history. It is unjust and ignorant to label the remaining people as Madiga. Over 2,000 years ago, Jesus also used the words ‘upper’ (Eguvavaru) and ‘lower’ (Diguvavaru). He said, <b>“You are from below; I am from above,”</b> referring to the ignorant. It should be understood that the words ‘upper’ and ‘lower’ are used to indicate, “I am a gnani, and you are ignorant.”

  Jesus’ second word is, “You are of this world; I am not of this world.” ‘Loka’ (World) in Telugu means ‘having experiences.’ There are two types of people based on the experiences they have. Those with experiences belong to this world, and those without experiences do not belong to this world. Ordinary people enjoy every experience in the world, so they are the residents of this world. Jesus, who does not have any experience, said that He was not of this world. Although He looks like a man, He does not have any experiences like a man. Even though Jesus is in a human body, He is not a Jeevatma like others. When He is not a Jeevatma, there is no karma. Hence, He does not have experience based on karma. Paramatma specially sent Jesus. In other words, the Holy Spirit came in disguise as Jesus. According to spiritual dharma, we should not say that. Paramatma specially created and sent Jesus. Therefore, Jesus should be called the Son of the Holy Spirit. As Jesus is not a Jeevatma, it can be said that He does not have experiences. If Jesus were a Jeevatma, He should not be called the Son of the Holy Spirit. Jeevatma is the Son of Atma. Atma’s Father is the Holy Spirit. Hence, Jeevatma becomes the grandson of the Holy Spirit. Jesus is called God’s son because He is sent from God by God. Jesus was also explicitly called the only begotten Son. Atma is the Son of the Holy Spirit. The only begotten Son is the temporary Son who descends upon the earth in need. Therefore, the temporary Son becomes the Son of the Holy Spirit like Atma and will not become a grandson like Jeevatma. Jeevatma gets experience. Hence, Jeevatma, who has experiences, is from this world. Jesus, as Atma, who does not have experiences, is not of this world. He is from Paraloka.

  Jesus gave the people a second chance to recognize Him as an extraordinary man and quoted these verses (John 8:23, 24). However, humans could not perceive Jesus’ greatness and considered Him an ordinary man. Therefore, they cannot be absolved of their sins by Jesus or His teachings. Jesus, the Son of the Holy Spirit, came among men and spoke many words to make Himself known. He reiterated for the second time that those who could not find and believe in Him would die in their sins, as He had mentioned earlier in John 8:21. He provided a third opportunity by speaking His final words. Jesus repeated three sets of verses to help people identify Him. He warned that those who did not recognize Him would not be forgiven of their sins. Let us examine the third set of verses to see what He said.

</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 111,
verse: `<b>(33)	The Gospel of John, 8th chapter, 24th verse.</b>`,
meaning: `<b>
(24) I told you that you would die in your sins; if you do not believe that I am He, you will indeed die in your sins.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  It becomes known that this verse gave a third chance to know who Jesus was. In this verse, Jesus directly told the public who He was. He said, <b>“Those who do not believe that I am the Holy Spirit, and the Creator will die in their sin.”</b> Jesus Himself declared who He was. Initially, He said, <b>“I will go away; you cannot come to the place where I have gone,”</b> to give them some opportunity to understand Him. In the second verse, He said, <b>“You are of this world; I am not of this world,”</b> providing more details to help them understand who He was. It can be understood that Jesus is the Holy Spirit from the second verse. In the third verse, He said, <b>“One who does not believe that I am He is not able to get out of sin,”</b> providing greater clarity. In the third verse, Jesus declared, <b>“I am God.”</b> Despite this, people recognized Jesus as an ordinary man and were unable to realize that He was God. However, some were surprised by Jesus’ words. Although they did not believe it, they asked Him who He was. Jesus replied using these three verses (John 8:21, 22, 23) to help them understand that He was not an ordinary man. Nevertheless, they did not realize this and asked, “Who are you?” Jesus replied, <b>“Just what I have been telling you from the beginning.”</b>

  In addition, He said, “He who sent me is trustworthy, and what I have heard from Him, I tell the world.” However, people did not realize that He was talking about his Father (the Holy Spirit). Although He said so much, people did not recognize Jesus. Some treated Him as an ordinary man, and others treated Him worse than an ordinary man. Jesus said something else about those people.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 112,
verse: ` <b>(34)	The Gospel of John, 8th chapter, 28th verse.</b>`,
meaning: ` <b>
(28) So, Jesus said, “When you have lifted up the Son of Man, then you will know that I am He and that I do nothing on my own but speak just what the Father has taught me. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  There is some confusion in this verse regarding the phrase, <b>“You have lifted up the Son of Man. ”</b> One may not understand the phrase. To interpret this phrase correctly, one should read it as “When people lift Jesus over their heads” instead of “When you have lifted up Jesus.” Some may ask, “Why would people lift Jesus over their heads?” The answer is that <b>Jesus should be understood with the head</b> that is over our body. One who understands Jesus with their <b>intellect (buddhi)</b> will know that Jesus is the Holy Spirit. Furthermore, this verse reveals that the divine wisdom being taught by Jesus is not His own; instead, He is teaching as directed by the Holy Spirit.

  Instead of stating that humans should understand Jesus with the buddhi in the head, the verse says that people have lifted Jesus up. It becomes known that Jesus is Paramatma (the Holy Spirit) if one understands Him <b>with the buddhi</b> in the body. As long as people have not understood that Jesus is God, <b>“the sins of the people are not forgiven, and they die in their sin, ”</b> as stated in the previous three verses. If they understand as Jesus said, it becomes known that Jesus is God. The secret that the Holy Spirit incarnates as a man to teach His wisdom becomes revealed. When it is learned that Jesus is God, some may think that Jesus Himself is saying all the wisdom that Jesus speaks. However, it is not possible to say as some people think. The reason is that after saying, <b>“I am He, ”</b> He spoke another word.

  Jesus said, <b>“I do nothing on my own but speak just what the Father has taught me.”</b> This might create the impression that the Father and Jesus are distinct. The reason for expressing it in two ways is rooted in the fact that Jesus was a man. God, in His true form, is invisible and embodies power. When God takes on a human form, and if an individual perceives this truth with the intellect (buddhi), they will understand that the Holy Spirit and Jesus are one and the same. However, when God incarnates as a man, it is against <b>spiritual law</b> for the incarnation to openly declare, “I am God.” Even though one may recognize the visible person as God, this truth should not be openly revealed according to spiritual law. Following this spiritual rule, Jesus stated, <b>“I do nothing on my own but speak just what the Father has taught me,”</b> adhering to the principles of spiritual law.

  Jesus said, “I am saying what the Father said.” Both phrases — “I do nothing on my own” and “God does everything'” — mean the same thing. When people recognize that Jesus is the Holy Spirit, their sins will be forgiven. While it is wise to understand that Jesus is the Holy Spirit, it is spiritually incorrect to say that the Holy Spirit is Jesus. Therefore, Jesus Himself said, <b>“Until you know that I am God, your sins will not be forgiven,”</b> and <b>“I am He,”</b> so that humans would understand who Jesus was. According to spiritual law, He ultimately said, “I am doing everything my Father told me to do.” Therefore, one should not assume that Jesus spoke in two ways in the verse. Although it is written in the verse that “I am God” and “I am doing what God says,” both convey the same meaning. One may think that Jesus spoke contradictory things if this is not understood. One who understands wisdom can recognize that God comes as a man but should not declare that a particular person is God. Therefore, Jesus also said, “I am God” in one word and “My Father is God” in another. Both are true. Additionally, Jesus said the following to the people.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 113,
verse: `<b>(35)	The Gospel of John, 8th chapter, 29th verse.</b>`,
meaning: ` <b>
(29) The one who sent me is with me; He has not left me alone, for I always do what pleases Him.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This verse is said to indicate that Jesus and the Holy Spirit are one and the same. To support this, Jesus said, “The one who sent me is with me.” This means that the God who sent Jesus is in Him and that the Holy Spirit and Jesus are the same. There is something called ‘Will’ in the human body. Jesus said that He would always do things according to God’s will. In a different way, He said that God’s will is working in Him. It is a testimony to the fact that God is in Jesus. Jesus also said that the Holy Spirit had not left Him alone. It is as if Jesus said that God was with Him and that God was Him. Jesus himself spoke these words to recognize Him as God. Although God came as ‘Jesus’ in the Kali Yuga, people did not recognize Him. Therefore, it became necessary for Jesus to say these words to recognize His greatness. Otherwise, people would not grasp Jesus’ wisdom. When Jesus spoke these verses, some people believed Him.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 114,
verse: ` <b>(36)	The Gospel of John, 8th chapter, 53rd and 54th verses.</b>`,
meaning: ` <b>
(53) Are you greater than our father Abraham? He died, and so did the prophets. Who do you think you are?”
<br><br>
(54) Jesus replied, “If I glorify myself, my glory means nothing. My Father, whom you claim as your God, is the one who glorifies me. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Although Jesus provided detailed explanations for people to understand Him, they struggled to grasp His identity, leading them to inquire, “Who are you?” In response, Jesus stated, “If I glorify myself, my glory means nothing.” Having already spoken about Himself on five occasions, He recognized the potential for His words to be perceived as false if He were to repeat or elaborate further. Therefore, Jesus explained, “If I say something different one more time from what has been said so far, then My Father, whom you claim as your God, glorifies me.” This statement underscores the fundamental unity between Jesus and his Father, whom people claim as God. However, in adherence to spiritual rules, one should not directly claim to be God. Hence, Jesus declared, “I am God” initially to help people understand Him. Later, He clarified by stating that God was his Father. “Just because I told you two things differently, you should not be confused. You should understand me with the truth,” said Jesus, emphasizing the importance of comprehending His identity beyond the surface expressions.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 115,
verse: `<b>(37)	The Gospel of John, 8th chapter, 55th verse. </b>`,
meaning: `<b>
(55) Though you do not know Him, I know Him. If I said I did not, I would be a liar like you, but I do know Him and obey His word.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus proclaimed, “You do not know God; I know God,” addressing the perception of many who regarded Him as an ordinary man. The need for such a statement arose to clarify Jesus’ distinct relationship with God. Some questioned how Jesus, being human like others, could claim to know God when others did not. To address this query, we can consider Jesus’ repeated declaration, “I am He,” in three distinct verses. According to this statement, Jesus does not possess Jeevatma in His body, even though He has a human form. Instead, the Holy Spirit serves as the sole Atma in His body, actively engaging in every action. The misconception arises when people assume that the Atma is the Jeevatma leading them to believe that Jesus may not know God. However, the truth is that Paramatma (the Holy Spirit) Himself resides in Jesus’ body, making God known to Him. As the Holy Spirit is the consciousness within Jesus, there is no need for a separate knowing; Jesus inherently possesses God as His consciousness. In contrast, ordinary humans have the mind (manas) as consciousness in their bodies but lack the consciousness of either Atma or Paramatma. The lack of Paramatma’s consciousness is the reason why humans do not know God, whereas Jesus, with God as His consciousness, inherently knows God.

  If Jesus were to assert, “I do not know God,” it would suggest a lack of God’s consciousness in Him, akin to ordinary humans. Such a statement would be tantamount to falsehood. Therefore, Jesus declared, “If I said I did not know God, I would be a liar like you.” The uniqueness lies in the fact that the Holy Spirit is the sole inhabitant in Jesus’ body, eliminating the existence of a dual pair of souls – Atma, responsible for actions, and Jeevatma, for experiences. In Jesus’ body, where only the Holy Spirit resides, every uttered word originates from the Holy Spirit. Hence, when Jesus expressed, “I am conscious of Him. I know Him, and I obey His word,” these words emanated from the Holy Spirit, despite Jesus speaking in a manner akin to everyone else. Despite His outward appearance as an ordinary man, there was no aspect unknown to Him. An illustration of this profound knowledge unfolded when Jesus spoke about Abraham, a figure long deceased, evoking amazement and prompting a question from those around Him.
</div></div>

</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 116,
verse: ` <b>(38)	The Gospel of John, 8th chapter, 57th and 58th verses.</b>`,
meaning: `<b>
(57) “You are not yet fifty years old,” they said to Him, “and You have seen Abraham!”.
<br><br>
(58) “Very truly I tell you,” Jesus answered, “before Abraham was born, I am!” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When Jesus uttered these words, He was approximately 32 years old, on the verge of entering His 33rd year. Abraham, a historical figure, had lived centuries prior to Jesus, akin to a great-grandfather to the people of Jesus’ time. When Jesus referred to Abraham, the Jews present questioned how He could speak of a man who had long preceded Him, having been born and died in a different era. In response, Jesus made the enigmatic statement, “Before Abraham was born, I am.” This assertion appeared deceptive to those around Him, given the clear generational distinction between Jesus and Abraham. Nevertheless, what Jesus expressed was an absolute truth, even if it seemed paradoxical to His contemporaries.

  Let’s explore the truth behind this statement. Jesus’ physical body was born approximately 32 years ago. However, only the Holy Spirit resides in His body, not the Jeevatma. If Jeevatma were present, Jesus wouldn’t have memories from previous births, as Jeevatma doesn’t retain such memories. In contrast, Paramatma (the Supreme Soul) is present in Jesus’ body and is eternal. It has existed since before the creation of the universe and is the creator of all living beings, including Abraham. Abraham, like any other human being, was born, lived, and died, with the Holy Spirit as a witness. While Atma gave life to Abraham, God (Paramatma) witnessed the entire journey. <b>God is the ultimate witness, Atma is the doer, and Jeevatma experiences life.</b> Although Abraham was born through Atma, God, as the ultimate witness, knows everything about Abraham. Paramatma knows how many times Abraham was born in the past and how many times he will be born in the future. Therefore, when Jesus said, “Before Abraham was born, I am,” He referred to His identity as the eternal Paramatma who has existed since before Abraham’s birth and will continue to exist after His death. This statement emphasizes Jesus’ timeless existence beyond the limitations of physical birth and death.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 117,
verse: `<b>(39)	The Gospel of John, 9th chapter, 39th verse.</b>`,
meaning: ` <b>
(39) Jesus said, “For judgment I have come into this world, so that the blind will see and those who see will become blind.”   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When some people accused Jesus of being a sinner, the individual whose karma had been removed by Jesus overheard their words and responded with the following information.

  (John 9:25-38) He replied, <b>“Whether He is a sinner or not, I don’t know. One thing I do know. I was blind but now I see!”</b>. Then they asked him, <b>“What did He do to you? How did He open your eyes?”</b> He answered, <b>“I have told you already and you did not listen. Why do you want to hear it again? Do you want to become His disciples too?”</b> Then they hurled insults at him and said, <b>“You are this fellow’s disciple! We are disciples of Moses! We know that God spoke to Moses, but as for this fellow, we don’t even know where He came from.”</b> The man answered, <b>“Now that is remarkable! You do not know where He came from, yet He opened my eyes. We know that God does not listen to sinners. He listens to the godly person who does His will. Nobody has ever heard of opening the eyes of a man born blind. If this man were not from God, He could do nothing.”</b> To this they replied, <b>“You were steeped in sin at birth; how dare you lecture us!”</b> And they threw him out. Jesus heard that they had thrown him out, and when Jesus found him, He said, <b>“Do you believe in the Son of Man?” “Who is He, sir?”</b> the man asked. <b>“Tell me so that I may believe in Him.”</b> Jesus said, <b>“You have now seen Him; in fact, He is the one speaking with you.”</b> Then the man said, <b>“Lord, I believe,”</b> and he worshiped Him. After the events that had just occurred, Jesus said, <b>“For judgment, I have come into this world, so that the blind will see and those who see will become blind.”</b> This statement can be understood in light of the previous events.

  The purpose of Jesus’ statement was to convey that <b>those who have faith in God can see me,</b> even if they don’t know who He is. Those who don’t believe in God may interact with Jesus daily and see His physical body, but they cannot recognize Him. Therefore, Jesus said that He came into the world to make unbelievers unaware that He is God. Despite God taking on human form and standing next to unbelievers, they cannot recognize the Son of God due to their ignorant blindness. This blindness is a type of ignorance that prevents them from knowing God, even when He appears in human form. When Jesus said that <b>a devotee who sees God’s incarnation (the Son of God) may not recognize Him based on the outward appearance, but instead, through intuition,</b> some of the people around Him asked if they were blind as well. Jesus replied to them like this.
</div></div>

</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 118,
verse: `<b>(40)	The Gospel of John, 9th chapter, 41st verse.</b>`,
meaning: `<b>
(41) Jesus said, “If you were blind, you would not be guilty of sin; but now that you claim you can see, your guilt remains.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In verse 39, Jesus explained the distinction between those with faith and those without. He stated that a blind person with divine faith could see Him, while unbelievers could physically see Him but couldn’t perceive His true identity. In the 41st verse, Jesus delved further into the behavior of those operating with a <b>worldly perspective.</b> Individuals with a worldly mindset proclaim, “I am seeing,” attributing their actions to themselves and consequently accumulating karma for their deeds. God bestowed sight upon humans to comprehend His wisdom, yet not everyone employs their vision to recognize God. Some remain spiritually blind despite having physical eyes. Concerning worldly matters, every individual is, in essence, blind. The truth is no one autonomously engages in worldly activities. No one possesses sight or hearing. Despite their inherent lack, people claim, “I am seeing,” falsely assuming they have sight and consequently incurring sin for their actions. Even though humans are spiritually blind, they accumulate sin when they mistakenly believe they possess sight. Jesus emphasized that recognizing one’s spiritual blindness and acknowledging <b>the truth</b> of having seen nothing absolves them of sin. In essence, acknowledging one’s spiritual blindness prevents the accumulation of sin in worldly matters.

  Those who lack divine wisdom are unaware of their lack of sight in mundane matters. Their inability to comprehend Jesus’ words stems from their ignorance that God has endowed sight only for understanding matters related to Him. To grasp the essence of the verse, each individual’s Jeeva (soul) must first recognize whether they are blind or possess insight in the body. In truth, the Jeeva in every person’s body is entirely blind in all aspects. Each Jeeva mistakenly believes that the body belongs to them and that they are the doer of all actions in the body. However, Jeevatma has no independent agency in the body; <b>Atma</b> is the true owner and controller. Atma continually operates within the body, and, in reality, Jeeva doesn’t perform any tasks in the body. Devoid of sight, hearing, and full functionality, Jeeva is blind, deaf, and disabled in every sense. Positioned next to the <b>buddhi</b> (intellect) in the body, Jeeva becomes aware of information that reaches the intellect, but Jeeva can’t independently know anything. Despite lacking direct knowledge, Jeeva erroneously believes that it has personally witnessed everything. Although Atma is the active force in the body, Jeeva wrongly attributes all actions to itself. When Jeeva falsely claims responsibility for a deed, it must endure the karmic consequences associated with that action.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 119,
verse: `<b>(41)	The Gospel of John, 10th chapter, 18th verse.</b>`,
meaning: `<b>
(18) No one takes life from me, but I lay it down of my own accord. I have the authority to lay it down and authority to take it up again. This command I received from my Father. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  No one knows when an ordinary person will leave this life. Once someone dies, they will not return. This is evident in every death. <b>Jeeva also departs from the body in death. However, most people do not realize that Jeeva is separate from the life force in a person.</b> Many people think that Jeeva and the life force are the same. But in the verse, it is said, <b>“No one takes life from me,”</b> which shows that Jesus is different, and his force is different. Although everyone has their own life force in their body, like Jesus, they cannot set it aside or take it up again. Within the body are many internal organs, life, buddhi, and manas. Anything inside the body is under the control of Atma, not under the control of man. Hence, Atma decides whether to set aside a person’s life or send it where Atma wishes, as it is its task. Jeeva has no relation to the life force in their body, but Atma has a relationship with the life force in the body.

  Jesus is not an ordinary Jeeva, but rather He is Atma. As such, He has the authority to lay aside His life, and no one can take it away from Him. This means that <b>Jesus does not die at anyone else’s hands;</b> if He were to die, He would choose to lay aside His life. Only Atma has the power to put life aside and then bring it back when desired. The Holy Spirit gave Jesus the authority to do this, as Jesus Himself declared, <b>“No one takes life from me, but I lay it down of my own accord. I have the authority to lay it down and take it up again. This command I received from my Father.”</b> As foretold, Jesus made His life (prana or breathing) hid in His body when He was crucified, appearing dead to those around him. Yet He emerged alive early on Sunday morning, having taken back His life. This demonstrates that Jesus, being Atma, has the power to lay down His life and then come back to life in the same body, and this authority was given to Him by His Father, the Holy Spirit. Additionally, Atma has the authority to take others’ lives and send them for reincarnation.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 120,
verse: ` <b>(42)	The Gospel of John, 10th chapter, 30th verse.</b>`,
meaning: ` <b>
(30) I and the Father are one.    </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Atma is the Father of Jeeva, and correspondingly, Paramatma is accountable for the creation of Atma. Therefore, Atma is also the Father of human beings, while Paramatma is the Father of Atma. As Jesus is Atma, He is the Son of God. When <b>a son pays close attention to his father,</b> it signifies a state of union between the son and the father. This is the essence of Jesus’ statement, <b>“I and my Father are one,”</b> as He directed His focus towards His father, the Holy Spirit.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 121,
verse: ` <b>(43)	The Gospel of John, 11th chapter, 25th verse.</b>`,
meaning: ` <b>
(25) Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  In this context, ‘resurrection’ is indicative of birth, while ‘life’ signifies liberation (moksham), implying freedom from the cycle of rebirth. Since both birth and moksham are related to Atma, Jesus declared, “The one who believes in me will not be reborn after death but will attain <b>moksham.</b>”
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 122,
verse: `<b>(44)	The Gospel of John, 11th chapter, 26th verse.</b>`,
meaning: `<b>
(26) Whoever lives by believing in me will never die.     </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">
The one who has attained moksham will experience eternal life and never face death again. Therefore, Jesus proclaimed, “Everyone who has faith in God will attain moksham and never die again.”
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 123,
verse: `<b>(45)	The Gospel of John, 12th chapter, 25th verse.</b>`,
meaning: `<b>
(25) Anyone who loves their life will lose it, while anyone who hates their life in this world will keep it for eternal life.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus’s statement, “Anyone who loves their life will lose it,” can be explained as follows: Humans (Jeeva) require life to exist on earth, and those who become attached to their earthly life will inevitably lose it since they cannot live forever. A person’s life depends on the flow of Prana (life force) in their body, and once they die, their breathing ceases permanently. Once the final breath leaves the body and merges with outside air, it will never return. When someone moves from their first birth to their second, they receive a new breath (life), but the old one is never regained. Therefore, those who prioritize their earthly life and cling to it will eventually lose it. Despite this certainty, people naturally love their lives more than anything else and seek to prolong their time on earth.

  A person who desires moksham and does not wish to live in this world hates their own life, indicating a lack of interest in worldly affairs. Such a person abandons the cycle of birth and attains eternal life. This life is free from death, and the person who attains it will protect it. While those who attain moksham do not have a special life that is similar to that of an ordinary person, the term ‘eternal life’ is used to help us understand the concept. It is important to note that anyone who attains moksham will remain in a state of eternity forever, without birth or death.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 124,
verse: `<b>(46)	The Gospel of John, 12th chapter, 40th verse.</b>`,
meaning: `<b>
(40) He has blinded their eyes and hardened their hearts, so they can neither see with their eyes, nor understand with their hearts, nor turn—and I would heal them. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When God came as a man and told the people the wisdom they needed, Atma, God in the body, blinded their eyes and hardened their hearts so that they could neither see nor understand with their hearts nor get rid of karma. Karma is the cause of their suffering. In this verse, what is important to note is that Atma, created by the Holy Spirit, is in everyone’s body, running everyone. Although Atma is the Son of the Holy Spirit, the Holy Spirit, the Creator, is born as a man to impart wisdom. Although the born is the Holy Spirit, He is called the Son of God instead of God. According to this, Atma, which is in the body, becomes the Son of the Holy Spirit. The Holy Spirit’s incarnation as a human being is also called the Son of the Holy Spirit. Atma in the body blinds the ignorant man’s eyes and hardens their heart so that they do not understand the Son of God’s words and cannot get rid of their karma.

  The Holy Spirit, the Creator, created a son Atma and placed it in the human body. Additionally, the Holy Spirit created another Son in human form to impart wisdom to those who were ignorant. While Atma within the human body is ever-present, the human incarnation of <b>Atma</b> only appears on earth periodically to teach wisdom. Even when the human incarnation of Atma imparts wisdom to individuals who are disinterested and envious of the Holy Spirit, the Atma within the body causes their intellect (buddhi) to be unable to comprehend it. However, if an individual possesses <b>devotion and interest</b> in the Holy Spirit, the Atma within the body enables them to understand the words of the human incarnation of Atma. One must recognize both the Atma within the body and the second Son, embodied by a human form, <b>to truly comprehend the wisdom of the Holy Spirit.</b>
</div></div>
  </span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 125,
verse: ` <b>(47)	The Gospel of John, 12th chapter, 47th and 48th verses.</b>`,
meaning: ` <b>
(47) If anyone hears my words but does not keep them, I do not judge that person. For I did not come to judge the world, but to save the world.
<br><br>
(48) There is a judge for the one who rejects me and does not accept my words; the very words I have spoken will judge them at the last day. `,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  It can be said that the one who spoke these words is the Atma who is in the form of a human being. When anyone hears but neglects to comprehend the wisdom imparted by God when He comes in human form, the Atma in human form does not judge their next life based on sin and punya after death. The Atma, who came as a man to teach wisdom, did not come to judge humans’ next life. God (Atma) came as a man to reveal His wisdom to the people and save them. Someone else judges the subsequent life of a man who does not listen to the words of the Atma in human form and does not acknowledge Him as great. One should know that such a judge is the Atma, who is always present in the body. The Atma in the human body decides the next birth on the day of death based on the wisdom imparted by the Atma, who is in human form. <b>One cannot know the Holy Spirit unless they understand the work of the Atma in the body and the Atma (Bhagavan), who comes in human form.</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 126,
verse: ` <b>(48)	The Gospel of John, 12th chapter, 49th and 50th verses.</b>`,
meaning: ` <b>
(49) For I did not speak on my own, but the Father who sent me commanded me to say all that I have spoken.
<br><br>
(50) I know that his command leads to eternal life. So, whatever I say is just what the Father has told me to say. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   One should understand that the <b>Atma (Bhagavan)</b>, who came as a human being, spoke these words. Jesus, God in the form of a human being, uttered this statement. Whenever God incarnates as a man, all of His wisdom comes from the Holy Spirit. The one who came in human form mentioned that the Holy Spirit prompted Him to convey this wisdom. The wisdom imparted by the Atma (Bhagavan) in human form leads to <b>eternal life (moksham).</b> Although the one who came in human form is not explicitly identified as God, He stated, <b>“Whatever I say is just what the Father has told me to say,”</b> revealing that the speaker is the Holy Spirit. With this, it becomes evident that the one speaking is the Holy Spirit. However, in accordance with spiritual doctrine, it should be emphasized that the Holy Spirit is the Father, and the Atma who came in human form is the Son.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 127,
verse: ` <b>(49) The Gospel of John, 14th chapter, 7th verse.</b>`,
meaning: ` <b>
(7) If you really know me, you will know my Father as well. From now on, you do know Him and have seen Him.
</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This verse is similar to the one mentioned earlier (John 12:49, 12:50). As I mentioned before, the Father and the Son are the same; yet, according to spiritual doctrine, it should be said that the Father and the Son are separate. Jesus said, <b>“If you really know me, you will also know my Father.”</b> Although God, when He came as a human, is called the Son of God, in fact, the Father Himself is in the form of the Son. Hence, the verse states, <b>“If you know the Son, you know the Father.”</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 128,
verse: ` <b>(50)The Gospel of John, 14th chapter, 8th and 9th verses.</b>`,
meaning: ` <b>
(8) Philip said, “Lord, show us the Father and that will be enough for us.”
<br><br>
(9) Jesus answered: “Don’t you know me, Philip, even after I have been among you such a long time? Anyone who has seen me has seen the Father. How can you say, “show us the Father?” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  This verse reveals that the one with a visible form is the Holy Spirit. Therefore, Jesus said, <b>“Anyone who has seen me has seen the Father.”</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 129,
verse: `<b>(51)	The Gospel of John, 14th chapter, 10th verse. </b>`,
meaning: `<b>
(10) Don’t you believe that I am in the Father, and that the Father is in me? The words I say to you I do not speak with my own authority. Rather, it is the Father, living in me, who is doing His work.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When a person is in disguise, he and his disguise are inseparable. Therefore, when a rich man assumes the guise of a beggar, both the wealthy individual and the beggar coexist. The rich man takes on the appearance of a beggar during his disguise. Although the beggar ventures into a bazaar to beg, it is, in fact, the rich man who is carrying out this act. The unseen rich man is performing the role of a beggar. As the rich man resides within the beggar, and the beggar’s words originate from the rich man, it can be asserted that the rich man is within the beggar, and reciprocally, the beggar is within the rich man—they exist together. Since the inner persona holds greater significance than the external facade, all actions undertaken in disguise are executed by the inner self. Given that the person within is more crucial than the external appearance, it is accurate to state that all tasks carried out by the outwardly visible person belong to the internal individual. Despite the beggar’s outward appearance, he embodies the rich person within. In a sense, it can be affirmed that the beggar is, indeed, the rich person. The Holy Spirit, concealed in human form, holds significance. It is imperative to recognize that the disguise is temporary, while the soul within is eternal. It can be asserted that <b>the one within Jesus is the Holy Spirit.</b> Hence, Jesus proclaimed, “The Father is in me, and I am in the Father.”
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 130,
verse: `<b>(52)	The Gospel of John, 14th chapter, 6th verse</b>`,
meaning: `<b>
(6) Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Building on the previous example, the pathway to understanding the rich man is through the beggar. If the beggar is apprehended, the identity of the rich man becomes apparent. Once the rich man is recognized, one can access the wealth he possesses. Similarly, the avenue to comprehend God is through the incarnation as a human. If someone understands the one who took human form, they will also comprehend the God residing within Him. Acquaintance with God leads to gaining eternal life inherent in God. Hence, on one occasion, Jesus declared, <b>“I am the way and the truth and the life.”</b> When Jesus said, “I am the way,” it signifies <b>the route to understanding God through me.</b> He also stated, “I am the truth,” implying that He is the genuine manifestation of God. Furthermore, He proclaimed, <b>“I am eternal life.”</b> This assertion is grounded in the fact that the true God in the form of Jesus declared that anyone familiar with Him would attain paraloka (moksham) and experience eternal life without facing death in the paraloka.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 131,
verse: ` <b>(53)	The Gospel of John, 14th chapter, 16th verse.</b>`,
meaning: `<b>
(16) I will ask the Father, and He will give you another Advocate to help you and be with you forever.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> The Holy Spirit does not remain permanently in human form among the people. Occasionally, the Holy Spirit changes appearance and enters into the lives of people when needed. When the Holy Spirit took the form of Jesus, He lived among the people for only 33 years. Out of these 33 years, He imparted wisdom for only three years. Even before completing three years, He departed from the people after only two years and three months. Jesus said, “I will beg my Father to send another Advocate (Adaranakarta) a second time, who lives longer than me and teaches wisdom.” The one who is coming is the same person as the one who says He beseeches the one who comes. It is the same one who is coming. It is the same one who said that He would request the one who is coming. It is the same one who said He would send another Advocate (Comforter). <b>There is only one.</b> It is the same one who said, it is the same one who asked, and it is the same one who comes. If we do not understand that there is only one who is playing all the characters, the one who says, asks, and comes may appear different. Without recognizing that <b>there is only one orchestrating these roles,</b> we fail to comprehend the God in front of us in human form, the God who implores, and the God who arrives. It is crucial to understand that the one pleading with the Father as Jesus is the forthcoming Comforter. The arriving Advocate is the Holy Spirit.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 132,
verse: `<b>(54)	The Gospel of John, 14th chapter, 17th verse.</b>`,
meaning: `<b>
(17) The world cannot accept Him because it neither sees Him nor knows Him. But you know Him, for He lives with you and will be in you.  </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The term ‘world (loka)’ can be understood to encompass those individuals who undergo the consequences of karma on earth. When God takes on human form, those bound by karma may not perceive or acknowledge Him. Those who fail to recognize Him are unable to receive His teachings or divine wisdom. Only those who have gained some wisdom through Jesus will be able to recognize the Comforter who comes after Jesus in human form. The Comforter dwells within those individuals, and those who are acquainted with Him will coexist with Him, realizing His presence within them as Atma.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 133,
verse: `<b>(55)	The Gospel of John, 14th chapter, 20th verse.</b>`,
meaning: ` <b>
(20) On that day you will realize that I am in my Father, and you are in me, and I am in you.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext"> Before delving into this verse, one should grasp the true form of God. God is divided into three aspects, permeating the entire world. Although there is only one God, He is divided into three souls—Jeevatma, Atma, and Paramatma. <b>Jeevatma resides in a specific location within the bodies of all living beings, while Atma extends throughout the entirety of every living being’s body. Paramatma is present both inside and outside the body, existing within every molecule.</b> An individual who comprehends this concept is considered a complete gnani. Paramatma, the Creator, assumes human form to impart wisdom to people. During this manifestation, He asserts that He is the Son, and the Father is Paramatma. This terminology serves a purpose of distinction, but it can be affirmed that both the Son and the Father are inherently the same. God appears in the guise of the <b>‘Son’</b> and resides on earth throughout His entire life, imparting wisdom. This serves as a method for the dissemination of wisdom. Alternatively, God sent out an Atma from Himself to create, sustain, and kill Jeevas. The Atma, which governs the bodies of living beings, is also considered the Son of God. Atma resides within Paramatma, and Jeevatma exists within the realm of Atma. Consequently, the expression <b>“I am (Atma) in my Father”</b> is used instead of stating, <b>“I am (Atma) in my Father, the Paramatma.”</b> As Jeeva is present within the body governed by Atma, the verse emphasizes, “You (Jeevatmas) are in me (Atma).” Atma, diffused throughout the entire body, is also dispersed within you (Jeevatma), who is in a specific location. Therefore, the verse states, <b>“The day when you know the souls’ wisdom, you will know that I am in you.”</b> Those unfamiliar with the concept of the three souls fail to discern who resides within whom. Therefore, <b>it is crucial to comprehend the Thraitha Theorem, which elucidates how God is in the form of three souls.</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 134,
verse: ` <b>(56)	The Gospel of John, 14th chapter, 25th and 26th verses.</b>`,
meaning: `<b>
(25) All this I have spoken while still with you.
<br><br>
(26) But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  On one occasion, Jesus addressed His disciples, saying, “While I am still with you, I speak these words.” Additionally, He conveyed, “Another Advocate (Adaranakarta) would come to you after I pass away.” Furthermore, He explained, <b>“The Advocate, who comes like me, would remind you of everything I had spoken and teach everything I had not spoken.”</b> An important aspect to consider here is Jesus’ use of the name ‘Advocate.’ Clarifying the meaning of Advocate, He stated, <b>“Advocate is the Holy Spirit whom the Father will send in my name.”</b> A close examination of the verse reveals that it begins with ‘the Father’ and concludes with ‘the Holy Spirit.’ This sequence suggests that Jesus’ father is the Holy Spirit. It can be posited that the Son is the one in disguise, while the Father is the one not in disguise. In reality, they both are one and the same. <b>The one who imparts wisdom and removes karma is referred to as the Advocate (Comforter).</b> When Jesus asserted that God is the one who sends God in the name of the Advocate, He articulated, “The Father is the Holy Spirit who will send in my name.” This elucidates that <b>God assumes a form, adopts the guise of the Advocate, and imparts divine wisdom.</b> It is noteworthy that Jesus conveyed these words to ensure even those unaware of this matter could comprehend.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 135,
verse: ` <b>(57)	The Gospel of John, 15th chapter, 23rd verse. </b>`,
meaning: `<b>
(23) Whoever hates me hates my Father as well.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  I have been asserting from the beginning that God is concealed in the form of Jesus, and the name attributed to God’s disguise is Jesus. Indeed, no one else but the Holy Spirit has come in the name of Jesus. Consequently, anyone blaspheming Jesus is also blaspheming Paramatma. The Comforter (Advocate) is not the one who will come after Jesus. Jesus was also an Advocate. Whenever God assumes human form, He should consistently be called the Advocate. <b>The Advocate imparts wisdom that serves as a remedy for karma,</b> and God alone provides teachings that eradicate karma. Therefore, it can be affirmed that the Advocate is synonymous with the Holy Spirit. However, recognizing God when He takes on human form on Earth proves to be challenging. This challenge is underscored by individuals in Christianity who claim to be gnani and refer to Jesus as a brother. It is emphasized that Jesus is not a brother to anyone. Regardless of whether He appears as Jesus or under another name, He is identified as the Holy Spirit, making Him a Father, not a brother.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 136,
verse: `<b>(58)	The Gospel of John, 15th chapter, 24th and 25th verses. </b>`,
meaning: ` <b>
(24) If I had not done among them the works no one else did, they would not be guilty of sin. As it is, they have seen, and yet they have hated both me and my Father.
<br><br>
(25) But this is to fulfill what is written in their Law: ‘They hated me without reason.’</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   The task that no one can accomplish on earth is to forgive and remove the sins of a person. Jesus stated that sins would not have been incurred if He had not undertaken the work of forgiving the karma of others. When He publicly forgave the sins of certain individuals, those who were envious and ignorant of His greatness harbored hatred towards Him. Hating Jesus equates to hating the Holy Spirit. Those who harbored hatred toward Him <b>without a valid reason</b> incurred sin.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 137,
verse: ` <b>(59)	The Gospel of John, 15th chapter, 26 and 27 verses. </b>`,
meaning: `<b>
(26) When the Advocate comes, whom I will send to you from the Father—the Spirit of truth who goes out from the Father—He will testify about me.
<br><br>
(27) And you also must testify, for you have been with me from the beginning.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   Jesus came as the Advocate (Bhagavan) and mentioned that He would send another Advocate from the Father to the people. In accordance with spiritual law, He conveyed what He was supposed to say. However, there is no other Advocate with the Father; <b>there is only one God</b> who occasionally appears in the guise of an Advocate. No one else sends Him. When Jesus and the Holy Spirit are considered the same, both the sender and the coming one are identical. Jesus stated, <b>“The Spirit of truth comes as an Advocate, and He will testify about me.”</b> When the one who is coming and the one who is going are the same, it is unsurprising that the coming one will speak about the going one. As the coming Advocate discusses Jesus, His disciples will undoubtedly recall Him. Consequently, the disciples will affirm that Jesus came and imparted wisdom.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 138,
verse: ` <b>(60)	The Gospel of John, 16th chapter, 7th verse. </b>`,
meaning: `<b>
(7) But very truly I tell you, it is for your good that I am going away. Unless I go away, the Advocate will not come to you; but if I go, I will send Him to you.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   In the analogy of a single person playing two characters in a play, the second character appears on stage after the first character exits. Since it is the same person playing both roles, the first character must go behind the scenes for the person in the first character to assume the second role. It’s not possible for the second character to emerge unless the first character goes backstage. This transition occurs because the same person is portraying both characters. Similarly, the one who came in Jesus’ role is expected to return to earth in a second character. Therefore, when Jesus departs from the people, the one who played the role of Jesus will return in a second role. The Holy Spirit took on the role of Jesus. If He were to come again to be with the people, He would have to relinquish His role as Jesus and reappear in a new role, with a new name, and a new appearance. Thus, Jesus stated, <b>“It is for your good that I am going away. Unless I go away, the Advocate will not come to you.”</b> While not explicitly mentioning that He would return as an Advocate, He conveyed, “I will send Him to you when I leave.” From these words, anyone with intelligence will easily discern that the one departing and the one returning are the same.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 139,
verse: `<b>(61)	The Gospel of John, 16th chapter, 8th verse.  </b>`,
meaning: ` <b>
(8) When He comes, He will prove the world to be in the wrong about sin and righteousness and judgment.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  After Jesus’ role disappears behind the scenes, the Advocate (Bhagavan) will come in the second role and second incarnation. The term ‘Advocate’ represents God’s incarnation, but it is not God’s name. The one who comes as the Advocate could have any name in the world. Therefore, no one can determine if this person is the incarnation of God. While no one knows the Advocate’s form or name, there is some chance of recognizing Him through His actions. When the <b>Advocate</b> comes to the earth, He discusses sin, revealing how a person acquires sin, where it is stored until the time of death, and the consequences of sin. <b>He explains that divine wisdom is necessary to rid oneself of acquired sins,</b> as sins are like firewood and wisdom is like fire. Only through wisdom can one escape experiencing sin and gain divine wisdom. The sin of a person who does not attain divine wisdom in life persists until death. Such a person must be reborn on the same day, minute, and moment after death. The day of death is known as the last day. The last day of life becomes the first day of the next life. The person must be reborn within a second of their death. It can be said that the time difference between death and rebirth is only one-tenth of a second. In that short time, <b>Atma</b> judges the deceased based on their sin and punya. Atma then decides what the person must eat, drink, and experience at every moment of the second birth. The life of the born is determined by the judgment made in death. How a person will live their next life is decided based on the judgment of their last day. Atma, which is with the deceased person, judges them correctly based on their deeds from childhood. The actions to be taken in the next life are decided according to existing karma. No one can override this decision, and everyone must accept the judgment.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 140,
verse: `<b>(62)	The Gospel of John, 16th chapter, 12th verse. </b>`,
meaning: `<b>
(12) I have much more to say to you, more than you can now bear. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  When God incarnates as a human, it is crucial to carefully impart wisdom, considering people’s moods, and the teachings should be tailored based on the time and context. Divine wisdom needs to be conveyed with sensitivity to the audience’s readiness to receive the truth. Comparatively, if you inform a woman engaged to you that she is already your wife, she may not accept it before the wedding, leading to potential conflict. However, sharing the same information after the wedding would bring happiness without contention. Similarly, when presenting divine wisdom to those who may not tolerate the truth, there is a risk of misunderstanding and opposition. Therefore, even when God takes on human form, the truth must be shared judiciously. For example, if one were to assert that Ravana Brahma is an incarnation of God, contemporary audiences might grasp the concept to some extent. However, had the same statement been made 50 years ago, there may have been disagreement, with people viewing Ravana as evil and monstrous. Hence, there are instances where wisdom that is meant to be shared earlier must be deferred. In this context, Jesus acknowledged this principle when He stated, <b>“I have much more to say to you, more than you can now bear,”</b> to His disciples. Recognizing that it was time for Him to depart from humanity, He informed His disciples that the coming Advocate would convey what He had not spoken.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 141,
verse: `<b>(63)	The Gospel of John, 16th chapter, 13th verse. </b>`,
meaning: `<b>
(13) But when He, the Spirit of truth, comes, He will guide you into all the truth. He will not speak on His own; He will speak only what He hears, and He will tell you what is yet to come. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus prophesied about the forthcoming Advocate. The term ‘Spirit of truth’ signifies the <b>‘God of wisdom.’</b> Jesus conveyed that the God who would come after Him would lead everyone into the truth and communicate only the truth. Despite God taking on human form, behaving in a human manner, Jesus mentioned, “As a human, He teaches nothing on His own; He speaks only what He hears.” If one wonders who informed the Advocate, there is only one source. Since there is only one who is coming, He is the same one conveying the wisdom. Consequently, it is evident that the visible person can also articulate what God has spoken. Only God can communicate God’s wisdom. Rather than stating that humans are incapable of conveying God’s wisdom, it is phrased that the Advocate will speak only what He has heard.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 142,
verse: ` <b>The Gospel of John, 16th chapter, 14th and 15th verses. </b>`,
meaning: ` <b>
(14) He will glorify me because it is from me that He will receive what He will make known to you.
<br><br>
(15) All that belongs to the Father is mine. That is why I said the Spirit will receive from me that He will make known to you.</b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   If you look at this verse, some parts make sense while others do not. This verse is like playing a game of hide and seek with people. Earlier, Jesus mentioned that the newly coming Spirit of truth would teach what He hears. Subsequently, in the next verse, He stated that the Advocate would take what He received from Jesus and convey it to the people. Additionally, Jesus asserted that the Advocate would express things that Jesus had not said. However, in the current statement, Jesus mentions that the Advocate would inform the people about what He had received from Jesus. The apparent inconsistency in Jesus’ statements may lead to confusion. Yet, there is a deliberate reason for this ambiguity. Jesus chose to express Himself in a way that <b>those genuinely interested in His wisdom would comprehend, while those lacking interest would not.</b> He further stated that the coming Advocate would share what Jesus had said to glorify Him. Jesus then affirmed that all that belongs to the Father is His, with the Father referring to the Holy Spirit or God. By emphasizing that God’s wisdom is His and that the Advocate would convey what He had received from Jesus, it becomes evident that Jesus and the Holy Spirit are synonymous. Instead of explicitly stating, <b>“I am God,”</b> Jesus phrased it as, <b>“All the words of God are mine.”</b>
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 143,
verse: ` <b>(65)	The Gospel of John, 16th chapter, 16th verse. </b>`,
meaning: `<b>
(16) Jesus went on to say, “In a little while you will see me no more, and then after a little while you will see me.” </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  Jesus conveyed to His disciples that they would see Him no more after a while, indicating His departure from among the people and the cessation of His appearance to them. He also mentioned that they would see Him again after a little while, implying that He would leave His physical form, not to reappear in the same bodily manifestation. This statement perplexed the disciples, leading them to question why Jesus spoke of seeing Him again after a little while. When Jesus stated, “In a little while, you will see me no more, and then after a little while, you will see me,” some might have wondered if He would temporarily hide and then reappear. However, in a previous instance, Jesus had explained, “I will go. The Advocate will not come to you unless I go. I will go and send Him.” Thus, Jesus was suggesting that He would fulfill His promise to depart, and after some time, they would see Him again through the coming Advocate, who was also Jesus. In this context, the verse becomes coherent when one realizes that the one (Jesus) departing and the one (Advocate) returning are identical. Jesus emphasized that seeing either one of them is equivalent to seeing only one, as Jesus and the Advocate are one and the same.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 144,
verse: ` <b>The Gospel of John, 16th chapter, 17th, 18th, 19th, 20th, 21st and 22nd verses. </b>`,
meaning: `<b>
(17) At this, some of his disciples said to one another, “What does He mean by saying, ‘In a little while you will see me no more, and then after a little while you will see me,’ and ‘Because I am going to the Father’?”
<br><br>
(18) They kept asking, “What does He mean by ‘a little while’? We don’t understand what He is saying.”
<br><br>
(19) Jesus saw that they wanted to ask Him about this, so He said to them, “Are you asking one another what I meant when I said, ‘In a little while you will see me no more, and then after a little while you will see me’?
<br><br>
(20) Very truly I tell you, you will weep and mourn while the world rejoices. You will grieve, but your grief will turn to joy.
<br><br>
(21) A woman giving birth to a child has pain because her time has come; but when her baby is born, she forgets the anguish because of her joy that a child is born into the world.
<br><br>
(22) So, with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">   When Jesus uttered the words, “In a little while, you will see me no more, and then after a little while you will see me,” people found it challenging to comprehend. In response, Jesus illustrated the concept using a parable of a woman giving birth. He conveyed that, just as the woman experiences pain during childbirth, the disciples would undergo some distress due to His departure. However, He reassured them that they would experience joy and gladness akin to the woman who forgets the pain once the child is born. Jesus addressed those present, acknowledging that there would be a period of pain caused by His leaving, but emphasized that this sorrow would be eclipsed by the joy upon His return.
</div></div>
</span>`
},
{
chapterName: "L'Évangile de Jean",
chapterNumber: 5,
pageNumber: 145,
verse: ` <b>(67)	The Gospel of John, 16th chapter, 25th verse. </b>`,
meaning: `<b>
(25) Though I have been speaking figuratively, a time is coming when I will no longer use this kind of language but will tell you plainly about my Father.   </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"><div class="poemtext">  The words of Jesus, as mentioned earlier, were acknowledged to be obscure, causing difficulty for people to understand and leading to confusion. Jesus Himself admitted to speaking figuratively to prevent immediate understanding. He also asserted, “I will not say figuratively in the future. I will tell you everything clearly.” However, even this statement appears somewhat ambiguous. Jesus declared that He would depart soon, and the Advocate with the Holy Spirit would come to elucidate everything. He clarified that the Advocate would only come if He left and that the disciples would be saddened by His departure but would rejoice upon seeing Him again. Now, He adds, <b>“So far, I said obscurely. When I come back, I will tell you everything clearly.”</b> This statement introduces a degree of uncertainty regarding whether the one coming is a different Advocate or if Jesus Himself will return.
</div></div>
</span>`
},
{
chapterName: "The Scripture of John Revelation",
chapterNumber: 6,
pageNumber: 146,
verse: ` <b>(14)	The John Revelation, 9th chapter, 4th, 5th and 6th verses.</b>`,
meaning: `<b>
(4) They were told not to harm the grass of the earth or any plant or tree, but only those people who did not have the seal of God on their foreheads.
<p>
<div class="container">
          <img src="assets/img/Devunimudra_inside.png"   style="width:100%;">
          <div class="top-left">
           <u> The Seal Of God</u>
          </div>
          <div class="top-right1">
            Nature
           </div>
           <div class="top-right2">
           Holy Spirit
          </div>
          <div class="dm-top-right3">
           Father
          </div>
          <div class="dm-top-right4">
           Son
          </div>
          <div class="dm-bottom-left2">
            Body
           </div>
          <div class="bottom-left">
            <u> For All Religions</u>
           </div>
        </div>
</p>
(5) They were not allowed to kill them but only to torture them for five months. And the agony they suffered was like that of the sting of a scorpion when it strikes.
<br><br>
(6) During those days people will seek death but will not find it; they will long to die, but death will elude them. </b>`,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">  The third verse preceding these verses, Revelation 9:3, states, <b>“Out of the smoke locusts came down on the earth and were given power like that of scorpions of the earth.”</b> This verse indicates that the locusts emerged from the smoke. However, the smoke referred to here is not produced by burning wood or other materials. Instead, it is a dense cloud that appears at dawn on a winter day when the sun has not yet risen. This cloud reduces sunlight and creates darkness. The locust swarms come from this dark cloud. As they arrive on the earth in large groups like an army, they are known as “locust swarms.” No one knows exactly where the locusts come from, but they are believed to originate from the sky’s cloudy mist. Their birth and growth remain a mystery, and they emerge from the smoke in the void without any clear origin. Locust swarms can number in the hundreds, thousands, or even millions.

  The locusts carry numerous diseases that afflict people. Though they may appear as ordinary locusts, they constitute an army of angels, serving as God’s servants, dispatched by His command. God ordered the locusts to afflict humans, and through His command, this army of locusts affects humanity. Emerging from an invisible realm, they hide and inflict bites on people, entering their bodies in the form of diseases and causing torment. God endowed them with as much poison as scorpions on the ground. Humans suffer considerably due to the arrival of locusts from the invisible world, serving as agents of suffering for human sins. They were instructed not to harm the grass of the earth, any plants, or trees except for humans. While the common assumption is that locusts harm grass, plants, and trees, the verse clarifies that these locusts do not harm vegetation but target humans. The origin of locusts, their sustenance, and their mission remain unknown to humans.

  It is evident from the four verses mentioned here that the army of angels in the form of locusts comes to afflict humans. The army of God’s servants, taking the form of locusts, possesses the power to torment humans for up to five months, yet they lack the authority to cause death. When the locusts invisibly bite humans, they induce a disease that inflicts pain akin to the sting of a scorpion. The intensity of suffering varies based on individual karma, ranging from mild discomfort to the level of a scorpion sting. As no one can evade this pain, humans must endure it. The verse indicates that during severe suffering, people may wish for death as an escape, but they are not permitted to end their own lives. Hence, humans must endure the pain. The verse further conveys that even death eludes them, signifying that humans cannot escape the suffering caused by the locusts.

  If the locusts, originating from invisible smoky clouds, come a hundred times, they may only become visible once. Remaining unseen, they can have various effects on humans, causing harm in the form of disease or through other means. The verse indicates that their harm is directed solely at humans and can manifest in any form. It is stated that humans will endure this harm because the locusts are commanded to inflict it. Even if humans seek death due to unbearable suffering, it remains elusive as death runs away from them. Although humans suffer in various ways from the “invisible locusts (servants)” that God has sent, they do not contemplate the causes of their suffering. They are unable to escape their suffering through God’s words.

  Many new diseases are emerging worldwide, yet humans often do not contemplate their origins. Identifying a new disease takes time, and finding a cure can be even more prolonged. Just as a cure is discovered for one ailment, another elusive one may surface. Alongside diseases, there are undiagnosable ailments and suffering. While some people acknowledge that invisible forces contribute to suffering, no one knows how to effectively address them. <b>The only way to avoid suffering caused by invisible angels is to wear the Seal of God, a symbol of God’s power. God commanded His servants to persecute only those who do not wear the Seal of God.</b> Though some believe that visible locusts can harm plants and trees, <b>God directed His invisible locusts to inflict harm solely upon those who lack the Seal of God on their foreheads.</b> In the final divine scripture, verses 5:22 and 22:32 mention the Seal of God. The Akshara Parabrahma Yoga of the first divine scripture, Bhagavad-Gita, hints at the Seal of God. In my scripture, <b>“The Seal of God,”</b> we detail how the Seal of God looks. Instead of questioning others, have faith in God and wear the Seal of God, as it is not tied to any particular religion. The Seal of God is mentioned in three divine scriptures. The Revelation of the Bible explains the disasters caused by not wearing the Seal of God. Christians should not hesitate to wear God’s seal; it is a matter of faith. <b>Regardless of your religion, protect yourself from suffering. Listen to me and wear “The Seal of God,” which was previously unknown. Protect yourself from suffering.</b>
</div></div>
</span>`
},
{
chapterName: "Three Fingers",
chapterNumber: 7,
pageNumber: 147,
verse: ``,
meaning: ``,
pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext">  The portrait of Jesus seldom appears to people. Upon closer examination, <b> Jesus can be seen showing three fingers with His right hand.</b> Jesus imparted divine wisdom for approximately three years, and even after His death, His portrait appears to convey teachings to the people. While interpretations may vary, my understanding upon seeing the picture is that it contains a crucial message from Jesus’ teachings. In the first divine scripture, God is depicted in three parts - <b> Kshara, Akshara, and Purushottama.</b> Similarly, in the last divine scripture, God is described as having three aspects - <b> Passenger, Driver, and Witness.</b> In the second divine scripture, God is said to be in three parts - <b> Son, Father, and the Holy Spirit.</b> The three aspects of God are expounded in the Bhagavad-Gita, the Bible, and the Quran as the same wisdom. The fundamental wisdom in these three scriptures lies in understanding the three aspects of God. Once one comprehends the three aspects of God, complete understanding of God’s wisdom becomes possible.

  However, Hindus reading the Bhagavad-Gita do not know who <b>Jeevatma (Kshara)</b> and <b> Atma (Akshara)</b> are. Similarly, Christians do not know who the Son and the Father are. Muslims do not know who <b> the Passenger and the Driver are.</b> In the Bhagavad-Gita that I wrote, I mentioned that Hindus are unaware of the perishable Jeeva, and the eternal God present in the body. In the Bible, I also noted that Christians do not understand the details of the two sons - <b> the Son and the Father.</b> Similarly, in the scripture <b> “The Diamond Verses in the Final Divine Scripture,”</b> I mentioned that Muslims do not know about the <b> two Allahs.</b> People of these three religions may have no idea about the other two parts of God, which are the main essence of their respective scriptures. The only term everyone recognizes is ‘God.’ Unknowingly, all of them are worshipping the third part, known as Purushottama in Bhagavad-Gita, the Holy Spirit in the Bible, and the Witness in the Quran. God Himself stated that it is not right to worship the third part of God (the Holy Spirit), who is beyond all worship and all dharmas. Yet, everyone worships <b> “the God who does not need anything.”</b> It can be said that human ignorance lies in not knowing that God does not need our worship.

  Regarding Christians, they are unaware of the <b> “two Sons”</b> mentioned in their scripture. Although the Bible mentions two Sons, Christians believe there is only one Son and are not familiar with the wisdom of two Sons. They may not know that there are two Sons – <b>the Permanent Son and the Temporary Son.</b> The Bible refers to them as <b>the Son and the only begotten Son,</b> but Christians do not know who these two Sons are. Similarly, no one in any religion may know that there are two Gods - <b>the God, who is the Father, and the God, who is the Grandfather.</b> Even though this truth is scientifically presented in the scripture, some people may not believe it, and others deny the existence of two Gods altogether. Although the scriptures state that there is only one God to be worshipped, it is unclear whether this God is the Father or the Grandfather.

  Those who possess divine wisdom and those who read the scriptures worship only one God based on their understanding. They may worship the <b>Grandfather-God</b>, who should not be worshipped, instead of the <b>Father-God</b>, who should be worshipped. The terms Father-God and Grandfather-God may seem new, but this matter is actually in their scriptures. People often fail to comprehend truthful wisdom. When someone shares the truth with them, they may react angrily and reject it. In my Bible, I read that there are two Sons - the Son of Man and the Son of God - and that the Holy Spirit, who is in the Grandfather position, should not be worshipped. Those who consider the Holy Spirit to be God and have been worshipping Him as such may now be in a state of confusion. Jesus taught significantly about the two Sons and the Holy Spirit. He even portrayed <b>“The two Sons and their Father, the Holy Spirit,”</b> using his fingers. Jesus used His right hand to show the two fingers - the index finger and the middle finger - and also the thumb. I understood that the thumb is an indication of the Holy Spirit in the portrait. Since God is the one who grants perceptive power to the intellect (buddhi), according to truthful wisdom, Jesus showed both the Father (Atma) and the Son (Bhagavan) with two fingers (index and middle). It is understood that they represent the permanent Son and the temporary Son. The scripture summarizes that <b>the Holy Spirit will not be known until those two Sons are known.</b> Everyone should know that the spiritual secret which should be known to the entire human society is <b>the matter of the two Sons.</b> If you look at Jesus’s three fingers in the picture on the next page, they remind us of the Holy Spirit and the two Sons - Atma and the only begotten Son.
</div></div>
<ion-row><ion-col class="ion-text-center">
<img src="assets/img/jesus.png"/>
</ion-col></ion-row>
</span>`
},
{
chapterName: "Good Friday! - Bad Friday!",
chapterNumber: 8,
pageNumber: 148,
verse: ``,
meaning: ``,
pageText: ` <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem"> <div class="poemtext"> Certain events in life bring happiness, while others bring sorrow to a person. During moments of joy, an individual is cheerful and enjoys good food and clothing. Conversely, when faced with sorrow, one loses appetite and interest in various aspects of life. The Diwali festival in India, for example, is celebrated with firecrackers to commemorate the defeat of the wicked demon Narakasura on that day. In ancient times, the scribes, Pharisees, and scholars who brought Jesus before the court and orchestrated His execution rejoiced over His death. They annually celebrated Jesus’ death anniversary as Good Friday, considering it a day of happiness. Since then, the festival has been known as ‘Good Friday.’

In the early days, individuals who were unaware of Jesus’ greatness, along with the scribes and scholars, celebrated the festival. This occurred when Jesus’ value and wisdom were unknown. In the present time, even those who are familiar with Jesus’ wisdom are celebrating the day of Jesus’ death as Good Friday. While it is customary to celebrate joyfully on a good day, the day Jesus died is expected to be a painful day for His devotees. It is surprising to witness Christians, who profess Jesus as their God, happily wearing new clothes and eating good food without expressing grief over Jesus’death on that day.

Indeed, the day when Jesus was killed should be labeled as a ‘Bad Day.’ Jesus’ devotees should express sorrow and refrain from eating on that day. It is perplexing to celebrate the day as a festival and name it ‘Good Friday’ as if it were a day of goodness. Even those who consider Jesus their family God participate in the celebration, revealing their lack of understanding of Jesus’ value. Those who deeply revere Jesus should regard that day as a ‘Bad Friday.’ Preachers bear the responsibility of educating people about the significance of Bad Friday and discouraging them from celebrating it. Individuals who fail to distinguish between a death day and a birthday lack an understanding of the greatness of God’s wisdom. When the head of a family passes away, the entire family mourns, and the same reverence should be given when Jesus, who should be esteemed more than a family member, dies. Celebrating Jesus’ death as a festival without grief is a mistake, assuming it to be an auspicious day. Jesus said, <b>“Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me.”</b> When people mourn the death of a family member but do not mourn Jesus’ death and instead celebrate it as a festival, how can they be worthy of Jesus’ mercy? Therefore, let us refer to Good Friday as a ‘Bad Friday’ to honor Jesus. It becomes an act of reverence to Jesus when we consider that day as an evil day and mourn without celebrating it. Otherwise, <b>we express admiration for Jesus only with our words, not in our hearts.</b> If you honor, love, worship, and pray to Jesus, then propagate the notion of Good Friday as Bad Friday and help everyone understand it. Then you will become a true devotee of Jesus. When you forsake Good Friday, nothing bad happens to you; only good things occur.
</div></div>
<ion-row><ion-col class="ion-text-center">
Yours
The Only Guru of Three Religions<br>
<b>Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu</b><br><br>

Although one thousand persons support - a lie cannot become truth. <br>
Although one thousand persons negate - truth cannot become a lie.
</ion-col></ion-row>
</span>`
},
{
chapterName: "A Letter From A Hindu",
chapterNumber: 9,
pageNumber: 149,
verse: ``,
meaning: ``,
pageText: `
<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
<div class="poem">
<div class="poemtext">
<i>First, prostrations to Swami.... </i>

Jai Srirama! My name is Pittala Thirumalesha, age 36, Nalgonda village, Telangana district. Occupation: Job, Caste: Mudiraju (Boya caste), Religion: Hindu religion, Father’s occupation: First farmer later rickshaw puller, Mother’s occupation: fruit seller, My education: <b>M.Sc., B.Ed. (Mathematics). </b>.

Sir, I am writing this letter with the intent that my spiritual introduction will do something good for this society. After reading your scripture,  <b>“Gems in the Second Divine Scripture,” </b> I wanted to write this letter. It seems that writing scripture on the Bible is the most audacious act of a Hindu (Indhu) Swamiji. Many think that a Swamiji may write Bhagavad-Gita but not Bible. I have already read your scriptures, the Bhagavad-Gita, and the Quran. Now I have also learned the wisdom of the Bible through your writing. I understood the divine wisdom in the three scriptures of the three religions through you. Knowing the current state of society, I am expressing some of my views with good intentions through this letter.

The first scripture that I read is <b>“The Secret of Bermuda Triangle.”</b> Through this scripture, I learned the secret of why planes and ships disappear into the Bermuda Triangle. I am so glad to have realized this strange fact that was like a Hollywood movie. Then read the scripture <b> “Ghosts - Bhutas (The Real Incidents)”</b> and came to know scientific information about the  <b> “invisible(subtle) world.”</b> Besides, I was so surprised when I came to know how God’s government and the Divine Law operate, and I thank my God for knowing the greatest mystery. I then read the scriptures <b> “The Story of a Truth Seeker”</b> and  <b> “Sri Krishna God or Bhagavan?”</b> I was so happy to learn a great secret from the scripture  <b> “Sri Krishna God or Bhagavan?”</b> Now that I have found a destination for my life, I am happy to have visited Krishna temple at Prabodhashramamu, Chinna Podamala, and worshipped Lord Krishna. Since visiting the Prabodhashramam in July 2012, I am thrilled with joy every day for absorbing the wisdom from your 93 scriptures and 150 lectures.

Through the scripture <b>“Temple Traditions (Hidden Truths),”</b> I learned about the significance of temples. I have grasped the true meaning of the suppressed traditions from <b> “Indu Sampradayas (Traditions).”</b> From the scripture <b> “Mana Pandugalu (Our Festivals)”</b> I have not only understood the meaning of <b> ‘Pandu (fruit)’</b> in <b> “Panduga (festival)”</b> but also understood the essential purpose of festivals and the intent of our elders’ pre-planned thought. As you said in this scripture, it is a hundred percent true that first spiritual development and then personal development and later social development take place. Every scripture that comes from you is a wisdom mine. Every preaching is a dharma treasure. Your words are beneficial not only to humans but also to all living things. This is the truth that I am telling after experiencing over the past six years.

I was despondent when your religion Hindus said derogatory words against you, the great emperor. But I am sharing some information through this letter to make everyone aware of the facts.

Thraitha Theorem Bhagavad-Gita conveyed the real message of Lord Krishna. Swami’s scriptures <b> “Wisdom words in the Last Divine Scripture (704 pages)”</b> and <b> “Diamonds in the Last Divine Scripture”</b> made the world understand the divine wisdom which Gabriel (The Sun) sent to Prophet Mohammed. The scripture of the Yogeeswarlu <b> “Gems in the Second Divine Scripture (352 pages)”</b> conveyed the real message of Jesus’ Gospels.

Here is my appeal to the intellectuals dwarfed with religious hatred, merciless religious demons, incomplete gnanis who are mad about the religion, political monsters who do not know the value of ashram, false prophets who mislead society with caste scabies and religious madness, rationalists who do not know the reason, truth-finding communities that are not aware of the truth, and elders who are pushing the society into superstition using the words God, Soul, worship, and wisdom. Please read at least one of Swami’s scriptures thoroughly to know the greatness of the <b>“Thraitha Theorem”</b> and pay close attention to what it says. Let us observe one of Swami’s words.

<b>“Religions are prohibited. Castes are irrational. All three - The Bhagavad-Gita, the Bible, and the Quran - are parts of the same divine scripture. If your feeling goes beyond caste, immediately join the Prabodha Seva Samithi. God wants you to be gnani – Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu”</b>

Swamiji not only said above words but also performed inter-caste and inter-religion marriages. He also married another caste woman. Is it religious hatred and poisonous writing on such a great Swami? Men, you think once with discretion.

Swami’s scriptures conveyed the real wisdom of Vemana poems. They tell the real meaning of philosophical poems of Veerabrahmam. The Atmalinga Shatakam conveyed spiritual information. He has provided many of the greatest secrets unknown to the world and the divine information that contributes to humanity’s spiritual prosperity. Many atheists who have grasped wisdom from his scriptures have become true believers. Even the fools became rationalists. Blind believers became spiritual scientists with the scientific approach. Even terrorists have changed and became gnanis.
<b>
  A Hindu who knows his wisdom is a true Indu (true gnani).<br>
  A Christian who knows his wisdom is a true Christian (true believer of God).<br>
  A Muslim who knows his wisdom is a true Muslim (truly obedient to God).
  </b>

His scriptures eradicate karma and forgive sin. If you put His scripture on the body where you have pain with devotion and belief, it will cling without any support until it destroys the karma that caused it and provides relief. While this may come as a surprise, it is a blatant truth told based on my experience.

It is through His writings that the world has come to know the truth about ‘Bhagavan Ravana Brahma,’ the incarnation of God in Thraitha Yuga. Even Sita Devi, who everyone claims to be the victim, did not accuse Ravana Brahma. Why couldn't the Aryans who wrote the Ramayana tell the age of Ravana Brahma at the time of Sita's kidnap? If this question were answered, the original hidden stories of the Ramayana would come out. Ravana Brahma visited Sita Devi in Ashokavana with wife Mandodari and Meghnaad, but why was he portrayed as a vicious man? Even though the elderly Ravana Brahma did not attend Sita’s swayamvara, is it not a shame to write that he was unable to lift the Shiva’s bow in Sita’s swayamvara? When he took Sita, his daughter, without touching her to his kingdom Sri Lanka, would you falsely write that he was a lustful man? Some selfish people have planned conspiracies against him, saying that he took her with lust; how is this possible based on what you said that anyone who touched Sita would be burnt to death? At least for now, this community should know the truth in Ramayana. Mandodari Devi, who knew the secret that Sita’s suffering, and incarnation of Bhagavan Ravana Brahma would end soon, used to tell people of her kingdom that Ravana Brahma brought Sita to Lanka for the welfare of Sita. We wish to see the portraits of the great Sri Bhagavan Ravana Brahma and Srimati Mandodari Devi.

You do not really know who you are. Do not put unnecessary junk messages on Facebook and YouTube, and when you blaspheme, you will accumulate years of karma. Do not listen if you do not have to. When you do not know dharma’s definition and how many dharmas, do not call gnanis for debate on the public TV.

Thraitha Theorem is the real standard. This standard is used to measure the level of religious hatred. The world will come to know how much wisdom there is in religions, and how much hatred there is in religions through wisdom in Thraitha Theorem. Thraitha Theorem wisdom reveals to this world how much wisdom there is in religions, and how much hatred there is in religions. Prabodha Seva Samiti and its five affiliates firmly believe that whatever happens will happen with God’s permission.

<b>Prabodhashramam is the only organization that brings spiritual development.</b> All other organizations work for personality development and a better society. But everyone should recognize that if spiritual development does not happen, personality and social development will not occur.

The wisdom of Yogeeswarlu is caste-free and religion-free. That is why people of ll religions - Hindus, Muslims, and Christians - come to him with harmony and are happy to know the real divine wisdom. As Veerabrahmam said, His wisdom is uniting all three religions. Brahmam said in Kalagnanam (prophecy), <b>“All the great demi-gods (devatas) are at Anandashramam.”</b> Devatas came and spoke with joy to learn the wisdom of their father. He also said, <b>“Prabodhashramam has the highest level of wisdom. Those in Prabodhashramam consist of attributes of Almighty. That almighty was only Ananda Guru. Ananda Guru is Guru to you and me as well.”</b> Such messages of words spoken by Brahmam himself are found in Swami’s scriptures. You should grasp God’s wisdom with discretion and diligence.

Are those who do not read Bhagavad-Gita are saviors of Hindu dharmas? Will the fools, who do not know the injustice in history, uphold the Hindu religion? Can you build an equal society without knowing the “Secret of the beginning” and “Secret of creation?” Recognize the goodness in the scriptures by reading with patience and without religious hatred. If you feel bad, leave it. There is no rule that everyone should believe it. <b>The Thraitha Siddantha scriptures and teachings,</b> which are so beneficial to humanity and have a rational scientific and spiritual consciousness and reveal the secrets of <b>Brahma, Karma, and Bhakti Yogams</b> in detail with Jeevatma, Atma and Paramatma, are essential to the present society.

The organizations - UNO, World Peace Council, Police Act, IPC, CrPC, Prison Acts, CBI, CBCID, Intelligence Reports, ACB, Human Rights Watch, Woman Rights, SC ST Atrocities Act, Indian Trusts Act, Muslim Law, Christian Law, Labor Acts, Central Government GOs, State Government GOs, Election Commission, Indian Constitution, Indian Courts, RTI Act, Information Technology Act 2000 – exist, in fact, for the sake of human welfare. Spiritual institutions have a responsibility for telling people what kind of wisdom is suitable for their welfare. Prabodhashramam and its affiliates take first place in such responsible institutions. Above all, we must not forget that there is also <b>“Divine Law and Divine Administration.”</b>

The essence of the three divine scriptures is to explain about the three souls. Life without divine wisdom is a waste. God gave life to man only to know God’s wisdom. God’s wisdom is beyond caste and religion. Yogeeswarlu provided the true meaning of Lord Krishna’s wisdom through the ‘first divine scripture Bhagavad-Gita.’ He gave us the Quran wisdom, which came to Prophet Muhammad through Gabriel, in the scriptures ‘Wisdom words in the Last Divine Scripture’ and ‘Diamonds in the Last Divine Scripture.’ He told us Jesus’ Gospel wisdom in ‘Gems in the Second Divine Scripture.’ He is giving us practical real divine wisdom through scriptures and teachings. Know the wisdom that He said and wear the Seal of God and receive forgiveness of sins. If you listen carefully and practice it, you are lucky. If you do not listen, that is your karma. Everything is happening according to God’s will, and God knows it.
<b>
Hindus should know which God to worship. Muslims need to know who the
two Allahs (the two creators) are. Christians need to know who the two sons are.</b>

A man never becomes God, but God can come as a man. To recognize the God who is in human form, we must first have his wisdom in us. To recognize God, we need to know these two principles that elders said. As Vemana yogi said his poems can be understood in 1000 ways, and similarly, the Thraitha theorem wisdom can be understood in 9000 ways. According to the saying “Shraddhavan labhate gnanam (Those who have interest will attain wisdom)”, those who are thoughtful and intellectual can understand the wisdom of Thraitha.

At least now, quit the thought of caste and religion and know the real divine wisdom. If you do not know now, you will never know. Time is Short. Do it Now.

I offer fragrance flowers to Yogeeswarlu feet to give us more divine wisdom. I offer unlimited salutations with all my heart and all my soul and mind.
</div></div>
<ion-row><ion-col class="ion-text-center">
Your Obedient Servant <br>
<b>Thirumalesu </b>
</ion-col></ion-row>
</span>
`
},
{
chapterName: "",
chapterNumber: 10,
pageNumber: 150,
verse: ``,
meaning: ``,
pageText: `
<p style="text-align:center;">
<div class="container">
<img src="assets/img/1.png"   style="width:100%;">
<div class="img1-title1">
  Gems in
</div>
<div class="img1-title2">
 The Second Divine Scripture
</div>
<div class="img1-title3">
 (Gospels in the Thraitha Theorem)
</div>
<div class="img1-title4">
 Writer: The only Guru of three religions(Hindu, Muslim, Christian), The Emperor of Spiritual Kingdom, The writer of more than hundred divine holy books, Indu Gnana Dharma Pradata, The Sensational Writer, Adi Karta of Traita Doctrine
</div>
<div class="img1-title5">
Sri Sri Sri Acharya Prabodhananda Yogeeswarulu
</div>
</div>
</p>`
},
{
chapterName: "Glossary",
chapterNumber: 11,
pageNumber: 151,
verse: ``,
meaning: ``,
pageText: `
<ion-row>
<ion-col class="ion-text-center">
<b>GLOSSARY</b></ion-col>
</ion-row>
<div class="poem">
<div class="poemtext">
<b>Achara Prakruti:</b> Unchangeable five elements - Sky, Air, Fire, Water and Earth. Those (Prakruti) that do not have karma. Prapancha. Pancha Bhutas.

<b>Adharmas:</b> They are against dharmas. They cause good karma, bad karma, or both. Adharmas mentioned in Bhagavad-Gita - studying Vedas, doing charities, performing
sacrifices (yajnas), penances (tapas) etc.

<b>Agami karma:</b> Newly coming sin and punya from birth to death. Impending karma.

<b>Aham:</b> Part inside the body but not guna.

<b>Antahkaranams:</b> Five subtle body parts - Jeeva (Jeevatma), Manas, Buddhi, Chittam, and Aham.

<b>Astrology:</b> One who knows spiritual wisdom knows the other person's karma with his wisdom and informs him. To know the future wisdom eye is required. That which is known with wisdom light.

<b>Atma:</b> One who inhabits with mortal being. One who is imperishable. One who is in all living bodies. Atma. Akshara purusha. Immortal soul.

<b>Bhagavan:</b> One who came from God. One who came with God's information Christ, Svayambhu or Comforter or the only begotten Son. Advocate or Helper. Messenger of God. Guru.

<b>Buddhi:</b> It is intellect in the body, which analyzes the pros and cons of an action. Chara Prakruti: The changing Prakruti. Jagath. Living beings. Chara Prakruti. The total body parts in every living being are 25. Covenant blood: Wisdom power. Essence of wisdom. God’s wisdom without the bonds of karma.

<b>Devatas:</b> Invisible humans. Demi-gods.

<b>Dharma Shastra: </b>Scripture with dharmas (wisdom). God’s commandments. Brahma Vidya. Super science.

<b>Dharmas:</b> Divine wisdom. Divine doctrines or principles. Commandments. Following dharmas leads to liberation from life and death.

<b>Ghost: </b>Person living with a subtle body. Devil or demon.

<b>Jeevatma:</b> Mortal soul in the body. Kshara purusha or Jeeva.

<b>Gnanendriyas:</b> Five sensory organs - eye, ear, nose, tongue, and skin.

<b>Gnani:</b> A person who knows divine wisdom and dharmas. Brahma gnani.

<b>Karma Chakra:</b> It is a set of 108 parts. Each of the 12 parts of the Karma chakra has a different type of karma. Each type of karma is further divided into nine parts. Twelve parts have 108 (12*9) types of karma.

<b>Karma visarga:</b> Dividing karma into tiny parts.

<b>Karma Yogam:</b> When a Jeevatma recognizes Aham in his body and does not listen to what Aham says, then he does not get any karma. It is Jeeva's fight against Aham.

<b>Karma Yogi:</b> A person who knows wisdom and practices Karma Yogam.

<b>Karma: </b>Invisible sin and punya.

<b>Karmendriyas:</b> Hands, legs, mouth, anus, and sexual organ.

<b>Manas:</b> It functions as communicator between brain and organs. It remembers and recollects things.

<b>Moksham:</b> Liberation from birth, death, life, sufferings, etc. Union with God. Paraloka, Mukti or Salvation. Liberation.

<b>Paramatma:</b> Which is different from Atma. Father to entire living beings and Pancha Bhutas. God, The Holy Spirit, Allah, Purushottama, Uttama Purusha or the father of paraloka. Supreme soul.

<b>Prakruti:</b> Combination of Chara Prakruti and Achara Prakruti. Nature.

<b>Prarabdha karma: </b>Pre-determined karma. This happens in this life from birth to death. Prarabdha karma is decided when a man is born.

<b>Punya:</b> It comes from the good deeds. That which causes pleasures in life.

<b>Purusha: </b>Pertaining to Paramatma in any living being.

<b>Sanchita karma:</b> The karma accumulated like a heap after experiencing karma in every birth is called sanchita karma.

<b>Sin:</b> It comes from bad deeds. It causes difficulties and grief.

<b>Tanmatras:</b> Derivative energies (sight, hearing, smell, taste, and touch) that connected to sense organs.

<b>Upadesa:</b> Obtaining fire of wisdom as charity. Country which is not country (Everyone who has wisdom eye must see). Wisdom energy, Paramatma. Baptism. Wisdom initiation.

<b>Yogi:</b> One who is in Yogam. The doer of Yogam. A person who knows divine wisdom and practices dharmas.
</div>
</div>`
},
{
chapterName: "Videos",
chapterNumber: 12,
pageNumber: 152,
verse: `
`, meaning: `
`, pageText: `
`
},
    {
      chapterName: "Share",
      chapterNumber: 13,
      pageNumber: 153,
      verse: `
    `, meaning: `
    `, pageText: `

    <ion-row>
    <ion-col style="font-size:17px">
      <ion-title class="ion-text-center"> <b>Share The Apps </b></ion-title><br>
    </ion-col>
  </ion-row>

  <ion-row>

    <ion-col class="ion-text-center">

          <ion-row>
            <ion-col>
              <span><b>Click on the below link to share this app among your friends and family members</b></span>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
     <span><b>Whatsapp: <a href="https://wa.me/?text=https://play.google.com/store/apps/dev?id=7706717796953849920">Thraitha Theorem Apps For Android</a></b></span>
              <br>
              <span><b>Whatsapp <a href="https://wa.me/?text=https://apps.apple.com/us/developer/three-souls/id1541256362">Thraitha Theorem For iOS</a></b></span>
              <br>
     <span><b>Telegram <a href="https://play.google.com/store/apps/dev?id=7706717796953849920">Thraitha Theorem Apps For Android</a></b></span>
     <br>
     <span><b>Telegram  <a href="https://telegram.me/share/url?url=https://apps.apple.com/us/developer/three-souls/id1541256362">Thraitha Theorem Apps For iOS</a></b></span>

            </ion-col>
          </ion-row>


    </ion-col>

  </ion-row>

    `
    },

  ];


  chapters: any = [

    { title: "Le chemin de Dieu", component: 0, chapterNumber: 0, subs: null, icon: 'information' },
    { title: 'Le secret de la création', component: 1, chapterNumber: 1, subs: null, icon: 'information' },
    {
      title: "L'Évangile selon Matthieu", component: null, chapterNumber: 2, icon: 'book',
      subs: [
        {
          shloka: "3-7. You brood of vipers...",
          component: 2,
          subs: null
        },
        {
          shloka: "3-11. I baptize you with water...",
          component: 3,
          subs: null
        },
        {
          shloka: "3-12. His winnowing fork...",
          component: 4,
          subs: null
        },
        {
          shloka: "3-16. As soon as Jesus was...",
          component: 5,
          subs: null
        },
        {
          shloka: "3-17. And a voice from the sky...",
          component: 5,
          subs: null
        },
        {
          shloka: "4-10. Jesus said to him, “Away from me...",
          component: 6,
          subs: null
        },
        {
          shloka: "5-10. Blessed are those who are persecuted...",
          component: 7,
          subs: null
        },
        {
          shloka: "5-17. Do not think that I have come to abolish...",
          component: 8,
          subs: null
        },
        {
          shloka: "5-18. For truly I tell you, until sky and earth...",
          component: 9,
          subs: null
        },
        {
          shloka: "5-19. Therefore, anyone who sets aside...",
          component: 10,

          subs: null
        },
        {
          shloka: "5-20. For I tell you that unless...",
          component: 11,
          subs: null
        },
        {
          shloka: "5-28. But I tell you that anyone...",
          component: 12,
          subs: null
        },
        {
          shloka: "5-29. If your right eye causes you...",
          component: 13,

          subs: null
        },
        {
          shloka: "5-30. And if your right hand causes...",
          component: 13,

          subs: null
        },
        {
          shloka: "6-3. But when you do dharma...",
          component: 14,

          subs: null
        },
        {
          shloka: "6-4. So that your giving may be in...",
          component: 14,

          subs: null
        },
        {
          shloka: "6-6. But when you pray, go into your...",
          component: 15,

          subs: null
        },
        {
          shloka: "6-7. When you pray, do not keep...",
          component: 16,

          subs: null
        },
        {
          shloka: "6-8. Do not be like them, for your...",
          component: 16,

          subs: null
        },
        {
          shloka: "7-7. Ask and it will be given to you...",
          component: 18,
          subs: null
        },
        {
          shloka: "7-8. For everyone who asks receives...",
          component: 18,
          subs: null
        },
        {
          shloka: "7-13. Enter through the narrow gate...",
          component: 17,
          subs: null
        },
        {
          shloka: "7-14. But small is the gate and...",
          component: 17,
          subs: null
        },

        {
          shloka: "7-15. Watch out for false prophets...",
          component: 19,
          subs: null
        },
        {
          shloka: "7-21. Not everyone who says to me...",
          component: 20,
          subs: null
        },
        {
          shloka: "7-22. Many will say to me on that day...",
          component: 21,
          subs: null
        },
        {
          shloka: "7-23. Then I will tell them plainly...",
          component: 21,
          subs: null
        },
        {
          shloka: "8-22. Jesus told him, “Follow me...",
          component: 22,

          subs: null
        },
        {
          shloka: "9-12. On hearing this, Jesus said...",
          component: 23,

          subs: null
        },
        {
          shloka: "9-13. For I have not come to cal...",
          component: 23,

          subs: null
        },
        {
          shloka: "8-23. Then he got into the boat... ",
          component: 24,
          subs: null
        },
        {
          shloka: "8-24. Suddenly a furious storm...",
          component: 24,
          subs: null
        },
        {
          shloka: "8-25. The disciples went and wok...",
          component: 24,
          subs: null
        },
        {
          shloka: "8-26. He replied, “You of little faith...",
          component: 24,
          subs: null
        },
        {
          shloka: "9-6. I want you to know that the Son...",
          component: 25,

          subs: null
        },
        {
          shloka: "10-20. For it will not be you speaking...",
          component: 26,

          subs: null
        },
        {
          shloka: "10-30. Even the very hairs of your...",
          component: 27,

          subs: null
        },
        {
          shloka: "10-34. Do not suppose that I have...",
          component: 28,

          subs: null
        },
        {
          shloka: "10-35. For I have come to turn...",
          component: 28,

          subs: null
        },
        {
          shloka: "10-36. A man’s enemies will be...",
          component: 28,

          subs: null
        },
        {
          shloka: "10-37. Anyone who loves their father...",
          component: 29,
          subs: null
        },
        {
          shloka: "10-38. Whoever does not take up... ",
          component: 30,
          subs: null
        },
        {
          shloka: "10-40. Anyone who welcomes (receives)...",
          component: 31,
          subs: null
        },
        {
          shloka: "11-9. What did you go out to see?...",
          component: 32,
          subs: null
        },
        {
          shloka: "11-28. Come to me, all you who are...",
          component: 33,
          subs: null
        },
        {
          shloka: "12-17. This was to fulfill what was...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-18. Here is my servant whom...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-19. He will proclaim justice (wisdom)...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-20. A bruised reed he will not break...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-21. In his name the nations wil...",
          component: 34,
          subs: null
        },
        {
          shloka: "12-31. So, I tell you, every kind of sin...",
          component: 35,
          subs: null
        },
        {
          shloka: "12-32. Anyone who speaks a word against...",
          component: 36,

          subs: null
        },
        {
          shloka: "12-36. But I tell you that everyone...",
          component: 37,
          subs: null
        },
        {
          shloka: "12-37. For by your words you...",
          component: 37,
          subs: null
        },
        {
          shloka: "12-40. For as Jonah was three days...",
          component: 38,

          subs: null
        },
        {
          shloka: "13-13. Though seeing, they do not...",
          component: 39,
          subs: null
        },
        {
          shloka: "13-14. In them is fulfilled the prophecy...",
          component: 39,
          subs: null
        },
        {
          shloka: "13-15. For this people’s heart has become...",
          component: 39,
          subs: null
        },
        {
          shloka: "15-7. You hypocrites! Isaiah was...",
          component: 40,
          subs: null
        },
        {
          shloka: "15-8. These people honor me with their lips...",
          component: 40,
          subs: null
        },
        {
          shloka: "15-9. They worship me in vain;...",
          component: 40,
          subs: null
        },
        {
          shloka: "15-11. What goes into someone’s mouth...",
          component: 41,
          subs: null
        },
        {
          shloka: "15-12. Then the disciples came to...",
          component: 42,
          subs: null
        },
        {
          shloka: "15-13. He replied, “Every plant that...",
          component: 42,
          subs: null
        },
        {
          shloka: "15-14. Leave them; they are blind...",
          component: 43,
          subs: null
        },
        {
          shloka: "16-21. From that time on Jesus began...",
          component: 44,
          subs: null
        },
        {
          shloka: "16-22. Peter took him aside and began...",
          component: 44,
          subs: null
        },
        {
          shloka: "17-22. When they came together...",
          component: 44,
          subs: null
        },
        {
          shloka: "17-23. They will kill him, and on the...",
          component: 44,
          subs: null
        },
        {
          shloka: "19-23. Then Jesus said to his disciples...",
          component: 45,
          subs: null
        },
        {
          shloka: "19-24. Again, I tell you, it is easier...",
          component: 45,
          subs: null
        },
        {
          shloka: "20-17. Now Jesus was going up...",
          component: 44,
          subs: null
        },
        {
          shloka: "20-18. We are going up to Jerusalem...",
          component: 44,
          subs: null
        },
        {
          shloka: "20-19. They will hand him over to...",
          component: 44,
          subs: null
        },
        {
          shloka: "22-36. Teacher, which is the greatest...",
          component: 46,
          subs: null
        },
        {
          shloka: "22-37. Jesus replied: “Love the Lord...",
          component: 46,
          subs: null
        },
        {
          shloka: "22-38. This is the first and greatest...",
          component: 46,
          subs: null
        },
        {
          shloka: "22-39. And the second is like it...",
          component: 46,
          subs: null
        },
        {
          shloka: "22-40. All the Law and the Prophets...",
          component: 46,
          subs: null
        },
        {
          shloka: "23-8. But you are not to be called...",
          component: 47,
          subs: null
        },
        {
          shloka: "23-9. And do not call anyone on earth...",
          component: 47,
          subs: null
        },
        {
          shloka: "23-10. Nor are you to be called instructors...",
          component: 47,
          subs: null
        },
        {
          shloka: "23-15. Woe to you, teachers of the law...",
          component: 48,
          subs: null
        },
        {
          shloka: " 24-35. Sky and earth will pass away...",
          component: 49,
          subs: null
        },
        {
          shloka: "24-42. Therefore, keep watch, because...",
          component: 50,
          subs: null
        },
        {
          shloka: "26-26. While they were eating, Jesus ...",
          component: 51,
          subs: null
        },
        {
          shloka: "26-27. Then he took a cup, and when...",
          component: 51,
          subs: null
        },
        {
          shloka: "26-28. This is my blood of the covenant...",
          component: 51,
          subs: null
        },
        {
          shloka: "28-18. Then Jesus came to them and...",
          component: 52,
          subs: null
        },
        {
          shloka: "28-19. Therefore, go and make disciples...",
          component: 53,
          subs: null
        },
        {
          shloka: "28-20. Teaching them to obey everything...",
          component: 53,
          subs: null
        },

      ]
    },
    {
      title: "L'Évangile de Marc", component: null, chapterNumber: 3, icon: 'book',
      subs: [
        {
          shloka: "2-19. How can the guests of the...",
          component: 54,
          subs: null
        },
        {
          shloka: "2-20. But the time will come when...",
          component: 54,
          subs: null
        },
        {
          shloka: "4t-38. Jesus was in the stern,...",
          component: 55,
          subs: null
        },
        {
          shloka: "4-39. He got up, rebuked the wind...",
          component: 55,
          subs: null
        },
        {
          shloka: "5-38. When they came to the home...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-39. He went in and said to them...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-40. But they laughed at him...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-41. He took her by the hand...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-42. Immediately the girl stood...",
          component: 56,
          subs: null
        },
        {
          shloka: "5-43. He gave strict orders not to...",
          component: 56,
          subs: null
        },
        {
          shloka: "7-15. Nothing outside a person...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-16. Rather, it is what comes out of a...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-17. After he had left the crowd and ...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-18. “Are you so dull?” he asked...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-19. For it does not go into their...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-20. He went on: “What comes out...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-21. For it is from within, out of a...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-22. dultery, greed, malice, deceit...",
          component: 57,
          subs: null
        },
        {
          shloka: "7-23. All these evils come from inside...",
          component: 57,
          subs: null
        },
        {
          shloka: "3-35. Whoever does God’s will is my...",
          component: 58,
          subs: null
        },
        {
          shloka: "4-17. But since they have no root...",
          component: 59,
          subs: null
        },
        {
          shloka: "4-21. He said to them, “Do you...",
          component: 60,
          subs: null
        },
        {
          shloka: "4-22. For whatever is hidden is meant...",
          component: 60,
          subs: null
        },
        {
          shloka: "6-4. Jesus said to them, “A prophet...",
          component: 61,
          subs: null
        },
        {
          shloka: "8-38. If anyone is ashamed of me and...",
          component: 62,

          subs: null
        },

        {
          shloka: ` 9-7. Then a cloud appeared and covered ...`,
          component: 63,

          subs: null
        },
        {
          shloka: `10-17. As Jesus started on his way...`,
          component: 64,

          subs: null
        },
        {
          shloka: `10-18. “Why do you call me good?”...`,
          component: 64,

          subs: null
        },


      ]
    },
    {
      title: "L'Évangile de Luc", component: null, chapterNumber: 4, icon: 'book',
      subs: [


        {
          shloka: `16-15. He said to them, “Go into...`,
          component: 65,
          subs: null
        },
        {
          shloka: `16-16. Whoever believes and is...`,
          component: 65,
          subs: null
        },
        {
          shloka: `2-49. “Why were you searching for me?”...`,
          component: 66,
          subs: null
        },
        {
          shloka: `11-37. As Jesus was speaking, one...`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-38. His host was amazed to see...`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-39. Then the Lord said to him, “You...`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-40. Fools! Didn’t God make the...`,
          component: 67,
          subs: null
        },
        {
          shloka: `11-41. So, clean the inside by giving...`,
          component: 67,
          subs: null
        },
        {
          shloka: `12-4. I tell you, my friends, do not...`,
          component: 68,

          subs: null
        },
        {
          shloka: `12-5. But I will show you whom you...`,
          component: 68,

          subs: null
        },
        {
          shloka: `12-25. Which of you by worrying can...`,
          component: 69,

          subs: null
        },
        {
          shloka: "12-33. Sell your possessions and give...",
          component: 70,
          subs: null
        },
        {
          shloka: "12-34. For where your treasure is,...",
          component: 70,
          subs: null
        },
        {
          shloka: "12-49. I have come to bring fire...",
          component: 71,
          subs: null
        },
        {
          shloka: "12-51. Do you think I came to bring...",
          component: 72,
          subs: null
        },
        {
          shloka: "12-52. From now on there will be five...",
          component: 72,
          subs: null
        },
        {
          shloka: "12-53. They will be divided, father against...",
          component: 72,
          subs: null
        },
        {
          shloka: "13-3. Unless you change your mind...",
          component: 73,
          subs: null
        },
        {
          shloka: "14-26. If anyone comes to me and does...",
          component: 74,

          subs: null
        },
        {
          shloka: "14-27. Whoever does not carry their...",
          component: 75,
          subs: null
        },
        {
          shloka: "18-29. “Truly I tell you,” Jesus said to them...",
          component: 76,
          subs: null
        },
        {
          shloka: "21-15. I will give you words and wisdom...",
          component: 77,

          subs: null
        },
        {
          shloka: "21-17. Everyone will hate you...",
          component: 78,
          subs: null
        }



      ]

    },
    {
      title: "L'Évangile de Jean", component: null, chapterNumber: 5, icon: 'book',
      subs: [
        {
          shloka: "1-1. In the beginning was the Word...",
          component: 79,
          subs: null
        },
        {
          shloka: "1-9. The true light that gives light...",
          component: 80,
          subs: null
        },
        {
          shloka: "1-10. He was in the world, and though...",
          component: 81,
          subs: null
        },
        {
          shloka: "1-11. He came to that which was his...",
          component: 82,
          subs: null
        },
        {
          shloka: "1-12. Yet to all who did receive him...",
          component: 83,
          subs: null
        },
        {
          shloka: "1-13. Men born not of natural descent...",
          component: 84,
          subs: null
        },
        {
          shloka: "1-14. The Word became flesh and made...",
          component: 85,
          subs: null
        },
        {
          shloka: "1-18. No man has seen God at any...",
          component: 86,
          subs: null
        },
        {
          shloka: "1-51. He then added, “Very truly...",
          component: 87,
          subs: null
        },
        {
          shloka: "3-3. Jesus replied, “Very truly...",
          component: 88,
          subs: null
        },
        {
          shloka: "3-4. “How can someone be...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-5. Jesus answered, “Very truly...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-6. Flesh gives birth to flesh, but...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-7. You should not be surprise...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-8. The wind blows wherever it...",
          component: 89,
          subs: null
        },
        {
          shloka: "3-13. No one has ever gone into...",
          component: 90,
          subs: null
        },
        {
          shloka: "3-15. That whosoever believes in him...",
          component: 91,
          subs: null
        },
        {
          shloka: "3-17. For God did not send his Son...",
          component: 92,
          subs: null
        },
        {
          shloka: "3-18. Whoever believes in him is...",
          component: 93,
          subs: null
        },
        {
          shloka: "3=19. This is the verdict: Light has...",
          component: 94,
          subs: null
        },
        {
          shloka: "3-20. Everyone who does evil hate...",
          component: 94,
          subs: null
        },
        {
          shloka: "3-21. But whoever lives by the truth...",
          component: 94,
          subs: null
        },
        {
          shloka: "5-19. Jesus gave them this answer:...",
          component: 95,
          subs: null
        },
        {
          shloka: "5-20. For the Father loves the Son and...",
          component: 96,
          subs: null
        },
        {
          shloka: "5-21. For just as the Father raises...",
          component: 97,
          subs: null
        },
        {
          shloka: "5-22. Moreover, the Father judges no...",
          component: 97,
          subs: null
        },
        {
          shloka: "5-23. That all may honor the Son...",
          component: 97,
          subs: null
        },
        {
          shloka: "5-24. Very truly I tell you, whoever...",
          component: 98,
          subs: null
        },
        {
          shloka: "5-26. For as the Father has life...",
          component: 99,
          subs: null
        },
        {
          shloka: "5-37. You have never heard his voice...",
          component: 100,
          subs: null
        },
        {
          shloka: "5-38. Nor does his word dwell in...",
          component: 101,

          subs: null
        },
        {
          shloka: "6-25. When they found him on the...",
          component: 102,
          subs: null
        },
        {
          shloka: "6-26. Jesus answered, “Very truly...",
          component: 102,
          subs: null
        },
        {
          shloka: "6-27. Do not work for food that spoils...",
          component: 102,
          subs: null
        },
        {
          shloka: "6-32. Jesus said to them, “Very truly...",
          component: 103,
          subs: null
        },
        {
          shloka: "6-47. No one has seen the Father...",
          component: 104,
          subs: null
        },
        {
          shloka: "7-37. On the last and greatest da...",
          component: 105,
          subs: null
        },
        {
          shloka: "7-38. Whoever believes in me, as...",
          component: 105,
          subs: null
        },
        {
          shloka: "8-12. When Jesus spoke again to the...",
          component: 106,
          subs: null
        },
        {
          shloka: "8-14. Jesus answered, “Even if I testify...",
          component: 107,
          subs: null
        },
        {
          shloka: "8-19t. Then they asked him, “Where...",
          component: 108,
          subs: null
        },
        {
          shloka: "8-21. Once more Jesus said to them...",
          component: 109,
          subs: null
        },
        {
          shloka: "8-23. But he continued, “You are from...",
          component: 110,
          subs: null
        },

        {
          shloka: "8-24. I told you that you would die...",
          component: 111,
          subs: null
        },
        {
          shloka: "8-28.  So, Jesus said, “When you...",
          component: 112,
          subs: null
        },
        {
          shloka: "8-29. The one who sent me is with...",
          component: 113,
          subs: null
        },
        {
          shloka: "8-53. Are you greater than our...",
          component: 114,
          subs: null
        },
        {
          shloka: "8-54. Jesus replied, “If I glorify...",
          component: 114,
          subs: null
        },
        {
          shloka: "8-55. Though you do not know ...",
          component: 115,
          subs: null
        },
        {
          shloka: "8-57. You are not yet fifty years old...",
          component: 116,

          subs: null
        },
        {
          shloka: "8-58. Very truly I tell you,” Jesus answered...",
          component: 116,

          subs: null
        },
        {
          shloka: "9-39. Jesus said, “For judgment I have...",
          component: 117,
          subs: null
        },
        {
          shloka: "9-41. Jesus said, “If you were blind,...",
          component: 118,

          subs: null
        },
        {
          shloka: "10-18. No one takes life from me...",
          component: 119,

          subs: null
        },
        {
          shloka: "10-30.  I and the Father are one...",
          component: 120,
          subs: null
        },
        {
          shloka: "11-25. Jesus said to her, “I am the...",
          component: 121,
          subs: null
        },
        {
          shloka: "11-26. Whoever lives by believing in...",
          component: 122,
          subs: null
        },
        {
          shloka: "12-25. Anyone who loves their lif...",
          component: 123,
          subs: null
        },
        {
          shloka: "12-40. He has blinded their eyes...",
          component: 124,
          subs: null
        },
        {
          shloka: "12-47. If anyone hears my words...",
          component: 125,
          subs: null
        },
        {
          shloka: "12-48. There is a judge for the one...",
          component: 125,
          subs: null
        },
        {
          shloka: "12-49. For I did not speak on my own...",
          component: 126,
          subs: null
        },
        {
          shloka: "12-50. I know that his command leads...",
          component: 126,
          subs: null
        },
        {
          shloka: "14-7. If you really know me, you wi...",
          component: 127,
          subs: null
        },
        {
          shloka: "14-8. Philip said, “Lord, show us the...",
          component: 128,
          subs: null
        },
        {
          shloka: "14-9. Jesus answered: “Don’t you know...",
          component: 128,
          subs: null
        },
        {
          shloka: "14-10. Don’t you believe that I am in...",
          component: 129,
          subs: null
        },
        {
          shloka: "14-6. Jesus answered, “I am the way...",
          component: 130,
          subs: null
        },
        {
          shloka: "14-16. I will ask the Father, and he will...",
          component: 131,
          subs: null
        },
        {
          shloka: "14-17. The world cannot accept him...",
          component: 132,
          subs: null
        },

        {
          shloka: "14-20. On that day you will realize...",
          component: 133,
          subs: null
        },
        {
          shloka: "14-25. All this I have spoken while...",
          component: 134,
          subs: null
        },
        {
          shloka: "14-26. But the Advocate, the Holy Spirit...",
          component: 134,
          subs: null
        },
        {
          shloka: " 15-23. Whoever hates me hates...",
          component: 135,
          subs: null
        },
        {
          shloka: "15-24. If I had not done among them the...",
          component: 136,
          subs: null
        },
        {
          shloka: "15-25. But this is to fulfill what is...",
          component: 136,
          subs: null
        },
        {
          shloka: "15-26. When the Advocate comes... ",
          component: 137,
          subs: null
        },
        {
          shloka: "15-27. And you also must testify...",
          component: 137,
          subs: null
        },
        {
          shloka: "16-7. But very truly I tell you, it is for...",
          component: 138,
          subs: null
        },
        {
          shloka: "16-8. When he comes, he will prov...",
          component: 139,
          subs: null
        },
        {
          shloka: "16-12. I have much more to say...",
          component: 140,
          subs: null
        },
        {
          shloka: "16-13. But when he, the Spirit of truth...",
          component: 141,
          subs: null
        },
        {
          shloka: "16-14. He will glorify me because...",
          component: 142,
          subs: null
        },
        {
          shloka: "16t-15. All that belongs to the Father...",
          component: 142,
          subs: null
        },
        {
          shloka: "16-16. Jesus went on to say, “In a...",
          component: 143,
          subs: null
        },
        {
          shloka: "16-17. At this, some of his disciple...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-18. They kept asking, “What does...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-19. Jesus saw that they wanted...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-20. Very truly I tell you, you wil...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-21. A woman giving birth to a child...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-22. So, with you: Now is your time...",
          component: 144,
          subs: null
        },
        {
          shloka: "16-25. Though I have been speaking...",
          component: 145,

          subs: null
        },


      ]

    },
    {
      title: "Les révélations", component: 146, chapterNumber: 6, subs: null, icon: 'information'
    },
    {
      title: 'Les trois doigts', component: 147, chapterNumber: 7, subs: null, icon: 'information'

    },
    {
      title: 'Bon vendredi - mauvais vendredi', component: 148, chapterNumber: 8, subs: null, icon: 'information'

    },
    {
      title: "Lettre d'un hindou", component: 149, chapterNumber: 9, subs: null, icon: 'information'

    },

    {
      title: 'Glossaire', component: 151, chapterNumber: 11, subs: null, icon: 'information'

    },

    {
      title: 'Vidéo', component: 152, chapterNumber: 12, subs: null, icon: 'videocam'

    }
    // ,
    // {
    //   title: 'Share', component: 153, chapterNumber: 13, subs: null, icon: 'share'

    // }
  ];



}
