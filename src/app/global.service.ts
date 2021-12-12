import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
  }
  public getYoutubeUrl(url: any) {
    return '//www.youtube.com/embed/' + url;
  }
  pages: Array<{ title: string, component: any }>;
  fontSize: number = 15;
  startPage: number = 0;
  endPage: number = 0;
  currentPage: number = 0;
  fontColor: any;
  bgColor: any;
  navigationFrom: any = null;
  mainItem = 0;
  selectedItem = 0;
  subItem = 0;
  networkStatus: any = "OFFLINE";
  bible: any = [

    {
      chapterName: "God's Path",
      chapterNumber: 0,
      pageNumber: 0,
      verse: ``,
      meaning: ``,
      pageText:
        `
        <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
        There was some history before the arrival of Jesus on earth. Even after his death, there is some history. The history written before his arrival is called the <b>Old Testament</b>. The history written after his arrival is named the <b>New Testament</b>. The Old Testament before his birth, his life in the New Testament, and how his believers propagated the Christian community after his death are important to the Christian community. The book of both Old and New Testaments is called the <b>Holy Bible</b>. Although the Christian Bible and the Hindu Bhagavad-Gita are intended to uplift and lead humans towards God, there are some differences. The Bhagavad-Gita does not have pre- or post-history of Krishna. It has only Krishna’s teachings. Whereas the Holy Bible contains the history before Jesus and after Jesus. The Christian preachers’ teachings contain the Old Testament words before Christ’s birth and his devotees’ propagation from the New Testament after Christ’s death. There is nothing wrong with this, but if we think thoroughly, we will come to know that only a portion of the Bible is instrumental for man to walk in God’s path. If there are many characters in a play, we like one of them more than the others. Similarly, if there are multiple episodes in a drama, we love one of them very much. Likewise, if the entire Bible is considered, only the portion of the New Testament from when Jesus Christ came upon the earth until he left is the most sacred and essential for liberation. Everyone should realize that the very essence of the Bible is the history of Jesus. Jesus’ words are like a bag of diamonds in the entire Bible. All that humans must grasp in the Bible is in <b>the Gospel of Mathew, the Gospel of Mark, the Gospel of Luke, and the Gospel of John</b>. The divine proximity that humans need is found in these four gospels. The highest wisdom of these four gospels resides in the Gospel of John. The wisdom found in the Gospel of John is beyond the reach of human intelligence. The entire Bible has 1029 pages, but the history of Jesus is only 102 pages in the New Testament. If the Bible is divided into ten parts, one part is better than the other nine. Those who know Jesus’ value understand the true wisdom in this one part.
<p>
We are explaining some of Jesus’ words from the Gospels of Mathew, Mark, Luke, and John. Some of you may ask why I am re-writing when many fathers, pastors, and bishops have already explained Jesus’ words. Here is my answer. All preachers are teaching the verses effectively from the Old Testament and the New Testament other than the four Gospels. But there is some gap in explaining the verses of four Gospels that have the history of Christ. We said that the Hindus have not yet understood the secrets in the Bhagavad-Gita. Likewise, there are many secrets that Christians do not know in the four Gospels that have Jesus’ history. I am not saying this with jealousy on the preachers. But I say this with faith in Christ. We are
explaining the truth so that people should understand Jesus correctly, how great <b>he</b> is, and what his <b>power</b> is.
</p><p>
The Hindus, who look at my books that have Christ’s name, think that they are Christian books and do not want to read them. Christians do not want to read the books written by a Hindu guru and want to read only the writings of the Christians. Hindus hate me because they think the author of Christian books is not at all a Hindu. Some Christians told other Christians that these books were written to convert Christians to Hinduism hence not to read them. The Hindus accuse us of converting Hindus to Christians, and the Christians accuse us of turning Christians to Hindus. We are not converting anyone, but we are telling to know the true God. Everyone who is a child of God has the <b>right</b> to say about God. Hence, we are patiently telling God’s matter, no matter what others think.
</p><p>
I will ask a question to all those who are jealous of me. <b>God came upon the earth as a man and was gone. He also said that he would come back while going. Can anyone say that God comes only once?</b> No person who knows wisdom ever says that. God said that he would come whenever there is his need on the earth. He comes when there is harm to the Dharmas. He said the same in the Bhagavad-Gita and the Bible. God comes to the earth in any form and tells his Dharmas. <b>It is a mistake if Hindus think that Krishna will come as Krishna</b>. Jesus said in the Bible that he would come again. <b>But it is Christians' fault to assume that Jesus will come as Jesus</b>. If God wants to come, there is no restriction on the timing, place, and form. He comes with new forms that no one can recognize. But he teaches the same old wisdom because Dharmas do not change over time. The Dharmas are scientific, and they never change. Therefore, when God is born anytime with any name, any form, or in any religion, he teaches the same Dharmas.
</p><p>
God never created any religion on earth when he came. He did not teach about any religion. God does not belong to any religion. He preached his Dharmas and did not mention any religion. Humans created religions. God’s teaching is beyond religions. When God sees wrongdoers in any religion, he pointed out their flaws. He showed the correct <b>God’s path</b> and told us to practice it correctly irrespective of the religion. He did not support any religion. Dharmas did not create religions. But humans formed religions based on their understanding of wisdom, the language they spoke, and how they behaved.
</p><p>
Each religion has a methodology and worships a specific God. It is customary for people belonging to a religion to follow the ritual of that religion. Humans created all these worships. But God has no religious habits and customs when he comes as a man. Similarly, he does not even worship another God. Religions and religious practices are for humans, not for God. God is responsible for guiding people in the <b>right way</b> by revealing the loopholes in devotion. Therefore, when he comes as a human, he speaks of God and God’s Dharmas. He does not indulge in the worshipping of another God, like other humans.
</p><p>
When God came as Krishna in the Dvapara Yuga, he did not worship anyone. He completely revealed Paramatma’s wisdom when the time came. Similarly, when
God came as Jesus Christ in the Kali Yuga, he did not worship anyone. He preached humans what he wanted to teach. His greatness and divinity will be revealed only when he teaches <b>wisdom</b>. At other times he looks like a normal man like everyone. The ignorant will count him as an ordinary man. Those who know wisdom will recognize him as God. Those who have complete wisdom can recognize him whenever he comes upon the earth. Those who are under the influence of Maya cannot recognize him in any situation. Moreover, humans count him as an ordinary man, insult him, and cause troubles.
</p><p>
When God comes upon the earth in the form of a man once in a few thousand years, humans who are serpent brood cannot recognize him. It is okay not to identify him, but they begin to torture him. Why is he tortured when no one tortures fellow humans? Some may ask this question. The answer is that when God comes as a man, he does not live as a common man. He has come to teach wisdom, so he reveals the divine wisdom according to dharmas. Therefore, those who have ignorance and Maya’s wisdom and are against dharmas hate him. That hatred makes humans torture him. There will not be any enemy unless he tells wisdom. When he points the finger at the adharmas in humans, the followers of adharmas will get angry because they think that they are followers of dharmas. Humans disrespected him in every birth when he came as a man. Some were jealous of his wisdom when Jesus taught it. They did not appreciate his greatness and wisdom but sentenced him to death. He died because of the followers of religion who thought that they were gnanis. The serpent brood has the poison of ignorance. So, the life of Christ ended at the hands of the serpent brood.
</p><p>
God knows the matter of God, and humans know nothing. Humans will come to know God's dharmas when God reveals them. No person can himself know the things of God. Some part of God, who is present in every atom of the universe, is born as a man. There needs a system to live for some time in the world. It is called karma. The cause for the birth of humans is called karma. God does not have karma. Hence, God creates karma required for his birth and he is born with that karma. Such person is called <b>Svayambhu</b>. Svayambhu means the one who is born by himself, not by karma. The person who is born like that is called <b>Bhagavan</b> or <b>Comforter (Adarana Karta)</b>. Many times, God may have come upon the earth as Bhagavan. We do not know how many times dharmas were restored on the earth. Many of the secrets unknown to us occurred in the past millions of years. History is available only for the last few thousand years. Hence, we know some past events and some history. If history is referred, there are occasions that God came upon the earth as a man.
</p><p>
<b>Occasionally, God is born and dies as a man on earth</b>. If we think deeply with the wisdom we have, it becomes known that God was born about 5000 years ago in India and about 2000 years ago in Israel. The divinity was born as Jesus Christ in Israel at that time. As per the karma that had already been decided, the Divine was in the center of humans on earth for only 33 years. Jesus lived as an ordinary Jivatma for 30 years. He taught Atma’s wisdom for three years, living as Atma.

</p><p>
Some may have a question on what I said, “The divine is born as a man on earth. The divine (God) spread every atom of the universe”. Does God not spread out the entire universe when he is born as a man? Does God, who is said to be present in all, not present in all of us after being born as Bhagavan on the earth? Let us see the answer. Sea is full of water. Let us take some water in a small container from the sea. Now the container has seawater. Does the sea not have water? The sea is still full of water. The water in the container is called ‘the separated water.’ The water in the sea is called ‘the unseparated water.’ Both the sea and the container have the same water. There is no difference in the properties of container water and seawater other than that the container water is separated from the sea. We can compare God to the sea. Bhagavan is separated from God in a similar way water in the container is separated from the sea. The container water and the seawater are the same; Bhagavan and God are the same. When the water is taken into a container, there is no change in the sea, and the sea does not become empty. Similarly, when a part of God is born as Bhagavan, God is spread as before. There is no change in God, in his dharmas, or God’s spread when he comes as Bhagavan. A part of God is becoming as Bhagavan, but not entire God. Even though Bhagavan is only a part of God, he has the same properties. Therefore, there is nothing wrong with saying that God is born when part of God is born on earth. Hence, there is nothing wrong with saying that Jesus is God.
</p><p>
Here some people get another question. If Jesus is God, why did he suffer when people hurt him? Why was he tortured by humans? Why should he be humiliated by humans? You may ask why Jesus did not tell them who he was and why he did not punish them with his power when they misbehaved. Here is our answer. To understand this, we must first know a divine secret. There are three souls in an ordinary person's body – Jivatma, Atma, and Paramatma. Of these three souls, Jivatma and Atma both reside within the body. These two souls are not outside the body. The third soul, Paramatma, spread inside and outside the body and every atom of the universe. Paramatma does not do anything inside or outside of the body. The second soul, Atma, performs all the functions of the body. The first soul, Jivatma, does not do anything except experiencing both pleasure and sorrow. Many people think that we, Jivatmas, are doing everything, but that is not happening in anyone’s body. Atma that is with us in our body without our knowledge is doing all the work. Even <b>Atma</b> does not do anything according to own will. Atma works according to karma. The reason for every task is karma. According to <b>karma</b>, Jivatma should experience the pleasures and sorrows. For Jivatma to feel the pleasures and sorrows inside, Atma that spreads throughout the body must work. It also performs physiological functions like digesting food, heartbeat, separating urine and sweat from the blood, etc. Because Atma performs all functions in the body, Jivatma can survive in the body. Inside a body, Jivatma has no work except just experiences. It is the law of every human body, which will never change.
</p><p>
Even though God is born as a man, his body also has a system like an ordinary man. Like in other bodies, Paramatma must be in the body, and Atma must do all the work, and Jivatma must experience. This is the procedure that takes place inside God’s body when he comes as a man. When God came as Jesus, his body was no different from the ordinary human body. So, he experienced all the suffering and pleasures as a Jivatma. Jesus had to face many difficulties in life, all of which he had to experience as a Jivatma. To experience those things in his life, he created his karma and came to earth as a man. If his life is an ordinary life like us, one can ask what the difference between him and us. There is one difference. We learned that only Atma works in every human body. Even in Bhagavan’s body only Atma works. But in some cases, there is a peculiar difference. Sometimes, the three souls stop doing what they are supposed to do and function differently in Bhagavan’s body. The Jivatma will go into a state where there is no experience. Then Atma will go into Jivatma’s role. Then the words spoken from Bhagavan’s body as Atma are entirely spiritual. The true spiritual matters and God’s dharmas will be known only when Atma himself tells. In some cases, Atma himself in Bhagavan’s body will tell wisdom. Moreover, rarely, Atma and Jivatma in the body will go silent, and Paramatma speaks. Such occasions may occur once or twice in Bhagavan’s life. In the life of Jesus, Krishna, and Ravana Brahma, there are occasions where Paramatma spoke. When Paramatma speaks, nature is obliged to his words. Likewise, when Atma speaks, the real wisdom is under control of him. The following happened in the lives of Jesus, Krishna, and Ravana Brahma. <b>1) There are Paramatma’s words that ruled nature (Prakruti). 2) There are Atma’s words that spoke pure Atma’s wisdom. 3) There are Jivatma’s experiences that experienced pleasure and sorrow.</b> Paramatma spoke when a storm broke out in the sea in Jesus' life and when he ordered the storm to calm down. It became known that nature followed his words and subsided. As Atma, he spoke pure wisdom. Similarly, as a Jivatma, he also experienced many pleasures and sorrows. In the same way, it happened in the life of Krishna. He commanded the Sun and killed Saindhava. There is also an occasion where he showed universal form (vishvarupa) and said, “I am Paramatma.” As Atma, he taught complete wisdom in the form of Bhagavad-Gita. He experienced all experiences as a Jivatma in the rest of the time. At times, the play of three souls happens separately only in the Bhagavan’s body. Divinity wears a human body once in a thousand or even millions of years. When God is born on earth, he lives as a Jivatma like all others most of the time. When needed, he speaks as Atma a few times in a year for a short time. As Paramatma, he may rarely speak one or two times, or he may never talk. He needs to speak as Atma because he has come to teach dharmas. This is God’s system, but Maya’s system is different.
</p><p>
There is no trouble as long as God behaves like an ordinary man. Only when he teaches wisdom as Atma, Maya opposes. Maya is against God’s wisdom; So, Maya (Satan) is very careful in making sure that people do not switch from its (Maya’s) side to God’s wisdom. Moreover, Maya recognizes those who show interest and know some wisdom. It tries to drag them towards its side. Thus, people have little interest in true divine wisdom because of the influence of Maya. Hence even if some know some wisdom, they will deviate from that path. Here you may ask a question, “There are many devotees today. They are knowing wisdom from many gurus. Many people are worshipping deities with great devotion. Everyone is devoted to God other than some atheists. Can anyone change the devotees of Sai Baba and Ayyappa? In addition to old temples in the country, many new temples are being built for Shirdi Sai Baba and Ayyappa Swamy. Maya did not hinder anyone there. How can we believe your word?” Here is my answer.
</p><p>
Maya is entirely against God’s path and divine wisdom. Because Maya opposes God’s supreme wisdom, it becomes known that Maya is also powerful. That is why it is said <b>“Maya duratyaya”</b> in Bhagavad-Gita. God said in Bhagavad-Gita that <b>it is impossible to conquer Maya;</b> hence it becomes known that <b>Maya is unimaginably deceiving humans</b>. So far, no one knows what Maya does and how it works. Thus, Maya is cheating everyone in God’s path. Like God’s wisdom, Maya created its wisdom. God rarely comes to earth as Bhagavan once in thousands of years; Maya brings so many its replicas as Bhagavans so that no one can recognize the real Bhagavan. Maya introduces many types of wisdom. Many, unable to identify true wisdom, mistakenly believed that all kinds of wisdom belong to God. When there are many Bhagavans associated with Maya on earth, who will recognize the original Bhagavan who rarely comes upon earth? When there are Bhagavans who show many mahatyas (magics), who can recognize the true Bhagavan who shows just one or two mahatyas in life? In this way, it has become impossible to recognize God’s wisdom and Bhagavan. God showed his reality in universal form, something that no one has ever seen and that no one can ever understand. But Maya influenced some people to write that many deities showed universal form, including Saibaba and Veerabrahmam so that people do not count Krishna’s universal form as highest. Who thinks that the cosmic form shown by Krishna in Bhagavad-Gita is the greatest of all? Thus, Christians could not recognize Jesus Christ as Bhagavan, and similarly, Hindus could not know Krishna as Bhagavan. Hindus could not consider Krishna as true God. While some count Krishna as the last of all other Gods, many did not even recognize him as a trivial God, because they would say that his actions were naughty deeds. No one even counts Krishna as God, like Shirdi Sai Baba. Even though Christians have regarded Christ as the Son of God, they have not understood the very essence of his words. Because of the effect of Maya, they worship his cross instead of Jesus. They thought they would be counted as Hindus if they worshiped <b>Jesus’ idol;</b> hence, they pray to the cross. While Jesus said, <b>"He who has seen me has seen my father,"</b> is it not Maya’s work that made Christians respect the cross, which caused Jesus’ death, instead of <b>Jesus idol?</b> In this way, Maya (Satan) made humans believe that they are in God's path and is sending them far away from God's path. Even though the one who knows God’s wisdom says the truth, Maya makes him look inferior and make people not hear his words. Maya formed religions and created an illusion that there is a separate God for each religion. Although there is only one head for the universe, Maya used religion to make people think that there is a different God for every religion. The effect of Maya is very much on human beings. Hence, so many gods and religions were made. Though there is only one Christian religion, some are devotees of Mary, and some are devotees of Christ. Similarly, there are many gods in Hindu religion. In all religions and gods, at least try now to find out who is the head of all. But it is not easy to know. If we <b>first know about Maya</b> and its existence, we can find out <b>God's path later</b>. Therefore, find out whether the path you are in is God’s path or Maya’s path.
</p><p>
There is an infinite supernatural power that is formless, unnamed, and undetermined. Let us call it ‘Paramatma.’ No one knows about Paramatma, the source of everything. Paramatma himself must come and make known about him. While Paramatma spreads every atom, we are not able to know anything except five elements of nature (Prakruti). We can only see and hear what the senses know. We cannot know what the senses cannot grasp. Paramatma is not visible to the senses. We will know when he comes as a human, visible to our senses, and reveals his wisdom to us. Otherwise, no one knows about him, and no one can say about him. Paramatma, therefore, must incarnate in human form and tell his wisdom. He will come and reveal his dharmas. But they disappear after some time. Hence, he must return to restore them. Many times, Paramatma, the creator of the universe, creates himself as a human, wanders like a man, experiences karma like an ordinary man, and fulfills his purpose in somehow. It is tough to identify Paramatma, who comes like that. Paramatma came on earth many times. Yet humans are still unable to recognize Paramatma’s birth even today.
</p><p>
Those who do not recognize when Bhagavan is present begin worshiping him with great devotion after Bhagavan has gone. They are not worshiping him because he is Paramatma. They worship him with the intent that he is great in wisdom, or their desires would be fulfilled. But they still do not know that he is Paramatma. We can recognize the incarnations of Paramatma through certain principles. In this way, we can identify that Paramatma came as Krishna at the end of Dvapara Yuga and later as Jesus in the Kali Yuga. Paramatma may have come later, too, but we do not know.
</p><p>
No matter how many births Paramatma has had, he has no similarities from one birth to another birth, except in his dharmas. Although Paramatma’s aspect is the same in Krishna, who was born in Dvapara Yuga and Jesus, who was born in Kali Yuga, their outward life is very different. Sri Krishna enjoyed life with wealth and eight wives. He also abducted his first wife with her approval and killed enemies. His life was full of falsehood and fraud. After observing all these, no one can recognize him as Bhagavan filled with a part of Paramatma.
</p><p>
There were no lies and deceptions in the life of Jesus, who was born in Kali Yuga. Jesus was meek and would say to show the other cheek if the enemy slaps on one cheek. He has no lust for women. Krishna and Jesus are very different in worldly things. Even gurus in both religions are mistaken about these two. Hindu gurus criticize Jesus by asking, “Why did Jesus die in the hands of the ordinary people, not to save himself? If he had divine power to raise the dead, why did he have to die? Why did he suffer when he was nailed to the cross?” In the same manner, church pastors criticize Krishna by arguing that "how come he becomes God when he has many wives." In this way, they speak based on the worldly matters in the lives of Jesus and Krishna, but no one thinks why such events occurred in their lives. Paramatma himself told that when he comes upon the earth, no one can recognize him. His job is to pretend so that no one recognizes him. His task is to be an unidentified thief among us and rob us of ignorance.

</p><p>

We earlier said that God does not make sense to anyone based on worldly matters. <b>God must be seen with God's wisdom</b>. Only then we can recognize him. Even those who claim to be gurus do not know this principle. They try to measure God with worldly matters. So, when God comes upon the earth, no one knows. When we look at those who perform mahatyas based on worldly matters, they appear to be great and gods. Then the true God is ignored. That is why no one can recognize him. God's births cannot be identified based on external worldly things. God’s incarnation can be identified based on dharmas. The same dharmas can be seen in the Bhagavad Gita and Jesus’ words. Hence, both can be recognized as one. There is no other similarity between them in the external worldly matters.
</p><p> 
There is only one God for the entire world. The same God is incarnating as a man many times with many names and forms to turn humans towards him. Humans, who do not realize this, created religions, and argue that my God is greater than your God. Not knowing that God in his religion and God in other religions are the same, humans argue that my religion God is true God. Humans do not love God as much as they love religions. They should not fall into such ignorance. We must know that there is only one God although we say differently. Paramatma decides his role according to the time, the nation, and the people and comes upon the earth as Bhagavan. His births will not be the same as one another. But his aim in any life is the same. That aim is to teach his dharmas. When he came as Jesus or Krishna, the dharmas he told are the same. Not only God but also his dharmas look different to us because when Paramatma was born as Krishna and Jesus, their names, country of birth, and the persons are different.

</p><p>
For example, let us take dharma stated by Paramatma. Sri Krishna said in Gita, <b>“Paritranaya Sadhunam vinasaya chaturskrutam”</b> meaning <b>“I will increase the saints and destroy evil persons.”</b> Some preachers of Christianity take this word and say to Hindus that you have no protection in your religion and that your God will kill sinners in your religion. In our religion, there is protection for any sinner, and Jesus said that he came to earth to save the sinners. While your God will destroy sinners and wicked people in your religion, my God (Jesus) will protect you. Therefore, Christians say that my God is the true God. The Christians did not understand the true meaning of what Lord Jesus said in this regard, and Indus did not understand the meaning of the sloka that Krishna said in the Gita. So, Krishna’s word and Jesus’ word seem different to them. That is why they deeply understood that Krishna and Jesus are different. But they did not know that the two were the same, that the two words they uttered had the same meaning. Their words – destroying the sinners and the wicked – mean that they use the weapon of <b>‘teaching’</b> to remove the karma of sin and evil and make them pure. When the wicked become pure, they will not be caught in sins but become righteous. Then there will not be any evil persons. Then those two words - to say in the Gita that Krishna will do away with the wicked, and to say in the Bible that Jesus will protect you from sins - are the same.
</p><p>
Although Jesus and Krishna spoke in different languages, the meaning in their words is the same. Even though they are different persons and have different names, the purpose of their words is the same. Because people could not grasp God’s concept and interpreted his words in a manner that pleased them, they divided the God who told the same dharmas. When Hindus criticize Jesus and Christians say that Krishna is not God, Paramatma - who is the king and the Father of paraloka, is the head of the universe and spreads the whole world and is also in us - laughs that these people are blind with eyes. Krishna said in the Gita, “I will come when there is a threat to the dharmas.” But Hindus recognize him as God, only when God comes in the same way as before - with the peacock feathers, the flute, and the chakra. If God is born with a different form, then they say that you are not our God. In the Bible, Jesus Christ said that he would come again. Christians will recognize Jesus Christ only if he is born in the same way as before - with nail scars on the hands and spear marks on his left. If he comes with a different form, Christians will say that you are not our Lord. Because of the contrast in faces and behaviors, Christians could not recognize that Jesus is Krishna, and similarly, Hindus could not acknowledge that Krishna is Jesus. That is why God said in the Gita, <b>"People dishonor me, for they do not know me and my glory."</b> People did the same thing when Jesus came. Some Hindu gurus will teach wisdom and provide upadesa if Krishna comes again. Similarly, If Jesus comes again as said in the Bible, Christian preachers, who will not recognize him, will give baptism to him. As long as there are gurus who teach wisdom to Krishna if he changes his form and name, it can be said that there is ignorance in the Indu religion. Similarly, as long as there are Christians who will explain Bible verses to Jesus if he changes his body and comes in front of them, it may be said that they are not fully aware of God.

</p><p>
There is a strong reason why even the great gnanis could not recognize him and could not understand his wisdom when God came upon the earth. Before knowing the reason, one should know about the visible <b>creation</b>. There is a significant opponent to God, which is the reason for God being not understood. Christians call it <b>‘Satan,’</b> Hindus <b>‘Maya’</b> and Muslims <b>‘Iblis.’</b> To know the secret of something which has names Maya, Satan, or Iblis, the <b>secret of creation</b> should first be understood. Let us see below for details.
</p>

      </span>
        `

    },
    {
      chapterName: "The Secret of Creation",
      chapterNumber: 1,
      pageNumber: 1,
      verse: ``,
      meaning: ``,
      pageText:
        `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
        Paramatma (God) was neither male nor female before the universe was created. Paramatma wanted to create the universe and made feminine Prakruti (nature) and Maya or Satan. He decided required characteristics and all the necessary methods for it. Since Prakruti was female, hence Paramatma stood utterly different from it. That characteristic is Purusha (male). Paramatma wanted that Prakruti should be in an entirely opposite direction to him. He gave equal authority to Prakruti because he thought that the game would be exciting when both opponents have equal strength in a game. Prakruti (Satan) is contrary to Paramatma, but not an enemy. Although it is natural for God (Paramatma) to face opposition from Satan (Prakruti), they are not enemies to each other. 
        <p>
        Paramatma, who once created Prakruti, will absorb her into him at some point. Paramatma is the one who created her, patrons her, and eventually destroys her. He is the father, husband, and destructor of Prakruti. He is also the force in Prakruti. Paramatma, who is vast, created somewhat broad Prakruti and is playing a game called ‘Jagath.’ In this game, Paramatma, who is neither male nor female, disguised himself as purusha (male). According to the play ‘Jagath,’ Paramatma is male. He is neither male nor female outside of the play. Prakruti is divided into five elements - Sky, Air, Fire, Water, and Earth and is named Prapancha. After creating Prakruti, Paramatma wanted to create a Jagath consisting of living beings who have birth and death. He created living beings that have birth and death by Atma and built the Jagath in the Prapancha. According to the Telugu language, <b>‘ja’</b> means being born, and <b>‘gati’</b> means dying. Hence, all living beings are appropriately named ‘Jagath,’ indicating that it consists of birth and death. 
        </p><p>
        Paramatma made the Jagath consisting of living beings in Prakruti. Prakruti (female) and Paramatma (Purusha) are equal, and Jagath was born separately after that. Paramatma created both Prakruti (Prapancha) and Jagath. It would become three, including him. Initially, Paramatma, who is neither male nor female, made Prakruti. Then he became Purusha, made Prakruti as his wife, and created a unique offspring named Jagath. If these relationships are ignored, Paramatma created three parts - Prakruti, Purusha, and Jagath. Prakruti is female; Paramatma is male (Purusha); Jagath should be considered as non-binary (neither male nor female). Here the main game is that Paramatma and Prakruti drag the Jagath (non-binary) which is in between them. There are rules for the game. Although Paramatma, who defined the rules of the game, is the creator of all and superior to all, he is playing the game as per the rules he decided. This game has a time limit as other games. As football has a time limit of 90minutes and cricket has 50 overs limit, the time limit for the game of Jagath is 1000 Yugas or 108 crores of years. The game takes a break at night and continues in the day. The playing time and the relaxing time each is 108 crore (1.08 billion) years. 
        </p><p>
        Paramatma, who is non-specific and undefined, first made Prapancha (no life- form) and then the living beings (Jagath). He created Prakruti and became recognized as Purusha. He became Purusha and divided Prakruti, which conceives with his seed, into five parts. Such Prakruti is called Pancha Bhutas or Prapancha. He divided the Jagath he created into three parts. The life-form Jagath is divided into three types – Jivatma, Atma and Paramatma. He became recognized as Paramatma after creating Jivatmas and Atma. He became recognized as Paramatma beside the Atmas (Jivatma and Atma) and as Purusha beside the Prakruti. When Prakruti and the Atmas exist, there is a basis for calling him Purusha or Paramatma. If Prakruti and the Atmas do not exist, it is not possible to define him. The life-form Jagath is born of Prakruti and Purusha. Paramatma arranged so that the mother and the father in the Jagath have the attributes of Prakruti and Purusha. 
        </p><p>
        Prakruti has opposite characteristics than Purusha. But Jagath consists of attributes of both Prakruti and Purusha. The life-form Jagath has both Paramatma related Jivatma and Atmas and Prakruti related bodies and gunas. The belief that God exists is on the soul side, and the opposite view that God does not exist is on the Prakruti side. Human beings in the Jagath have the characteristics of Prakruti and Purusha. To show Prakruti and the Purusha symbols, women's bodies were created to resemble Prakruti, and men's bodies were made to represent Paramatma. Non-binary persons were also created to resemble Jagath to tell that Jagath also exists in addition to Prakruti and Paramatma. Women, men, and non-binary symbolize Prakruti, Paramatma, and the living world. Prakruti = woman, Jagath = non-binary, Paramatma = male (Purusha). God made his creation known by resembling females to the Prakruti, non-binary persons to the living world (Jagath), and men to Paramatma. To indicate that the living world is born to Atma and Prakruti, God made children born from males and females. The visible mother, father, and offspring indicate how creation happened at the beginning. Human beings who use intelligence in everything do not think why man is different from the woman and why offspring is born from 
        man and woman. If the ‘secret of creation’ basics is not known in spiritual education, spirituality will not be known. 
        </p><p>
        One should know that it is a friendly game between God and Prakruti. In this game, Prakruti and Paramatma are trying to pull Jivatma to their side. Paramatma’s duty is to make Jivatma come toward him by teaching his wisdom, whereas Prakruti, in the form of Maya with its weapon of gunas, makes human beings busy and does not let them think about God. Prakruti entangles everyone in their daily work, diverts their total attention into the job, and prevents man from turning to God with the help of desire, and associated gunas. The biggest game between Paramatma and Prakruti does not have a name. Prakruti, in the form of Maya, pulls everyone to its side without anyone else noticing it. If anyone has God’s thoughts in the Jagath and tries to know about God, Maya (Prakruti) mainly focusses and traps them. In the struggle between God and Satan, Maya (Satan) is stronger than God, and it currently kept 99 percent of human beings on its side. In such a case, when God’s defeat seems inevitable, Paramatma should also try to win. 
        </p><p>
        Therefore Paramatma, as a part of his effort, will come into the midst of human beings as a man and talk about himself and try to divert people towards him. We already said that there is no enemy in this war. In this fight, each of them has a strategy. Satan (Maya) and God both exist in every human, but the humans do not know about them. Hence humans cannot recognize God or Maya. Humans do not even know whose side they are on. Even though they do not know, God tries to free them, who are caught in the Maya’s hands. In that attempt, Paramatma is born upon the earth as the Son of God. According to the rules of the game, he should not let humans know that he is the Son of God. God comes as a man and talks about Paramatma. Paramatma himself tells his wisdom and re-establishes his dharmas; Satan (Maya) also comes up with strategy and portrays the Son of God as stupid and ignorant in humans. Maya creates gurus and makes them say that the Son of God’s words are adharmas. It also makes them propagate its (Maya’s) adharmas as dharmas. Maya, in the form of gurus and swamijis, competes with the Son of God. Maya describes its sweet words as divine wisdom, making humans not to believe in God’s wisdom and making believe in its wisdom. Maya teaches human beings its adharmas by using the words Paramatma, moksha, wisdom, and practice. Maya makes God's dharmas unrecognizable in front of Satan's adharmas. 
        </p><p>
        If anyone wants to seek God, Maya makes them not differentiate between dharmas and adharmas and makes them believe in whatever anyone says. It is the rule of the game that Satan (Maya) and God should not make their presence known on the earth. When Paramatma incarnates as Bhagavan on the earth, he should not say, “I am Paramatma.” As per the same rule, when Prakruti is born on the earth, it will not say that “I am Maya.” But when Maya incarnates, it can say, “I am Bhagavan.” According to this principle, Maya (Satan) says itself to be Bhagavan (the son of God), shows several miracles, and incarnates itself as many swamijis. When Paramatma is born at one place on earth, Prakruti will create many with the name of Bhagavan on earth. Paramatma is born in one place to make his dharmas known without being recognized as Bhagavan. Simultaneously, Maya creates many with the name of 
        Bhagavan even before the birth of Paramatma. Maya makes humans hear its words and makes them not listen to real Bhagavan’s words. In this game, Maya makes its effort, and God does his work. 
        </p><p>
        While Maya is always in the form of gunas in the human body, God is also in the form of Atma in the body. We stated that Maya and Paramatma will come in the form of human beings on earth. It is necessary to know what bodies they will be wearing. Maya comes in a male body as Bhagavan and in a female body as Bhagavati. Paramatma always comes in a male body. Paramatma is a male and, therefore, is wearing a male body. Being a woman, Prakruti wears a female body. She also wears a male body to trick that it is a male. In Bhagavati and Bhagavan’s, it is difficult to identify real Bhagavan. One should know that Bhagavan is always born as a male. The Heavenly Father, Paramatma, was born as Jesus in the male form. He is born by himself, and no one begets him. Therefore, he was born in a virgin womb without male sperm. Paramatma himself takes birth when there is his need on the earth. <b>Jesus</b> is the one who was born like that. The Holy Spirit will be born again in the future. 
        </p><p>
        We wrote this scripture to let you know that no matter how many times the same Paramatma is born, he reveals the same dharmas. This scripture is written to help the reader to understand essential Jesus’ words in the New Testament of the Bible. These verses are matched with Bhagavad-Gita. By reading this, we hope that you will know Jesus’ greatness and Krishna’s inner spirit. 
        </p>
        
        <p style="text-align:center"> By </p>

        <b> The only Guru of Three Religions, Originator of Thraitha Theorem, The Author of One Hundred Divine Scriptures </b><br>
        <p style="font-size:20px;font-weight:bold">Sri. Sri. Sri Acharya Prabodhananda Yogeeshwarulu</p>
        
    </span>`,

    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 2,
      verse: `<b>(1) The Gospel of Mathew, 3rd chapter, 7th verse.</b>`,
      meaning: `<b> 
      (7) You brood of vipers! Who warned you to flee from the coming wrath?
      </b>`,
      pageText:
        `
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    In this verse, <b>‘brood of vipers’</b> is the new word. The word is said to be about humans. However, a doubt comes whether humans have offspring of the snake. It is, therefore, a question for everyone who reads this verse. In this verse, we also need to know in detail what <b>‘coming wrath’</b> means. Besides, there is also another word in this verse, <b>‘Who warned you?’</b> The word ‘Who warned you’ refers to past time. We also need to know the one who warned humans in the past. We need to know the answers to three questions in this verse. 
    <p>
    A bird is an enemy to a snake. The bird can kill the snake. The snake first hisses to scare the bird. But the bird is not afraid. The bird can eat the snake as food. This is the truth that everyone knows. The serpent and the bird are compared with spiritual education. Pigeon in the birds is compared with Atma, and the serpent is compared with Maya. In this verse, the bird is not mentioned, but the serpent is mentioned. When the serpent is compared to Maya (Satan), ‘brood of vipers’ means ‘offspring of Maya.’ In more detail, ‘brood of vipers’ is told instead of ‘human beings with Maya.’ 
    </p><p>
    Maya means the composition of gunas. Those who are always concerned about gunas and have no concern for God are referred to as brood of vipers. It becomes known that there is impending wrath for the humans who are with Maya. <b>Wrath means something terrible or difficult to bear.</b> Coming wrath means that it does not exist but will come. What humans do not have at the beginning but will get because of Maya (gunas) is good and bad karma. The experience because of bad karma is terrible. Hence, the <b>coming wrath means the karma that will come in human life.</b> Every human who is born gets karma; hence, the verse <b>“You brood of vipers! Who warned you to flee from the coming wrath?”</b> is said to warn humans. 
    </p><p>
    When the verse said, “who warned you?”, it seems that someone gave wisdom in the past to humans to escape from the karma. This verse shows that there was a man 
    who had told an idea in the past to escape from the upcoming karma. So, humans must know who said the idea. We need to know who he is, what he said, and when he said. It is not easy to know what happened in the past. If the answer to the first question in the first chapter of the four Gospels is unknown, the matter in the second divine scripture will not be understood. Then the subsequent verses from the second divine scripture cannot be understood. Hence, we must know the answer to the first question. Before we know the truth about this, let us know the significance of this second divine scripture. 
    </p><p>
    The wisdom that God told became a scripture once about five thousand years ago. The scripture has 18 chapters and is in the middle of the 18 parvas of Mahabharata. We call those eighteen chapters as the first divine scripture. At the beginning of creation, God told wisdom through the sky. The wisdom was called <b>Japara</b> wisdom at that time. In Telugu, <b>‘Para’</b> means separate or different, while <b>'Ja’</b> means born. ‘Japara’ means ‘separate or separate from birth.’ God’s wisdom is called ‘Japara wisdom’ because God is never born. Japara wisdom became the first divine scripture and then as the second divine scripture after three thousand years. It means it became the second divine scripture two thousand years ago. The same wisdom was written about 1400 years ago as the third divine scripture. We are here writing the verses from the second divine scripture. 
    </p><p>
    When it is said, “Who warned you?”, we should talk about the one who told wisdom in the past. According to this, the one who told wisdom in the first divine scripture is the one who warned humans first. There is a reason for knowing the one who told in the past. Since only God can tell his wisdom, and God is the only one, it is the same God who will teach his wisdom whenever and wherever required. Therefore, the same one who told earlier told again in the form of verses. Hence, if we want to know the one who told the wisdom in the second divine scripture, we first should know the one who said the wisdom in the past. Hence it became necessary to ask the question - who warned you? If you can find out who said in the past, you will have the opportunity to recognize who is saying now. We request you to read this scripture with the belief that the one who told the first divine scripture told this second divine scripture. 
    </p><p>
    Before reading the second divine scripture, we need to know what verses God, who told the first divine scripture, told in the Bible scripture. The Bible consists of 66 chapters, four of which have God’s verses, and the other 62 have verses from other gnanis. Those four chapters are 1) The Gospel of Mathew 2) The Gospel of Mark 3) The Gospel of Luke 4) The Gospel of John. These four parts are in the middle of the Bible. Hence, we can divide the Bible into three parts. The first 39 chapters are one part, the four Gospels the second, the last 23 chapters the third. We can observe that four chapters that Jesus told in his lifetime were specially labeled <b>‘Gospels.’</b> 
    </p><p><b>
    The first part of the Bible has 39 parts. <br>
    The second part of the Bible has 4 Gospels. <br>
    The third part of the Bible has 23 parts. <br>
    </b>
    </p><p>
    In the first and third parts, other gnanis told God’s wisdom. Jesus, who is an incarnation of the one who said the first divine scripture, again told verses in the four Gospels. Therefore, to know this, the question <b>“Who warned you to flee from the coming wrath?”</b> is asked. Therefore, it may be said that this verse, written above all, is of great significance. 
    </p>

      </span>
        `
    },

    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 3,
      verse: `<b> The Gospel of Mathew, 3rd chapter, 11th verse.</b>`,
      meaning: ` <b> 
      (11) I baptize you with water for mind change. But after me comes one who is more powerful than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire.
      </b>`,

      pageText:
        `
        <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
        This verse has the words <b>‘mind change’</b> and <b>‘baptize’</b> as well as ‘with water and with fire.’ To understand the verse completely, these four words should be understood. Even if one of these four words is not understood, the essence of this verse is unknown. So, let us understand the four words. The first word is ‘mind change.’ In our body, the mind (manas) recalls what has been learned and stored. Here the word ‘mind change’ means changing or altering the mind. The mind is the one that remembers the things in life. If the first mind changes, and the second mind comes, all the memories of the first mind are gone. The second mind has no memories of the first mind. The first mind is destroyed with death. The second mind comes with birth. When the first mind is destroyed, and the second mind comes, it can be said, ‘mind change.’ With death, everyone’s old mind is gone, and a new mind is coming. The change of mind occurs naturally with rebirth. Baptism is not required for ‘mind change’ because of death and birth. 
        <p>
        When a man dies and is born again, he leaves the old body and obtains the new body. The physical body change that occurs during the process is called birth. Physical means the visible body. Humans have two kinds of bodies – visible and invisible (subtle). When a man’s visible old body is gone, and the new one comes, it is called birth; similarly, if the unseen body (subtle) is gone and the new subtle body comes, Hindus (Indus) say <b>‘upadesa’</b> and Christians say <b>‘baptism.’</b> As mentioned in this verse, baptism means changing of the unseen mind. Just as the old mind filled with memories is lost in death and the new mind comes in birth, the mind is transformed in the baptism and stop reminding ignorant memories and start 
        recalling wisdom and divine related memories. If the ignorant mind goes away and <b>wisdom-related-mind comes</b> in life, it can be said to be <b>“baptism.”</b> In baptism, an ignorant man attains change of mind in life due to the teachings of <b>Guru</b>. 
        </p><p><b>
        Mind Change = Turning from ignorance to wisdom. <br>
        Baptism = Attaining upadesa from Guru. <br></b>
        </p><p>
        Baptist John gave upadesa with water and said, “I baptize you with water. But after me comes one who is more powerful than me. He will baptize you with the Holy Spirit and fire.” We already learned in detail what ‘change of mind’ and what baptism is. Now we need to know what water is and what fire is. Guru gives baptism. But there are two kinds of gurus. Some gurus have gnana shakti, and some do not. In general, many gurus baptize or upadesh with water. Some does with milk. Both water and milk are visible liquids. And some others upadesh with vibhuti (sacred ash), and some with 
        incense smoke. As part of upadesa, a guru gives a mantra, a word, or an image. There are many such upadesas. Many gurus offer such upadesas. John is one of those, and he admits his approach and said, “I baptize you with water.” But he said, “the one who comes after me baptize you with the Holy Spirit and fire.” We said that baptism means the path to mind change. When a man is converted from ignorance into wisdom because of baptism, it will burn all the sins of the man. Guru gives the appropriate fire to burn the sins through his baptism. Guru must possess a fire of divinity. The first verse in the chapter of Atma Samyama Yogam in the first divine scripture Bhagavad- Gita says, “cha yogee cha na niragnir nachaakriyah”. It means <b>“He who has no fire, who has stopped doing things, is not yogi (Guru).”</b> 
        </p><p>
        A true yogi (Guru) does not refrain from doing things. He would not be without fire. Fire means <b>gnanagni.</b> The above verse also said, ‘baptism with fire.’ Here the fire means the fire with <b>divine power</b>. Hence “He will baptize you with the Holy Spirit and fire,” said in the verse. The divine fire is not visible. When a man receives such a fire from Guru, it will create power in man that burns his karma. That is, the fire of wisdom reaches the baptized person and begins to destroy his karma. Although a Guru named John baptizes people for the change of mind, he does not have the <b>power (gnanagni)</b> in his baptism to burn karma. Hence, he said I can only <b>baptize you with water</b>. John said to the people, “My baptism will not forgive and burn your karma. But the baptism given by the one who comes after me will burn your karma.” 
        </p><p><b>
        Baptism with water = Upadesa that does not burn karma <br>
        Baptism with fire = Upadesa that burns karma <br>
        </b></p>

      </span>

        `,

    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 4,
      verse: `<b>(3) The Gospel of Mathew, 3rd chapter, 12th verse.</b>`,
      meaning: `<b> 
      (12) His winnowing fork is in his hand, and he will clear his threshing floor, gathering his wheat into the barn and burning up the chaff with unquenchable fire.
        </b>`,
      pageText:
        ` 
          <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
                  <p style="text-align:center">
                  <img src="assets/img/chaata.png"/>
                  </p>

                  <p style="text-align:center">
                  <img src="assets/img/kallam.png"/>
                  </p>
                  A Guru named John told this verse. During that period, he gave upadesa (baptism) to people. John, the great gnani in that time, foretold the coming of Jesus. He baptized Jesus Christ (Bhagavan), the Son of God. He is also the Guru of Jesus. Although John was famous guru at that time and had baptized many people, he was very humble. Before he baptized Jesus, he showed humility by saying, “the one who comes after me is more powerful than me, whose sandals I am not worthy to carry.” When Jesus came to him and asked for baptism, John said, <b>“You should baptize me. Do you come to me for baptism?”</b> John told the above verse when he foretold the coming of the Lord. The verse also has words <b>winnowing tray,wheat,</b> and <b>unquenchable fire</b>. Some people may ask what greatness in this verse is. If the wheat is gathered into winnowing fork (basket), produce flour, and roasted with fire, it becomes bread. We see <b>winnowing tray, wheat,</b> and <b>fire</b> all the time. Hence, some may ask that there is nothing so important in this verse. Here is the answer. This verse is from the second divine scripture. Hence, every verse from this scripture will tell divine wisdom. If the verse is seen with gnana drushti, it has a special meaning. This verse tells the greatness of Jesus Christ. 
                  <p>
                  In olden days, children born were put on the winnowing tray (basket) first. As soon as the baby was born, it was customary to pour rice into the winnowing tray, flatten and lay the baby first on it. Everyone - the poor or the rich, the known, the ignorant - used to do like that. They believe that Brahma will write the infant's future (karma writing) on the forehead when the baby laid on the winnowing tray for at least two minutes. <b>‘Karma writing’</b> is also called <b>‘Brahma vrata’.</b> No matter what people think, John spoke the truth in the case of Jesus. John compared the deeds with wheat. Everyone knows that the wheat is food. Man eats food and lives. When you eat food, the food runs out. Likewise, Jivatma experiences karma in the form of deeds. When you experience the karma, it keeps running out. John described the deeds we experience because of karma as wheat. The karma we experience was written in our body. We call it karma writing or forehead-writing or God’s judgment. We are experiencing our karma from the forehead-writing. John described karma- experiences as wheat and the head that stores karma as a winnowing tray. We take the grains 
                  from the winnowing tray to cook food. Therefore, the head that stores the karma which we experience is described as a winnowing tray. 
                  </p><p>
                  The karma is written in human being’s head without them knowing it. So, no one knows what will happen in the future. Every human is in a state where they cannot escape from karma. While all humans play like puppets in the hands of karma, the Holy Spirit or Paramatma is not in the control of karma. When such God wants to be born as a man, he creates his own karma; that is, he writes his own karma on his head and comes upon the earth. He has no karma but writes his own karma and comes for the sake of telling wisdom to humans. Regarding God, who writes his own karma, John said, <b>“His winnowing tray is in his hand.”</b> No one in the world has their winnowing tray in their hand. While this is the condition of humans, God creates his own karma and comes as a human being on the earth to tell people wisdom. Be aware that what Jesus experienced from birth to death is because of self-constructed karma. Due to self-created karma, he was born in a barn, was tortured, and died on the cross. No power can neither give birth to him nor torture him without his knowledge. He decided how he wanted to live his life on the earth. It is true that he had his winnowing tray in his hand. 
                  </p><p>
                  All ordinary people get new karma in every deed they do. Every deed on the earth produces new karma. As the smoke is associated with fire, karma is associated with every deed. It is Prakruti’s policy that every action has karma. When God incarnates and comes as the Son of God (Bhagavan), every deed he does also produces new karma. An ordinary person cannot escape from the coming karma. But Bhagavan Jesus can escape from the coming karma. Because Bhagavan has full fire of wisdom. Using gnanagni, he burns the karma that comes naturally in the deeds. Christ, who is complete gnani, has full gnanagni all the time. All the karma burns in the unquenchable fire of wisdom. Deeds are associated with karma; similarly, grains relate to chaff. John said, <b>“He burns the chaff with unquenchable fire”</b> because Christ burns up the karma associated with deeds by his gnanagni. Jesus cleanses his body from gunas’ dust and burns the karma in the deeds. John compared Jesus’ body to the threshing floor, removing the effect of gunas on him to cleaning the threshing floor, deeds to wheat, karma that comes from the deed to chaff, the fire that burns the karma to the unquenchable fire. John described the greatness of Jesus in a single sentence, but, unfortunately, we have not yet understood it. 
                  </p><p>
                  The verse seems to be straightforward, but it has so much subtle (hidden) meaning. The four Gospels have many verses of this kind. As my wisdom is limited, I have not written explanations for the entire Bible 66 chapters but wrote descriptions for important four Gospels and rarely other parts. 
                  </p>
                  </span>`

    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 5,
      verse: `<b> (4) The Gospel of Mathew, 3rd chapter, 16th and 17th verses.</b>`,
      meaning: `
        <b> 
        (16) As soon as Jesus was baptized, he went up out of the water. At that moment the sky was opened, and he saw the Spirit of God descending like a dove and alighting on him.
              <br><br>
              (17) And a voice from the sky said, “This is my Son, whom I love; with him, I am well pleased.”
               </b>
        `,
      pageText:
        ` 
          <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
          John baptized Jesus with water. Baptism is also called upadesa. In Telugu, upadesa means a country adjacent to your country. In other words, it is also called a neighboring country. A neighbor lives in a neighboring country. There is a neighboring country in your body. There is a neighbor in the neighboring country of your body. Every human has a neighboring country and a neighbor. The neighboring country, as well as the neighbor, are not visible in a human being. Guru shows the unseen neighboring country in baptism or upadesa. John baptized Jesus with water. There is no fire in that upadesa. Hence it is an upadesa to the name and does not have a neighboring country and a neighbor. Yet, the program of upadesa must be done in that way. Hence, Jesus said in verse 3:15, <b>“Let it be so now; it is proper for us to do this to fulfill all righteousness (wisdom).”</b>
          <p>
          Although Jesus took upadesa with water, he knows the neighboring country in his body. All the time, he sees the visible outside country as well as the invisible neighboring country. Therefore, it was counted as true upadesa even though the upadesa John gave him is only to the name. Jesus was baptized after living thirty years as an ordinary Jivatma. From then on, he began to tell divine related things, not as Jivatma but as Atma. To prove that Jesus, as Atma, told Paramatma’s wisdom, Atma descended like a dove and alighted on him as soon as he came out of the water after baptized. Besides, Paramatma (the Holy Spirit) said, <b>“This is my son, whom I love; with him, I am well pleased.”</b> The Holy Spirit, God, said that Atma was his beloved son, and he was rejoicing in his beloved son, Jesus. By this, it becomes known that the Holy Spirit is the Father, and Atma is a Son called Jesus. All this reveals that the Holy Spirit, Paramatma, did not appear to be Atma but lived in this world as an ordinary man appearing as Jivatma. I did not say this to praise Christians or propagate Christianity. I am telling you one hundred percent truth and the way God came upon the earth. 
          </p>
          
          </span>`,

    },

    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 6,
      verse: `<b>(5)	The Gospel of Mathew, 4th chapter, 10th verse.</b> `,
      meaning: ` <b> 
      (10) Jesus said to him, “Away from me, Satan! For it is written: Worship the Lord your God and serve him only.”
</b>`,
      pageText: ` 
          <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
          The word <b>Satan</b> is new in this verse. In the preceding verses, Satan is sometimes referred to as a ‘tempter’ and elsewhere as a ‘devil.’ The equivalent words for tempter and devil in Telugu are ‘shodakudu’ and ‘apavadi.’ Apavadi means slanderer. Similarly, shodakudu means someone who is searching for evil in you. If evil exists in you, shodakudu brings it out. The word Satan is used many times in this scripture. In spiritual education, the word Satan is used instead of the word <b>“Maya.”</b> Since Satan and Maya are the same, the description of Maya is also applicable to Satan. 
          <p>
          In the first divine scripture, Maya means the essence of gunas in the head. About Maya in the first divine scripture, it is said, <b>“Gunamayee mama maaya.”</b> In this, ‘mama maaya’ means “Maya is mine,” said God. God created all things. God created Maya, as well. Therefore, God said that Maya is mine. Maya is feminine gender. God and the two souls, Atma and Jivatma, separated from God are males (total three), and the rest is not. Therefore, Maya is said to be a feminine gender. We should not think that Maya is somewhere. Maya, which tempted Jesus, is in his head. Being in his head, Maya tempted Jesus and argued with him. Similarly, gunas in every man’s head are Maya to them and are tempting and arguing against them every day. After Jesus was baptized, Maya tempted him three times initially. Jesus answered the Maya with his wisdom three times. 
          </p><p>
          Jesus set an example in his life, which humans should follow. Whenever Maya searched Jesus, he answered with wisdom. So, every man must know how to do the same. When Satan asked Jesus to bow down to her, Jesus gave Satan (Maya) the appropriate answer. Jesus answered to Satan, <b>“Worship the Lord your God, and serve him only.”</b> Jesus said the word, but we should know that the Atma in his body spoke the word. The Holy Spirit, Paramatma, himself does not speak to anyone. Thus, he tells his wisdom through Atma. So, we should know that Paramatma himself told the wisdom, although Atma in the body told it. In the third and final divine scripture 3:7, God said, “God’ wisdom is not known to any man except God.” By this, we should know that the complete wisdom revealed by Atma in the body is told by Paramatma (God). 
          </p><p>
          There are twelve religions in the world today, and all devatas who do not present in any religion are in Hinduism. God created devatas and human beings. Humans forsook God and are worshiping devatas without knowing God’s wisdom. By doing so, it becomes clear that humans do not care for God’s word in the scriptures. Those who forsake God and worship devatas can be said to be in Maya, hearing Maya's words. There are only two parties - God's side and Maya’s side. However, people in some religions do not worship any other devatas and pray to God alone. Only in Hinduism, people are on the side of Maya and worship many devatas except God. It becomes clear that all those who worship devatas are on Maya’s side. 
          </p> 
                 
        </span>

`
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 7,
      verse: ` <b>(6)	The Gospel of Mathew, 5th chapter, 10th verse.</b>
`,
      meaning: `<b> 
      (10) Blessed are those who are persecuted because of righteousness (wisdom), for theirs is the kingdom of paraloka (moksha).
  </b>`,
      pageText: ` 
  <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
  The verse has the word ‘righteousness.’ But it should be <b>wisdom instead of righteousness.</b> Jesus would have used the word ‘wisdom’ in the Hebrew language. But when translated into English, the translators did not write the correct word that was equivalent to the word in Hebrew and used the word righteousness instead of wisdom. Righteousness is different from wisdom. <b>Righteousness and justice are  related to worldly things. Wisdom and dharma are divine.</b> Righteousness and justice bring karma. Wisdom and dharma burn karma. Therefore, righteousness is worldly, and wisdom is divine. There is righteousness, corruption, justice, and injustice in the world. Righteousness brings good karma, and corruption causes bad karma. Similarly, justice produces good karma, and injustice creates bad karma. According to this, the above verse should have wisdom in the place of righteousness. 
  <p>
  Those who are persecuted for wisdom and who are persecuted for being in the wisdom path by others can be said to be blessed. Because they will get moksha for getting tortured for the sake of wisdom. Moksha means liberation from the bondage of karma. When a man attains moksha, he will not be in this world and will be in a different state than the world. The one, who has attained that state, is said to be gone to paraloka. Paraloka is a state of no experience. In some lives, there will be torture for the sake of wisdom. Do not think that there will be violence in everyone's lives for the sake of wisdom. Without any hindrance, some will know wisdom and attain moksha (paraloka). 
  </p>
  </span>`
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 8,

      verse: ` <b> (7)	The Gospel of Mathew, 5th chapter, 17th verse.</b> `,
      meaning: ` <b> 
      (17) Do not think that I have come to abolish the Law (Dharma Shastra) or the Prophets; I have not come to abolish them but to fulfill them.
      </b> `,

      pageText: ` 
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      No one can condemn the Dharma Shastra. It cannot be condemnable. The Dharma Shastra was born at the beginning. Many prophets and speakers taught this. When Paramatma comes upon the earth as Bhagavan, he will practice it and make it understandable to all. When Bhagavan, the Son of God, reveals and practices the dharmas of the Dharma Shastra, they do not appear to be dharmas for some. Because some people believe that adharmas are dharmas, there is a possibility that the real dharmas appear to be adharmas when Bhagavan teaches. That is why Jesus said in verse above, <b>“Do not think that I have come to abolish the Law (Dharma Shastra) but to fulfill them.” </b>
      <p>
      People in the world fell into the hands of Satan (Maya) and believe adharmas are dharmas. Hence, they perform various forms of worship against God, thinking that it is sincere devotion. Satan turned the notion of God in people towards it and made them believe that they are going towards God. It made them practice adharmas instead of dharmas. Satan is leading them in the opposite direction of God. In such a state, although God comes as a man and practices the dharmas, those dharmas would appear to be misleading to them. People think that what they are doing is real dharmas and are true believers. They will accuse God, who has come as a man, of pursuing adharmas. They also advertise God as a blasphemer. When the real God came to the earth as Jesus, what he said and practiced were dharmas. But the dharmas appeared to be contrary to scholars, swamis, and gurus. That is why the chief priests, the scribes, and Caiaphas opposed and denounced Jesus. Hence, Jesus said in verse, <b>“I have not come to abolish them but to fulfill them.” </b>
      </p>
     
      </span>  `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 1,
      pageNumber: 9,

      verse: ` <b>(8)	The Gospel of Mathew, 5th chapter, 18th verse.</b> 

`,
      meaning: `<b> 
      (18) For truly I tell you, until sky and earth disappear, not the smallest letter, not the least stroke of a pen, will by any means disappear from the Law (Dharma Shastra) until everything is accomplished.      </b> 
`,

      pageText: `
      
        <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
        In this verse, the word <b>‘Dharma Shastra </b>is unique. Some people may get the question of what Dharma Shastra is. Before such doubts can be answered, one should know what shastra (science) is, how many types of sciences, and the specialty of Dharma Shastra in the sciences. Let us first understand the word shastra. The word shastra is derived from <b>shasanam</b> in Telugu. Shasanam means<b> ‘must be enforced.’</b> Accordingly, shastra means <b>‘whatever said must happen.’</b> The word shapam (curse) is derived from shastra. Shapam means <b>‘must be executed.’</b> All three words -<b> shasanam, shapam, shastra </b>have the same meaning. The shastras are divided into six categories. Some say that the six sciences are two kinds, and some say three. In a way, the shastras are two kinds. In other words, we can say that the shastras are of three types. If we say shastras are two types, then one is worldly-related, and the other is Paramatma-related. If we say shastras are three types, the four shastras are worldly-related, and one is Paramatma-related. Another one is partly on Paramatma- related and partly on worldly-related. 
        <p>
        The six shastras are respectively 1) Mathematics 2) Astronomy 3) Chemistry 4) Physics 5) Astrology 6) Brahma Vidya. Of these, the first four are worldly-related, and the fifth Astrology is linked with the world and Paramatma. In another way, if Astrology is also included in the worldly shastras, the first five shastras will become worldly, while Brahma Vidya shastra is the only one related to the Divine. The total number of sciences is six, and the greatest of all is Brahma Vidya. That is why it is called the Brahma Vidya shastra. Brahma means great. But Brahma is not a name. God is the biggest and the greatest of all; therefore, he is called Brahma. <b>As it is a science of God, it is called Brahma Vidya shastra.</b> The other five worldly sciences, namely Mathematics, Astronomy, Chemistry, Physics, and Astrology, have only their names without the word vidya. Only in the science of God is the word <b>vidya.</b> Some may question the reason for that. The answer is as follows. 
        </p><p>
        Sciences are divided into two types - worldly-related and Paramatma-related. Anyone can know the five worldly sciences completely. Brahma Vidya, which is the greatest of all and reveals God’s dharmas, is the only one that has the word vidya in its name. It is called the greatest Vidya shastra. The word vidya is originated from the sound of <b>vith</b>. Vith means knowing. Vidya (education) implies something that should be known. Vidyarthi (student) means a person who wants vidya (education). A student (vidyarthi) asks for something that he does not have and gets from others who have it. The students learn the necessary education from the teachers who know. Vidya means something that will be known but not fully known. Similarly, no one can fully know the matter of God. No one can claim that they are fully aware of God’s subject. One 
        must keep learning it for an entire lifetime. Therefore, people cannot know the complete God’s information, but they will keep learning forever. Therefore, the science of God is always said to be Vidya shastra. Therefore, it is Brahma Vidya shastra forever. Man can fully know the other five sciences. Then there is nothing to be known after that. Therefore, the word ‘vidya’ is not placed behind their names. 
        </p><p>
        The one who fully knows the information of God (the Brahma) can tell others. If man does not know God’s information, who can tell about it without a doubt? Our answer to this is as follows. No one except God knows God’s wisdom. Therefore, God must tell his wisdom. But God does not speak to anyone directly. Therefore, God, not as God, tells his wisdom, disguising as a man. But we cannot say that God is human. God comes like a man, but he is not a human being. God, disguised as a man, told his wisdom entirely as a science with ordinances. Thus, what God said is called Brahma Vidya shastra. God himself told Brahma Vidya shastra. Man must know it. When a man is fully aware of the Brahma Vidya, he will not have any karma and unite with God. Thus, man must keep knowing God’s science until he attains moksha. Therefore, it was named Brahma Vidya appropriately. It is called Brahma Vidya because it is the highest education in the world. 
        </p><p>
        God’s dharmas are stated in the Brahma Vidya shastra. Hence, Brahma Vidya shastra is called the Dharma Shastra in the divine scriptures. God said his shastra with ordinances at the very beginning of creation. Based on it, three divine scriptures were stated at three different times in three different places. Those three divine scriptures can be said three Dharma Shastras. Dharma Shastras contain only dharmas. Hence, all three Dharma Shastras have the same doctrine and God’s dharmas. All three Dharma Shastras adhere to Brahma Vidya. Therefore, the three Dharma Shastras provide testimony to each other, but not contradictory. Therefore, <b>the first divine scripture is called the Bhagavad-Gita, the second divine scripture is named the Bible, and the third divine scripture (the last divine scripture) is called the Quran.</b> Although the names of these three scriptures are different, they tell the dharmas of the same God. 
        </p><p>
        Following the Brahma Vidya shastra, three prophets told the wisdom, and it became three divine scriptures. Though these three divine scriptures are separate, they spoke the same God’s dharmas from three angles. Because the dharmas stated therein are scientific, everything will be fulfilled as it was said. It is said in the verse, <b>“until sky and earth disappear”. </b>The earth and the sky that appear outside are never perishable. God made them eternal. The earth and the sky that appear outside are also in the human body invisibly. But the invisible earth and sky are perishable completely. Thus, the phrase “until sky and earth disappear” must be understood as “until the human body die (disappear).” When man strives for God’s wisdom, he must obey all God’s commandments (dharmas). Unless man practices God’s dharmas entirely, he cannot get paraloka. Man can attain moksha only when he has fulfilled it according to Dharma Shastra. Even If a man does not follow little thing as said in the Dharma Shastra, he cannot obtain mukti. Instead of saying <b>“even if little thing is not followed from said dharmas,”</b> it is said, <b>“not the smallest letter, not the least 
        stroke of a pen.”</b> According to this, everything said in the Dharma Shastra must be practiced without leaving a little thing. 
        </p>
        
        </span>
      `
    },
    {
      chapterName: "The Gospel Of Mathew",

      chapterNumber: 2,

      pageNumber: 10,

      verse: ` <b>(9)	The Gospel of Mathew, 5th chapter, 19th verse.</b> 
  
`,
      meaning: `<b> 
      (19) Therefore, anyone who sets aside one of the least of these commands and teaches others accordingly will be called least in the kingdom of paraloka, but whoever practices and teaches these commands will be called great in the kingdom of paraloka.
      </b> `,

      pageText: `  
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      While there are some essential dharmas in the Dharma Shastra, there are many that are linked to them. God’s dharmas are also known as the <b>commandments.</b> There are only <b>two</b> most important of God's commandments, but they are more connected to them. The one who violates the smallest of all the connected commandments and teaches is the vilest. Man should not violate whether it is small or significant dharma, which God told. He must practice even the smallest dharma without leaving. But some people, instead of practicing the smallest dharma, became spoiled. They not only became a follower of adharmas but also teaches adharmas. They earned a reputation as gurus. Although they are gurus in the world, they did not correctly understand God’s commandments. They grasped God’s dharmas as adharmas and became followers of adharmas. They mislead people by teaching those adharmas. They claim what they tell are true wisdom and true God’s dharmas. Even though they are the great gurus in the eyes of the people, they are the least in God's eyes. 
      <p>
      Those who understood dharmas correctly teach dharmas as dharmas to the interested people, although they are not well-known gurus. Some interpreted God’s dharmas as adharmas and teach the same adharmas. Thus, those who teach the adharmas cannot get the kingdom of paraloka. The ignorant will never gain the kingdom of paraloka. Paraloka was permanently closed for them. They are not worthy of the kingdom of paraloka. Although they gained a reputation as a great guru in the world, they will not get moksha. Although someone who understands God’s commandments from the scriptures is not a guru, he will have a great place in paraloka when he teaches dharmas known to him. Not only is such a person called the follower of dharmas, but he is also counted as high in God's eyes. The true dharma follower is the one who teaches even the smallest God’s dharma in detail. 
      </p>       
      </span>`
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 1,
      pageNumber: 11,
      verse: `<b>(10)	The Gospel of Mathew, 5th chapter, 20th verse.      </b>  
`,
      meaning: ` <b> 
      (20) For I tell you that unless your righteousness surpasses that of the Pharisees and the teachers of the law, you will certainly not enter the kingdom of paraloka.</b>`,
      pageText: ` 
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      There are many Pharisees, devotees, and teachers in the world. You should know more wisdom than they know. God said that those who know less wisdom than
      Pharisees, devotees, and teachers cannot enter paraloka. According to the verse, when you know more wisdom than swamis and Pharisees who perform yajnas and act contrary to what God told, you will get paraloka easily.
            </span> 
`
    },
    {
      chapterName: "The Gospel Of Mathew",

      chapterNumber: 2,

      pageNumber: 12,

      verse: `<b>(11)	The Gospel of Mathew, 5th chapter, 28th verse.</b>
   `,
      meaning: `<b> 
      (28) But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart. </b>     `,

      pageText: `
      
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      Man does deeds in two ways. One way is doing externally, and another way is doing internally without knowing anyone. The two-pronged approach is in every human. In one approach, he does gunas-related work with internal feelings or thoughts. In another way, he does the same job with gunas and the physical body. Good and bad karma comes through the deeds man does. There are, however, two kinds of deeds – physical (visible) and non-physical (invisible). <b>People judge whether a person is good or bad based on what he does with the physical body. But they cannot decide whether a person is good or bad if he does a deed internally with feelings or thoughts.</b> We cannot identify whether a person is good or bad if we do not know what he is doing. 
      <p>
      Man’s ego (aham), whether it be in his physical deed or his non-physical (thoughts) deed, brings forth karma. Man receives bad or good karma because of aham in the body. The external organs of the body function in the physical deed. But the good and bad karma in the act gets into man’s karma-chakra because of the functioning of the aham. Although man does not work with the physical body, when the buddhi (intellect) contemplates with the feeling of gunas, the aham which is next to buddhi attaches karma to him based on what aham senses in the thoughts of buddhi. If the aham does not function, man does not get karma, although he does physical or non-physical work. If aham works, man gets good and bad karma from the thoughts, although he does not do any physical work. Therefore, it is said in the first divine scripture, in verse 17th of Moksha Sanyasa Yogam, “<b>Although a man kills all those who are in the world without ego in his feelings, he will not get any sin in murder. He will not be counted as a murderer.”</b> As the feeling of ego is important, the murderer will not get any sin in the murder and will not be counted as a murderer if the murder is done without feeling ego. Jesus said the same thing, <b>“You will get sin from the thought because of ego even though you haven’t done the work physically.”</b> According to this, it becomes known that it is the same person who told both the first divine scripture and the second divine scripture, and the wisdom in both the scriptures is also the same. Although a man does physical work without aham in it, it would be counted as if it had not been done. Similarly, although a man thinks about the work without doing the work physically, it would be counted as if it were done because the aham is present in the thought. Thus, the ego inside the body causes bad and good karma to the Jivatma. Therefore, it was said at the beginning of the creation that ‘doing things without ego is Karma yogam.’ The same thing was said in both the first divine scripture and the second divine scriptures. 
      </p>	    
      </span>
      `
    },
    {
      chapterName: "The Gospel Of Mathew",

      chapterNumber: 2,

      pageNumber: 13,

      verse: `<b>(12)	The Gospel of Mathew, 5th chapter, 29th and 30th verses.</b>
 `,
      meaning: ` <b>
      (29) If your right eye causes you to stumble, gouge it out and throw it away. It is better for you to lose one part of your body than for your whole body to be thrown into hell.      
      <br><br>
      (30) And if your right hand causes you to stumble, cut it off and throw it away. It is better for you to lose one part of your body than for your whole body to go into hell.</b>`,
      pageText: `  
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      Verse 29 mentions <b>‘eye’,</b> and verse 30 mentions <b>‘hand’.</b> If you take a closer look at what is said here, man has two kinds of body parts: physical or visible and non- physical or subtle. There are ten (10) physical body parts and fifteen (15) subtle body parts. The total physical and subtle body parts are 25, including Jivatma. An organ that performs a distinct function in the body will be identified as a body part. There are five gnanendriyas and five karmendriyas. Two types of organs are required to do physical work. The gnanendriyas (five senses) communicate the information from outside to inside, the mind (manas) passes the same information from the senses to buddhi. Manas conveys the information from the buddhi to the external karmendriyas. The five gnanendriyas (five senses) are eye, ear, nose, tongue, and skin. The five karmendriyas are hand, leg, mouth, anus, and sexual organ. While the gnanendriyas transport external information inside, the information provided by the inner buddhi is conveyed through manas to the karmendriyas. The karmendriyas implement what the intellect (buddhi) says. 
      <p>
      Man can do deeds with the coordination of gnanendriyas and karmendriyas. <b>Eye</b> in gnanendriyas and <b>hand</b> in karmendriyas are important. Hence, the eye and the hand are mentioned in both the verses. Even though buddhi does not order karmendriyas to perform a task when the eye conveys the information to inside, a man may still get sin from the thought of the buddhi when aham, which is adjacent and connected to the buddhi, acts. Therefore, the eye is the primary reason for the sin. When a man sees a woman and thinks lustfully, he may become sinner from the feeling of ego, although he has not done any harm to the woman. The eye is creating the possibility of attaching sin to a man for the never-happened physical work. Hence, it is said, ‘gouge the eye out and throw it away.’ But we should not pluck the physical eye, as said in verse. The verse mentions ‘your right eye.’ It cannot be said the right eye alone causes the sin because the left eye also does the same thing that the right eye does. Sin comes from both the eyes. Hence, we need to think about why the verse mentions the right eye alone. 
      </p>    
      <p style="text-align:center">
      <img src="assets/img/gnanendriyalu.png"/>
      </p><p>    
      The human body has two parts, right and left. It is natural to have strength on the right and weakness on the left. In the verse, both right side parts – right eye and right hand - are mentioned. There is another point to consider in this verse. <b>‘It is better for you to lose one part of your body than for your whole body to be thrown into hell,’</b> said in the verse. In fact, neither eye nor hand is responsible for the sin. The main cause of sin is the aham in the body. Both first and second divine scriptures state the same thing. Therefore, the external body parts have nothing to do with acquiring or experiencing sin. <b>It is the feeling of the aham in the body that gives the sin to a man. The Jiva in the body is the one who experiences the sin.</b> Because the feeling of ego (aham) is responsible for acquiring karma, and the Jiva is obligated to experiencing karma, the external gnanendriya eye and karmendriya hand are working without regard to karma. 
      </p><p>
      Some may wonder why Jesus said to gouge the eye out and cut the hand off when they are not related to karma. Our answer to this is that when your eye provides external information, it reaches buddhi. Then the buddhi thinks with gunas. But when the <b>aham is suppressed</b> and is not associated with the matter, there will not be either bad or good karma in the gunas with which buddhi thought or in the sight provided by the eye. If a man disassociates the inner ego with the information provided by the eye, he can avoid the sin of the eye as if he removed the eye. Similarly, if the aham is not associated with what is heard, it will be equal to as if the ear were removed. Good and bad karma comes not only from the eyes but also from the other four senses. As the eye is vital in gnanendriyas, and the right eye has more vision than the left eye naturally, he said ‘gouge the right eye out’ in verse. Although the verse appears to have a direct meaning, it should be understood subtly. 
      </p><p>
      Similarly, the right hand in the karmendriyas is mentioned. Karma comes not only from the right hand but also in the deeds done by other karmendriyas. Karma comes although the gnanendriyas do not do physical work, and it comes when the karmendriyas perform tasks. When we say gnanendriyas are five, we count the two eyes as one. Similarly, we have counted both ears as one. Although we have two nostrils, it is counted as one nose. The remaining are skin and a tongue. Similarly, in 
      karmendriyas, two hands are counted as one and two legs as one. The remaining three are a mouth, an anus, and a sex organ. As the right eye and the right hand are stronger in the organs that are in pairs, hence the right eye and right hand are specially stated in the verse. Because the right eye has more sight, and the right hand can do more tasks. According to the subtle meaning of the verse, he told us to <b>suppress the aham to avoid sin from the sight of the eye and the deed of the hand.</b> Karma does not stop coming even if the eye is plucked out, and the hand is cut off. Other organs also cause the karma. It must be known from the verse that aham is the root cause of sin. Hence aham should be suppressed. The body organs do not bring sin. The body does not suffer sin. It is the aham that is acquiring sin in the body. Similarly, Jivatma, who is also a part of the body, experiences bad and good karma. The body has five gnanendriyas, five karmendriyas, five vayus(airs), five tanmatras, and five antahkaranams. Jivatma is also included in antahkaranams. Thus, the body has twenty-five parts (25), including Jivatma. If you know the mechanism of the body very well, you will understand these Jesus’ verses. A gnani knows that the body is divided into 25 parts. In his poem, a spiritualist said that the one who does not know this should not be called gnani. 
      </p>

            <p>
              <i>
              Panchatatvamulanu panchikarinchaka<br>
      Manchi yatulamanna maatalanna<br>
      Kunchamandu gajamu gruddupettina chandambu Akhila jivasanga aatmalinga.

        </i>
        </p>
        <p>
        <b>Meaning: -</b> Knowing how Pancha Bhutas - sky, air, fire, water, and earth - were created, how each one of them was divided into five parts, and how the split 25 parts combine with each other to form body parts is called Sankhya (body visible and invisible parts). If one thinks that he is gnani without knowing Sankhya of the body, it is like saying that an elephant laid an egg under the basket. Even if an elephant is tied with chains and kept under the basket, it will not lay eggs. Hence, it is false to assume that an elephant laid eggs under a basket. Similarly, it is incorrect for a person to say himself gnani when he does not know the details of the body's organs.

        </p>
      </span>`
    },
    {
      chapterName: "The Gospel Of Mathew",

      chapterNumber: 2,

      pageNumber: 14,

      verse: `  <b>(13)	The Gospel of Mathew, 6th chapter, 3rd and 4th verses.</b>
  
  `,
      meaning: ` <b>
          
      (3) But when you do dharma, do not let your left hand know what your right hand is doing.
      
      <br><br>
      (4) So that your giving may be in secret. Then your father, who sees what is done in secret, will reward you.
      </b>
  `,

      pageText: `
      
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      Many preachers distorted the verse and said dharma as donation. It is said in some chapels that the money given for God’s service with the right hand should not be known to the left hand. Hence the gifts are wrapped in the hand and donated. The verse, in fact, says about dharma, not about donation. There is a massive difference 
      between dharma and donation. <b>Donation means giving to others. Dharma means something one practices.</b> If you know what dharmas are, then you will know how to practice them later. In this verse, donation is not at all mentioned. It only talks about dharma. God’s dharmas are mainly two, as stated in the divine scripture. Besides, the third one is physical. Some other dharmas are linked to these three dharmas. Three essential dharmas make a man reach God, while there are some other dharmas which are about God. There are only three main dharmas that man must practice for reaching God. 
      <br><br>
      The three dharmas Brahma, Karma, and Bhakti yogams, are required to reach God. Two of them involve practice with internal feelings and one with external practice. Other people cannot recognize the practicing of two dharmas. But there is a possibility to recognize when the third dharma is practiced. Hence, in verse, the singular word ‘dharma’ is said but not the plural word ‘dharmas.’ Jesus said that one dharma, which is likely to be known to others, should be practiced cautiously in secret. To tell to do so, he said in verse, <b>"do not let your left hand know what your right hand is doing."</b> When others see you practice the dharma, they are more likely to get spoiled than getting better. Therefore, when you do (practice) dharma, you should do it without knowing to others, said in verse. 

     
      </span>
`
    },
    {
      chapterName: "The Gospel Of Mathew",

      chapterNumber: 2,

      pageNumber: 15,

      verse: `  <b>(14)	The Gospel of Mathew, 6th chapter, 6th verse.</b>  
                     
                     
  `,
      meaning: `<b>
      (6) But when you pray, go into your room, close the door, and pray to your Father, who is unseen. Then your father, who sees what is done in secret, will reward you.</b>`,
      pageText: ` 
       
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      Humans should pray to God with dharma. Prayer must adhere to dharma. Doing prayer in the form of words from the mouth without dharma is not related to dharma and does not reach God. Therefore, when you pray with the dharma that will be known to others, you should go into the room, close the door, and pray to the secret Atma. Atma, who is in the body, is the father of humans. The prayer that will be known to others should be made without anyone knowing it. By doing so, Atma, who is in the body secretly, shall reward you. In the first divine scripture, Atma’s worship is called 
      <b>‘Brahma Yogam.’</b>

          
      </span>
  `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 16,
      verse: `  <b>(15)	The Gospel of Mathew, 6th chapter, 7th and 8th verses. </b>
          
 `,
      meaning: `  <b>
      (7) When you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words.
      <br><br>
      (8) Do not be like them, for your father knows what you need before you ask him.</b>`,

      pageText: ` 
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      Many people in the society today pray with futile words rather than praying with <b>‘yogam’</b> which adhere to dharma to reach God. Because they assume that God
will fulfill their desires if asked with a lot of words. You should not pray like them. You are not praying to unite with God. You are praying for worldly desires and benefits. Before you ask your father Atma, he knows everything. He knows what should be or should not be given to you. Therefore, it is of no use to ask about the materialistic benefits. Your father, Atma, leads you according to your karma. Therefore, Atma gives you, according to the karma you earned in the past. Whether you asked or not, Atma gives everything according to karma. Atma is the father of all humans, and the Holy Spirit, the father of Atma, is the witness of all things.
      </span>
         `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 17,
      verse: ` <b>(16)	The Gospel of Mathew, 7th chapter, 13th and 14th verses.</b>
  
   `,
      meaning: `  <b>
      (13) Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it.
      <br><br>
      (14) But small is the gate and narrow the road that leads to life, and only a few find it.      
      </b> `,
      pageText: ` 
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      There are two paths in this world which has experiences. One path is Paramatma (The Holy Spirit); the other path is Maya. There are very few who seek God, but many are looking for vast Maya’s path. The gate to moksha is narrow and hard to go in the way. God’s path is narrow and there are very few who find it. 
      <br><br>
      The verse mentions God’s gate (entrance) and road. The first is the entrance, and the next is the path. There are only two roads for all human beings. One is narrow, and the other is wide. The gate to the narrow road is narrow, and the entrance to the broad road is wide. The entrance and the path must be a few times larger than the one who enters. Then only it is possible to enter the gate and the road. The narrow gate's size and the width of the narrow path are equal to the size of the person who enters. But in the second choice, the wide gate's size and the width of the broad road are 108 times bigger than the person who enters. In this way, there are only two paths in this world – one is 108 times wide gate, broad road, and another one is exact size gate and path. The Lord compared these two types of gates and paths to wisdom and ignorance. The path of wisdom is very narrow, and the size of the entrance is limited, and therefore, it is challenging to walk. The ignorant path is 108 times larger and is free from hindrances. The wisdom path is narrow and has obstacles, but its destination is Paramatma. Even though there are no obstacles in the wide gate and the broad ignorant path, it leads to Satan. Paramatma's path is without birth and death, without destruction, and is always in the state of no change. Satan’s path has birth, death, and destruction, and is always in the state of change. Although the Paramatma’s path is far superior, and Satan’s way is the worst, everyone walks in Satan’s road. When a person enters Satan’s path, all his associates support him and do not cause any trouble. There will be no financial difficulties. Life feels comfortable. When a person enters the wisdom path, his relatives and spouses become enemies and obstruct his path. His life will be hard. Hence, there is not even one in the millions who enter the path of wisdom. 
      <br><br>
      Many people are moving along the vast ignorant path, which has no hindrance and no opposition. Surprisingly, they do not even know the existence of a narrow passage that leads to moksha and the father of paraloka. Krishna said in Bhagavad- Gita that there is not even one among the thousands who wish to travel on the narrow path. If someone seldom enters, it is rare to get to the destination due to obstacles from Maya. Krishna said in the Bhagavad-Gita that the person who overcomes obstacles and attains the destination is ‘the blessed one’ and that such a person will join eternal Paramatma. Krishna and Jesus are the representatives of Paramatma. Krishna told about the paths of wisdom and ignorance in Bhagavad-Gita form at the end of Dvapara Yuga. Jesus said the same thing in the Bible after three thousand years of Kali Yuga. Those who know the paths of wisdom and ignorance told by Sri Krishna and Jesus Christ should travel towards suggested wisdom path and, despite all obstacles, continue journey, and finally attain moksha. 
      
      </span>`
    },
    {
      chapterName: "The Gospel Of Mathew",
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
      There are three vital verbs – <b>ask, seek, and knock</b> – in verse. Jesus told us to do these three things spiritually. The Lord did not tell the worldly things like everyone else. Many understood this verse as worldly-related. Hence, people began to ask favors from the Lord, who said the word. Although people read the Holy Bible, Satan entered, made them not understand what Jesus said, and caused them to ask worldly favors. Man does not want to transgress God’s word. Satan uses man’s lack of understanding to make man believe that he is not violating God’s word. But, in fact, it makes man transgress God’s word. Satan, which was created by God, is also present where God is present. Wherever God’s word is, there is also the influence of Satan. Therefore, we need to understand God’s verses carefully. Ensure that Satan does not influence you in understanding the verse. 
      <br><br>
      We should ask for God, seek God, and knock for God. Doing so is God’s way. If you ask for anything else or seek anything else, it will be Satan’s (Maya) way. Those who enter God’s path will ask for God’s wisdom. You may have a lot of questions. How is God? How to reach God? How to know all details of God? Do not assume that no person on earth can answer these questions. God comes and gives you the answer you want when all humans on earth cannot tell God’s information because of Satan’s influence. You can get the answers to your questions but cannot know who comes and provides answers. Even though God himself is born on earth and gives us answers, we cannot recognize him as God, but we will identify him as a man. If you ask, you will get complete wisdom. If you search, you will know the God who came on the earth as a 
      man. When God incarnates on earth, he does not claim to be God and does not tell anyone. That is his rule. According to the rule, those who do not search do not see, but the seeker will see. Since few asked for wisdom when the Lord Jesus was a man, he told them the wisdom. Because there were no seekers, he did not appear to be God to anyone. He looked like an ordinary man to everyone. All his twelve disciples understood him as a preacher. They do not know that Paramatma, who pervaded the whole universe, incarnated as Jesus. He also acted in such a way that no one recognized him as God. 
      <br><br>
      The king of paraloka, Paramatma, washed his disciples’ feet when he was on the earth as a man. By doing so, there was no chance for his disciples and the rest to recognize him. Unable to recognize him as the Lord, people treated him disrespectfully as if he were an ordinary man, spat on his face, put a crown of thorns on his head, beat along the way, and crucified him. When Jesus died and rose again on the third day with the same body, his disciples thought him to be a devil. This shows that his disciples were askers but not seekers. As the saying goes, <b>“seeing is greater than listening,”</b> those who saw him are higher than those who listened to his wisdom. People may have seen him directly when God of the entire world came as Jesus. But it was as if they had not seen him. In that matter, the Lord said that his disciples were blind, although they had eyes. To avoid being blind, you should start looking for God. It is said in verse that everyone who asks receives and who seeks finds. Therefore, the asker has been given God’s words, and the seeker has been given God’s image. As the spectator is greater than the listener, a person who experiences is higher than a spectator. Following that principle, he said, ‘to the one who knocks, the door will be opened.’ Knocking does not mean knocking on a neighbor's door or opposite house door. The gate of the empire of moksha must be knocked. The doors of the kingdom of paraloka must be knocked. Those who seek salvation (moksha) are united with Paramatma and experience the very essence of him. The one who is accustomed to asking and seeking will surely try to unite with God. Hence, he will indeed become the one who knocks. By asking, searching, and knocking, anyone can unite with God. Therefore, every man should have these three essential qualities that God said in the above verse. According to God’s word, the asker gets wisdom, the seeker finds Bhagavan, and the one who knocks obtains the house of moksha. 
      </span>`
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 19,
      verse: `<b>(18)	The Gospel of Mathew, 7th chapter, 15th verse.</b>  
    
`,
      meaning: ` <b>
      (15) Watch out for false prophets. They come to you in sheep’s clothing, but inwardly they are ferocious wolves.      
      </b>
`, pageText: `
 
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      Man needs guidance to reach God. Guidance must come from others. For a man to walk in God’s path, he must rely on another person. The followers on the path depend on the guide who shows the way. Because the follower must walk in the path that guide shows. The follower is dependent on the guide. If the guide shows the correct way, the follower walks correctly. The follower goes on the wrong path if the guide does not show the right direction. The goal of an ordinary man depends on the 
guide (prophet). Once a person has been decided as guru, everyone has the habit of believing that what he says is true throughout life. Hence, you should be careful when you first choose a person as your guru (guide). Therefore, in verse above, the Lord said, <b>“Beware of the false prophets.”</b> He said that some present-day gurus are not gurus and come to you in sheep’s clothing pretending to be gurus, but inwardly they are ferocious wolves. According to Jesus’s words, many are dressing as gurus and teaching. But they are not gurus, and their way will not take you to God. They seem to be speaking about God because they use words like God, wisdom, and Atma in their teachings. The wolf is not a sheep, although it wears sheep’s skin. Similarly, they are not gurus, although they appear to be great gurus. Therefore, the Lord told us to beware of false prophets so as not to waste life by believing such prophets. 

      </span>
                                 
`
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 20,
      verse: `<b>(19)	The Gospel of Mathew, 7th chapter, 21st verse.</b>
  
  `,
      meaning: ` <b>
      (21) Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of paraloka, but only the one who does the will of my father who is in paraloka.      </b>
`, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The Lord Jesus came from Paramatma. Jesus is Bhagavan wearing a body, while Paramatma, the father of paraloka, is God without a body. The God without the body is pervading the whole universe. When Bhagavan with the body was on earth in the name of Jesus, some saw the Lord's greatness and showed reverence to him for the sake of their desires. They called him ‘Lord, Lord,’ for their benefit. It is of no use to approach the Lord, who is in the seeable form, and call him great without divine wisdom. Although the one in seeable (visible) and unseeable (invisible) form is the same, there are many limitations to the one in seeable form. There are no limits to the unseeable father of paraloka. The limitless Paramatma sends a form from him to reveal his dharmas to humans. Jesus is the form sent by Paramatma. Although the Lord appeared to us as Jesus, the father of paraloka spoke those words as Jesus. God came to earth as Jesus for the proclamation of his dharmas. 
    <br><br>
    Whoever does not practice and does not recognize the wisdom according to the will of the father of paraloka does not get any benefit from calling Jesus “Lord.” The one who practices God's wisdom is higher than the one who utters the Lord’s name. The person who walks according to God’s commandment is the follower of God’s will. Such a person will enter paraloka (moksha). God is not pleased to flattery and does not surrender to it. God surrenders to the practitioners of his wisdom and is pleased to see them. Therefore, it is better to practice God’s words than to praise God. God knows the feelings of all. He can see the difference in the feeling of wisdom known person and wisdom unknown person. Whoever knows God’s wisdom and acts according to it is important to God. Whoever understands the wisdom differently and does not act according to the will of God cannot attain moksha. 
    
    </span>

 `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 21,
      verse: ` <b> (20)	The Gospel of Mathew, 7th chapter, 22nd and 23rd verses. </b>  
    `, meaning: ` <b>
    (22) Many will say to me on that day, ‘Lord, Lord, did we not prophesy in your name and in your name drive out demons and, in your name, perform many miracles?
    <br><br>
    (23) Then I will tell them plainly, ‘I never knew you. Away from me, you evildoers!’     </b>                                     
    `, pageText: `
     
        <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
        Some people who know the greatness of the Lord (Jesus) forget Paramatma, the ruler of paraloka, and praise Jesus only. Paramatma, the father of the entire world, sent a part of him as Jesus. Jesus has as much power as Paramatma. Praising the Lord Jesus is like praising the father, Paramatma. Many people praise the Lord. But some are selfish, and some are selfless towards God. The father of paraloka proclaimed his words many times through Jesus, whom he sent. Many know the words of the Supreme father but do not know his true nature. It may be said that not even one out of millions who read the Father’s words, hear, and praise does not understand the Father’s real state. The Lord declared God’s commandments, wisdom, and words. The visible Lord (Jesus) is the symbol of the invisible God. The Lord is the image and representative of God. Whoever does not understand the wisdom and commandments from the verses cannot gain full benefit, although they praise the Lord. 
        <br><br>
        Humans can gain only some profit by praising the Lord as high. One need to know that the full benefit of man is to attain paraloka. The most significant benefit that a man can achieve is paraloka. It must be known that the ultimate benefit of anyone is to be released from Satan’s (Maya) world and enter God’s world. The last most significant benefit of man is to join God’s paraloka without ever coming back into this world where Satan resides. There is nothing valuable for a man than gaining access to paraloka. God's wisdom must be fully understood to gain such a huge profit and avoid Satan's relationship. Those who do not know the in-depth wisdom of Jesus’ verses and his commandment limit will only become a partial devotee but not a complete believer. Blessed is the one who applies all the wisdom that the Lord told without transcending the limits of the Lord commandments. Whoever does not know Paramatma’s wisdom entirely is not a total believer, even though such a person is a great preacher and praises the Lord. It should be noted that such a person is not being omitted. It is to say that he trusts in God but is not a complete believer. Man has some mistrust hidden in him until he knows God's wisdom entirely. While it may not be visible now, it will come out someday. Even great preachers who think they are complete devotees of the Lord will have some degree of disbelief hidden somewhere in them until they know God’s wisdom completely. Hence, the Lord said, <br>“The one who trusts me with his mind (manas) is better than the one who flatters me.”</b> To get complete faith, man requires the full wisdom of God. 
        <br><br>
        It can be said that those who do not know that Jesus and God are the same, and those who think that Jesus will return as Jesus do not understand the vastness of God. The one who does not know that God is eternal, that he has no beginning and end, that God has descended upon earth so many times, and that he will come whenever he needs to, is not complete gnani. One who has a perfect wisdom can recognize the coming of God. Whoever has perfect wisdom can recognize the coming of God. Whoever does not have absolute wisdom cannot recognize the coming of God. Even though God has come as a human and stood in front of a man, the man who sees only his (God’s) outward appearance and his deeds cannot recognize God. When the Lord comes in disguise, such Christians would not recognize him and be ready to baptize him. 
        <br><br>
        On earth, believers are better than non-believers, and absolute (complete) believers are better than believers. Only absolute believers can enter paraloka. God does not accept them until they become absolute believers. God recognizes only absolute gnanis when they enter the paraloka. God will say that I do not know of them if they are not absolute gnanis. Therefore, one must strive to become absolute gnani. Many want to get close to God and enter God’s kingdom. But because they are in Satan's kingdom (Maya), Satan tries its best not to lead them to God and not to become complete gnani. Even preachers who knew that Satan is against God do not know what Satan’s work is. Those who do not know Satan’s details are in Satan’s path and are fantasizing that they are in God’s way. That is why God said that preachers who think that they are close to God could not enter him. 
        <br><br>
        In verse, Jesus said, <b>“Although you drive out demons(ghosts) on my name, perform miracles and heal sick on my name, you are evildoers. Go away from me.” </b>
        <br><br>
        Today in society, people consider those who do miracles in the name of God as true devotees and close to God. Even those who do wonders think that they are close to the Lord. They think that they are close to the Lord because the glory of the Lord is revealed through them. When they touch a patient praising God’s word, and the patient’s sickness is forgiven, they consider that the Lord’s miracles are unveiled through them. While it is true that miracles will happen and the Lord becomes known to all through miracles, but they did not think why the Lord does not like them according to the above verse. They forgot the Lord’s words in this case. If what they are doing is good, and it is the Lord's miracle, why did the Lord scold them? Why did Jesus say that they were walking in the evil path? If the Lord says so, it would be a hundred percent truth. 
        <br><br>
        Unbelievable truth will be revealed when you think what the truth in the Lord’s words. It is a big mistake for a man not to realize whether the miracles done in the Lord’s name belong to God or Satan. Those who appear to be preachers and gurus in the people’s eyes think that they are in God’s path, but they are in Maya’s path. This is a very painful thing. Many preachers will get angry with my word. But remember that this is not my word, but the word of God. The Lord said in the Gospel of Mathew 7:22, <b>“This is evil. I never knew you.”</b> We need to think in what form Maya that tempted the Lord that day is tempting us today. Knowing about Maya (Satan) is also 
        part of the divine wisdom. If we do not know Maya, we will mistakenly follow Satan, which is not God and is in God’s form, instead of following God. Many speakers, gurus, and preachers today are mistaken in the same way. The Satan (Maya), which can change many forms, is doing magic and miracles in God’s name. Those who do not know that this is not pleasing to God cannot move forward. The terrible truth is that many people on earth blindly follow Satan, assuming that it is God. They are not able to know that what they are pursuing is not God's way but Satan's. They seem to be no chance of getting out of Satan's influence. Even if God himself said this thing, they would criticize God, but they would not change. For them, Maya appears to be God, and God seems to be a man. 
        <br><br>
        Those who want to enter God's kingdom and have faith in God should remember the above verse and think why God hated and called those who perform miracles as evildoers. Think who is God's favorite and who is not. You need to know God’s verses, God’s wisdom, and his commandments. You should fully absorb God’s wisdom and should not cross his commandment, thinking that it is a boundary drawn around you. Remember that God’s kingdom is within the boundary, and outside the boundary is Satan’s kingdom. You should be alert to Satan, remembering the boundary that Jesus has drawn around humankind in his holy scripture. 

        </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 22,
      verse: ` <b>(21) The Gospel of Mathew, 8th chapter, 22nd verse. </b>  
    `, meaning: ` <b>
        
    (22) Jesus told him, “Follow me, and let the dead bury their own dead.”     </b>                                    
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The above verse was the response from Jesus when one of the disciples said to him, “Lord, first let me go and bury my father.” What Jesus said seem to be unclear. Hence, some people wonder what Jesus said. If we think about this, humans can be divided into two types. Those who know the wisdom and practice it as yogam to get eternal life (moksha). They are rare on the earth. Those who are eligible for everlasting life will not be counted as dead. Whoever receives everlasting life will never be dead. The person can be said to have attained moksha. Those who are ignorant and those who do not practice yogam can be said dead. Such a man does not have eternal life and can be said dead. It can be said that the person gets death someday. The ignorant bury the ignorant. Therefore, Jesus said, “let the dead bury the dead.” All those that do not know wisdom are called dead in the verse, counting them as dead persons. Whoever knows the wisdom should not associate with the ignorant. Hence, Jesus said to the disciple, “You know the wisdom and follow me. Let the ignorant bury the ignorant.”
    </span>
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 23,
      verse: ` <b> (22)	The Gospel of Mathew, 9th chapter, 12th and 13th verses
      .</b>  
    `, meaning: ` <b>
    (12) On hearing this, Jesus said, “It is not the healthy who need a doctor, but the sick.”   <br><br>
    (13) For I have not come to call the righteous (gnanis), but sinners.    </b>                                    
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    We already said that God would come upon the earth occasionally for establishing dharmas. Likewise, Jesus said that he came to send the ignorant into the wisdom path. He said that he came to call sinners, but not righteous. Here sinners mean the ignorant who do not know the wisdom. Similarly, the righteous means the ones who know the wisdom. God comes upon the earth in the form of a physician called a preacher to cure those who are sick with ignorance by giving them the medicine of wisdom. Those who are healthy with wisdom do not need a physician called preacher. When the ignorance disease is spread worldwide, and all men in the world are sick with ignorance, God incarnates for them, gives his medicine of dharmas, and transforms the ignorant into gnanis. If God does not become a physician, the entire world will be sick with ignorance. Hence, God incarnates and reveals his wisdom to the ignorant.
    </span>
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 24,
      verse: ` <b>(23) The Gospel of Mathew, 8th chapter, 23rd, 24th, 25th and 26th verses. </b>  
    `, meaning: `  <b>
    (23) Then he got into the boat and his disciples followed him.
    <br><br>
    (24) Suddenly a furious storm came up on the lake, so that the waves swept over the boat. But Jesus was sleeping.

    <br><br>
    (25) The disciples went and woke him, saying, “Lord, save us! We’re going to drown!”    <br><br>
    (26) He replied, “You of little faith, why are you so afraid?” Then he got up and rebuked the winds and the waves, and it was completely calm.    </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    This was an event occurred in Jesus’ life. There is nothing Jesus taught here, but there is so much we need to know from this event. Both the sea and the storm are related to Prakruti. Both the air in the storm and the water in the sea are parts of Prakruti. Prakruti is only controlled by Paramatma. Prakruti is composed of five parts - sky, air, fire, water, and earth. Even Atma, which has divinity after Paramatma, has no power over Prakruti. The Atma of the body has control only over the changing or Chara Prakruti, which is in the body's form. Atma has no authority over the unchanging or Achara Prakruti. Prakruti does not listen to Atma. The Prakruti that appears outside listens only to Paramatma’s word. Prakruti is composed of five bhootas. Bhoota means jiva. Since five parts of Prakruti are five jivas, five bhootas respect God’s word. They will follow what Paramatma says. 
    <br><br>
    Because Jesus was the Holy Spirit who looked like an ordinary man, the storm in the sea stopped in honor of Jesus' words. Only God can control Prakruti, so Jesus can be said to be God’s incarnation. It is said in the verses 7th, 8th, and 9th of Gnana Yogam of Bhagavad-Gita, the first divine scripture, that God comes upon the earth as 
    a man and tells his wisdom. When God comes in the form of a man, he looks just like a normal man, although he is not a normal man. Because he appears to be an ordinary man, no one can identify him. If God comes as a human being, it is impossible to find him, but there are two pieces of evidence to recognize him. <b>One is that wherever the divine dharmas are taught, there may be God’s incarnation. Two is that one who commands Prakruti can be recognized as God’s incarnation.</b> When Jesus asked the sea to calm down, it calmed down; only God can do this. When dharmas are told, and Prakruti is commanded, the human form of God can be identified. Jesus taught God’s wisdom and practiced the same. He also commanded Prakruti. Therefore, Jesus can be identified as God in disguise. When the storm on the sea was rebuked, it immediately stopped and proved that Jesus was God. 
    
      
    </span>
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 25,
      verse: ` <b> (24)The Gospel of Mathew, 9th chapter, 6th verse.</b>  
    `, meaning: `<b>
    (6) I want you to know that the Son of Man has authority on earth to forgive sins. So, he said to the paralyzed man, “Get up, take your mat and go home.” Then the man got up and went home.
    </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus himself said that the Son of Man has authority on earth to forgive sins. When a paralyzed man was brought to Jesus, Jesus said to him that your sins were forgiven. Some of the teachers of the law said to themselves that Jesus was blaspheming. Knowing their thoughts, Jesus said, “Why do you entertain evil thoughts in your hearts? Which is easier: to say, ‘Your sins are forgiven,’ or to say, ‘Get up and walk?’ But I want you to know that the Son of Man has authority on earth to forgive sins. So, he said to the paralyzed man, “Get up, take your mat and go home.” Then the man got up and went home. 
    <br><br>
    If this is observed, Jesus did so because the teachers of the law thought evil about him. Jesus also said that the Son of Man has authority on earth to forgive sins. Although he came to earth as the Son of God, he reduced himself and claimed to be the Son of Man. He also showed the evidence that he alone has the authority on earth to forgive sins. Whoever knows that God (The Holy Spirit) alone can forgive sins will come to know who came as Jesus. Jesus claimed to be the Son of Man so that no one recognizes him as God, although he came from the Holy Spirit. The paralyzed man got up and went home as soon as Jesus told him. When the crowd saw this, they were surprised. Although Jesus had done such a great deed, he was treated as an ordinary man and brought to court as a guilty person. Hence, human beings can be said to forget the help they received. 
                 
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 26,
      verse: ` <b>(25) The Gospel of Mathew, 10th chapter, 20th verse.</b>  
    `, meaning: `<b>
    (20) For it will not be you speaking, but the Spirit of your Father speaking through you.    </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Although the verse appears to be ordinary, it is a crucial verse. It contains the most secret wisdom in spiritual education. It should be known that the word <b>‘your Father’</b> in this verse does not refer to the father of the physical body, but it refers to the Father of non-physical Jivatma. Atma, the Father of Jivatma, lives in the body and leads the body. We should not forget that the Father of Jivatma is Atma and the Father of Atma is Paramatma. Every human being is a Jivatma. According to man’s karma, Atma controls him (Jivatma) and makes him experience karma (bad and good karma). Atma performs every function in the body and makes Jivatma experience pleasures and pain in the body. 
    <br><br>
    The Jiva (Jivatma) does not perform any function in the body. Even though he does not do anything, he silently experiences pleasures and sorrows in the deeds. Although Jivatma claims to be the man in the body, he is incapable and cannot do anything. But Atma does all the things that happen in the body. With Ignorance, Jivatma thinks that he is doing all the work by listening to the words of ego (aham). Although Atma is the doer in the body, Jivatma considers himself to be the doer, forgetting Atma’s presence. Jesus said the above verse so that the ignorant will know wisdom. He said, <b>“Your Father, Atma, is in you and is speaking through you. You are not speaking.”</b> Based on the verse, it becomes known that Jivatma cannot do anything and cannot speak, but Atma speaks. Jesus said that it is the utter ignorance of humans to think that they are speaking. Jivatma has not done any deed performed by ten karmendriyas. Atma does everything with organs. Knowing this truth is the best wisdom in all kinds of wisdom. 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 27,
      verse: ` <b>(26) The Gospel of Mathew, 10th chapter, 30th verse.</b>  
    `, meaning: ` <b>
    (30) Even the very hairs of your head are all numbered.
    </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Man says many things to God in his mind in a temple. He thinks that God does not know what he thinks. With that feeling, he shows respect and fear in front of God in the temple, but he behaves differently after coming out of the temple. He shows devotion in the temple. But after coming out of the temple, he occupies two seats in the train for himself without letting other passengers sit. Although it is not good behavior, the reason why he is doing it so because he thinks that God knows it when he is in the temple and does not know when he is on the train. <b>He does not know that God is omniscient and omnipresent and can see mistakes done even in a deserted place.</b> Since humans assume that God does not know all, Jesus said the above verse about the glory of God. 
    <br><br>
    From the above verse, we understand how careful God towards humans. God established a system for human beings through which everything is realized and fulfilled. Even small calculations such as ‘karma-visarga (dividing karma into tiny parts)’ are present with God. With it, God decides how many times a person should open and close the eyelids in his life and makes sure that the count matches precisely. It is decided how many hairs should be in our head and when and what hair to fall off 
    through karma-visarga. God subtly decides what dangers man should get and how much he should suffer from them. The Lord also said in Bhagavad-Gita that God knows everything that happened, that is happening, and that will happen on earth. From this, it becomes clear that there is nothing that God does not know. 
    
      </span>
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 28,
      verse: ` <b>(27) The Gospel of Mathew, 10th chapter, 34th, 35th and 36th verses.</b>  
    `, meaning: `<b>
    (34) Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword.    <br><br>
    (35) For I have come to turn “‘a man against his father, a daughter against her mother, a daughter-in-law against her mother-in-law.    <br><br>
    (36) A man’s enemies will be the members of his own household.
        </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    These three verses seem to be the opposite to the world. While it may not seem fair to say that Jesus came to create conflict between humans, it is true that it is happening. Jesus did not create conflict among humans intentionally. He came to lead humans from ignorance to wisdom, but not to create conflict. He told wisdom to people with good intentions, but it is turning into a dispute among men. When cold water is sprayed on the sand, the sand is cooled, but limestones warm up more, change their appearance, and become lime. While gnanis are happy with Jesus' wisdom, conflicts are generated in the ignorant. If the husband tries to know wisdom, the wife disagrees. Similarly, if the wife decides to know the wisdom in some places, the husband does not agree. In this way, some people who are incapable of understanding Jesus’ wisdom argue with those who want to understand it. Due to this unexpected consequence, in the same house, the father becomes an enemy against the son, the mother becoming an enemy against the daughter, and the mother-in-law becoming an enemy against daughter-in-law. Although Jesus’ intention is good, it is unexpectedly making humans forget kinship and causing enmity. Therefore, if Jesus gives a flower, it becomes a thorn. If he provides a bendable stick, it becomes a stiff knife. It is not his mistake because all of this is the effect of gunas in men.   
    </span>
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 29,
      verse: `<b>(28)	The Gospel of Mathew, 10th chapter, 37th verse.</b>   
    `, meaning: `<b>                 
    (37) Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me.    
    </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    It is natural for parents to love their children. It is also natural for children to love their parents. There is so much love between parents and children. Parents love their offspring more than they love any other thing in the world. Similarly, the influence of gunas in the human brain is also strong. When a man shows extreme love on <b>wisdom and God,</b> he will move towards wisdom instead of material (worldly) things. If he shows more love on anything other than wisdom, he cannot move towards 
    wisdom. There are six good and bad gunas in man. Both good and bad gunas are like golden and iron shackles, respectively. The purpose of the shackles, irrespective of the metal they are made with, is to detain a man. Likewise, both love (good guna) and jealousy (bad guna) do not lead man to wisdom. The interest in wisdom is more important than gunas. The six bad qualities (gunas) are greed (kaama), anger (krodha), selfishness (lobha), emotional attachment (moha), arrogance (mada), jealousy (matsara). Similarly, six good qualities are charity (dana), mercy (daya), unselfishness (audarya), detachment (vairagya), humility (vinaya), kindness (prema). 
                       
    </span>
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 30,
      verse: `<b>(29)	The Gospel of Mathew, 10th chapter, 38th verse.</b>   
    `, meaning: `<b>  
    (38) Whoever does not take up their cross and follow me is not worthy of me.    
    </b>                                      
    `, pageText: `
    
        <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
        Christians sometimes speak and hear the word cross. Every Christian wears a cross on their neck. Moreover, every Christian respects the cross. Everyone knows that Jesus was punished and died on the cross. When you think of why Christians love so much the cross, which was used as a weapon for Jesus' death, everyone follows the person more significant than them and does the same thing what he does. But no one has ever thought why the cross, which was used as a weapon in the Lord's death, should be significantly seen. Knowingly or unknowingly, the mistake happened so far. Let us have some thought about the cross and find out the details about it. 
        <br><br>
        In verse, Jesus warned that <b>if you take up the cross, you can walk in God’s path, and if the cross picks you up, you walk in the Satan’s way.</b> The same thing is said, “Whoever does not take up the cross and follow me is not worthy of me.” It means that whoever does not pick the cross up is not worthy of God. We should understand that the cross is Satan. To understand this point in detail, read my book <b>“Is the cross God?”</b> 
        <br><br>
        The cross means serpent. It is common in spirituality to compare serpent with Satan and dove with Atma. Satan (Maya) is within the body of man. Satan picked up man and is going in the ignorance path. If Satan lifts man, it means man is weak, and Satan is strong. Similarly, if man picks up the cross, it means man’s strength is greater than Satan’s. Therefore, Jesus carried the cross for some time in his life and showed. He did it like that to show that man has conquered Satan. The same Jesus ascended on the cross for some time. It indicates that the cross is carrying Jesus. It means that Satan can bring anyone into its path. Human beings should carry their cross if they want to walk in the wisdom path. Hence, in verse, Jesus said, “Whoever does not take up their cross and follow me is not worthy of me.” 
        <br><br>
        We show Satan in the form of a cross. The cross means a giant snake or a serpent or huge Maya. Maya leads man whatever the path Maya likes and sends man far away from God. To conquer such Satan (Maya), we must analyze Maya. If it is analyzed, the group of gunas in man's head is called Maya. Whoever walks according to gunas goes in the ignorance path. It may be said that Maya is carrying such a person with its strength. The person who conquers gunas and does not listen to them 
        can be said to have defeated Maya (Satan). It can be said that such a person will pick Maya up with their strength and walk the wisdom path. Thus, if a person conquers the cross (Maya), take it up, and walk in the wisdom path, he shall be worthy of God’s grace. This is what Jesus said in verse. We should not assume that the cross is made of wood. It must be counted as python, which is the symbol of Satan. Elders say the cross is a symbol of Maya, and the bird is a symbol of Atma. When Jesus was baptized by John and came out of the water, it was said that the Spirit (Atma) came like a dove and entered Jesus’ body. The opponent of Atma is the cross. Therefore, in verse, Jesus said that when a person walks taking up the cross with their wisdom strength, the person is worthy of God and paraloka. 


        </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 31,
      verse: `<b>(30)	The Gospel of Mathew, 10th chapter, 40th verse.</b>   
    `, meaning: ` <b>
    (40) Anyone who welcomes (receives) you welcomes (receives) me, and anyone who welcomes (receives) me welcomes (receives) the one who sent me.     </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    While human beings are Jivatmas, Atma created them. Paramatma (the Holy Spirit) created both Atma and Prakruti. But when Paramatma comes as a man, the question is whether he should be called Atma or Jivatma. If God comes as a man, he must be counted as a Jivatma based on appearance. When human beings (Jivatmas) die, Atma includes them into him. Just as Atma includes human beings, Atma also includes God, who came as a man and appeared to be a Jivatma. The same thing is said in verse, <b>“Whoever receives you also receives me.”</b> The one who came as a human being (Jivatma) is literally God. But it was God who sent the man (Jesus). When Atma includes the man, who is like a Jivatma, it is as if God who sent the man was included into Atma. Hence, in the verse, Jesus said, <b>“The one who receives me receives the one who sent me.”</b> 

    </span>
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 32,
      verse: `<b>(31)	The Gospel of Mathew, 11th chapter, 9th verse.</b>   
    `, meaning: ` <b>
    (9) What did you go out to see? A prophet? Yes, I tell you, and (I am) more than a prophet.     </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">    
    Prophet (pravaktha) is a preacher of wisdom that no one will tell. In Telugu, <b>‘Pra’</b> means important, and <b>‘Vaktha’</b> means the one who speaks. The one who tells crucial wisdom is called a prophet. But Jesus said that he is more than a prophet. Only one person is more than a prophet and tells wisdom greater than a prophet’s wisdom. <b>“God did not pass his wisdom upon any human being. God’s wisdom is unknown to any human being except God.”</b> Therefore, In the last divine scripture, it was said in verse 3:7 that God must tell God’s wisdom. Based on this, although God comes as a prophet and tells wisdom, he is more than a prophet. “<b>God does not speak directly to humans,”</b> said in 42:51 of the last divine scripture. But God can come and speak as a man in disguise. Whenever God comes as a man, he is more than a prophet, even if he is said to be a prophet. According to what Jesus said in this 
verse, it becomes known that Jesus is greater than prophets and is God’s incarnation. On many occasions, Jesus said who he was, but people could not recognize him. 

    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 33,
      verse: `<b>(32)	The Gospel of Mathew, 11th chapter, 28th verse.</b>   
    `, meaning: ` <b>
    (28) Come to me, all you who are weary and burdened, and I will give you rest.     </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Everyone knows that only when people carry weight, they get weary. But human beings are getting tired even though they do not carry any weight. The invisible burden is sin (karma). Everyone who experiences karma somehow gets weary. Human beings always experience karma. They do not experience karma only during sleep. Even in a dream, they keep experiencing karma somehow. It means they are always laboring. Since everyone is suffering from karma, Jesus said to all the people, <b>“Come to me. I will give you rest.” </b>
    <br><br>
    The question is how we can get rest when we go to Jesus as we always keep experiencing karma. Our answer to this is as follows. When Jesus teaches divine wisdom to the people who come to him, the karma of all who know the wisdom is burned in the gnanagni. When karma is destroyed, people escape from the experience of karma, the labor of suffering is reduced, and they will get rest. As this is good for all people irrespective of caste and religion, Jesus said, <b>“All come to me.”</b> Many people, in this case, call Jesus Christian guru and Christian prophet. If he had called only Christians, there was a possibility to label him a Christian teacher. He called not only Christians but for all the people. Therefore, it is unjust to call Jesus a Christian. Those who believed his word and went to him should not be labeled Christians. God and God’s wisdom is necessary for all; hence Jesus said,<b> “All come to me.”</b> 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 34,
      verse: ` <b>(33)	The Gospel of Mathew, 12th chapter, 17th,18th,19th, 20th and 21st verses.</b> 
    `, meaning: ` <b>
    (17) This was to fulfill what was spoken through the prophet Isaiah.    <br><br>
    (18) Here is my servant whom I have chosen, the one I love, in whom I delight; I will put my Spirit on him.        <br><br>
    (19) He will proclaim justice (wisdom) to the nations; He will not quarrel or cry out; no one will hear his voice in the streets.         <br><br>
    (20) A bruised reed he will not break, and a smoldering wick he will not snuff out, till he has brought justice (wisdom) through to victory.        <br><br>
    (21) In his name the nations will put their hope.    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    About 350 years ago, a great man named Veerabrahmam foretold the events that would take place and the natural disasters that were about to take place. Similarly, a great man named Isaiah foretold the coming of Jesus. The same thing is said in the above verses. If we look at Isaiah's words in detail, the greatness in Isaiah's words will become known to all. It becomes known whom Isaiah was talking about. Isaiah lived many years ago before Jesus was born. Isaiah told a few more things in the 13th chapter. Looking at these verses here, it becomes known that God, the Holy Spirit, was speaking of Jesus. Looking at the verses Jesus said about himself in the scripture and the verses that the Holy Spirit said about Jesus, it becomes known that the one (the Holy Spirit) who spoke about Jesus and Jesus are the same. 
    <br><br>
    <b>“Here is my servant,”</b> said in the first verse. There are many types of worldly services. But here, materialistic service is not mentioned. The verse says about the service of Paramatma. There is only one Paramatma’s service. <b>The real Paramatma’s service is to preach and spread God’s wisdom to others.</b> Because Jesus was spreading God’s wisdom, the Holy Spirit said, ‘Here is my servant.’ Whoever propagates God’s wisdom, the person will become <b>the most favorite</b> to God. Hence, Paramatma said about Jesus, <b>“I love him and am delighted in him.”</b> It is said in <b>15:28, 29 and 30 of the final divine scripture</b> that the Holy Spirit creates a human being with clay and breath his soul (the Holy Spirit’s soul) into him, then angels recognize the human being as God and prostrate to him. Therefore, Isaiah said in his words, “The Holy Spirit will put his spirit upon him.” According to this verse, it becomes known that Jesus, who is in the human incarnation, is Paramatma’s soul. 
    <br><br>
    “He will proclaim <b>justice</b> to the nations,” said in 19th verse. It seems that those who translated the Bible into English did not use the correct word. It is supposed to be written as <b>wisdom</b> instead of <b>justice</b>. Justice is related to the material world. Therefore, the term justice should not be used. <b>While righteousness and justice are related to the worldly things, wisdom (gnana) and dharma are associated with Paramatma.</b> Using righteousness and justice instead of wisdom seems to be a translation error. In this way, there were many translation errors. They were revised and written. 
    <br><br>
    “He will proclaim justice to the nations,” said in 19th verse. Here proclaim means preach (teach). The verse should be amended and read as <b>“He will spread wisdom to the nations.” </b>After 30 years of life, Jesus taught his wisdom for about two years and three months; hence this verse said about Jesus. He unselfishly preached his wisdom in many places. He also cured many people who came to him with different kinds of diseases. He gave sight to the blind and the walk to the lame man. He healed leprosy patients and raised the dead. Then some accused Jesus of a wizard and blamed him that he was doing things contrary to God. Even then, he did not quarrel or scream at anyone. Hence it is said, <b>“He will not quarrel or cry out.” </b>
    <br><br>
    Jesus told his wisdom to the people who came to him, but he did not shout in the streets. Hence it is said in verse, “no one will hear his voice in the streets.” The verse also says that he will not break a bruised reed because he did not do anything 
    other than spreading the wisdom. Moreover, he makes sure that the gnanagni after started in a person is not extinguished until it burns all the karma of the person. Since karma is many kinds, it is compared to wick, which is comprised of many strands. Hence, <b>“He will not snuff out a smoldering wick,”</b> said in the verse. Some are waiting for his wisdom, hence said, <b>“In his name, the nations will put their hope.” </b>



    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 35,
      verse: `<b>(34)	The Gospel of Mathew, 12th chapter, 31st verse.</b>   
    `, meaning: `<b>
    (31) So, I tell you, every kind of sin and slander can be forgiven, but blasphemy against the Spirit (Atma) will not be forgiven.    </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    This verse is more important than the rest in this scripture. If human beings know God’s wisdom, that wisdom becomes fire (gnanagni), and that fire burns their many kinds of sins (karma). It is possible that humans can avoid any sin that is not related to Atma by knowing divine wisdom. But even the gnanagni cannot burn any sin that comes because of blasphemy and actions done against Atma. It means it will not be forgiven.
  
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 36,
      verse: `<b>(35)	The Gospel of Mathew, 12th chapter, 32nd verse.</b>   
    `, meaning: `<b>
    (32) Anyone who speaks a word against the Son of Man will be forgiven, but anyone who speaks against the Holy Spirit will not be forgiven, either in this age (yuga) or in the age (yuga) to come.     </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    All human beings can be said to be the sons of man. All ordinary people say that their parents are human. But Jesus, who looks like an ordinary man, should not be said the son of man. When Jesus spoke of his father, he said that his father was in paraloka. He did not tell that his father was a man on the earth (ihaloka). Therefore, Jesus can be said the son of God. According to this, all people are the son of man. Although Jesus appeared with name and experiences of an ordinary man, he should be called the Son of God. 
    <br><br>
    The seed donor to the ordinary person is not a human. Any man claiming to have children is not actually a father. Atma, who is the head of the body and does everything in the body, is the seed donor for humans and all living beings. But humans do not know this. Hence, a man claims to be the father of another human. But a man cannot do any work in the body. It is said many times in the first and second divine scriptures that Atma is doing all things. It can be said that a person himself did not commit any sin, because he cannot do anything. However, because he thinks that he has done everything, the sin resulting from the action goes into his (Jivatma’s) account. In this way, a person himself is becoming responsible for the sin 
    he did not commit. Similarly, although Atma is the father of a man, man is considered as the son of a human being when he says his father is a man. 
    <br><br>
    Jesus, in fact, know that his father is paraloka Father. He was not born of Atma like everyone else. He knows that he was the Son of God, the Holy Spirit. In the Bible scripture, Jesus is referred to as the Son of God because he said in many instances that his Father was the Holy Spirit. God’s wisdom forgives the sin of the abuse against the ordinary man. But the sin of the blasphemy against the Son of God will never be forgiven. The sin of blasphemy must be experienced for <b>two yugas</b> - in this yuga and the next yuga. 
      
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 37,
      verse: `<b>(36)	The Gospel of Mathew, 12th chapter, 36th and 37th verses.</b>   
    `, meaning: ` <b>
    (36) But I tell you that everyone will have to give account on the day of judgment for every empty word they have spoken.
    <br><br>
    (37) For by your words you will be acquitted, and by your words you will be condemned.     </b>                                    
    `, pageText: `<span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Man does many things since born. Also, man must speak many words. Man thinks that he has done every small deed or spoken every little word, but he has not done anything. Atma in the body does everything. Yet the man who does not know this is assuming that he is speaking every word and doing everything. If there is any karma in the deed or spoken word, it will reach the man. Thus, all the karma that occurred in life is stored by Atma in the karma chakra. The karma that is earned in the life of a man on the day of death is enquired. Then Atma gives judgment for the karma in every deed the man did and every word the man spoke. On the judgment day, Atma counts bad (paapa karma) and good (punya karma) karma in every word the man spoke. Atma also considers whether a man is gnani or ignorant. The man is judged according to every bad and good karma. A person is considered gnani if he acquires wisdom in his life. Similarly, the person is counted as ignorant if he performs deeds with ignorance. Atma determines whether a man is gnani or ignorant and decides his next life accordingly. The Holy Spirit does not judge a man according to the karma. Atma, which does everything in the body, judges the man <b>on the day of death (judgment day) </b>and sends Jiva to the next life. The day of death is also called ‘judgment day.’ The day of death can be said to be the final day and can also be called the first day of the next life (birthday). Atma is the boss for the last day of life and the first day of life. One should know that the Holy Spirit does not do anything. The last day can be said to be the day of the counting of karma. Atma is the one who performs all the functions of the body. If a man, knowing this, thinks that he has not done anything, he is neither considered as a sinner nor a virtuous (punyatma) person. One should know that Atma determines the karmas in the man’s deeds and sends him to the next birth. Based on his feeling, a person is judged gnani or agnani and punyatma or sinner. 
   
</span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 38,
      verse: `<b>(37)	The Gospel of Mathew, 12th chapter, 40th verse.</b>   
    `, meaning: ` <b>
    (40) For as Jonah was three days and three nights in the belly of a huge fish, so the Son of Man will be three days and three nights in the heart of the earth.     </b>                                     
    `, pageText: `< 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    This verse compares what had happened before Jesus and what would happen. According to verse, when a giant fish swallowed Jonah, he lived three days and three nights in the belly of the fish. “Jesus will be three days and three nights in the heart of the earth,” also said in verse. Although Jonah living three days and three nights in the belly of the fish is true, it is false saying that Jesus, Son of Man, lived three days and three nights in the heart of the earth. According to history, Jesus died on the cross Friday evening. He came out of the tomb before Sunday early morning. Putting it all together, Jesus may have died on the cross between 3:30 p.m. to 4 p.m. on Friday. After his death, his body was put in a tomb on Friday evening. According to this, it becomes known that Jesus was not in the tomb on Friday daytime. It can be said that he was in the tomb on Friday night. He was in the tomb on the entire Saturday. It was said that he came out of the tomb at dawn on Sunday. So, Jesus was in the tomb on Friday night and the entire Saturday and came out of the tomb before Sunday morning. 
    <br><br>
    According to this, Jesus was underground for only two nights and a day. Therefore, this verse in the scripture appears false. The verse of the divine scripture is never wrong. Others asked whether this verse is false. It also appeared incorrect to me. I told them that this verse is true, and I had to answer what others asked. As I always remember what is said in Mathew 10:20, <b>“For it will not be you speaking, but the Spirit of your Father speaking through you,”</b> I thought why I should be afraid of answering. Atma is the one who asks the question, and Atma is the one who answers the question. We (Jivas) are the one who need to listen and understand what Atma says. 
    <br><br>
    The one who is said to be the Son of Man is truly the Son of God. Although we say that Jesus is the Son of God, he is, in fact, not anyone's son but God. I say this because I am completely aware that he is God. The body-worn by God has death, but God has no death. Death is of four types. Everyone knows that death is of only one kind, but the gnanis know that death is of four types. They are 1) Natural death, 2) Un-natural death, 3) Temporary death, 4) Last death. Of these four deaths, the death that comes when God is born as a human and man attains Moksha and unite with God is the last death. Everyone says that Jesus died on the cross. However, no one knows which out of the four deaths he received. 
    <br><br>
    Here the verse said that Jesus had been in the heart of the earth for three nights and three days but did not say he was dead. When Jesus was crucified, everyone said that he died on the cross, but Jesus said after coming out of the tomb on Sunday morning that he did not die. When his disciples did not believe him, he showed markings of nails on wrists and feet and spear onto his side. It becomes clear to us that he did not die. But it was also real that his body was brought down and put 
    in a tomb after Jesus died on Friday evening. Although he died on Friday, why he appeared on Sunday as if he did not die? Although the 40th verse says, <b>“He will be three days and three nights in the heart of the earth,”</b> he was, in fact, in the tomb for only two nights and a day. When asked what the reason behind such an obvious lie is, it becomes known that both are true. Let us see how truth is hidden in the glaring falsehood. 
    <br><br>
    It is real that Jesus died on the cross, but no one knew that it was <b>temporary death.</b> Jesus got a temporary death out of four kinds of deaths, got up again early Sunday morning from temporary death, and told his disciples that he was not dead. If he had got ‘natural death’, he would not get up again. However, he got up on the third day because he got ‘temporary death.’ Therefore, Jesus died on the cross is an illusion but not real. Similarly, the verse that says that Jesus was in the tomb for three days is entirely true, but we need to know a lot from it. 
    <br><br>
    Jesus is living in the body as Jivatma. Likewise, Atma, who is the father of all, dwells in the body. While Jivatma experiences karma in every human body, Atma performs the necessary functions according to karma. Atma is spread in every corner of the body while Jivatma is inside the head. Atma moves the body with the ten body parts. If the body moves, we assume that man is alive. We assume that man is dead when his ten parts and organs do not work and no breathing in the body. Both Atma and Jivatma move out of the body in man’s natural death. Then the body is immobilized due to the absence of Atma. 
    <br><br>
    In the temporary death, neither Atma nor Jivatma leaves the body. Atma shrinks from the outer edges to a tiny size and enters the head like Jivatma. None of the organs in the body functions as Atma does not work. Breathing also stops. Everyone thinks that the man is dead because the external and internal organs in the body cease to work. If at any time, Atma comes out and starts working as usual, the man can be said to be resurrected. The same thing happened in the case of Jesus. When Jesus was put on the cross, Atma shrank in his body. It stayed that way in the body on Friday night and the entire Saturday. Atma came back to normal on Sunday, early morning, and came alive out of the tomb. Atma <b>died temporarily</b> for only two nights and a day. While the Atma in Jesus’ body is in the tomb for two nights and a day, it is also true to say that Jesus (Jivatma) in the body is in the tomb for three nights and three days. A process unknown to us took place in Jesus’ body. Let us see what it was. 
    <br><br>
    While it can be said that Jesus was resurrected because of what Atma did in his body, but the Jivatma had been buried in the body even before the Atma died on the cross. The connection between Jivatma and buddhi was severed in Jesus’s body after knowing that he would be arrested on Thursday. Jesus got into a state of unknown. Jesus did not know that he was arrested, taken to court, flogged, and crucified. He was buried in his body tomb. He was not aware of anything for three days as if he were buried in a grave. Even though Jesus did not know anything, Atma performed all 
    functions in the body. But Jesus did not know what was happening. Jesus’ Atma sent Jesus into an unknown state so that Jesus would not experience anything. Jesus went into an unknown state like sleep; hence he did not experience any pain associated with being flogged and crucified. Thus, the Jivatma, buried in the body, did not come to his senses until Atma woke him up on Sunday morning. Hence, “Jesus was in the tomb for three days and three nights,” said in the verse. People knew that Jesus’ body went into the tomb. But the Jivatma in his body had gone into a state of the unknown before that. After that, Jesus’ Atma went into temporary death on Friday evening. But the people, who could only see visible things, did not know the workings of Atma and Jivatma in Jesus’ body. It is real that Jesus went into the grave for three days and three nights, and the Atma went into the grave for two nights and a day. 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 39,
      verse: `<b>(38)	The Gospel of Mathew, 13th chapter, 13th, 14th and 15th verses.</b>   
    `, meaning: `<b>
    (13) Though seeing, they do not see; though hearing, they do not hear or understand.
    <br><br> (14) In them is fulfilled the prophecy of Isaiah: You will be ever hearing but never understanding; you will be ever seeing but never perceiving.
    <br><br> (15) For this people’s heart has become calloused; they hardly hear with their ears, and they have closed their eyes. Otherwise, they might see with their eyes, hear with their ears, understand with their hearts, and turn, and I would heal them.
    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The prophet Isaiah foretold this long time ago. Ignorant people existed that day and today. They see with eyes, hear with ears, and divert the mind (manas) even after grasping with buddhi. Because of their lack of interest in what they saw, heard, and knew, their buddhi slowed down so as not to destroy their karma by Jesus. Their ears became deaf to divine wisdom. They listen to everything that is told but do not grasp what is heard and become involved in material things. They cannot see anything except money. For them, those who know wisdom appear foolish.
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 40,
      verse: `<b>(39)	The Gospel of Mathew, 15th chapter, 7th, 8th and 9th verses.</b>   
    `, meaning: `<b>
    (7) You hypocrites! Isaiah was right when he prophesied about you.<br><br>
    (8) These people honor me with their lips, but their hearts are far from me. 
    <br><br>(9) They worship me in vain; their teachings are merely human rules.    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      
    We many times said, “God knows the matter of God; humans do not know.” God can say about God. Humans will come to know when God tells how to worship 
    God. While God foretold how he should be worshiped, many tell other ways different from what God said. Many swamis and gurus are teaching the people human-created rules like upadesas and other worshiping methods. God himself is revealing that ‘such upadesas and worships are futile’ and cannot bring humans close to him. Many swamis and gurus speak of God in their speeches and preach anti-God, God- unspoken worships and upadesas. Even though such gurus and swamis say about God and wisdom, they do futile worships without knowing divine wisdom and make others do the same. For example, God’s worship has nothing to do with fasting. They are not only suffering because of fasting, but they are also bothering God inside. That is how they are harming the God inside. Similarly, <b>“You cannot know and reach me by studying the Vedas, by donations, by performing sacrifices and yagnas,”</b> said in Bhagavad-Gita five thousand years ago. In Bhagavad-Gita, God said that many people highly honor me but worship me in vain in the adharma manner. Now in the holy scripture, the Lord said the same thing. 
    <br><br>
    Words come through the mouth. Feelings come from the heart. Though words of mouth speak great about God, the heart's feelings should not be against God. Although many people’s words on earth today magnify God, they do not have God’s dharmas in their hearts. Maya’s dharmas took place in their heart. They speak about God, but what they do under the influence of Maya is anti-God worships. Many gurus named God’s wisdom for what they say, and but the worships they are performing, God said, will not unite them with God. It is also warned in Gita that those worships are on the wrong path. However, famous Peetadipatis are performing futile yagnas, donations, fasting, Vedic chanting, and penance. In the Holy Bible and the Bhagavad- Gita, God made known that those who did such things are far from me. Therefore, from now on, let us not only glorify God in our words but also follow what God said, leaving behind futile and anti-God worships. 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 41,
      verse: `<b> (40)	The Gospel of Mathew, 15th chapter, 11th verse.</b>   
    `, meaning: ` <b>                            
    (11) What goes into someone’s mouth does not defile them, but what comes out of their mouth, that is what defiles them.    </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Man eats food through the mouth. Man’s food is of many types, not just one. Some are vegetarians and others non-vegetarians. Some swamis and gurus say that those who want to know God’s wisdom should be vegetarians and not eat meat. Here the Lord said, <b>“What goes into someone’s mouth does not defile them, but what comes out of their mouth, that is what defiles them.”</b> Some people have different opinions about food. If you want to follow the divine wisdom path, some say not to eat mainly non-vegetarian food, and some say to eat only uncooked raw food. Some others say that the vegetarian diet should be eaten only one meal a day and not eat any other food. Some people have this kind of diet restriction. Whatever food we eat is related to body health and sickness, but not related to sanctity and uncleanness. Any food taken by a man does make him neither holy nor unclean. The food that the man eats will not become an obstacle to divine wisdom. Man eats with his mouth and speaks with his 
mouth. What is noteworthy here is that there is no problem with the food going through the mouth, but only the words that come out of the mouth defile the man. Although man acts and speaks, his nature is exposed by words. <b>Elders’ opinion is that the one who knows divine wisdom is holy, and the one who does not know wisdom is unclean.</b> A man who has wisdom can be said to be clean based on what he speaks. Similarly, ignorance is exposed in words of a man who does not know wisdom. A man’s defilement will be exposed based on what he speaks; hence Jesus said the above verse. According to the Bible and the Bhagavad-Gita, food does not defile a man. One’s karma provides his food. The one who is in the wisdom path does not have any dietary restrictions. It does not matter to God whatever food is taken according to your habit. 

    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 42,
      verse: `<b> (41)	The Gospel of Mathew, 15th chapter, 12th and 13th verses.</b>   
    `, meaning: `<b>
    (12) Then the disciples came to him and asked, “Do you know that the Pharisees were offended when they heard this?”    <br><br>
    (13) He replied, “Every plant that my heavenly Father has not planted will be pulled up by the roots.”
    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When the Lord said that man is not defiled by food and can take any food and travel in God’s path, the Pharisees objected. Pharisees said what Jesus told was not divine wisdom and rejected the Lord’s words. They said the Lord was teaching ignorance and questioned who gave him the authority to do so. They also said that they have the authority to teach about God. They claimed to be great teachers and said that the Lord does not have the authority to teach about God. When the disciples told Jesus about this, he replied, <b>“Every plant that my heavenly Father has not planted will be pulled up by the roots.” </b>
    <br><br>
    The Paraloka Father, Paramatma, established his dharmas. His established dharmas are occasionally weakened on the earth, but they do not perish. When there is a weakness in dharmas, Paramatma incarnates as Bhagavan and strengthens his dharmas. When dharmas are diminished, adharmas will also spread everywhere. Dharmas belong to God, and adharmas belong to Satan. Paramatma plants dharmas, and Satan plants adharmas. After Paramatma himself incarnates on earth and teaches his dharmas, Satan manifests in the form of scholars, Pharisees, teachers, and swamis. Satan teaches humans its dharmas, convincing its dharmas as God’s dharmas. Satan’s (Maya) dharmas occasionally weaken Paramatma’s dharmas. Some may ask if God’s dharmas are so powerful, why Maya’s dharmas weaken them. The answer is that Paramatma is born as Bhagavan in one place and propagates his dharmas. Even if the dharmas get strength at that time, they will weaken after a few thousand years. The reason for this is that if God came once as Bhagavan, he would return only when needed. Unlike God, Maya creates gurus and swamis always, convince them its wisdom is God’s wisdom, and propagates its dharmas through them. 
    <br><br>
    People are attracted to the swamis, gurus, and babas who always exist under Maya's influence than the unidentified Bhagavan who comes once in a thousand years. God comes in one place at a time, but Satan will be born in many places in many forms (swamis, gurus, and babas) and reduces God’s dharmas. When the weeds are so many in the field, the trees planted by the farmer will wane. Then the farmer himself plows the weeds, including roots, to strengthen the tree he has sown. After some time, many weeds will grow again without anyone sowing them. Paramatma, like a farmer, planted his dharmas. Satan makes weeds (adharmas) grow around God’s plant (dharmas). Naturally, God’s plant is weakened by the influence of Maya’s weeds. At such a time, God comes and <b>plucks out many of Maya’s dharmas</b> surrounding his dharma. That is why Jesus said the above verse. God destroys Satan’s dharmas that are undermining his dharmas and strengthens his dharmas. 
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 43,
      verse: `<b> (42) The Gospel of Mathew, 15th chapter, 14th verse
      .</b>   
    `, meaning: `<b> 
    (14) Leave them; they are blind guides. If the blind lead the blind, both will fall into a pit.       </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Humans who are under the influence of Maya and Pandits and Pharisees, who are part of Maya, criticized Bhagavan Jesus. They do not know God's wisdom. They do not have gnana drushti. They are blind without gnana drushti. How can those who do not know God’s wisdom tell others God’s wisdom? They pretend to have gnana drushti and spread God’s wisdom as if they knew wisdom. People believe in such preachers and receive guidance from them, assuming they know complete God’s wisdom. They follow them with confidence that there is one who will guide them. But the people do not know that even the one they are holding is blind, like them. Assume that a blind person is holding the hands of other blind people and tells them that he has eyes to show them the way. The blind person leading other blind persons falls into the pit first if there are any pits along the way. Then the others fall upon him. Similarly, those who do not know God’s wisdom will ridicule the gnanis, claiming to be great gurus. Those who know wisdom need not argue with them. Those who do not have gnana drushti cannot climb the peak of moksha. Although many people follow a guru who does not have gnana drushti, none of them attain moksha. But they will fall into the<b> pit of gunas. </b>
  
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 44,
      verse: ` <b> (43) The Gospel of Mathew, 16th chapter, 21st and 22nd verses.<br>
      The Gospel of Mathew, 17th chapter, verses 22nd and 23rd verses.
      <br>
      The Gospel of Mathew, 20th chapter, verses 17th, 18th and 19th verses.</b>   
    `, meaning: ` <b> 
    (16:21) From that time on Jesus began to explain to his disciples that he must go to Jerusalem and suffer many things at the hands of the elders, the chief 
priests, and the teachers of the law, and that he must be killed and on the third day be raised to life. (First time) <br><br>
(16:22) Peter took him aside and began to rebuke him. “Never, Lord!” he said. “This shall never happen to you!” <br><br>
(17:22) When they came together in Galilee, he said to them, “The Son of Man is going to be delivered into the hands of men.” <br><br>
(17:23) They will kill him, and on the third day he will be raised to life.” And the disciples were filled with grief. (Second time) <br><br>
(20:17) Now Jesus was going up to Jerusalem. On the way, he took the Twelve aside and said to them. <br><br>
(20:18) We are going up to Jerusalem, and the Son of Man will be delivered over to the chief priests and the teachers of the law. They will condemn him to death. <br><br>
(20:19) They will hand him over to the Gentiles to be mocked and flogged and crucified. On the third day he will be raised to life!” (Third time) 
    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus foretold his future in chapters 16, 17, and 20 of the Gospel of Mathew. Ordinary humans cannot tell when they will die. The future is dark, and no one knows what would happen. Jesus foretold his death to prove to the ignorant that he was not an ordinary man and has something special in him. Not once, but three times he mentioned his death. That is not possible for anyone. Jesus could speak about it because he had predetermined his death. Atma is the only one who determines the karma of life in the body. 
    <br><br>
    Jesus said about his death three times. He foretold it because he predetermined his karma. Atma is the judge of the karma and is the Son of Paramatma. Jesus said many times that his father was the Holy Spirit, so Jesus is the Atma who determines the karma. So, he decided his karma for his life. According to predetermined karma, he said that he would suffer at the elders' hands and the chief priests, killed in their hands, and raised to life on the third day. It happened exactly as he said. Without worry, he said that he would be condemned to death. By doing so, every intelligent person will realize that Jesus is no ordinary man and that he has something special. 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 45,
      verse: `<b>(44)	The Gospel of Mathew, 19th chapter, 23rd and 24th verses.</b>   
    `, meaning: ` <b> 
        
    (23) Then Jesus said to his disciples, “Truly I tell you, it is hard for someone who is rich to enter the kingdom of paraloka.     <br><br>
    (24) Again, I tell you, it is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God.
    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus said a parable here,<b> “it is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God.”</b> As it is impossible for a camel to go through the eye of a needle, similarly, a rich cannot enter the kingdom of God. Some elders say that if a man is rich, he is also arrogant. One of the six bad qualities (gunas) is called arrogance (madam). The fifth bad quality out of six bad qualities - greed (kaama), anger (krodha), selfishness (lobha), emotional attachment (moha), arrogance (madam), jealousy (matsara) – is arrogance. A man without arrogance is not on earth. There is some amount of arrogance in every human being. Man may not have 100 percent arrogance, but his arrogance level maybe 90, 80,70,60,50,40, or 30 percent. One may have 90 percent and the other may have 80 percent. Some may have 30 percent arrogance. 
<br><br>
Not only arrogance that is clung to Jivatma in the body makes think, but also the other associated five gunas will also participate. There may be less arrogance in the poor. The rich have more arrogance. The arrogance of the one who has millions of dollars is even greater. The rich man has more arrogance and more other gunas. Money can change a man in any way. Therefore, man gets away from wisdom because of wealth. When moksha is compared with the needle's eye, the rich can be compared with the camel. As the camel cannot go through the eye of the needle, the rich cannot reach moksha. A camel does not go through the needle’s head; Similarly, the rich man with the strength of gunas like a camel cannot enter the paraloka. 

    
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 46,
      verse: `<b>(45)	The Gospel of Mathew, 22nd chapter, 36th, 37th, 38th, 39th and 40th verses.</b>   
    `, meaning: `
    <b> 
    (36) Teacher, which is the greatest commandment in the Law (Dharma Shastra)? <br><br>
(37) Jesus replied: “Love the Lord your God with all your heart and with all your soul and with all your mind.”  <br><br>
(38) This is the first and greatest commandment. 
<br><br>(39) And the second is like it: ‘Love your neighbor as yourself.’ 
<br><br>(40) All the Law and the Prophets hang on these two commandments.    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Some people came to Jesus and asked him what the most important commandment in the law (Dharma Shastra) was. They intended to test Jesus and mock if Jesus did not answer. Jesus replied immediately, <b>“Love the Lord your God with all your heart and with all your soul and with all your mind.”</b> He said that that was the first and greatest commandment. He also said about the second commandment immediately afterward. Now let us learn about the first commandment. 
    The word commandment is said in this verse. In the end, it is said that these two commandments are the basis for all the law and the Prophets. Its explanation is as follows. 
    <br><br>
    Commandment means to give a command. Here the question is who commanded. The answer is that the elder gives commands to the younger. God who created the world is the greatest of all. What God commandingly said is a commandment or law. The law comprised of unalterable acts, and another name for it is dharma. The <b>law</b> or <b>commandment</b> is called dharma because it is unalterable. For example, if you take a chili pepper, what does not change in it is its spiciness. The spiciness is the characteristic (dharma) of chili pepper. The spiciness is ever-present to chili pepper because it is its dharma. Similarly, sourness is the dharma of tamarind, and bitterness is the dharma of neem. 
    <br><br>
    Dharma consists of a set of rules and regulations. If one asks who has dharma(s), everything created has dharma(s), just like the created tamarind, chili pepper, and neem have dharma. Since God is the Creator, he has no dharmas. God, the Creator, is beyond the dharma. The created Atma and Jivatma, except for the creator God, also have dharmas. When Atma and Jivatma, which are parts of Paramatma, have dharmas, the created nature (Prakruti) should possess the dharmas. What we need to know, however, is Brahma Vidya, spiritual education. Hence, we need to know the dharmas of Atma and Jivatma. Since Jivatma is supposed to know Brahma Vidya, <b>he only needs to know the dharmas of Atma.</b>
    <br><br> 
    In this verse as well, the method of knowing Atma is told. The verse also says that it is essential to know that. The Dharma Shastra speaks about Atma. Therefore, when asked what the most important dharma in the Dharma Shastra is, he said, <b>“Loving the Lord your God is the first and greatest commandment.”</b> Here mentioned the Lord your God. The Lord (Prabhu) means mainly the one who is born. Jesus said that the most important commandment is to love the God, who was born. We already said that God is the creator and uncreated, and he has no dharma. Here comes the question. When the creator of all that is created is God, how can the mainly born (the Lord) is God? We get a doubt whether the self-existed is God, or the one who is born is God. The answer is as follows. 
    <br><br>
    God was not born. God, who was unborn and creator, first created Prakruti only. After creating Prakruti, God (Paramatma) wanted to create living beings. Once God created Prakruti, he decided not to do any work by himself. After creating living Pancha Bhutas - sky, air, fire, water, and earth - God wanted to be idle. As soon as God wished to be born of himself, <b>Atma </b>(the Lord) got created to make living beings, rule them, and kill them. Atma creates, rules, and kills all living things. Since Atma is the one who created all living beings, Atma must also be called God. <b>Thus God, the creator of Prakruti, is the first one, and the God, the creator of living organisms in Prakruti, is the second one. </b>
    <br><br>
    The first God, who created Atma, who is God to Atma and who is separate from Atma, is called Paramatma. The second God who created the living beings is called Atma. Although both Paramatma and Atma are the creators and Gods, <b>the first God Paramatma, is beyond dharmas. The second God Atma has dharmas. The God without dharmas is the first creator, and the God with dharmas is the second creator.</b> No one really knows that there are two Gods in the world. Although there are two Gods and the first God is greatest, Atma is God to humans because he created human beings. Man should worship only Atma. Human beings are supposed to know the dharmas of the second God. It is to be known that all the dharmas revealed in the scriptures are about the Atma. 
    <br><br>
    If man wants to worship and pray, he must worship and pray the second God, Atma. No one can worship and pray to the first God. The first God does not need anything; he did not beget anyone, and he was not born. <b>“He neither begets nor is born,”</b> said in the final scripture about the first God. <b>He is not interested in anyone’s prayers, said in Surah 112.</b> The first God is not associated with prayers, but the second God is associated with prayers. Neither Christians nor Muslims knows that there are two Gods (two Allahs). They say that there is only one God, and they worship that God. The people belonging to both religions do not know that <b>the God who should be worshipped and the first God, who is the creator, are different.</b> The Hindus are not aware of God but worship many deities and are walking in the wrong path (ignorant path) altogether. 
    <br><br>
    The first God is beyond the dharmas. Therefore no one can know or worship him. Some parts of the human body are essential to worship Atma, the God with dharmas. Jiva must worship Atma, the God, with his manas and his buddhi. This is the important dharma in the Dharma Shastra. <b>“Love Atma, the God, with all your heart and with all your soul and with all your mind,”</b> said in the verse. Here love means worship. Doing so is the first and foremost commandment (dharma). <b>As the commandment means dharma, all your heart means all your buddhi. Similarly, all your soul means you, jiva. Love means worship. “You should worship Atma, the God, with your mind and your buddhi,”</b> said in Dharma Shastra. There is the second commandment as well. Let us see what it is. 
    <br><br>
    <b>“Love your neighbor as yourself,”</b> said in the second commandment. These two commandments are the basis for the Dharma Shastra and the Prophets, said in verse. It means these two are the foundation for the dharmas in the science of Brahma Vidya and the Prophets who teach dharmas. According to this verse, every man loves himself more. It means man loves his life the most. When others try to kill him, man seeks to save his life by giving away all his possessions. Thus, man seeks his well- being. Man has more hope for his life. For his life, he will pray to any God and do anything. This shows that man loves himself more. Love your neighbor as yourself, said in the verse. You must love your neighbor in the same way you seek your well- being and care about your life. 
    <br><br>
    If you look at the meaning of the word neighbor, everyone knows that a person living next door is a neighbor. But we should know that the person living very near to you (not your next-door neighbor) is your neighbor. The verse “Love your neighbor as yourself” means that you should love your neighbor as much as you love yourself. According to the verse, when you see who your neighbor is, there is none beside you in the body except your <b>Atma</b>. If you are a soul (Jivatma), there is one other soul like you, and he is the second God Atma. The first God is beyond all, unknown to anyone. Therefore, there are only three souls and there are two souls besides you. One of those two is Paramatma. It is not possible to say that Paramatma is your neighbor because he is omnipresent and all-pervading. Although there are two souls next to you, when Paramatma is kept aside, the remaining Atma is your neighbor. Everything is feminine Prakruti except Atma and Paramatma, who are males like you. 
    <br><br>
    Atma is the only one who is masculine like you. Therefore, we must say that your neighbor is Atma, the God. No one can worship the first God Paramatma. He is beyond all dharmas and worships. He does not have a relationship with anyone. No one is eligible to worship him. Hence, the three divine scriptures say that the Atma is worthy of worship in all respects.<b> He is your Allah, and you worship him,”</b> said several times about Atma in the final divine scripture. This is said in Surah 6:102, 3:18, and 16:51. The two commandments, “Love your neighbor Atma as yourself,” are important in Dharma Shastra. <b>For gurus and preachers, who are prophets, the foremost dharma is to worship Atma.</b> When a Pharisee asked what the foremost dharma in the law is, Jesus told this verse as the correct answer. You should retrospect whom you are worshipping based on this verse. 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 47,
      verse: ` <b> (46)	The Gospel of Mathew, 23rd chapter, 8th, 9th and 10th verses.</b>  
    `, meaning: ` <b> 
    (8) “But you are not to be called ‘Rabbi,’ for you have one Teacher, and you are all brothers.   <br><br>
    (9) And do not call anyone on earth ‘father,’ for you have one Father, and he is in heaven.    <br><br>
    (10) Nor are you to be called instructors, for you have one Instructor, the Messiah.      </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Some call the preacher a father. Some even say that Gurus, who preach, are equal to a father. But according to the verse, no man should be called a preacher. Do not be called Rabbi, for one is your Master, and you are all brethren, said in verse. Preacher means the one who teaches. The one who gives others knowledge is called a preacher, but the verse refers to the one who teaches divine wisdom. As per the verse, there is only one teaches divine wisdom. According to this, no one knows divine wisdom except one. Why the rest of them do not know? Who is the one who knows? The answer to those questions is as follows. 
    <br><br>
    God’s wisdom is unknown to anyone except to God, said in the divine scriptures. It is also said in the divine scriptures that God did not pass God’s wisdom on any human being. It means that no man knows God’s wisdom. Therefore, no one can teach God’s wisdom. Hence you should not get called Rabbi, said in verse. Only God can teach the wisdom of God. So, it is said in verse that your master is only one, and he is God. A human being is not a master (teacher), and all human beings are brethren, said in the verse. 
    <br><br>
    Every man has birth parents. Everyone believes that visible parents since childhood are real parents. Many elders advise that you should respect your parents. Everyone respects birth parents. It may be said that there is no other mother or father except visible parents. All this is worldly-related. But every man has invisible, unknown parents according to divine wisdom. If asked whether visible parents are real parents or invisible parents are real parents, it becomes known that invisible parents are real parents. Why we are saying is that the father is the seed donor for every human being. Accordingly, <b>God (Atma), the unseen Father, is the seed donor of all living beings.</b> Hence, the invisible father becomes the real father. Whether we know or not, our birth Father is Atma. Hence, <b>call no man your father upon the earth: for one is your Father, who is in paraloka,</b> said in verse. 
    <br><br>
    The visible preacher is not the true preacher, the birth father is not the true father, and the visible guru is not the right guru, said in verse. Many teach something and be called a guru. If you be called a guru, then you are playing a role that is not suitable for you. God alone can come to earth as a Guru at any time. When God incarnates as a human being, he becomes Guru and teaches wisdom. Therefore, we should know that <b>the incarnation of God as a man on earth is the true Guru.</b> 

        
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 48,
      verse: ` <b>(47)	The Gospel of Mathew, 23rd chapter, 15th verse.</b>  
    `, meaning: `  <b> 
        
    (15) “Woe to you, teachers of the law and Pharisees, you hypocrites! You travel over land and sea to win a single convert, and when you have succeeded, you make them twice as much a child of hell as you are.       </b>                                    
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Religion did not exist until three thousand years after Kali Yuga. Two thousand years ago, when Christianity was born, Christians initially emerged as groups and later became a Christian community. After some time, the Christian community claimed themselves to be a Christian religion. Thus, first religion was born. After claiming to be a Christian religion, they tried to expand their religion. Others later professed themselves as a religion based on their teachings. Thus, the religions were created one after the other. Very soon, twelve religions formed on earth. After the creation of religions, some people became involved in expanding their religions. They traveled over land and sea to convert others into their religion. 
    <br><br>
    Religion is made by people’s will but not by God’s wisdom. In the religions made with the people's minds, there appears to be divine wisdom, but the wisdom in it is contrary to the wisdom told by God. Therefore, a person who relies on divine wisdom and scriptures, regardless of religion, will know God’s dharmas and wisdom. If a person is associated with religion and says that he belongs to a particular religion, he will know Maya’s wisdom. If a man adopts religion, he will become a sinner. A man without religion will become eligible to join the kingdom of paraloka. 

    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 49,
      verse: `<b>(48) The Gospel of Mathew, 24th chapter, 35th verse.</b>   
    `, meaning: ` <b> 
    (35) Sky and earth will pass away, but my words will never pass away.        </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Paramatma, God, does not speak. Atma, who is in the body, can speak. Atma is the second creator and the second God. Atma, who is in the body, speaks from the body. The second God, Atma, teaches so much wisdom from a man. The wisdom taught in that way is in the form of words. Atma's words from the body in the form of teaching will never pass away even if the sky and earth pass away, said in the verse. What is important to note here is that <b>the sky and earth will pass away, but my words will never pass away</b>. But the sky and the earth will never pass away. But the verse says that the sky and the earth will pass. Therefore, we should know that both the sky and earth mentioned in verse are not the sky and earth we see. The sky and the earth told in verse are perishable. The earth and the sky that never perishes are one type, and the perishable earth and sky are another kind. In the Prakruti that is in the form of the human body, there is the sky, air, fire, water, and earth. All of them – the first sky, the last earth, and the remaining air, fire, and water – that are in the form of the body are perishable. The <b>human body will perish, but the wisdom told from the man will never pass away. </b>
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 50,
      verse: `<b> (49)	The Gospel of Mathew, 24th chapter, 42nd verse. </b>   
    `, meaning: ` <b> 
    (42) Therefore, keep watch, because you do not know on what day your Lord will come.       </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Whenever there is a threat to God's dharmas on earth and Satan's dharmas spread extensively, then God sends a part of him to the earth to protect his commandments (dharmas). Whenever there is a need, God must come as a human being. Krishna in the Dvapara Yuga and the Lord Jesus in the Kali Yuga came in that manner. What is remarkable is that we were able to identify them after they arrived and went, but when they were on earth, we could not identify them who they were. No one identified when God himself came as Lord. Even those who saw his glory could not know that he was God but thought he was great. In Dvapara Yuga, Krishna said, <b>“I will come when dharmas are polluted.”</b> He came again as Lord Jesus and told his dharmas. There will not be any difference in the commandments he told, either in Dvapara Yuga and Kali Yuga. But there are no similarities in their names, lives, and 
    lifestyles. Hence, Satan showed the outside differences between them and tricked humans not to know that both were the same. Man needs some wisdom to know when God came and when he will come. As long as man is in ignorance, he does not know God’s coming and does not know even after God came and gone. Even though God is on earth now, ignorant man cannot know. Therefore, if people want to know God’s arrival and recognize him, they must know <b>God’s related wisdom.</b> Nowadays, God’s wisdom is not known, and Satan’s wisdom is spread everywhere. Hence, <b>“You do not know on what day your Lord will come,”</b> said in the verse. <b>“Stay awake to know him,”</b> also said in the verse. <b>Here stay awake means having wisdom. </b>
                     
    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 51,
      verse: ` <b>(50) The Gospel of Mathew, 26th chapter, 26th, 27th and 28th verses
      .</b>  
    `, meaning: ` <b> 
    (26) While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, “Take and eat; this is my body.”
”
    <br><br>
    (27) Then he took a cup, and when he had given thanks, he gave it to them, saying, “Drink from it, all of you.   <br><br>
    (28) This is my blood of the covenant (God’s wisdom without the bonds of ignorance), which is being poured out for many for the forgiveness of sins.       </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    While Jesus and his twelve disciples were eating, Jesus took bread, blessed it, broke it, and gave it to his disciples, and said, <b>“Take and eat; this is my body.”</b> Also, he took grape juice in a cup and said, “All of you drink from it; this is my blood.” Not only he compared grape juice to his blood, but he also said more about blood, <b>“This is my blood of the covenant, which is being poured out for many for the forgiveness of sins.”</b> These words of Jesus, while seemingly ordinary, should be counted as the most important of his teachings. Christians, who did not know the essence of these words told at mealtime, did not elaborate on these words' importance. Some interpreted that Jesus said these words about his past or his future. 
    <br><br>
    Jesus gave grape juice in a cup and said, “this is my blood,” but he did not say that ‘this is my body’s blood’ that will be poured on the cross. But many Christian preachers attribute the blood mentioned in this verse to Jesus body’s blood shed on the cross. They say that man’s sin is forgiven because Jesus spilled his blood on the cross for the sinners. What man said is different from what Jesus said. Jesus did not mention his body's blood in verse. In such cases, it would be unfair to say that Jesus shed his blood for sinners. On that day, those who put Jesus on the cross and made him spill his blood and caused his death on the cross got a terrible and unforgivable sin. But it would be contrary to say that the people’s sins were forgiven and will be forgiven by Jesus’ death. 
    <br><br>
    Jesus gave grape juice and asked disciples to drink it and said, <b>“this is the blood of the covenant, which is being poured out”</b> for many for the remission of 
    sins. Here Jesus used the word ‘is being poured’ to speak in the present tense and did not mention a future thing. Jesus did not mention the blood, which will be spilled on the cross. Yet it would be foolish to say that the blood spilled on the cross was for the sinners and the forgiveness of sins. <b>Those who caused Jesus to spill his blood on the cross got sin instead of remission of sin because he shed his body’s blood.</b> What Jesus said was about the blood of covenant, not the body’s blood. Covenant means God’s wisdom, which is not bound by ignorance. Jesus told the divine wisdom to the people every day; He used the word “I am pouring it out for many.” He taught fire of wisdom every day so that the humans' sins would be burned. He compared his teachings of wisdom to covenant blood coming from his mouth. The truth of what is said in verse is revealed only when analyzed. 
    <br><br>
    The meaning of what is said is poorly understood since the word ‘covenant’ is omitted from the word ‘covenant blood,’ and only the word ‘blood’ is considered. It is not realized that covenant means dharma-related-wisdom. There is another reason for saying blood in the verse. But it is not the blood in the physical body. The physical body is full of blood. As long as there is blood in the body, the body is alive. If the body sheds the blood, the body receives death. According to this, it becomes known that the essence in the body is blood. While they were eating, Jesus first took bread and gave it to his disciples, saying, <b>“Take and eat; this is my body.”</b> Here he compared bread with his body. Then he took grape juice in a cup and gave it to them, saying, <b>“This is my blood of the covenant.”</b> He said about the first one given, ‘This is my body. Eat this’. Jesus compared the bread to his body and told them to eat it. If you eat bread, then you are eating Jesus’s body. The basis and the essence of the body is its blood. 
    <br><br>
    When the divine wisdom is compared with the covenant blood, the body of bread can be compared with the holy scripture with God's wisdom. In that way, <b>the body contains blood; the scripture contains wisdom. Eating the body means reading the scripture. If you read the scripture, you will know the essence of the wisdom in it. Knowing wisdom should mean drinking blood.</b> But man is looking at the bread and the grape juice which Jesus gave, but do not know that the bread is divine scripture, and the grape juice is the wisdom in the scripture. <b>Jesus compared scripture as the body (bread) and wisdom as blood (grape juice). The blood of the covenant that is being shed means the wisdom with dharmas currently being taught.</b> Humans did not realize that Jesus compared the scripture to his body, and the wisdom of the scripture to blood in the body. Hence, they mistakenly said that the blood that Jesus shed on the cross was for the forgiveness of sins. 


    </span> 
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 52,
      verse: `<b>(51)	The Gospel of Mathew, 28th chapter, 18th verse.</b>   
    `, meaning: `
    <b> 
    (18) Then Jesus came to them and said, “All authority in paraloka and on earth has been given to me.
    </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Loka means having experiences. In the loka, we are experiencing many hardships and pleasures. The experience of pleasures is named Svarga Loka (heaven), 
    and the experience of hardships is called Naraka Loka (hell). Loka is neither a separate country nor a special place. Loka means experiences. According to the experience of pleasure and sorrow. loka is divided into heaven and hell. All the experiences together are called loka. Since man receives all experience on earth, heaven and hell are on earth. Depending on the experiences, we call them heaven and hell, but heaven and hell are on earth. 
    <br><br>
    There are two kinds of lokas on earth – Ihaloka and Paraloka. <b>Ihaloka has experiences, but Paraloka does not have any experiences.</b> Both Ihaloka and Paraloka exist on earth. Para means different or separate. Paraloka means something different from experiences. In other words, Paraloka does not have any experiences and is different from the loka. In Telugu, man means the one who acquires experiences through the mind (manas). Therefore, all people on earth belong to Ihaloka. No man has seen Paraloka. A body-wearing man is never without experiences. Therefore, it can be said that every man belongs to the loka and is living in Ihaloka. It may be said that the one who has no experience is in Paraloka. <b>“All authority in paraloka and on earth has been given to me,”</b> said in above verse. 
    <br><br>
    If Jesus were an ordinary man, he would be in the Ihaloka, and he would not know Paraloka. Although Jesus appears to be an ordinary man, his body has only Atma but not Jivatma. Atma lived in Jesus’s body and pretended to be a Jivatma. While both Atma and Jivatma exist in all humans, Atma performs all body functions, and Jivatma experiences the joy and sorrow in work. In this way, it can be said that Jivatma in a man’s body is in heaven for some time and in hell for a while. But when God comes as a human being, his body does not have Jivatma. Although Atma works in the body of the Son of God, Atma does not experience anything. Therefore, it can be said that he is in Paraloka. Since Jesus was no ordinary man, he has authority on earth (Ihaloka) and Paraloka. Paramatma, the Holy Spirit, gave the complete authority to Atma (Jesus). Jesus, who is Atma, is also the head of the divine wisdom. <b>God’s wisdom is not known to man except God.</b> Therefore, the subject of souls is unknown to the people. Jesus taught the wisdom of three souls. He instructed the disciples, who know the souls’ wisdom, to teach Atma’s wisdom to all the people. 
        
    </span>
    `
    },
    {
      chapterName: "The Gospel Of Mathew",
      chapterNumber: 2,
      pageNumber: 53,
      verse: ` <b> (52)	The Gospel of Mathew, 28th chapter, 19th and 20th verses.</b>  
    `, meaning: ` <b> 
        
    (19) Therefore, go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.

         <br><br>
         (20) Teaching them to obey everything I have commanded you. And surely, I am with you always, to the very end of the age (Yuga).       </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The Gospel of Mathew has 28 chapters. The last verses 19th and 20th of chapter 28 contain the secret of entire spiritual education. The three souls’ information mentioned here in verse 19th is the most important wisdom in the 
    scripture. Here in verse, the word ‘Father’ is used before the word ‘son,’ and it requires some thought to understand it. Those who think about this will know that the sequence is the Son, the Father, and the Holy Spirit. If this is explained further, <b>you must know that the son is Jivatma, the Father is Atma, the Holy Spirit is Paramatma.</b> There are no other souls in the world except these three souls. According to the Thraitha theorem, these three souls are Jivatma, Atma, and Paramatma. 
    <br><br>
    Baptism means upadesa. In Telugu, Upa (sub) means adjacent. Upadesa means a neighboring or adjacent country. Upa (sub) means adjacent. Upadesa means a neighboring or adjacent country. In more detail, it means “leaving this country where you are now and getting permission to go to the adjacent or neighboring country.” An officer must first give permission to go to the neighboring country. That officer can be called a Guru. Guru means the one who is the head of the neighboring country or Paraloka. No matter how many gurus are on earth, God, the head of Paraloka, is the true Guru. God, the ruler of Paraloka, is the true Guru who gives us true baptism when he comes to earth as a man. Although there are many gurus on earth, they are all gurus in name only. The baptism they give is in name only. 
    <br><br>
    When God, true Guru, is not on earth as a human, according to the tradition of wisdom, preachers must make some disciples and give them upadesa. Upadesa is like permission to the neighboring country. In the upadesa process, the guru instructs disciples with water, with a mantra, word, or vibhuti (sacred ash). Upadesa is permission to Paraloka, and the word or water is like a ticket that recognizes the entry to Paraloka. Most gurus use a mantra or a word in the upadesa process. Similarly, Jesus told his disciples, <b>“Go and make people of all the nations disciples.”</b> He also told his disciples to baptize them when they become disciples. When giving the disciples the permission ticket in the upadesa process, he said, “Baptize them in the name of the three souls (spirits) - the Father, the Son, and the Holy Spirit.” According to the wisdom tradition, baptism should be done this way. So, when John, a Guru, gave baptism, he administered baptism with water. According to that method, Jesus also received upadesa from John. At that time, John saw Jesus and spoke. 
    <br><br>
    This is what the Gospel of Mathew says in verse 3:14 and 3:15.<b> When Jesus came to him, John tried to deter him, saying, “I need to be baptized by you, and do you come to me?” Jesus replied, “Let it be so now; it is proper for us to do this to fulfill all righteousness (wisdom).”</b> Even Jesus said that one must receive baptism from Guru according to the tradition of wisdom. I also said the same thing about baptism. Jesus authorized his disciples to give baptism and said, “All people need to be baptized, not just a caste or a group.” He also told them to give an entry document of the Father, the Son, and the Holy Spirit. Jesus told his disciples to do the work because God could not always be on earth as a man to give upadesa. In addition to baptism, Jesus also told his disciples to teach them to obey all things he told his disciples. 
    <br><br>
    He also said, “I am always with you,” without causing doubt to the disciples that they were not gurus. He notably said, <b>“I am with you always, even unto the end of yuga.”</b> Those who know about yugas may pose a question when they hear what Jesus said. The question is yuga (era) does not end; another yuga starts at the end of the current yuga. In that case, the question can be asked why he said that there is an end to yugas when there is no end to yugas. The answer is as follows. Time is eternal, lasts forever, God (Paramatma) is eternal, and time, God’s nickname, is also eternal. Since the time is Paramatma, the three souls are named after the time. Paramatma is divided into three souls – Jivatma, Atma and Paramatma. The names past, future and present tense are given to the time so that the time has these three names appear in it. The name ‘yogam,’ which is necessary to reach God, is given to the time. In this way, the four names are given to the time, and the word ‘yogam’ is appended at the end of all the four names to indicate ‘yogam’ is necessary to reach God. 
    <br><br>
    The time is divided into four parts, and they are named Krut, Traita, Dvapara, and Kali, respectively. As the word yogam is appended at the end of all the names, they are called Kruta Yuga, Traita Yuga, Dvapara Yuga, and Kali Yuga. <b>Kruta means the one (Atma) who does. Traita means three. Dvapara means the one (third), which is separate from two. Kali means the one (Jivatma) who gets destroyed.</b> These three are <b>Kshara, Akshara and Purushottama,</b> said in the first divine scripture. In Telugu, Kshara means destructible Jivatma. Akshara means indestructible Atma. Purushottama means Paramatma, who is better than Jivatma and Atma. In the final divine scripture 50:21, these three males are called <b>Passenger, Driver, and Witness</b>. Similarly, they are called <b>the Son, the Father, and the Holy Spirit</b> in the second divine scripture. <b>Yogam</b> is necessary to know these three males (purusha). Hence, the word yogam is appended at the end of four yuga names. Through yogam, Jivatma can know himself, hence called Kali Yogam. With yogam, Atma will be known; hence it is called Kruta Yogam. By yogam, one can reach Paramatma, therefore called Traita Yogam and Dvapara Yogam. People who are rich in divine wisdom gave these names. Over time, however, the term Traita is being pronounced Treta. Similarly, the word yogam is called yuga. Thus, in the above verse, <b>‘end of the yuga’</b> was written in the place of <b>‘end of the yogam.’</b> When the right word is used, Jesus said, “I will always be with you until the end of yogam.” If explained, it will be “I am with you until the conclusion of yogam.” When a man (Jivatma) attains the end of yogam, he is united with God. When God and Jiva are separate, yogam is necessary to union with God. <b>When yogam is completely ended, Jiva will join with God.</b> Till then, there will be God along with Jiva. Then there is no need for God to be with Jiva. Then the two will unite. Therefore, <b>“until the end of the yuga,”</b> said in the verse. 

           
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 54,
      verse: ` <b>(1)	The Gospel of Mark, 2nd chapter, 19th and 20th verses.</b>   
    `, meaning: `<b>    
    (19) How can the guests of the bridegroom fast while he is with them? They cannot, so long as they have him with them.    <br><br>
    (20) But the time will come when the bridegroom will be taken from them, and on that day they will fast.
    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Some people came and asked Jesus, “How is it that John’s disciples and the disciples of the Pharisees are fasting, but yours are not?” Jesus replied with the above verses. Here fasting means abstaining from food. It is the common worldly meaning. In Telugu, the bridegroom is called pellikoduku. The equivalent meaning of the pellikoduku in English is the son of marriage. In Telugu, the word ‘son of marriage’ has a special meaning. In Telugu, the word ‘marriage’ (Pelli in Telugu) means God in the spiritual sense. According to it, the son of marriage (bridegroom) means the Son of God. When Jesus, the Son of God, is with the guests, they will be happy and not fast. When the bridegroom (the Son of God) is forcibly taken away from them, all those with the Son of God will fast with grief that he is going away from them. Similarly, the disciples of Jesus (the Son of God), who claims to be the son of man, will not be fasting because they are happy as long as he is with them. When Jesus is absent from them, they will fast in grief. The bridegroom (the son of marriage) should be understood as the Son of God.
      
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 55,
      verse: `<b>(2) The Gospel of Mark, 4th chapter, 38th and 39th verses.</b>   
    `, meaning: ` <b> 
    (38) Jesus was in the stern, sleeping on a cushion. The disciples woke him and said to him, “Teacher, don’t you care if we drown?” <br><br>
    (39) He got up, rebuked the wind and said to the waves, “Quiet! Be still!” Then the wind died down and it was completely calm.
    </b>                                      
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When Jesus and his disciples were crossing a sea in a small boat, the boat was caught in a storm. The boat was filled with water due to the waves. Then the disciples were terrified and worried that they would be drowned in the sea. The disciples woke Jesus up and told him that the boat was in a storm and that it was in danger of sinking. Jesus got up, rebuked the wind, and ordered the waves to become quiet. Then the wind died down, and it was completely calm. They were terrified and asked each other, “It is a big wonder, and how did it happen?” They thought that Jesus was glorious, but they did not know the reason. There is very remarkable wisdom in the incident.
    <br><br>
    Jesus is not an ordinary man. Yet it must be said that he is God, who looked and behaved like an ordinary man. When God, the Holy Spirit, comes in human form, no one can recognize him. The birth of God is a secret when he is a human being. No one can ever know him with the material intellect. It may be possible to know him only through wisdom. There are two ways to know God’s incarnation based on wisdom. 1) It can be known that there is God’s incarnation wherever God’s dharmas, which no one told, are revealed scientifically. 2) It can be said that Paramatma is in human form wherever nature (Prakruti) is governed. No one can recognize God’s incarnation apart from these two methods. Devatas bowed down to Ravana Brahma in Traita Yuga. When he ordered nine planets, it became known that he was no ordinary man. Ravana Brahma taught divine dharmas, which were unknown to anyone, and made people practice them. Thus, it became known that Ravana Brahma is God’ incarnation. Similarly, it became known that Krishna in Dvapara Yuga is God’s incarnation when he commanded the Sun and taught dharmas in Bhagavad-Gita. Jesus, who came as a man two thousand years ago, became recognized as God in two ways - by commanding the sea and teaching divine dharmas. It appears that the storm formed in sea voyage to make people aware who Jesus was. Even though God’ incarnation is secret, God provided this opportunity to know.
    </span>
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 56,
      verse: `<b>(3)	The Gospel of Mark, 5th chapter, 38th, 39th, 40th, 41st, 42nd and 43rd verses.</b>   
    `, meaning: `<b> 
      
    (38) When they came to the home of the synagogue leader, Jesus saw a commotion, with people crying and wailing loudly. <br><br>
    (39) He went in and said to them, “Why all this commotion and wailing? The child is not dead but asleep.” <br><br>
    (40) But they laughed at him. After he put them all out, he took the child’s father and mother and the disciples who were with him and went in where the child was. <br><br>
    (41) He took her by the hand and said to her, “Talitha koum!” (which means “Little girl, I say to you, get up!”). <br><br>
    (42) Immediately the girl stood up and began to walk around (she was twelve years old). At this they were completely astonished. <br><br>
    (43) He gave strict orders not to let anyone know about this and told them to give her something to eat.    
    </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    It is a great surprise when a man comes alive after declared dead. Jesus woke up the dead persons in his life. Not only did he raise other dead people, but he also came alive from his death. If we think about how this happened, some unknown secret will be revealed. Death is of four types. They are 1) Natural death, 2) Un-natural 
    (untimely) death, 3) Temporary death, 4) Last (final) death. Man will not be born again when he receives the last death. He attains liberation (moksha) with the last death. Natural death is the most common occurrence. In a natural death, man leaves the present body and goes to the second birth. There is no option other than going to second birth in natural death. In an untimely death, man does not completely die but loses half of his body and lives with the remaining half body. Although it is somewhat surprising, this is what happens. 
    <br><br>
    The human body consists of two parts. The human body and the body of all living beings consist of physical (visible) and non-physical(subtle) parts. In the human body, the physical body has ten parts, and the subtle body has fifteen parts. When a man dies untimely, he leaves the physical body of ten parts and lives with the subtle body of fifteen parts. Therefore, the person who received the untimely death can be said to be half dead. When the rest of the subtle body dies, it will become natural death. Then he goes to the second birth. A person who got untimely death will live without being visible. He will live with the subtle body until natural death. But no one knows about temporary death so far. In a temporary death, all the body functions in a man cease. But the Jivatma does not go out from the body but remains in the body. The Jivatma that is in the body is asleep. In the temporary death, the person appears dead because the Jivatma is still in the body. As a result, there were a lot of incidents where a person who received untimely death was counted as dead and buried. No one can find that a person who received a temporary death is not dead. So many people were buried, even though they were alive. 
    <br><br>
    <b>The story of Abdul Aziz in Jammu and Kashmir</b>
    <br><br>
    On December 7, 2009, a story aired at 1:30 pm on TV9 channel. Abdul Aziz, a 60-year-old man, died a week ago on November 30, 2009, in Rajouri, a village in Jammu and Kashmir. He was buried according to Islamic tradition because he was a Muslim. Three days after he was buried, police received a complaint that he had not died normally, and someone killed him. The police immediately registered a case, went to the cemetery, and dug out Abdul Aziz's corpse in the presence of relatives. His body was sent to a government hospital for postmortem. The doctor in the hospital started doing the autopsy. The doctor first hit the head with a knife to examine the skull. The head was injured. Then to the astonishment of all, Abdul Aziz, who was dead until then, woke up and asked what was going on. The doctor could not believe it when he sat and asked. The doctor exclaimed in surprise and said, "We are doing an autopsy." Abdul Aziz replied, “I am alive.” The doctor informed Abdul Aziz's relatives of the incident, and his relatives came from outside and took him home. When Abdul Aziz died three days ago, the same doctor examined him for fifteen minutes and confirmed his death. The doctor said that the miracle had happened in Aziz's case. The people of Rajouri village also expressed surprise that Abdul Aziz, who was buried with their own hands, came to life three days later. It has been only six years and seven months since the incident. All TV channels aired this news on the same day. This incident happened 
    in the presence of doctors. Therefore, no one can deny this, nor can it be called superstitious. 
    <br><br>
    <b>An incident in Visakhapatnam district </b>
    <br><br>
    Srungavarapu Kota is located on the way to the Araku valley in Visakhapatnam. There is a village called Saarepuram situated 12 km from Srungavarapu Kota. The village of Saarepuram had a 67-year-old female named Samudramma. She had been diagnosed with high blood pressure and diabetes for ten years. She underwent medical treatment at Dharmalingachari, a senior doctor at Srungavarapu Kota. Dr. Dharmalingachari, M.B.B.S, was a well-known 60-year-old veteran. Six years ago, one day in the evening, at six o'clock, Samudramma was brought to Dr. Dharmalingachari. Earlier doctors in government hospital pronounced her dead and she was then taken to Dr. Dharmalingachari. When the doctor Dharmalingachari examined her, there was no pulse in her body. The doctor declared her dead because she had no breathing or pulse and said, “Take her home. She is dead. She does not need any medical treatment.” They then took her to their village, 12 km away. They wanted to bury her in the next day morning because it was already night. The rain started early in the morning and continued for two days with no chance of going out. Samudramma’ s body was kept in the verandah for three days. Three days later, on the fourth morning, she got up and called everyone. Then her relatives realized that she was alive and immediately phoned Dr. Dharmalingachari. After fifteen days, she was brought to Dr. Dharmalingachari. Then the doctor asked, “You were dead for three days. Did you see any Yama’s servants or Yamaloka?” The incident also took place six years ago in the presence of a doctor. Therefore, no one can deny this, nor can it be called superstitious. 
    <br><br>
    <b>A survivor from pyre (Translation from a Telugu newspaper) </b>
    <br><br>
    <b>Chennai: </b>Doctors confirmed that 50-year-old Muttuswamy of Krishurayapuram in Karur district of Tamil Nadu died on Tuesday. They also advised to take the body and perform the funeral rites. The relatives, who thought that Muttuswamy was dead with old age and sickness, planned for the pyre. Relatives gathered at the cemetery. The next step is to start the fire at the pyre. His sister Paapatti came to see the dead body lying on the pyre. She could not stop the grief, fell on the corpse, and cried aloud. “Brother, will you leave me?” she cried. That is it! There was a movement in Muttuswamy!! His legs and arms moved. Meanwhile, there was a slight groan. Within a few seconds, there was slight movement in the legs and arms. The relatives, who were drowned in tears, suddenly succumbed to the wonder and shouted ‘Muttuswamy ... Muttuswamy. Muttuswamy awoke from the pyre as if he had woken from sleep. What happened? He asked the relatives. All of them hugged Muttuswamy with happiness and took him back to the hospital. Muttuswamy’ s only daughter got married on Monday. 
    <b>Doctor’s negligence:</b> Relatives criticized the doctors for showing negligence on Muttuswamy, who was admitted to a local hospital ten days ago after he fell ill. They condemned the doctors on the incident. This news spread like wildfire in Karur district. There was widespread debate on this. This is another example of temporary death. 
    
    <p style="text-align-center">
        <img src="assets/img/temp_death.png"/>
      </p>
      If someone gets a temporary death, he may live for up to a year or more in that state. Such a person may resurrect himself, or he may be resurrected when someone taps and wakes him up. In many cases, those who got temporary death in the morning woke up in the evening. Some woke up a week later. Recently, a man named Muttuswamy, who was on a funeral pyre, came alive in Tamil Nadu. In this way, Jesus identified the girl who had received a temporary death and resurrected her, saying that she was not dead. There is also a history that Jesus resurrected himself. It should be noted that this was all due to temporary death. We wrote about the four types of deaths and their reality in our book <b>“The Mystery of Death.”</b> Reading it will make you fully aware of types of deaths. 
        </span>
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 57,
      verse: `<b>(4)	The Gospel of Mark, 7th chapter, 15th, 16th, 17th, 18th, 19th, 20th, 21st, 22nd and 23rd verses.</b><   
    `, meaning: `<b> 
    (15) Nothing outside a person can defile them by going into them. (16) Rather, it is what comes out of a person that defiles them. <br><br>
    (17) After he had left the crowd and entered the house, his disciples asked him about this parable <br><br>
    (18) “Are you so dull?” he asked. “Don’t you see that nothing that enters a person from the outside can defile them? <br><br>
    (19) For it does not go into their heart but into their stomach, and then out of the body.” <br><br>
    (20) He went on: “What comes out of a person is what defiles them. <br><br>
    (21) For it is from within, out of a person’s heart, that evil thoughts come— sexual immorality, theft, murder, <br><br>
    (22) adultery, greed, malice, deceit, lewdness, envy, slander, arrogance, and folly. <br><br>
    (23) All these evils come from inside and defile a person.     </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Man is born with six bad gunas and six good gunas. Gunas also grow along with the man. Gunas influence buddhi, which is in the head, and make the outside deeds happen with buddhi's commandment. Buddhi instructs karmendriyas to do things outside the body. It works according to gunas. Because man’s bad gunas affect buddhi, the buddhi orders the actions of gunas, and the external senses act according to buddhi’s command. These gunas cause the bad qualities of greed (kaama), anger (krodha), selfishness (lobha), emotional attachment (moha), arrogance (mada), jealousy (matsara). The gunas first reach the buddhi and command the body from there. Any instruction must come through the buddhi. One must know that the gunas within the body cause all the atrocities committed by humans.
    <br><br>
    Food taken from the outside is useful for the body’s health but does not influence the buddhi. Food is converted into nutrients for the body and keeps a person healthy. The food that humans eats has nothing to do with the buddhi. It directly goes into the body and works on health. When the food is useful for the body, the body is strong and healthy. Therefore, the food which goes into the body from outside does not
    cause any bad behavior to man. The effect of the gunas that come out of the body causes bad behavior in a man. Therefore, it is okay not to follow the dietary rules but should have control of gunas.
 
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 58,
      verse: ` <b>(5)	The Gospel of Mark, 3rd chapter, 35th verse.</b>  
    `, meaning: ` <b> 
    (35) Whoever does God’s will is my brother and sister and mother.      </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
     
    When we first question what God's will is, we know that God's commandments are his will. If we obey his commandments (dharmas), we are doing as per God's will. If we behave as we please without obeying his commands, we are violating his commandments and walking according to Satan’s will. When God is born upon the earth as Bhagavan, those who know his wisdom, act according to his wisdom, propagate his wisdom, and spread commandments will become close to Bhagavan. All who are in Satan's path will become enemies of God. All those who propagate God’s words and follow God’s commandments are counted as sisters, brothers, and closest to him. When God is on earth or not, one should know that gnanis who are behind his boundary and obey his commands will be counted close to God.

    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 59,
      verse: ` <b>(6)	The Gospel of Mark, 4th chapter, 17th verse.</b>  
    `, meaning: `<b> 
    (17) But since they have no root, they last only a short time. When trouble or persecution comes because of the word, they quickly fall away.
        </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Lord Krishna said in Gita that there are four kinds of devotees. 1) Aarthi (those who worship in trouble) 2) Artharthi (those who pray for wealth) 3) Jignashi (those who try to know about God) 4) Gnani (those who know wisdom). The Lord said in Gita that <b>he likes gnanis</b>. Even here, the Lord Jesus said about the four types of devotees. But the verse talks about one of a kind. Some people who are curious to know God’s wisdom hear the word and want to obey it. Satan begins to tempt them in its way. They face many troubles in that process. When they face some trouble because of wisdom, Satan begins to preach in their head. Satan says to them, “You are facing troubles because you know wisdom. You can escape the problems by pretending to be in the wisdom path.” The man who does not know the essence of wisdom begins to act accordingly. After some time, if the person gets a problem because of wisdom or Guru and the problem leads to quarrel with others or thinks that he may be persecuted because of it, Maya will get an excellent opportunity. Then Maya creates this kind of thoughts in the person’s head. It would be nice if I were smarter from the beginning. I got into this situation because I followed the Guru for wisdom even after my close relatives told me not to do it. Why should I get beaten by others for this wisdom? It is better to leave this wisdom and the Guru. If we follow the wisdom blindly, it will ultimately ruin me. It will ruin my family, as well. Since we are in the world, we must follow the world. For those who are in the forest, there are no problems, no matter how they do. As we are in the village, it would be foolish if we go against others for the sake 
    of wisdom. Such thoughts pop up in their heads, and they try to distance themselves from wisdom. Such thoughts pop up in their heads, and they try to distance themselves from wisdom. Therefore, even those who have been in the wisdom path for some time will slowly disappear when trouble or persecution comes because of the wisdom, said in verse. 
    <br><br>
    Whoever knows God’s value and complete wisdom will not succumb to Satan’s temptations. Man cannot escape the clutches of Satan unless he values wisdom and Guru more than his wife, more than a close friend, and more than his own life even after knowing that he will be persecuted or killed in the wisdom path. Even the Lord Jesus’ disciples were afraid of guards on that day and left their Guru to save their lives. They fled with fear because of trouble and persecution. Their life would have been blessed if they were also prepared for death along with the Lord Jesus on that day. Maya searched the Lord’s disciples that day and blocked their way partially. Unlike them, we must stand if any trouble or persecution comes on the wisdom path. Blessed is he who does not care death in the divine path than to live long with fear in ignorance path. In the Bhagavad-Gita, the Lord said, <b>“It is better to die in Paramatma’ dharma, which is your dharma, than to fear in the path of Satan, which is not your dharma.”</b> 
    
            
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 60,
      verse: ` <b>(7)	The Gospel of Mark, 4th chapter, 21st and 22nd verses.</b>  
    `, meaning: `<b> 
    (21) He said to them, “Do you bring in a lamp to put it under a bowl or a bed? Instead, don’t you put it on its stand?
    <br><br>
    (22) For whatever is hidden is meant to be disclosed, and whatever is concealed is meant to be brought out into the open.       </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    In the present time, many gurus are saying that the disciples should not share their wisdom with others. They say that their wisdom is confidential, not to be told to others, but only to those who received upadesa. When someone asks them a question, they avoid answering it. Wisdom should not be concealed. God himself comes in human form and takes troubles to convey wisdom. Although we do not know the true wisdom, we make excuses for sharing little wisdom that we know. Think about whether it is a good idea to do so. Wisdom is like a lamp that removes the ignorance in others. As the object in darkness can be seen in the lamp's light, the unknown thing in ignorance is known with wisdom. Wisdom is needed to dispel ignorance, just as a lamp is required to dispel darkness. It is foolish to light a lamp for the light and keep it under a bowl. Similarly, it is unwise not to tell wisdom that you know. Even the secret is meant to be disclosed. Bhagavan revealed the best divine wisdom in the world. In that case, anything that value less than wisdom will not be concealed. No mystery in the world can be concealed; it surely can get out. God's wisdom is necessary for everyone. It should not be kept a secret. Those who want to conceal cannot conceal it.
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 61,
      verse: `<b>(8)	The Gospel of Mark, 6th chapter, 4th verse.</b>   
    `, meaning: `<b> 
    (4) Jesus said to them, “A prophet is not without honor except in his own town, among his relatives and in his own home.”        </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    
    In Telugu, prophet means the one who teaches something important. Paramatma’s wisdom is the most essential thing for every human being. A person who teaches Paramatma’s wisdom is called a prophet. Ordinary humans do not know Paramatma’s wisdom, except the one who comes from Paramatma. The one who comes from the Paramatma and is born as a man is called Bhagavan or Prophet. The Prophet is not honored in his own home, among his relatives, and in his own town because he appears to be an ordinary man. No matter how great one is, it is natural to be underestimated at home and by relatives. Because they have seen the Prophet since childhood, the family members, and the relatives ridicule that there is no greatness in him, and only fools will listen to him. They also ridicule that he does not know anything more than what they know. Even God cannot become a Prophet to the family members. Even when others recognize and talk about his greatness, his relatives and family members question what excellence is in him. They do not recognize the importance in him and ridicule him, saying that he was bed-wetter and pooped in his underwear in his childhood. Therefore, he is Prophet to other people, but he is not honored in his own home and his town. According to this principle, the Lord Jesus was not recognized as a prophet by his family and relatives.

    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 62,
      verse: `<b> (9)	The Gospel of Mark, 8th chapter, 38th verse.</b>   
    `, meaning: `<b> 
    (38) If anyone is ashamed of me and my words in this adulterous and sinful generation, the Son of Man will be ashamed of them when he comes in his Father’s glory with the holy angels.
       </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Some people are learning wisdom in society, but they want to keep it secret. They feel that knowing wisdom is a mistake; hence they do it confidentially. Some feel that it is shameful to go to guru and learn wisdom from him; hence they keep it from anyone knowing. Some are in the quest to become disciples, but they want wealthy guru because they are rich and have status. Hence, they are ashamed to go to a poor guru and select a wealthy guru who does not know much wisdom. Hence, they select a wealthy guru although he does not know much wisdom because they are ashamed to go to a poor guru. Although some learned wisdom from a guru, but they do not like to be called the disciples of that guru. In this way, many are ashamed and careful not to be revealed. 
    <br><br>
    One may be ashamed of worldly-related things but should not be ashamed of Paramatma's wisdom. Let us see an example. Two persons are going on the road. One is handsome, and another one is unattractive. The handsome person is poor and unintelligent, but the unattractive person is rich and intelligent. Both are close 
    relatives. Those who go on the road will see outward appearance but not their intelligence. After some time, a traveler sees them and asks the handsome person who the second person is. The first person is ashamed to say that the second person is his close relative because his relative is not attractive. Hence, the handsome person says that they just know each other. The second person thinks that I am introduced as an acquaintance rather than a close relative because I am ugly. After some time, another traveler sees them and asks the unattractive person who the other person is. Being intelligent, the unattractive person says similarly that the other person is an acquaintance. The handsome person is happy for being introduced to the traveler as an acquaintance rather than a close relative. The unattractive person thinks that I am also ashamed to introduce this stupid person as my close relative because he is ashamed to introduce me as his close relative. The unattractive person followed the behavior of the handsome person. 
    <br><br>
    The second traveler who asked the unattractive person has had a rule for many years. His rule is that he wants to give 10,000 coins if he meets close relatives. Although they are close relatives, they could not get 10,000 coins because they have not introduced themselves as close relatives. So, the first poor person has not received any money. Since the second person is rich, he does not care if he gets money or not. The first person has lost money because he is first ashamed and lied. If you are ashamed of wisdom just because others do not like it, then the wisdom is also ashamed of you. The first person has lost money because he is first ashamed and lied. Hence, you will not get the future profit, moksha. According to this, the Lord said, <b>“If anyone is ashamed of me and my words, I am also ashamed of them.”</b> Based on the Lord’s word, one should understand that it is okay to be ashamed of worldly- related-matter but should not be ashamed of Paramatma’s wisdom. 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 63,
      verse: `<b>(10)	The Gospel of Mark, 9th chapter, 7h verse.</b>   
    `, meaning: ` <b> 
    (7) Then a cloud appeared and covered them, and a voice came from the cloud: “This is my Son, whom I love. Listen to him!”         </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Most people are not aware of the clouds in the sky. During the rainy season, the clouds produce thunders and make a loud noise. The clouds are alive. They do many things. But no one knows the tasks of the clouds. History tells us that the Sun heard when clouds first revealed the divine wisdom at the beginning of creation. There is no unknown secret to the clouds on earth. In the form of clouds, God behind the clouds said about Jesus, <b>“This is my beloved Son, Listen to him.”</b> Hence, it is God’s will that people should hear God’s wisdom from Jesus. What God says as a man is God’s wisdom, but God spoke from the clouds when humans do not listen. Humans may not respect what the other person says, but they value what the clouds say; hence, God told from the clouds in the sky. 

    
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Mark",
      chapterNumber: 3,
      pageNumber: 64,
      verse: ` <b> (11)	The Gospel of Mark, 10th chapter, 17th and 18th verses.</b>  
    `, meaning: ` <b> 
    (17) As Jesus started on his way, a man ran up to him and fell on his knees before him. “Good teacher,” he asked, “what must I do to inherit eternal life?”
    <br><br>
    (18) “Why do you call me good?” Jesus answered. “No one is good—except God alone.    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Some Christians say that the Bible was first written in Hebrew. After that, it was translated into many languages from the Hebrew language. Hence some words were not translated correctly. The first verse used the word ‘Good teacher,’ and the second used ‘God is good.’ Based on what Jesus said, “No one is good—except God alone,” the word should neither be ‘Good teacher’ nor ‘Good God.’ One who teaches wisdom eloquently can be called a good teacher. One who does good deeds is called a good person. 
    <br><br>
    There are good teachers and good people on earth. Therefore, it would be belittling God to compare with them and say, “No one is good—except God alone.” The second divine scripture, the Bible, has been translated into more languages than the other two holy scriptures. The Bible was translated into 1400 languages. The Bible, the second divine scripture, is the only scripture that has been translated into most languages. 
    <br><br>
    The first divine scripture is the basis for the second divine scripture, the Bible, and the last divine scripture, the Quran. The last divine scripture, the Quran, provides testimony in 5:44, 5:46, 5:48, and 5:68 that <b>the wisdom of the first divine scripture, the Taurat (the Bhagavadgita), is also present in the other two scriptures.</b> Therefore, if we think what word could have been used in the Gospel of Mark, 10:17 and 10:18, there could be many good teachers and good people in the world, but there is no Uttama Purusha in men. Hence, <b>“God alone is Purushottama,”</b> said in Bhagavadgita. So, it can be said that unrelated words were used in the above verses where the word should be Purushottama. This is well understood when you look at slokas 16,17 and 18 in the 15th chapter of the Bhagavadgita, the Purushottama Prapti Yogam. 
    <br><br>
    According to the first divine scripture, there is only one Purusha. Although there is only one Purusha, God is divided into three -Jivatma, Atma, and Paramatma. In three males, <b>the male who is better than Jivatma and Atma is Paramatma, and he is also called Purushottama,</b> said in Bhagavadgita. It can be said that all except the three males are nature (Prakruti), that nature is feminine, and that men and women in the world are all related to the feminine nature. Therefore, Jesus said in verse, <b>“Don’t call me Purushottama (Uttama Purusha). God alone is Uttama Purusha.”</b> There are three main religions on earth. The people of each religion took a divine scripture and said this is our scripture. Their religion makes them feel that way. In fact, these three scriptures are not related to any religion. These three scriptures provided wisdom to all human beings, so they must be counted as the scriptures told to all human beings. 
 

    </span> 
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 65,
      verse: `<b>(12)	The Gospel of Mark, 16th chapter, 15th and 16th verses.</b>   
    `, meaning: `<b> 
    (15) He said to them, “Go into all the world and preach the gospel to all creation.<br><br>
    (16) Whoever believes and is baptized will be saved, but whoever does not believe will be condemned.    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    After Jesus was crucified and kept in the tomb, he rose from the tomb at dawn on Sunday morning. He first appeared to Mary Magdalene then to other disciples. Jesus appeared thirty-three times to the disciples after coming out of the tomb. He told the above two verses when he appeared to the eleven disciples when they sat together for a meal. As all the humans in the world are immersed in ignorance, he told his disciples to go to them and <b>preach the gospel, God’s wisdom.</b> The same thing is said in the 15th verse, <b>“Go into all the world and preach the gospel to all creation.”</b> Here all the world does not mean different worlds. It means people who do many things for a living on earth and suffer many ways. 
    <br><br>
    He also said, “Preach the gospel to all creation.” It means preaching the gospel, divine wisdom, to the people of all ages. He said to preach them divine wisdom and give them the permission, ‘baptism,’ to go to Paraloka. Baptism is like a permit to moksha (Paraloka). Those who have been granted permission to Paraloka will be saved by my wisdom and escape from the experience of sin. He said that the troubles of sins would punish those who are not baptized as they do not have protection from sins. 

    
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 66,
      verse: `<b>(1)	The Gospel of Luke, 2nd chapter, 49th verse.</b>   
    `, meaning: ` <b> 
    (49) “Why were you searching for me?” he asked. “Didn’t you know I had to be in my Father’s business?”       </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus’ parents were looking for him, and when they saw him, they were astonished. His mother said to him, “Son, why have you treated us like this? Your father and I have been anxiously searching for you.” In response, Jesus said, <b>“Why were you searching for me? Didn’t you know I had to be in my Father’s business?”</b> Jesus’s father was also there. But Jesus replied, “I must be on my Father's work.” Jesus’ visible (physical) father was there in those who were looking for him, but what Jesus said was about his invisible (non-physical) father. It is important to know which father Jesus was referring to. If we know which father Jesus was referring to, we will know that father’s tasks. Then we understand what tasks Jesus would be doing and for what purpose he left his mother and father. 
    <br><br>
    In his own words, Jesus declared himself to be the Son of Man. On some occasions, he also claimed himself to be the Son of God. In this way, he is the Son of Man as well as the Son of God. If one asks whose sons all these people are, it can be said that all humans are sons of man. There is some secret involved here. For a man to be born, a seed donor is required. However, it is natural to assume that the father is the reason (seed donor) for a man's birth. Although a man seems to be a male in appearance, he cannot be counted as a male because he is created as a model for a male. Both he and his wife will be counted under the feminine nature. 
    <br><br>
    Although Jivatma, who is in a human body, is Atma-related-male, he will be born, but he cannot beget someone. The Atma in the body made every human born. We already said that Atma does all the tasks in the body, and he is the seed donor for all creation. As Atma makes humans born from humans, the born is called the son of man. “I am the Son of Man,” said Jesus, as if he were an ordinary man. Here Jesus said that his father is not visible ‘Joseph’, but Atma that is in everyone’s body. The first divine scripture says that the father is Atma, and the mother is Prakruti for every living entity born from a mother’s womb. Jesus was born directly without a physical father. He was not usually born like everyone else. He is the Son of the Holy Spirit (Paramatma), who is different from Atma. Because he is the Son of the Holy Spirit, he is called the Son of God. When Jesus met his parents, he said, “I must be on my Father’s work,”. But he did not mention which father (Atma or the Holy Spirit) he was referring to. If we ask ourselves whose son he was, in his opinion, he considered himself to be the Son of God. Jesus did not do the work of the Atma, who is in the body. He was spreading God’s wisdom. Spreading divine wisdom is the task of the omnipresent Paramatma. So, he said that he intended to do his father's (the Holy 
    Spirit) work. Paramatma himself created a body and filled it with his soul. Although he is God, he said that he was the Son of Man sometimes, and he was the Son of God other times, so that no one recognizes him. 
 
    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 67,
      verse: `<b>(2)	The Gospel of Luke, 11th chapter, 37th, 38th, 39th, 40th and 41st verses.</b>   
    `, meaning: `<b> 
    (37) As Jesus was speaking, one of the Pharisees invited him home for a meal. So, he went in and took his place at the table. <br><br>
    (38) His host was amazed to see that he sat down to eat without first performing the hand-washing ceremony required by Jewish custom.  <br><br>
    (39) Then the Lord said to him, “You Pharisees are so careful to clean the outside of the cup and the dish, but inside you are filthy—full of greed and wickedness!  <br><br>
    (40) Fools! Didn’t God make the inside as well as the outside?  <br><br>
    (41) So, clean the inside by giving gifts (dharmas) to the poor, and you will be clean all over.     
    </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The last verse says, <b>“Clean the inside by giving gifts (dharmas) to the poor, and you will be clean all over.”</b> Humans could not understand the verse correctly. They are interpreting differently of what Jesus said. When it says, ‘giving gifts,’ people interpreted it as donating money, clothes, and food to poor people. Jesus did not say that. Donating external things will not purify you inside. So, he did not say to donate external items. He intends that if the dharma is practiced inside, all the inside evil will be cleansed. Jesus did not give importance to external cleanliness. He gave preference to cleaning inside gunas. Therefore, he told to follow according to the dharma of the divine path, walking against gunas. Jesus wanted others to walk the dharma path because he is purified inside and is following dharma.
    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 68,
      verse: `<b>(3)	The Gospel of Luke, 12th chapter, 4th and 5th verses</b>   
    `, meaning: ` <b> 
    (4) I tell you, my friends, do not be afraid of those who kill the body and after that can do no more.    <br><br>
    (5) But I will show you whom you should fear: Fear him who, after your body has been killed, has authority to throw you into hell. Yes, I tell you, fear him.        </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Humans can kill the body but cannot kill the inside Jivatma. Jivatma cannot be seen from outside. Because the body is visible, others can kill it. They cannot do anything more than that. You do not have to be afraid of such people. There is only one whom you should fear. Even after you die, he will count your sins and punish you
    for your sins, and make you suffer. The relationship between man to man is severed after death. Even If the dead man is born again in the murderer's house, the dead man cannot recognize the murderer as an enemy. God recognizes the Jivatma even after the death, and he knows the next birth of the Jivatma. You should fear God, who makes you suffer for your karma after death but should not fear another man who does not recognize you after death.
    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 69,
      verse: `<b>(4)	The Gospel of Luke, 12th chapter, 25th verse.</b>   
    `, meaning: ` <b> 
    (25) Which of you by worrying can add to his stature one cubit?       </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      
    Even though man thinks that he is doing everything with his intelligence, there is no relation between him and his intelligence. Man is not independent and incapable of doing anything by himself. He is like a puppet in the hands of karma. One who thinks he can do whatever he wants is in a state of ignorance about himself. According to the structure God built, karma is in God’s hand, and man is in karma’s hand. As karma controls him, he cannot make any decision on his own. No matter how much he plans and uses his intelligence, he cannot reduce or add his height. If every man knows himself and thinks about the extent of his power, he will know that he is tiny, and God is infinitely greater than him.

    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 70,
      verse: `<b>(5)	The Gospel of Luke, 12th chapter, 33rd and 34th verses.</b>   
    `, meaning: ` <b> 
    (33) Sell your possessions and give to the poor. Provide purses for yourselves that will not wear out, a treasure in paraloka that will never fail, where no thief comes near, and no moth destroys.    <br><br>
    (34) For where your treasure is, there your heart will be also.       </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    There are two types of wealth. You can buy anything in the world with one kind of wealth. With another type of money, you can buy God who is beyond the world. The wealth that buys the world is among us. God created wisdom wealth that can even buy God. Every day, we can see money created by human beings, and we are buying things with it. The wisdom wealth created by the divine is not visible. There are many differences between wisdom wealth, and worldly wealth. Thieves can steal the worldly wealth. But they cannot loot the wisdom wealth because it is not visible. Moths can destroy worldly wealth, but it cannot damage wisdom wealth. You cannot get rid of even the smallest karma with worldly wealth. But you can get rid of even the big karma with the wisdom wealth. You will get wealth when you work, but you will gain wisdom wealth when you are intimate with divinity. The worldly wealth can be estimated, but the wisdom wealth cannot be appraised. The connection between wealth and man is severed when a man dies, and even a penny does not go with the Jivatma. But, the wisdom wealth, even after man’s death, goes along with Jivatma. All the wisdom that one has gained goes along with him in all births. Those who are rich
    in the world will be respected among the people in society, but not in God's presence. God recognizes those who have wisdom wealth, but humans do not respect them. In this way, there are many differences between worldly wealth and wisdom wealth.        
    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 71,
      verse: `<b>(6)	The Gospel of Luke, 12th chapter, 49th verse.</b>   
    `, meaning: ` <b> 
    (49) I have come to bring fire on the earth, and how I wish it were already kindled.       </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Here fire does not mean the fire we see every day. Fire is of two types. One is an ordinary fire, and the other is an extraordinary fire. The ordinary fire can burn firewood and other objects. <b>Gnanagni, an extraordinary fire, burns firewood of karma.</b> Because humans are caught in the sin and suffer grievous hardships, God comes down to bring the wisdom fire (Gnanagni) on the earth to get them out. God thinks that when the wisdom fire enters humans, it burns their karma, liberates them from births, and make them reach God. God compared wisdom with fire when he came upon earth to teach wisdom because man can achieve liberation by wisdom. God brought his fire on the earth in the past. Then it kindled for some time and disappeared; hence Jesus came to bring fire again. He wants the fire to continue kindled. Hence, Jesus said that he came to start a fire where there is no fire, and he wants the fire, which he started earlier, to continue kindled. 
            
    </span> 
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 72,
      verse: `<b>(7)	The Gospel of Luke, 12th chapter, 51st, 52nd and 53rd verses.</b>   
    `, meaning: `<b> 
    (51) Do you think I came to bring peace on earth? No, I tell you, but division.
<br><br>
(52) From now on there will be five in one family divided against each other, three against two and two against three.    <br><br>
(53) They will be divided, father against son and son against father, mother against daughter and daughter against mother, mother-in-law against daughter- in-law and daughter-in-law against mother-in-law.   </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Paramatma reveals his wisdom when he incarnates on earth in Bhagavan’s form. Bhagavan’s wisdom creates opposite feelings for all those who are in Satan’s path. In such cases, there will be differences of opinion between those who know the wisdom and those who do not know the wisdom. Those who know wisdom will disagree with those who do not know. When such a situation happens in the same house, the household members become hostile to each other. If anyone tries to know wisdom at home, Satan will be careful. Satan divides them, father against son and son against father, mother against daughter and daughter against mother, mother-in-law against daughter-in-law, and daughter-in-law against mother-in-law. Even Bhagavan, Guru, will tell you to disagree with those who disagree with you on wisdom when he knows that a husband and wife are fighting because of his wisdom. Hence, their quarrel will increase rather than diminishing. <b>Hence, the Lord said, “I did not come  to bring reconciliation but division.”</b> Do you think Bhagavan, who has come to teach wisdom on earth, tells you to listen to your household and not learn his wisdom? Do you think the Lord, who told you to cut off your hand if it obstructs God’s wisdom, asks you to reconcile with your wife and relatives? Never. He told you not to compromise with them even if you lose your life. Therefore, there are many fights in many families because of God’s wisdom. It is noteworthy that wherever true wisdom is proclaimed, there will be hostility within the household. There are no disagreements when Satan’s wisdom is told in the name of divine wisdom. All will be supportive of such wisdom. One can know that if all the household members become enemies because of divine wisdom, then such divine wisdom would be true God’s wisdom. 

    
    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 73,
      verse: `<b>(8)	The Gospel of Luke, 13th chapter, 3rd verse.</b>   
    `, meaning: `<b>(3) Unless you change your mind, you too will all perish.
    </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Mind (manas) is the most important of the body. Manas is so named because it remembers things. It is always under the control of Maya (Satan). It always empowers Satan and reminds us of worldly matters. Since man’s birth, the mind has been working on Satan’s side but never acted on God’s side. The conversion of such a mind from Satan’s side to God’s side is called a ‘change of mind.’ No one can go to God’s side unless the mind is changed. When the mind changes, gnanagni begins to generate. Man unites with God without birth and death when gnanagni destroys entire karma. If the mind does not change and control thoughts, man must be born and die and bear the pangs of hell. So, everyone should change their mind.
 
    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 74,
      verse: ` <b> (9)	The Gospel of Luke, 14th chapter, 26th verse.</b>   
    `, meaning: `<b> 
    (26) If anyone comes to me and does not hate father and mother, wife and children, brothers, and sisters—yes, even their own life—such a person cannot be my disciple.       </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    If anyone listens to this, they will get surprised and ask – what kind of wisdom is this? What kind of Guru? What kind of disciples? One may come to Guru and question him, “Does any Guru say to his disciples that you are not my disciple unless you scold your family?” We need to think here. If a man scolds all his household, Guru is not a madman to get pleased and accept him as a disciple. Here it is not said to hate everyone in a row. Guru becomes indeed happy when his disciple hates the ignorant who walk in Satan’s path. When a disciple, in line with the Guru sentiment, scolds the ignorant, Guru thinks that the disciple is on his side and accepts him as a disciple. If a disciple supports instead of contradicting the ignorant, Guru will not admit him as a disciple. Hatred is common between two groups - gnanis and agnanis (the ignorant). If father and mother, wife and children, brothers and sisters are in the ignorant list, the disciple should hate them. The Lord said that one who does not hate the ignorant and favors relatives is not my disciple. It becomes known that one should not compromise
    on ignorance. Jesus said that the disciple should abandon mother, father, brothers and sisters, and wife and children if they block his wisdom path.    
    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 75,
      verse: ` <b>(10)	The Gospel of Luke, 14th chapter, 27th verse.</b>   
    `, meaning: `<b> 
    (27) Whoever does not carry their cross and follow me cannot be my disciple.       </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When firewood is bundled, it is easy to pick it up and carry for long-distance. It is not possible to carry if it is not packed. Similarly, when the 108 gunas in your head are tied together in a dysfunctional condition, they become a bundle in the hands of man. There are two kinds of gunas - good and bad- in the body of a man. <b>The six bad qualities(gunas) are greed (kaama), anger (krodha), selfishness (lobha), emotional attachment (moha), arrogance (mada), jealousy (matsara). Similarly, six good qualities are donation (dana), mercy (daya), unselfishness (audarya), detachment (vairagya), humility (vinaya), kindness (prema).</b> Each of the six bad gunas and six good gunas is divided into nine parts. Thus, six bad gunas are divided into 54 parts, and six good gunas are divided into 54 parts. Both good and bad gunas together are 108. 
    <br><br>
    Gunas, which are in 108 parts, is called Maya in the first divine scripture. They are called <b>Satan</b> in the second divine scripture. In the final divine scripture, these gunas are named Iblis. God himself spoke of the Maya as “Guna-mayi mama maya” in the first divine scripture. It means that Maya, which was created by God, is in the form of gunas in the human body. Maya was mainly created by God to stop humans from going in the divine path. Maya can make man stay by its side instead of going to God’s way. It can be said that Maya is guna or guna is Maya. Maya means invisible. Maya is in the head without being seen. Maya, which is in our body, is also called the Cross. In the spiritual sense, Maya is compared with a python. Atma has been compared to a dove and Maya as a python. 
    <br><br>
    Python is a mighty serpent. One who has been caught by it cannot become free. That means Maya is strong. Jesus said that whoever controls, bundles, and holds such strong Maya in their hand is my disciple. Jesus said that the conqueror of Maya was truly my disciple. <b>Whoever captures Maya (the Cross) and follows God’s path by carrying it is a true disciple of God.</b> One who carries the cross that we talk about great today and follows Jesus is his disciple, said in verse. 
        </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 76,
      verse: `<b> (11)	The Gospel of Luke, 18th chapter, 29th verse.</b>   
    `, meaning: `<b>  
    (29) “Truly I tell you,” Jesus said to them, “no one who has left home or wife or brothers or sisters or parents or children for the sake of the kingdom of God will fail to receive many times as much in this age, and in the age to come eternal life.”   </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      The kingdom of God means moksha. If a man gets moksha, he will not be born again on earth. When he is not born on earth, he will not suffer from Satan. Moksha means getting released from Satan and joining God. In other words, a man becomes God. It is so great when Jiva, who has a shape and is very small in Prakruti, will unite with God, who is infinitely vast, limitless, and omnipresent. To obtain such a position, man should enter wisdom path and abandon wife and children, father and mother, brothers and sisters and house if they obstruct him. Such a person becomes complete gnani in this world and obtains God in Paraloka. Giving up wife and children, brothers and sisters, and father and mother is a big deal. Because Maya surrounds the man and restrains his legs with his near and dear. Prahlada did not count his father, Mirabai left her husband and relatives, and Buddha left behind a young wife and one- year-old son, parents, home, and kingdom for wisdom. Similarly, those who keep their dear ones distant will get closer to God, who is alien to them. For getting someone who is eternal, leaving someone who stays with you for a while is an intelligent decision. But it appears foolish in the world. Such a man will be counted as foolish. It is rare to find a man who leaves everyone in the world of Satan's kingdom for God's sake. Because if anyone gets the idea of God in their mind, Satan mainly focuses on them and diverts them from the thought and the wisdom path. It is impossible for a man to overcome Satan’s power and conquer it, said in Bhagavad-Gita, Vignana Yogam, verse 14. Here may get a doubt. How does a man go to God when Satan's power is so great that man cannot overcome it? Why attempt and fail? If man completely trusts God and continues his endeavors knowing he cannot stand before Satan, God himself will pull him away from Satan to his side. Therefore, if the tiniest human wants to defeat Satan, the only way is to surrender to God completely. <b>“Maya metam tarantite,”</b> said in Bhagavad-Gita about the one who completely trusts God. That means <b>“I will get him out of Maya.”</b> Therefore, God can save man from Satan if he puts his complete trust and burden on God. 

    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 77,
      verse: `<b>(12)	The Gospel of Luke, 21st chapter, 15th verse.</b>  
    `, meaning: ` <b> 
    (15) I will give you words and wisdom that none of your adversaries will be able to resist or contradict.       </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
     
    When young children who know some wisdom question the teachings of renowned preaches and gurus in the world, they will not get an answer in their teachings. Therefore, the preachers put a rule that no one should question their wisdom in the world. The main reason for the lack of answers in their teachings is that it is not scientific. Unscientific teachings cannot answer rational questions. They keep teaching but do not answer if asked. When Paramatma incarnates as Bhagavan, he teaches the true Paramatma’s wisdom. Hence, those who know the wisdom told by Bhagavan can teach and answer if anyone asks any question. Seeing Bhagavan’s devotees, who know Paramatma’s wisdom, adversaries come to them with the ego that they are gurus and gnanis and speak contradictorily. At such a time, the wisdom which adversaries cannot speak against was already told to devotees. The word of God says that many are jealous and increase rivalry against those who know true wisdom.
Even when God came down, the adversaries confronted him and said, “You don’t know wisdom yet and go to a specific place to learn genuine wisdom.” Some people on earth came to me and said that I do not know the wisdom. Such people will also come to you. God said in the above verse that he would give you the wisdom to answer them.
    </span>
    `
    },
    {
      chapterName: "The Gospel of Luke",
      chapterNumber: 4,
      pageNumber: 78,
      verse: ` <b>(13)	The Gospel of Luke, 21st chapter, 17th verse. </b>  
    `, meaning: `<b> 
    (17) Everyone will hate you because of me.      </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The wisdom that Bhagavan, the Son of God, revealed is against the people whom Satan possessed. The ordinary people have a chance of misunderstanding the wisdom. It also appears to be entirely against preachers and gurus, who have some wisdom. Pandits, preachers, and gurus do not like the words of those who preach the name of God. They and the people who follow them begin to hate those who preach God’s path because they find God’s words contrary to them. Hence, God said in the above verse, 
    <b>“Everyone will hate you because of me.”</b>
    </span>
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 79,
      verse: `<b>(1)	The Gospel of John, 1st chapter, 1st verse.</b>   
    `, meaning: `<b>(1) In the beginning was the Word, and the Word was with God, and the Word was God.</b>`, pageText: ` 
        <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
        The Gospel of John has 21 chapters. Here I write an explanation for only some of the verses in the Gospel of John. I chose verses which humans failed to understand, did not understand correctly, or have the possibility of interpreting wrongly. As this is a part of God’s service, I feel I am just a pen, and God makes me do this work. I previously illustrated some of the verses from the first divine scripture Bhagavad-Gita and the third divine scripture Quran. As it is my deepest desire to explain all three divine scriptures, I illustrate some of the verses from the second divine scripture Injeel (Bible). The wisdom provided here is scientific and genuine. Now we write the first verse from the first chapter of the Gospel of John. The first verse in the Gospel of John contains three short sentences. These three short sentences must be explained to understand the first verse completely.
        <p></p>

        Let us now discuss the first three words of the Gospel of John in the second divine scripture.
        <p></p>
        Word was at the beginning. <br>
        Word was with God.<br>
        Word was God.
        <p>
        In the Bible's teaching, let us call these three verses the beginning verses of the Bible. Others may ask that the Genesis' verses should be called the firsť words of the Bible. We already told you the details. We take the teaching that man needs as scripture and will discuss the first verses from it. According to this method, the Bhagavan Jesus told the four Gospels. Although the Gospel of John was the last one out of four Gospels, it started with the teaching. According to the same principle, we took the 11th verse of the second chapter as the Bhagavad-Gita beginning. Because God's wisdom started from there, we took verses 11th, 12th, and 13th from Sankhya- yogam as the first three sentences. Similarly, the first verses were taken from the 43rd chapter of Injeel (the Bible). We took three verses from the Tourat (Bhagavad-Gita) as the first three sentences. Here, however, we took three sentences from one verse in the Gospel of John as the first three sentences. We did not take three consecutive verses as the first three sentences. The sequence of sentences is not important. We took the ones filled with three meanings as three sentences. Although these are three short sentences, each one of them has profound meaning.
        <br><br>
        These three sentences have subtle meaning. The first three sentences of the Bhagavad-Gita said about Jivatma and Atma. However, the first words of the Gospel of John teach a special meaning. The beginning of the Bhagavad-Gita says about the three parts - Jivatma, Atma, and the body. But the three first sentences of the Gospel of John say about the three aspects - Wisdom, Atma and Paramatma. But in these three sentences, it is not clear where Atma is and where Paramatma is. In these three sentences, the word God is mentioned in two sentences. Except that, wisdom and Atma are not recognizable in the three sentences. Now let us take the first sentence from the three sentences. 
        
        </p>
        The first sentence is <b>Word was at the beginning.</b> Word is produced in a speech. Sound from the mouth comes in a speech. One can hear a sound. Sound may be bigger or smaller. One can say whether a sentence is big or small, depending on the sound that is heard. The sentence may not be in the language you know and can be long or short. One cannot say whether the word (sentence) has been told with a low sound or a loud sound. Let us take the sentence <b>Word was at the beginning.</b> We know that the word was told in the beginning. But humans do not know any language in the beginning. Then the question may arise as to in what language the word was told. To get an answer, let us see what happened at the beginning. 
        <br><br>
        If we ask where the sound came from in the beginning, we can say that the sound heard by man’s ear is from Prakruti. Prakruti consists of five great bhootas - Earth, Water, Air, Fire, and Sky - and each has life. The Sky, which has life, produced the sound at the beginning. Then the question may arise as to how the Sky produced sound when it is void. This question is rational. If we know the answers, then it becomes science. According to Brahma Vidya science, did the Sky itself make the sound? As the Sky is a Jiva, Jivatma is not capable and cannot do anything as per the science. It is Jivatma’s dharma. Paramatma also has a dharma. Paramatma (God) does not have a name, form, and work. This is the first and foremost dharma of God. God is not a man of action; he does not work. According to Jivatma’s dharma, he is not capable and cannot perform any work. God does not do anything, although he is capable. Thus, Jivatma and God have opposite dharmas. In the beginning the word came through the Sky. As the Sky is also a Jiva, it did not make that sound. The sound which came from the Sky is a fact. But the Jiva of the Sky is not capable and cannot produce any sound. So, someone who was behind the Sky may have sounded. God did not make the sound because he does not work. Although the sound which came from the Sky is true, the reason for the sound is neither the Jiva of the Sky nor God. One may get a doubt that there was someone apart from both. 
        <br><br>
        To clarify this doubt, we need to know who are in the universe. God, existing as God, first created Prakruti from him. He created the Prakruti as five parts. Then he created both Atma and Jivatma from him to give mobility to nature because the Prakruti was lifeless. Like himself, God created masculine (Purusha) Atma and Jivatma and made Jivatma the passenger and Atma the driver. He appointed Atma to do all things. In everyone, Atma performs all things in the body, living with Jivatma. God, in his scripture, said that even great gnanis do not know about Atma. Only those trying yogis can know about Atma, said in the Bhagavad-Gita Purushottama Prapti Yogam 11th verse. One should know that Atma is hidden in the body without being known. 
        <br><br>
        If God does not work, some may ask how he made Prakruti, Atma, and Jivatma. My reply is that it is true that God does not work. He said this dharma after he created Prakruti, Atma, and Jivatma. Before creation, God used to work, and God was the only one. There was no one except God before creation. Therefore, God worked before creation. God created the Prakruti. After the Prakruti, God created Jivatma and Atma. Then God created his dharma. God did not work after the creation but worked before the creation. God assigned all the tasks to Atma and decided to get all the tasks done by Atma. Thus, Paramatma ceased doing what he used to do after he created Atma. Atma does all the things which God is supposed to do. Because Atma does all the tasks, Paramatma does not do anything, but he became a witness. 
        <br><br>
        God does not work, Jiva cannot do anything, and Atma does all things. Hence, Atma made the sound from the sky at the beginning. Atma, hiding in the sky, made the sound from the sky. The sound which Atma made became God's wisdom. Hence the sound is called ‘word.’ Word means ‘the sound with a meaning.’ To say that the meaningful sound came from the sky at the time of creation, the sentence <b>“Word was at the beginning”</b> is said. We learned what the word is and who told it. The word was with God’s wisdom. Atma spoke the word in the form of sound. What Atma told from the sky is the first wisdom to the world. Although the sound which came from the sky was wisdom, the wisdom was a loud sound in the form of thunders. It was not in a language that humans could understand. The Sun understood the sound of thunder in the sky. Knowing that it was not an understandable language for humans, the Sun told a man named Manu on the earth in the human language. 
        <br><br>
        God’s wisdom came in the form of unintelligible sound at the beginning of creation. Hence, it is said in the first sentence of the first chapter of John's Gospel that <b>Word was at the beginning</b>. Humans did not know on that day that the sound was God’s wisdom. They understood somewhat when the Sun told it. Krishna told the same wisdom in the form of Bhagavad-Gita. Although Krishna said that it was the same wisdom told at the beginning of creation, man’s attention did not go to the sound of thunders at the beginning. No one knows so far that the sound of thunder is the Bhagavad-Gita’ wisdom. The Sun told Manu the same wisdom that Krishna said. The Sun told the wisdom that came from the sky in thunder. The wisdom from the sound of the sky came from the Atma of the sky. Atma’s wisdom came from the Atma. Atma itself became the wisdom, and the same wisdom came out of the Atma. Thread comes out of the cotton. Similarly, wisdom came out of Atma. Just as the cotton becomes the thread and the thread comes out of the cotton, the wisdom is coming out of the Atma. Cotton and thread are different, but the cotton becomes the thread. Similarly, Atma and wisdom are different, but Atma’s wisdom is coming out of Atma. If the thread is divided, it has cotton wafers. Similarly, if Atma’s wisdom is divided, it has Atma’s system. 
        <br><br>
        In the beginning, God told his wisdom through the sound of the sky. God reveals his wisdom in three ways. One of those methods is the revelation from the sky, as said in Quran 42:51. God told his wisdom through the Atma of the sky at the beginning. Humans did not understand the wisdom that came in the form of thunders because it was not human’s language. Hence, the Sun, who grasped the wisdom in the 
        thunders, told a man on earth in human language. Later it spread throughout the earth. In time, adharmas took the place of dharmas. Hence the wisdom told at the beginning disappeared from humans. Then Bhagavan came in Krishna’s form and told Arjuna in Dvapara Yuga that he was telling the same wisdom that Sun had told. Although the same wisdom is in front of us in the form of Bhagavad-Gita, the first divine scripture, we do not remember that it is the same wisdom which the Sun told. Everyone forgot what happened in the past. 
        <br><br>
        As humans forgot the wisdom sent by God, the first three sentences were told in the Gospel of John 3000 years after Bhagavad-Gita was said. The sentence <b>Word was at the beginning</b> is now understood. It became known that the wisdom in the thunders form came from the sky’s Atma based on the second sentence. Hence, it is said that <b>Word was with God.</b> Further insight tells that the sound of the word was born out of Atma. Just as the twisted thread comes out from cotton fiber, Atma’s mobility became the power, and the wisdom in the energy came out in the form of sound. The thread has cotton fiber. Similarly, the sound of wisdom has Atma’s power. Atma’s wisdom is in the form of Atma’s power and Atma. Hence, Atma’s wisdom and Atma are one and the same. Hence it is said <b>Word was God. </b>
        <br><br>
        So far, we said that God created Jivatma and Atma. God worked before creation. After creation, he empowered Atma to do the work, and he vanished as if he did not exist. God did not do any tasks and made his presence unknown to anyone. After God severed his relationship with the world, he became equal to the one who did not exist. Then Atma had to do the God's works. Atma is doing the tasks of Jivatma and Paramatma, but Atma is unknown to anyone. The above sentences reveal Atma’s entire working process. There were three souls when Paramatma made the creation. After that, only two souls are known. While Jivatma and Atma are in existence, Paramatma is without presence. Therefore, Atma took the place of Paramatma after creation. That is why Atma can also be called God. Although Atma is not God (Paramatma), he is doing God’s tasks, occupying God’s place. 
        <br><br>
        The wisdom of Atma came from Atma. By claiming that Atma is God, it is said <b>Word was with God</b>. This word is correct when we consider Atma to be God. Atma, though not God, must be said to be God. God gave Atma the authority to be God. Thus, when the word (wisdom) is Atma, it can be said that the same wisdom (Atma) is God. Hence, it is said <b>Word was God</b> in the Gospel of John. After answering questions such as ‘What is the word,’ ‘How the word is Atma,’ and ‘Why is Atma said to be God,’ I assume that the meaning of the first three sentences from the Gospel of John 1:1 is completely understood. If one does not understand this after such detail, then Atma’s wisdom will never be understood. If Atma’s wisdom is not understood, then God’s system is not known at all. To know God’s way, one must begin with the wisdom of the word. If wisdom is known, it becomes known that wisdom is Atma, and the Atma is God. 



      <ion-row>
        <ion-col><b>At creation </b></ion-col>
        <ion-col><b>God (Paramatma) </b></ion-col>
        <ion-col><b>Prakriti Atma Jivatma </b></ion-col>
      </ion-row>
      <ion-row>
        <ion-col><b>After creation </b></ion-col>
        <ion-col><b> (Paramatma)</b></ion-col>
        <ion-col><b>Prakriti Atma Jivatma </b></ion-col>
      </ion-row>
      <ion-row>
        <ion-col><b>After creation </b></ion-col>
        <ion-col><b> Atma (God)</b></ion-col>
        <ion-col><b>Prakriti Atma Jivatma </b></ion-col>
      </ion-row>
      God worked at creation and made feminine Prakruti and masculine Atma and Jivatma. God was purusha and made two souls like him. Those two souls are Atma and Jivatma. After God made creation (Prakruti, Atma, and Jivatma), God became a witness to Prakruti, Atma, and Jivatma without any work. As God does not work, it becomes as if there was no God though he exists. Whenever dharmas are threatened, and adharmas become widespread on earth, God sends his soul as Bhagavan to establish dharmas again. God sends his representative to establish dharmas; hence he does not need to work. But Atma does all other work. As God is not in his place after creation, Atma works as God and makes everyone believe in God's existence. After creation, God became useless and remained doing nothing. Hence, it can be said that God does not exist. Atma fulfilled the deficit of God. Atma himself became God to make us unaware of the lack of God. Hence, <b>Word was God,</b> said in the second divine scripture. From this sentence, it becomes known that God and the word are separate. Although the word is not God, the word became God. The sentence <b>Word was God </b>makes it known that the word became God. As the word (wisdom) is Atma and the Atma is God, it is said that the Atma, which is the word, is God. All are mistaken in knowing who God is and who Atma is. 
      <br><br>
      In fact, God is no more after creation. Atma replaced God without knowing that there is no God in the world. Therefore, Atma performs Jivatma’s duties and Prakruti’s duties on one side, and on the other hand, Atma became like God and is in God’s place. After creation, God became one who does not have a name, form, and work. He is nothing and does nothing. It is better to say that such God is not existing than to say existing. As there is no God in God’s place, Atma became God. Hence, <b>Word was God,</b> said in the third sentence. Many are hearing and studying these sentences. However, the mysterious secrete is not known. 
      <br><br>
      To convey the reality about Atma, who is God, it is said <b>Word was God.</b> When Atma, who plays God's role, does any work, it says Jivatma did it, or God did it. Hence, all are convinced that God is there. Some may ask that who has authority over the universe if there is no God. They may also ask whether I am teaching God’s wisdom or atheism. Here is my answer to this question. We said that God is not in God’s place, but we did not say no God. It is not known what God is doing. We said that God does not work. We said that God has no relationship with humans, but we did not say that God is not there. God exists, but he has no name, no work, and no form. So, he has no relationship with humans. Whenever there is a threat to dharmas, God sends his representative to establish dharmas again. He does the work through his representative. Even then, he does not say that he is God. Although God's representative is equal to God, he does not say I am God. He goes with the nickname Bhagavan. No one knows who God is and what qualities God has. Since creation, no one saw God or spoke to God. One can say about anything in the world, but not about God. Therefore, God was called ‘Allah’ in Kruta Yuga. It means that he has no limits and boundaries. God is called ‘Parabrahma’ because he is greater than Atma, who plays all. God is also called Paramatma because he is separate from Atma. God is 
      called ‘Purushottama’ because he is the best purusha than Jivatma and Atma. It is better to admit that neither you nor I know about God. 
      
      
    </span>
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 80,
      verse: ` <b> (2) 	The Gospel of John, 1st chapter, 9th verse.</b>  
    `, meaning: `    <b> 
    (9) The true light that gives light to everyone was coming into the world.       </b>                                   
    `, pageText: `
    
      <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      If there is light in the outside world, it is because of the burning fire. Here, however, the true light is mentioned in verse. The true light is lighted without fire. The light without fire comes into every human, lighting the entire human body from feet unto the head. There is only one such light without fire. That is Atma that came from God and is designated by God, the Creator. Atma provides light of mobility to the entire body. Atma enters the human body, providing the light of mobility throughout the human body. When Atma enters the body, the 25 trillion cells in the human body will be filled with Atma’s light. Every cell has a burning lamp without fire. The light of the lamp has a specific temperature. The human body has a temperature of 98.4 °F because of Atma’s light. When Atma leaves the body, the body becomes cold without any heat. The body without Atma’s light is called a dead body. <b>“Atma is the light, and the body is niche”,</b> said in 24:35. It can be said that Atma, which gives the light to the body, can be called true light. 

      </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 81,
      verse: ` <b> (3)	The Gospel of John, 1st chapter, 10th verse.</b>  
    `, meaning: ` <b> 
    (10) He was in the world, and though the world was made through him, the world did not recognize him.        </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The world (Loka) means something which has experiences. Atma is in humans who have experiences. Atma created all human beings. But humans did not know about Atma. What we need to know a little more here is that Atma and God are different. God created Atma, and Atma made humans. What we need to know from this is that God did not directly create humans. God created the entire Prapancha. But the Prapancha was without any living beings. God, who first made nature (Prakruti), later made Atma. He empowered Atma to produce, rule, and kill human beings. Atma has been creating human beings ever since. Atma became the light and has been sustaining life in human beings. Atma makes human beings die and reborn again. Yet, human beings are ignorant of Atma, which is close to humans, light in humans, and God to humans. Atma is giving birth to human beings; hence it is the father to humans. God created Atma; hence he is the father to Atma. Although Atma is said to be God in some cases, the creator of Atma is true God. Therefore, the man says that the true God is the Holy Spirit and the Atma is the father.
    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 82,
      verse: ` <b>(4)	The Gospel of John, 1st chapter, 11th verse.</b>  
    `, meaning: `  <b> 
    (11) He came to that which was his own, but his own did not receive him.        </b>                                    
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    His own means that all those who were created by him. Atma created humans by the commandment of the Holy Spirit and came to humans in the form of divine wisdom (Word). Even though Atma came to humans in wisdom form, humans think that what they know is great without accepting wisdom.
    </span>
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 83,
      verse: `  <b>(5)	The Gospel of John, 1st chapter, 12th verse. </b> 
    `, meaning: `<b> 
    (12) Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.     </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    All those, who know Atma’s wisdom provided by Atma, will accept Atma. Those who know Atma’s wisdom and believe in Atma have an opportunity to become Atma’s heirs. Hence, “He gave the right to become children of God,” said in the verse. God’s children mean those who know Atma’s wisdom.    </span>
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 84,
      verse: ` <b>(6)	The Gospel of John, 1st chapter, 13th verse.</b>  
    `, meaning: ` <b> 
    (13) Men born not of natural descent, nor of human decision or a husband’s will, but born of God.        </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
            
    All human beings are born of Atma. They are not born of women’s blood, nor of the will of males and females.
        
    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 85,
      verse: `<b>(7)	The Gospel of John, 1st chapter, 14th verse.</b>   
    `, meaning: ` <b> 
    (14) The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.     </b>                                     
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
            
    Atma (Wisdom), the God, was wearing the body, appeared like a human, and lived amid humans, with grace and wisdom.
    </span>
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 86,
      verse: `  <b>(8)	The Gospel of John, 1st chapter, 18th verse.</b>  
    `, meaning: ` <b> 
    (18) No man has seen God at any time; the only begotten Son, which is in the bosom of the Father, revealed him.     </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The word ‘God’ is used for both Atma and Paramatma. In the final divine scripture, the word ‘Allah’ is used for both Gods - Atma and Paramatma. Hence, Muslims could not recognize two Gods. To avoid such a mistake, it is said in the Bible said that Atma is the Father and Paramatma is the Holy Spirit. The begotten Son means <b>the only Son created by God.</b> Paramatma or the Holy Spirit is forever. After creating Prakruti in the beginning, Paramatma created a son called Atma to make all living beings. Atma created all the living beings as per the commandment of the Holy Spirit. Therefore, there is only one Father for all living beings. He is the created-God. 
    The Father of the created Atma is the Holy Spirit. <b>“No one has ever seen God (the Holy Spirit or Paramatma),”</b> said in the verse. The God, the Holy Spirit, does not have form, name, and work. Hence, no one has ever seen Paramatma. Atma, the only begotten Son, reveals the unseen God through his wisdom. Atma is the only begotten Son, who separated from the heart of the Great God, Paramatma. Because no one has seen the Holy Spirit, only Atma can say about his Father, the Holy Spirit. 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 87,
      verse: ` <b> (9)	The Gospel of John, 1st chapter, 51st verse.</b>  
    `, meaning: `
    <b>  

    (51) He then added, “Very truly I tell you, you will see ‘sky opens, and the angels of God ascending and descending on the Son of Man.”  </b>                                      
    `, pageText: `   
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    This is the word which Jesus himself spoke to Nathanael. Jesus claimed that he was the Son of Man. Earlier, Nathanael said to Jesus that you are the son of God. Jesus, however, did not say that he was the son of God, but he reduced himself to the Son of Man. Jesus said that Nathanael and others would see extraordinary things. We said many times in the past that angels of God (God’s servants) are the rulers of the humans in the world. The angels of God are as many as billions in the sky and are called bhootas and planets (grahas). The angels of God came from the sky and bowed down before Jesus because they knew who Jesus was. Human beings do not know who Jesus is. Hence, they do not bow down before him. The same thing is said in Quran, the final divine scripture, in verses 15:28,15:29, and 15:30. Hence, it was said in the verse that you would see bhootas and grahas ascending and descending on the Son of Man as if the doors to the sky opened. Here ascending and descending means coming and going. Descending on the Son of Man means coming to Jesus. When Nathanael said to Jesus that you are the Son of God, Jesus said in verse 50 that you will see greater things than that. This is what Jesus said in verse 51 after verse 50. Because Nathanael had some gnana drushti, he recognized Jesus as the Son of God. Then Jesus recognized the merit in Nathanael and said in verse 51 that with gnana drushti, Nathanael could see greater things, which others could not see with ordinary eyes. The deeds said in verse 51 are visible only to the gnanis. With this verse, those with perception will know who Jesus is.

    </span>
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 88,
      verse: `<b>(10)	The Gospel of John, 3rd chapter, 3rd verse.</b>   
    `, meaning: ` <b> 
    (3) Jesus replied, “Very truly I tell you, no one can see the kingdom of God unless they are born again.       </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The verse should not be understood as it is. It has subtle meaning. God is not visible. Similarly, God’s kingdom is not visible to anyone. Jesus himself said that when a man wants to see and know God’s kingdom, he should be born again. But do not think that he should die and be born again to see God’s kingdom. If so, those who want to know God would have to die. Therefore, it is a mistake to think so. Nicodemus, who thought in that way, questioned like this.  
    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 89,
      verse: `<b>(11)	The Gospel of John, 3rd chapter, 4th, 5th, 6th, 7th and 8th verses.</b>   
    `, meaning: `<b> 
    (4) “How can someone be born when they are old?” Nicodemus asked. “Surely they cannot enter a second time into their mother’s womb to be born!” <br><br>
(5) Jesus answered, “Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit (Atma). <br><br>
(6) Flesh gives birth to flesh, but the Spirit (Atma) gives birth to spirit. (7) You should not be surprised at my saying, ‘You must be born again.’<br><br> 
(8) The wind blows wherever it pleases. You hear its sound, but you cannot tell where it comes from or where it is going. So, it is with everyone born of the Spirit (Atma).” </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    
    When a man dies and is reborn, it is called rebirth. If the rebirth happens physically, all organs of man will change. If that happens, the desire to see God and God’s kingdom will also vanish. The body should not die to keep the organs and ambitions as they are. The body contains both wisdom and ignorance. But the ignorance in the body should die completely. When a man gets rid of ignorant thoughts and desires, he is considered dead in ignorance and born of wisdom. One who gets rid of ignorance and gets wisdom can be said to be born of Atma. <b>The duty of man is to know Atma in the body.</b> To know Atma, one must know Atma’s wisdom. When a man knows wisdom for Atma, he is considered born of Atma. When the body dies, man gets new body. But changing own will in the same body without getting a new body is like a new birth. The wind blows wherever it pleases. We hear its sound depending on what it blows. As the wind changes its direction, if a man changes his purpose, it will be a new birth for him. One who desires Atma knows Atma in the same body and the same life. There is no need to go to another life to know Atma. 

    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 90,
      verse: ` <b>(12)	The Gospel of John, 3rd chapter, 13th verse. </b>  
    `, meaning: ` <b> 
    (13) No one has ever gone into Paraloka except the one who came from Paraloka —the Son of Man.
     </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Ihaloka (Bhuloka), heaven (Swarga-Loka), hell (Naraka-Loka), and Paraloka are the names of the four worlds. The world (Loka) where we all see and live is called Ihaloka. Heaven and hell are not separate worlds, and both are on the earth. Loka is neither a kingdom nor a territory. The place to be experienced and the time to be experienced together are called loka. The place at the time of experiencing hardship is called Yamaloka or Naraka-Loka or hell. Similarly, the place at the time of experiencing happiness is called Swarga-Loka or heaven. Since these two experiences 
    (hardship and happiness) are on earth (Bhuloka), it can be said that this world (Ihaloka) is heaven and hell. But Paraloka is different from hell and heaven. Both hell and heaven have experiences, but Paraloka does not have any experiences. The state in which there is no experience is called Paraloka. When a man gets out of karma, he does not experience any happiness and sorrow. Such people will receive Paraloka. It is called the state of being in God or Mukti or Moksha. A man who is in Ihaloka (world) is always tied to bad (sin) and good (punya) karma. Whoever is in Paraloka will not have any karma. If a person dies in the Ihaloka, he cannot go into Paraloka but returns to the Ihaloka. Also, whoever is in Paraloka, whenever he comes into this world for necessity, he will go back to Paraloka. Therefore, although the resident of Paraloka who came from Paraloka stays in this world for some time according to his will, he will later enter Paraloka. Hence, <b>“No one has ever gone into Paraloka except the Son of Man who is in Paraloka,”</b> said in the verse. It can be said that the one who is in Paraloka is God. Even though one who became God is born as a man, he will again go to Paraloka. The same thing is said in John 3:13. 
    
    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 91,
      verse: ` <b> (13)	The Gospel of John, 3rd chapter, 15th verse.</b>   
    `, meaning: `  <b> 
    (15) That whosoever believes in him should not perish but have eternal life.       </b>                                    
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Everyone who believes in God will receive eternal life without death. Paramatma is spread out in the body and outside the body. <b>When Jivatma joins Paramatma, it can be said that Jivatma obtained Paraloka. It can also be said that Jivatma received eternal life (moksha).</b> Paraloka can also be called the kingdom of God. “Whoever believes in God will eventually be free from karma and receive eternal life,” said in the verse. Wherever you are, Paraloka (eternal life) also exists there. Therefore, whoever obtains moksha, he unites with the Holy Spirit (Paramatma) in his body. 

    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 92,
      verse: `<b>(14)	The Gospel of John, 3rd chapter, 17th verse.</b>   
    `, meaning: `<b>  
        
    (17) For God did not send his Son into the world to judge the world, but to save the world through him.     </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    God sends his Son, who is a man, into the world. The Son of God saves humans but does not judge them. God sent his Son to save humans but not to judge. The responsibility of the man who came from God is to teach God’s wisdom to humans and save them from their sins. He did not come to judge papa (sin) and punya of human beings. God did not send his representative to earth for judgment. God came to save people but did not come to judge. This verse is crucial in the Bible. Atma judges a man when he dies. Atma does the task of judging humans, and the one from God teaches them the plan to escape from karma.
    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 93,
      verse: `<b>(15)	The Gospel of John, 3rd chapter, 18th verse. </b>   
    `, meaning: `<b> 
        
    (18) Whoever believes in him is not judged, but whoever does not believe stands judged already because they have not believed in the name of God’s one and only Son.    </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
     
    ‘One who believes in him,’ said in the verse. Here ‘He’ can be understood as invisible God or the visible God’s representative who came from God. ‘They have not believed in the name of God’s one and only Son,’ said at the end of the verse. Hence it should be understood that this verse says about God’s representative, who came from God. Disguising as a man, God himself comes on earth to teach wisdom to humans. But he said, <b>“I am the Son of God, or the Son of Man or God’s one and only Son,”</b> so as not to recognize him. Hindus called Bhagavan when God disguised and came to earth as a man. Krishna is the one who came like that. Hence, he is called Bhagavan in Bhagavad-Gita. Although Jesus, who is the Son of God, appeared as a man, he should also be called Bhagavan. When God incarnates as a man on earth, Hindus call him Bhagavan, and the Christians call him the Son of Man. Although it is said in final divine scripture 15:28,29,30 that <b>God sends his representative by breathing his soul into him,</b> Muslims say that God does not come as a man. Whoever does not have faith in God’s representative, the son of God, is already judged. 

    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 94,
      verse: `<b> (16) The Gospel of John, 3rd chapter, 19th, 20th, 21st verses.</b>   
    `, meaning: ` <b> 
    (19) This is the verdict: Light has come into the world, but people loved darkness instead of light because their deeds were evil.    <br><br>
    (20) Everyone who does evil hates the light and will not come into the light for fear that their deeds will be exposed.
    <br><br>
    (21) But whoever lives by the truth comes into the light, so that it may be seen plainly that what they have done has been done in the sight of God.           </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Paramatma, who is unknown to anyone, is the darkness. Atma, created by him, is the true light. Paramatma has created two sons – an unseen soul which is the light of the body, and another soul with the body lives as a man among humans. Atma, who is unseen and the light of the body, is called Son, and another Atma, who comes looking like a man, is specially called <b>the only begotten Son</b>. Jesus, the only begotten son, came on the earth. Yet, because their deeds were evil, they loved their own darkness without coming to Jesus, the light of wisdom. 
    <br><br>
    Every ignorant man hates God’s representative who gives <b>wisdom light</b> to the world. They are afraid that their evil deeds will come to light when they come to God’s representative. Hence, they do not come to the light to hide their deeds. The Ignorant people, who think that God’s light, which is in human form on the earth, will expose their dark evil deeds and thus they will remain evil on earth, will not come to the Son 
    of God when he comes upon the earth. Those who walk according to God’s wisdom know that Atma does all their deeds in the body. They come to God’s Son because all their deeds are in <b>God’s light (according to wisdom).</b> Very few on the earth know that Atma, who is God, does all their deeds. Therefore, very few come to him when the Son of God comes upon the earth. Because the earth is filled with those who think that they themselves are doing all the deeds, they will not come to the Son of God (Bhagavan). Not only do they not come to the Son of God, but they also hate and insult God’s representative, who rarely comes upon the earth. They not only insult the Son of God but also make him suffer many hardships. 
              
    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 95,
      verse: ` <b>(17)	The Gospel of John, 5th chapter, 19th verse.</b>    
    `, meaning: ` <b> 
        
    (19) Jesus gave them this answer: “Very truly I tell you, the Son can do nothing by himself; he can do only what he sees his Father doing, because whatever the Father does the Son also does.
    </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    In this verse, it is not only mentioned ‘Father and Son’ but also said ‘The Son will do the things which the Father does.’ Notably, one should understand ‘Who is the Father and who is the son?’ Because the Holy Spirit (God) is the only one. Although God has only one eternal Son, he has another Son who occasionally comes upon the earth. It is necessary to know which son the verse said about. The verse John 3:17, <b>“For God did not send his Son into the world to condemn the world, but to save the world through him,”</b> said about God’s son who came upon the earth. This verse says about the Son, Atma, who is the light of the human’s body. Atma is eternal on the earth, providing <b>‘the light of mobility’</b> to everyone’s body. The verse John 5:19 said about Atma. In this verse, God speaks of his eternal Son, Atma, saying that Atma does what the Holy Spirit does, and does nothing of his own, and does inherited tasks what his Father does. 

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 96,
      verse: `<b> (18)	The Gospel of John, 5th chapter, 20th verse.</b>    
    `, meaning: ` <b>   
    (20) For the Father loves the Son and shows him all he does. Yes, and he will show him even greater works than these, so that you will be amazed.    </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When we question who said <b>“Paramatma (the Holy Spirit) loves the Son and shows him all he does”</b>, Jesus, the second Son of God, told his disciples this when he was on earth. No one can recognize the son of God when he is on the earth as a man. Human beings could not grasp who Jesus was; Some subjected him to many sufferings and humiliations and became responsible for his death. God’s only begotten Son, named Jesus, was in the middle of such men and said, <b>“He will show him (Atma) even greater works than these so that you will be amazed.”</b> God commanded Atma to rule over the Jivas and showed greater things. Let us see what those great things are. 

    </span>
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 97,
      verse: `<b>(19)	The Gospel of John, 5th chapter, 21st, 22nd, 23rd verses. </b>    
    `, meaning: `<b> 
    (21) For just as the Father raises the dead and gives them life, even so the Son gives life to whom he is pleased to give it.
<br><br>
(22) Moreover, the Father judges no one, but has entrusted all judgment to the Son.
<br><br>
(23) That all may honor the Son just as they honor the Father. Whoever does not honor the Son does not honor the Father, who sent him.    </b>                                       
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    There is something to notice here. Although there is mention of <b>‘two Allahs’</b> in the Quran, Muslims could not find it. Similarly, there is mention of <b>‘two Sons’</b> in the Bible. But Christians could not understand it and talk about only one Son. All these three verses have the word ‘Son.’ One needs to know which of the two Sons is mentioned in these verses. Many are not able to understand that there is a second Son, because only one Son at a time is mentioned in a verse. God said, <b>“For God did not send his Son into the world to judge the world, but to save the world through him”</b> in John 3:17 and <b>“Father has entrusted all judgment to the Son”</b> in John 5:22. Based on this, one should understand that God has two Sons. 
    <br><br>
    God said about Atma, “As the Father, the Holy Spirit, raises the dead and gives them life, the Son also raises the dead and gives life.” Like how the Father raises the dead and gives life, Atma decides man’s next life experiences after death based on sin and punya in the man’s past life. Hence, “Like the Father, the Son gives life to whom he is pleased,” said in the verse. <b>‘Whom he likes’</b> means <b>‘those who are determined by karma’</b> in Atma’s perspective. Atma, who is hidden and the light in the body, decides the next life’s karma. As Atma is the one who makes the born man experience karma, “He will resurrect the one he judged,” said in the verse. ‘To resurrect’ means ‘to make born again.’ 
    <br><br>
    God gave Atma the power to judge the dead and to bring them back to life so that everyone could glorify his Son, Atma, just as everyone glories the Holy Spirit as great God. At the very moment of man’s death, Atma, the light in the body, determines the karma for the second life based on man’s past life sin and punya and immediately takes him to the second life. Atma decides second life based on the man’s karma and gives him life again. Those who do not know that Atma does such great things do not see Atma with great respect. One who does not respect Atma will not respect God who sent Atma. Such ignorant respect neither Atma, which is in his body, nor Paramatma, which is inside and outside of the body. 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 98,
      verse: `<b>(20)	The Gospel of John, 5th chapter, 24th verse.</b>    
    `, meaning: ` <b>  
    (24) Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.
      </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Previously, verses 21, 22, and 23 mentioned the Atma, who is mobility in the body. It is said in the verse 24 about the Atma, which came in human form with the name Jesus. Whoever believes in the Holy Spirit who sent Jesus, the only begotten Son, will attain moksha. Such a person attains moksha without coming into judgment immediately after his death.    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 99,
      verse: ` <b> (21)	The Gospel of John, 5th chapter, 26th verse.</b>   
    `, meaning: ` <b> 
    (26) For as the Father has life in himself, so he has granted the Son also to have life in himself.        </b>                                       
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    God, the Holy Spirit, is forever eternal. Just as Paramatma is eternal, so Atma, his son, is given authority to be eternal forever. The Holy Spirit, the Father of Atma, gave that authority. In the first divine scripture, Jivatma is called Kshara and Atma is called Akshara. Kshara means destroyable soul and Akshara means undestroyable soul.

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 100,
      verse: ` <b> (22)	The Gospel of John, 5th chapter, 37th verse.</b>   
    `, meaning: ` 
    <b>   
    (37) You have never heard his voice nor seen his form.   </b>                                     
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Here so-called Father is Paramatma or the Holy Spirit. There is no name, form, and work for the God called Paramatma. No one has seen such God. How can you see when he has no form? So, humans in the world have never seen God. He does not speak to anyone because God does not work. Based on this, it can be said that no living man has seen God. If anyone says that I have seen God, it can be counted that he is lying. God is neither visible nor speaks.
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 101,
      verse: `<b>(23)	The Gospel of John, 5th chapter, 38th verse. </b>    
    `, meaning: `<b> 
    (38) Nor does his word dwell in you, for you do not believe the one he sent.       </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    
    Although the first creator, the Holy Spirit, does not work, he has some things to do. However, he does not do things. But God, Paramatma, appointed his servants to do his work. The millions of servants, who are part of his rule, are doing all his work. Although God does not work, his servants do all the tasks he is supposed to do. But Paramatma has an important work to do. God himself should teach divine wisdom. Servants will not do that work except God. <b>“God should teach God’s wisdom because no man knows God’s wisdom except God,”</b> also said in the final divine scripture. God comes in disguise and teaches the wisdom of God. As teaching wisdom is 
    something that no one can do, God comes in disguise as if he were not God and teaches God’s wisdom. Although God tells in disguise, it is as if God did not say because no one knows who is in disguise. Even though God tells his wisdom, it is not recognized as God told. As God is wise, he comes in the disguise of <b>‘Bhagavan’</b> and tells God’s wisdom. 
    <br><br>
    Although God himself comes as a man upon the earth in disguise and teaches wisdom, he will say that he will send a special man from him so that no one would know the matter. “One who comes from God will teach God’s wisdom,” said God himself in his divine scriptures. Based on this, everyone assumes that the one sent from God tells God’s wisdom. Because of that, God’s incarnation is unknown to anyone. Although God came as man in Treta Yuga, no one recognized. In the Dvapara Yuga, God came as a man and told Bhagavad-Gita and said ‘I am God’ in the Bhagavad-Gita, but no one recognized. Although God came as Jesus in Kali Yuga, no one recognized him as God and caused many troubles. No one realized that he was the real God. Some, who claimed themselves to be God’s believers, said that Jesus was the Son of Man, not knowing that he was really God. Some said that Jesus was the Son of God, but they did not recognize him as God. 
    <br><br>
    Although Jesus himself was God, he said, <b>“You did not believe the one he sent”</b> in this verse without revealing who he was. He said that you did not believe the one he sent. According to this, no one believes that man is God. You have no faith in the man God sent. Hence Jesus said, “God’s word did not live in you.” If there is no faith in the man God sent, why did God’s word not live-in humans? One who came is God and one who told wisdom is God, hence God’s word does not live in those who do not believe in him. The reason is that one who came is God, and one who told wisdom is God; hence God’s word does not live in those who do not believe in him. 

    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 102,
      verse: ` <b>(24)	The Gospel of John, 6th chapter, 25th, 26th, 27th verses.</b>    
    `, meaning: ` <b> 
        
    (25) When they found him on the other side of the lake, they asked him, “Rabbi, when did you get here?”<br><br>
    (26) Jesus answered, “Very truly I tell you, you are looking for me, not because you saw the signs I performed but because you ate the loaves and had your fill.
    <br><br>
    (27) Do not work for food that spoils, but for food that endures to eternal life, which the Son of Man will give you. For on him God the Father has placed his seal of approval.”    </b>                                       
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    In this verse, it is said that food is of two kinds - destroyable food (food that spoils) and undestroyable food (food that endures). Most humans on earth are looking for destroyable food. Hence, when the crowd came looking for him and asked, “When did you come here?”, Jesus replied to them, <b>“You are not asking for God’s wisdom. You are looking for me, hoping for the loaves of bread.”</b> Furthermore, Jesus said, “Do not toil for destroyable food.” The food that we eat every day is ‘destroyable food.’ When food is eaten, it will be digested in three hours. Digestion means destruction. 
    Whatever the food we eat, it must digest in the stomach. The purpose of the digestive organ is to destroy food. Every food is destroyed in the stomach. There is nothing that is not destroyed in the digestive tract. Food is destroyed in the digestive tract and turns into waste. It is like burning wood into ashes. 
    <br><br>
    The food that man puts into the stomach by mouth can be said destroyable food. Similarly, man puts wisdom into his head through his ears. The wisdom that enters the head in the form of words is called undestroyable food. It can be said that <b>the only food that cannot be destroyed is God’s wisdom.</b> If anyone <b>reads or hears God’s wisdom,</b> it was as if he had put undestroyable food into his head. The Son of Man gives you the undestroyable food. Hence, <b>“For on him God the Father has placed his seal of approval,”</b> said in the verse. God decided and sent his begotten Son to tell his wisdom. Hence, “God’s decision” or “God’s consent” is written as ‘seal of approval’ in the verse. “God did not reveal his wisdom to any human being,” said in the Quran. Based on this, it becomes known that the one who teaches God’s wisdom is not an ordinary man. God said that no one knows God’s wisdom except God. Therefore, it becomes known that the one who comes as the begotten Son to tell God’s wisdom is God. The word “the Son of God” is said merely to fool humans. It can be said that ‘Son’ means ‘God’s disguise.’ God should not come as God and speak to human beings; hence God said that he came as the Son. The following verse shows what I said is true. 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 103,
      verse: `  <b> (25)	The Gospel of John, 6th chapter, 32nd verse. </b>   
    `, meaning: ` <b> 
    (32) Jesus said to them, “Very truly I tell you, it is not Moses who has given you the bread from paraloka, but it is my Father who gives you the true bread from paraloka.
    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    <b>“Moses did not give you the bread of wisdom from paraloka,”</b> said Jesus in the verse. If so, is the Dharma Shastra told by Moses false? Is there no wisdom with dharmas in Moses’ Dharma Shastra? If what Moses told is not true God’s bread, why is it called Moses’ Dharma Shastra? One may get many such questions. In one way, the statement that what Moses told is not Dharma Shastra is false. In another way, as God said, it can be said what Moses told is not Dharma Shastra. It is also true that Moses did not give you the undestroyable bread from paraloka. Many questions and doubts will arise in this verse. When these doubts here are solved with proper answers, one can understand the real divine wisdom. 
    <br><br>
    Prophet Moses is familiar to Christians. Many Muslims do not know that the word ‘Moses’ in the Bible transformed and became ‘Musa’ in 1400 years. One should know that the names Moses and Musa are the same. If anyone says that Moses did not tell the Dharma Shastra, it can be said that the statement is true. In another way, it can be said that the statement is false. There is a strong reason unknown to anyone to say it both ways. Some people will be surprised to know that. Some may even oppose my word and say that it is false. This is true, no matter what anyone thinks. About five thousand years ago, the prophet Moses told the wisdom that he knew. One who tells God’s wisdom is called a prophet. So, the people called Moses a prophet. 
    Moses had divine thoughts from a young age. When Moses was 20 years old, the <b>Bhagavan</b>, who descended upon the earth at that time, gave the first divine scripture, <b>‘Taurath’</b> to him. Since then, Moses used to tell the wisdom from that scripture. 
    <br><br>
    As all the wisdom that Moses told adhered to dharmas, it is called Moses’ Dharma Shastra. Moses died when he was 54 years old. As soon as Moses died, the Bhagavan got into his body and told the dharmas, which Moses never said, for nine years. The Bhagavan also left Moses’ body at 63 years of age. As no one knows this, everyone thought that the Prophet Moses lived for 63 years. Similarly, they thought that the Prophet Moses himself taught the dharmas. God gave the divine scripture to Moses but did not directly give him wisdom. Hence, “Moses was not given the bread from paraloka,” said in the verse. Because God taught the dharmas from Moses’ body, the wisdom God told is called Moses’ Dharma Shastra. Hence, “The Father of paraloka, the Holy Spirit, gave true bread,” said in the verse. Moses’ life span was 54 years, and no one knew that God extended Moses’ life to 63 years. All these mysterious things are explained in my scripture, <b>‘Krishna Musa.’ </b>

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 104,
      verse: ` <b> (26)	The Gospel of John, 6th chapter, 46th verse.</b>    
    `, meaning: `<b> 
    (46) No one has seen the Father except the one who is from God; only he has seen the Father.        </b>                                     
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    It is not difficult to comprehend this verse. Reading the Bhagavad-Gita, the Bible, and the Quran in full, it becomes known that the verses in the final divine scripture have subtle meaning. The verses in the Quran have so much subtility when compared with other divine scriptures. Hence, these verses have a meaning unknown to anyone. The Bible verses seem to be easy to understand. Although the verse is easy, many do not understand the reality of it. Hence, God is giving you the detail of every verse through us. 
    <br><br>
    God, the Holy Spirit, exists before creation and after creation. He is the first God. No human knows what God is or how he looks. The first God is called Allah in the final divine scripture, the Quran. The second God, Atma, is also called Allah. Therefore, Paramatma is the first Allah, and Atma is the second Allah. Paramatma is called God in the second divine scripture, the Bible. The second God, Atma, is addressed as the Father. One should know that the Holy Spirit is the Father to Atma and Atma is the Father to humans. It is said in the Quran that Both Paramatma and Atma are Gods. In the Bible, one is called God and the other one is called the Father. One should know that the Father of man is Atma and the Father of Atma is the Holy Spirit. No man has seen the Father, said in the verse. Man does not know anything about the Father, Atma. Man has never seen Atma. <b>“Except the one who is from God,”</b> said in the verse. Atma is the only one who came from God. Hence, <b>Atma has seen his Father, the Holy Spirit. Jivatma has never seen his Father, Atma. </b>
                
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 105,
      verse: `<b>(27)	The Gospel of John, 7th chapter, 37th and 38th verses.</b>    
    `, meaning: ` <b>    
    (37) On the last and greatest day of the festival, Jesus stood and said in a loud voice, “Let anyone who is thirsty come to me and drink.”    <br><br>
    (38) Whoever believes in me, as Scripture has said, rivers of living water will flow from within them.       </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The verse has some subtle meaning. It is natural for a thirsty man to drink water. The quest for water is called thirst. Hence, the <b>quest of those who want wisdom</b> is compared to thirst. “Whoever is thirst of wisdom should come to me and quench their thirst,” said in the verse. If anyone goes to Jesus and gets divine wisdom, it is as if they quenched their thirst of <b>wisdom</b> from Jesus. Whoever believes in Jesus will know complete divine wisdom, become a treasure of wisdom, and teach others wisdom. To say this, Jesus said rivers of living water would flow from within them. <b>Living water means divine wisdom</b>. Wisdom brings moksha to man and always keeps him in the same state. Hence the wisdom is called living water. Man fills the stomach by drinking water through the mouth. Similarly, man should fill <b>the buddhi with divine wisdom by hearing through the ears.</b> 

            
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 106,
      verse: `<b>(28)	The Gospel of John, 8th chapter, 12th verse.</b>    
    `, meaning: ` <b> 
        
    (12) When Jesus spoke again to the people, he said, “I am the light of the world. Whoever follows me will never walk in darkness but will have the light of life.”        </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    God, the Holy Spirit, to carry out his rule and have his work done by others, specially created Atma. He declared Atma as his Son and gave the power to perform his tasks. Atma got the authority from God to take human beings' lives, judge them based on karma in the previous life and then give them birth again. Atma, which has the authority to judge, behaves according to man’s karma. Because man is entangled in karma and thinks according to karma, Atma does the deeds based on man’s karma. Atma gives ignorance to man because man is seeking ignorance. Therefore, adharmas will increase on the earth after some time. Because Atma teaches ignorance to man, adharmas are forming on earth. 
    <br><br>
    God, the Holy Spirit, must come to the earth as a man to suppress adharmas and preach dharmas when adharmas emerge because of man’s interest and Atma- provided-ignorance. God, who came into the form of man, is called Bhagavan. God himself comes in disguise upon the earth and teaches his wisdom. In order not to know that the one who came is God, it is said that the one who came in human form is called the Son and his Father is God. According to this, there is only one God, the creator, but he has one Son as Atma and another Son who came in human form. When the first Son Atma, who is permanently in humans, develops adharmas, the second temporary Son who comes in human form teaches dharmas. There is only one God, but he has two Sons. The Son who came in Jesus’ form said, <b>“I am the light of the world.”</b> Wisdom turns into fire and burns man’s karma. Jesus has full of such gnanagni. He has full of the light of wisdom. Hence, he said, “I am the light of the 
    world.” Jesus came to teach wisdom to humans. Therefore, whoever follows him, and knows his wisdom, will not walk in the ignorance but wisdom. Hence, he said, “Whoever follows me will never walk in the darkness but will have the light of life.” It is possible only to God who comes in human form to give the light of wisdom and establish dharmas. 

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 107,
      verse: `<b>(29)	The Gospel of John, 8th chapter, 14th verse.</b>    
    `, meaning: ` <b> 
        
    (14) Jesus answered, “Even if I testify on my own behalf, my testimony is valid, for I know where I came from and where I am going. But you have no idea where I come from or where I am going.       </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus looked like an ordinary man. Nothing special can be seen in any man based on outside appearance. Everyone who wears a body made of Prakruti is the same. Jesus also appeared to be an ordinary human being. Elders say that no one knows what kind of snake lives in the termite mound. Similarly, no one knows what kind of jiva is in a body. Every born Jiva is born wearing a body. It is true that every Jiva who comes into a body comes from somewhere. Jiva, who died somewhere on the earth after completing the karma, enters a new body. Atma in the body decides where jiva should be born according to jiva’s karma. An ordinary jiva is judged by Atma and is brought into a new body from the old body by Atma based on the judgment. Although a jiva lives in the body, he does not know where he came from to be born in the new body. Assume a person is now 40 years old. He is on the earth from the beginning of creation. Even so, he did not know when and where he was on the earth since the beginning of creation. He did not remember his past births. In the body, the mind is the organ that remembers everything. The mind that remembers everything also dies when a man dies. Therefore, the memory of any birth is extinct with that birth. Hence, a man who is 40 years now has been on the earth since the beginning of creation. He changed many births since then. But he could not remember any of his previous births because his mind died at the end of every life. He only remembers the last 40 years of the present birth. If the current birth changes, he will not remember anything. 
    <br><br>
    The same thing is happening not only to man but also to every living creature. As Jesus appeared to be an ordinary man, one may think that the same process happens to him as well. Jesus was born in Israel; it means he would have to come from another place. Jesus came from elsewhere and was born in the land of Israel. He was very aware of where he came from. Hence, he said, <b>“I know where I came from.”</b> When a man dies, he does not know where he will be born again. But when Jesus dies, he is very aware of where he will go. That is the difference between Jesus and an ordinary man. One must get a question of what was unique in Jesus. If one knows the answer to this question, then that becomes the best wisdom. It becomes known that Jesus is not an ordinary man and was born for a particular cause. 
    <br><br>
    One who had a reason before birth and is born for that cause is called ‘born for a cause.’ No man has a purpose before birth and will be born for that cause. But God is born with the purpose –<b> Establishing dharmas on the earth</b>. Apart from God, none 
    can establish dharmas on earth. God is forever in the same state. He has no births. He will not be born. Hence, his memory will remain the same. God comes on the earth as a man in disguise, teaches dharmas, and goes. As God is eternal, God has no birth and death. Although God comes in disguise as a man, he is not born after dying somewhere. When a man dies, the mind is destroyed. But God did not die and was not born somewhere. He comes in a unique disguise as a man and does what he wants to do and then goes to the place where he came from. Hence, he said, <b>“I know where I am going”</b> in the verse. 
    <br><br>
    Humans do not know where and how God is. When God comes as a man, no one knows where he is coming from. Although God is born, he is not born like a human being. Like everyone else, he is not born again at some place after dying some other place. The omnipresent God, who is also in the womb, changes his form and appears to be born in a baby's form. Can one say where God came from when he also exists where he is born? Humans, who do not know that God is everywhere, are not aware of where Jesus came from. They also do not know where he goes after he changes his form. Hence, he said, <b>“You have no idea where I come from or where I am going”</b> in the verse. 

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 108,
      verse: `<b>(30)	The Gospel of John, 8th chapter, 19th verse.</b>    
    `, meaning: `<b> 
        
    (19) Then they asked him, “Where is your father?” “You do not know me or my Father,” Jesus replied. “If you knew me, you would know my Father also.”     </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Does God exist? If exists, how is he? Where is he? If you know the answers to these questions, you will know who the Father is and who the Son is. There is only one God, but we should know where the Son came from. The words Father and Son are used many times in the Bible. One should understand that the Father means God. <b>In the Bible, the word the Father was used to say God. God is called Allah in the Quran. In the Bhagavad-Gita, God is called Paramatma.</b> All these different words mean God, although the languages are different. The sense of God should be seen at the word the Father. When Jesus was on earth, the Pharisees asked him where your father was. <b>“You did not see me or my Father,”</b> Jesus replied. The Pharisees did not ask about Jesus, although he was in front of them. They wanted to know who his physical father was. They did not ask with the sense that Jesus’ Father was God. They may have been surprised when Jesus said directly about him and his Father. They thought they were seeing Jesus in person. They asked him to find out who his unknown father was. Then Jesus said, <b>“You did not see me or my Father.”</b> We need to know the meaning of that word. 
    <br><br>
    Jesus’ Father is the Holy Spirit. Atma, the Holy Spirit's Son, is in all the bodies and operates all the bodies. The Holy Spirit (the Father) and the Atma (the Son) are always there. The Holy Spirit, Paramatma, is always there. Paramatma exists since before creation. Atma, the Holy Spirit's Son, is always in the bodies from after creation. 
    <br><br>
    Other than the permanent Son Atma, God (the Holy Spirit) has another Son called <b>“the only begotten Son”,</b> who comes upon the earth occasionally. There are important differences between the permanent Son Atma and the temporary Son, “the only begotten Son.” For example, When Atma comes with a normal human body, the body has a separate Jivatma. Although the entire body belongs to Atma and Atma is the body's head, Jivatma also resides with Atma in the body and thinks that the body is mine. If the temporary Son, the only begotten Son comes upon the earth with the body, there is no Jivatma in that body. In an ordinary man’s body, God and Atma are different. In that body, Atma does everything task and God does not work. But in the only begotten Son’s body, Paramatma (God) resides as Atma and does tasks in Atma’s form. Because there is no Jivatma in the only begotten Son’s body, the one who acts as Atma also acts as Jivatma. Although the one who is Atma in the only begotten Son’s body is God, he pretends to be Jivatma. <b>The one who came in disguise as the only begotten Son is the Holy Spirit (God). That God is acting like Jivatma.</b>There are many differences between God’s permanent Son and the temporary Son. 
    <br><br>
    It can be said that most people do not know that God has a permanent Son and the only begotten Son who comes occasionally. By acquiring wisdom, one can know Atma’s existence and Atma’s wisdom, but it is hard to know the only begotten Son. It is difficult to recognize the only begotten Son among so many humans. Therefore, no one identified the only begotten Son who came in Treta yuga, Dvapara yuga, and Kali yuga. Although Jesus was the only begotten Son of God in the Kali yuga, people could not recognize him as the second Son of God. Although he said he was the Son of God, people could not recognize him and subjected him to many insults and torture. People could not identify those who came in Dvapara yuga and Kali yuga as the Son of God, although they said, “I am the Son of God.” I fear to say the one who came in Treta yuga as the Son of God. That day God himself came in disguise as the Son and told the wisdom on earth. Even though he was known as a Brahma-gnani and taught wisdom, I am also afraid to say that he was Bhagavan because he was portrayed as an evil man among the people. Yet, I do not fear saying, <b>“Ravana Brahma is the only begotten Son. “</b> 
    <br><br>
    In the Dvapara yuga, Krishna came as Bhagavan. Both Bhagavan and the only begotten Son are the same. Because Krishna was portrayed as cunning, many do not know about his greatness until today. Although God came in disguise as a man and told divine dharmas, human beings did not look at the wisdom he taught but mostly focused on how he behaved during the time. Only a few in millions recognized his wisdom and say that Krishna is God, but all the others say bad about him. Those who did not know Krishna’s incarnation in the Dvapara yuga could not recognize Jesus as the Son of God in the Kali yuga. Because Krishna and Jesus thought that humans did not recognize them hence may not recognize the wisdom they teach, they both said in the context of their words, <b>"We are Gods,"</b> believing that humans can recognize their wisdom by saying so. Similarly, Jesus said, <b>“You do not know me or myFather,”</b> with the intention that humans would identify that God and Jesus are the same. 
    Those who say that they have devotion on God speak sarcastically when they see others who have more wisdom than themselves. The Pharisees spoke to Jesus with the same feeling. Knowing that Jesus was born to Mary without a father, they asked, "Where is your father?" Jesus understood that they were asking with a sense of ridicule and not with a sense of devotion. Jesus replied with a mind-blowing answer, <b>“You do not know me or my Father.”</b> Whoever understands the word correctly will know that visible Jesus and invisible God are the same. He also said, <b>“If you knew me, you would know my Father also.”</b> It can be said that those who heard it did not understand what he said. The reason is that if they had realized his word, they would have understood who Jesus was on that day. They would have known that he was not an ordinary man. They treated him like an ordinary man, although Jesus said that word. It seems they knew nothing special about Jesus. 

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 109,
      verse: `  <b>(31)	The Gospel of John, 8th chapter, 21st verse.</b>   
    `, meaning: ` <b> 
        
    (21) Once more Jesus said to them, “I am going away, and you will look for me, and you will die in your sin. Where I go, you cannot come.”       </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus said many words to let people know about him. The above word is one of those words. <b>“I am going away, and you will look for me. Where I go, you cannot come,”</b> Jesus said to the people. It seems there is no greatness in this verse. When a man goes somewhere without informing, we do not know where he has gone. Although we search, we do not know where he will be. When we do not know, it means that we cannot go where he went. You may ask that this is the most common thing and what is wisdom in it. Let us understand it from another angle. At a young age, we used to play the game – thief, and police. In this game, the thief hides somewhere. After a couple of minutes later, the police start searching and should catch the thief. To catch the thief, the police must go to the place where the thief is hiding. If the police cannot go to the place where the thief is hiding, they cannot find the thief even after searching for in other places. When I was ten, we used to play this game. One day when we were playing, I was a thief, and the rest were police. Before hiding, I said “I am going, and you cannot find me.” They said, “We will find you in ten minutes.” Then I said, “Where I go, you cannot come,” and went to hide from them. 
    <br><br>
    Two minutes later, the police chase started. But they could not find me until half an hour. Although they searched all the places, they did not find me. They could not come to the place where I was hiding. I was sitting in the pooja room in the home that day, and I closed the room’s doors. Those who played as police searched everywhere. They also came into the house where I was hiding. But they did not come to the pooja room. They did not search in the pooja room because the doors were closed. As the above verse is equal to the thief and the police game, I thought that there is nothing special in it. Then, I thought a bit about why Jesus said a word without greatness or wisdom in it. The word <b>“You will die in your sin”</b> appeared special to me in the verse. Although it was like a thief and a police game, I came to know that it has great wisdom. Then I learned about this word comprehensively. Here is the meaning of the word. 
    <br><br>
    Jesus was visible to all on earth for some time. Then no one believed Jesus. Yet Jesus showed many great things among men to prove that he was not an ordinary man. To show that he could forgive sins, Jesus gave vision to the blind and walk to the lame. He cured leprosy. He made the dead come to life. Yet, people could not recognize his greatness. People who did not recognize Jesus would begin to search for him to get relief for their suffering after he has gone. Then there is no benefit of looking for Jesus when he is not visible to anyone. Jesus forgave their sins, although no one asked. Many people’s karma was cured because of it. After he is gone, people will still search for Jesus to cure their sins, but he will not appear. Hence, their sins cannot be forgiven, and they die in their sin. People will die because of the sins they suffer. They will not be able to do away with their sins through Jesus even in the next life. Because they do not know where Jesus went. Even if those who did not recognize Jesus when he was among the people will later say that Jesus is great and God, it would not benefit them and their sins will not be forgiven, said in the verse. In advance, Jesus had told all these things to the people. When Jesus said, <b>“I am going away,”</b> no one asked him to stay for a while with us. Additionally, people shouted that he should not be among them and made him die on the cross. 
        
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 110,
      verse: `<b> (32)	The Gospel of John, 8th chapter, verses 23 and 24.</b>    
    `, meaning: `<b> 
        
    (23) But he continued, “You are from below; I am from above. You are of this world; I am not of this world.<br><br>
    (24) I told you that you would die in your sins; if you do not believe that I am he, you will indeed die in your sins.”    </b>                                       
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    In these two verses, the 24th verse seems to be like 21st verse. The 23rd verse is unique. Jesus gave a second chance to the people to know that he was not an ordinary man and said, “You are from below; I am from above. You are of this world; I am not of this world.” This verse is divided into two parts. The first one is, “You are from below; I am from above.” The second one is, “You are of this world; I am not of this world.” Based on the first part of the verse, “You are from below; I am from above,” there were two kinds of people since Kruta Yuga – the below (lower) people and the above (upper) people. There is a reason behind how these two names – the lower and the upper, came into existence. This is how people are divided into the lower and the upper. 
    <br><br>
    The age of Kruta Yuga is 1,728,000 years. During the first thousand years of Kruta Yuga, two tribes - gnanis and the ignorant, formed in the people. There were very few gnanis on earth during that time. The ignorant were innumerable. In that yuga, the world population was only about 30millions. The Indian population was not more than 300,000. The Sun came upon the earth and told divine wisdom to Manu. Two or three persons knew the wisdom from Manu. All other people used to respect these gnanis and learn the divine wisdom from them. In those days, people used to respect gnanis very much. They made gnanis sit on the upper seat and were sitting on the floor, listening to wisdom. It was a custom for people to give the upper seat to gurus and sat down on the floor. In this way, people used to sit on the floor, and the 
    teachers used to sit on the upper seat. Based on this, Jesus said, “You are from below; I am from above.” It means, <b>“I am your teacher (Guru) to you all.” </b>
    <br><br>
    It was common for the teachers to sit on the upper seat and the people, who wanted to know wisdom, to sit on the floor. The teachers used to say to the people that you were below us and we were above you. The teachers who were teaching divine wisdom used to be called the teachers of Brahma Vidya. Brahma means great. Brahma Vidya means great teaching. The teachers who knew Brahma Vidya were called Brahmins. In those days, Brahmins mean teachers. There were two or three teachers in entire India. Those three were called Brahmins. Those Brahmins used to call the rest of the people ‘below (lower) people’. All those who did not know the wisdom were called ‘below people.’ That way, the entire country used to have ‘below people.’ After some time, the caste system began based on this. When the caste system started, those who knew Brahma Vidya began to say, “We are Brahmins.” Similarly, those who were ignorant were called “You are below to us (Maa-diguvavaru).” Thus, two tribes - <b>the upper (Eguvavaru) and the lower (Diguvavaru)</b> - formed. Although the word 'lower (Maadiguva vaaru)' exists even today, people do not know its meaning. Over a period, the word ‘Maadiguva vaaru” transformed into Maadiga caste (scheduled caste). It is now counted as lower caste. 
    <br><br>
    When the caste system started, there were two castes – the Brahmins and the Madiga (Scheduled caste). All those ignorant who do not know wisdom today should be called the Madiga. But even those who do not know wisdom were divided into many castes and whoever leftover at the end of the division is still called the Madiga. Going back to history, the Madiga was not a caste. It was just the name given to the ignorant by two or three teachers. According to this, people belonging to all castes who do not know wisdom can be called the Madiga. People are divided into castes because of unknown history. It is injustice and ignorance to label the rest of the people as the Madiga. Over 2017 years ago, Jesus also used the words upper (Eguvavaru) and lower (Diguvavaru). He said, <b>“You are from below; I am from above”</b> to mean the ignorant. One should understand that the words <b>“Upper (Eguvavaru) and Lower (Diguvavaru)”</b> are used for the sake of saying, “I am gnani; you are ignorant.” 
    <br><br>
    Jesus’ second word is, “You are of this world; I am not of this world.” Loka (world) means having experiences. There are two tribes, according to the experiences a person will experience. Those with experiences belong to this world, and those without experiences do not belong to this world. Ordinary people enjoy every experience in the world. Therefore, ordinary people are the residents of this world. Jesus, who does not have any experience, said that he was not of this world. Although he is like a man, he does not have any experiences like a man. Even though Jesus is in the human body, he is not Jivatma as in others. When he is not a Jivatma, there is no karma. Hence, he does not have experience based on karma. Paramatma specially sent Jesus. In other words, the Holy Spirit came in disguise as Jesus. According to spiritual dharma, we should not say like that. Paramatma specially created and sent Jesus. Therefore, Jesus should be called the Son of the Holy Spirit. As Jesus is not a Jivatma, it can be said that he does not have experiences. If Jesus were Jivatma, he should not be called the Son of the Holy Spirit. Jivatma is the Son of Atma. Atma’s Father is the Holy 
    Spirit. Hence, Jivatma becomes the grandson of the Holy Spirit. Jesus is called God's son, because he is sent from God by God. Jesus was also explicitly called the only begotten Son. Aatma is the Son of the Holy Spirit. The only begotten Son is the temporary Son who descends upon the earth in need. Therefore, the temporary Son becomes the Son of the Holy Spirit like Atma and will not become a grandson like Jivatma. Jivatma gets experiences. Hence Jivatma is from this world that has experiences. Jesus, as Atma, who does not have experiences is not of this world. He is from Paraloka. 
    <br><br>
    Jesus gave the people a second chance to know that he was an extraordinary man and told these verses (John 8:23,24). But humans could not recognize Jesus’ greatness. They counted him as an ordinary man. Therefore, they cannot get rid of their sins by Jesus or by Jesus’ wisdom. Jesus, the Son of the Holy Spirit, came into the midst of men and told many words to recognize him. Jesus told the second time that those who could not find him and believe in him would die in their sin. He gave the first opportunity when he said John 8:21. He gave the second chance when he said John 8:23 and 8:24. Then he gave a third chance and said the last word. Jesus told the people three times three verses to identify him. He warned that the sins of those who have not yet identified him would not be forgiven. Let us see what he said the third time in the following verse. 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 111,
      verse: `<b>(33)	The Gospel of John, 8th chapter, 24th verse.</b>    
    `, meaning: `<b>  
    (24) I told you that you would die in your sins; if you do not believe that I am he, you will indeed die in your sins.
    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    It becomes known that this verse gave the third chance to know who Jesus was. In this verse, Jesus said to the public directly who he was. He said, <b>“Those, who do not believe that I am the Holy Spirit and the Creator, die in their sin.”</b> Jesus himself declared who he was. At first, he said, <b>“I will go away; You can’t come to the place where I have gone”</b> to give some opportunity to know him. <b>“You are of this world; I am not of this world,”</b> said in the second verse. He gave some more detail to understand who he was. It can be known that Jesus is the Holy Spirit with the second verse. In the third verse, he said, <b>“One, who does not believe that I am he, is not able to get out of sin”</b> to give much more clarity to understand him. In the third verse, Jesus declared that <b>“I am God.”</b> Yet, people recognized Jesus as an ordinary man. They could not realize that he was God. Some, however, were surprised at Jesus' words. They did not believe inside but asked him who you were. Jesus said in three verses (John 8:21,22,23) to recognize that he was not an ordinary man. However, they did not realize and asked, “Who are you?” He replied from the first verse in these three verses, <b>“Just what I have been telling you from the beginning.” </b>
<br><br>
In addition, he said, “He who sent me is trustworthy, and what I have heard from him I tell the world.” But people did not realize that he talked about his Father (the Holy Spirit). Although he said so much, people did not recognize Jesus. Some 
treated him as an ordinary man, and some treated him worse than an ordinary man. Jesus said another thing below about him with those persons. 

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 112,
      verse: ` <b>(34)	The Gospel of John, 8th chapter, 28th verse.</b>   
    `, meaning: ` <b> 
    (28) So, Jesus said, “When you have lifted up the Son of Man, then you will know that I am he and that I do nothing on my own but speak just what the Father has taught me.     </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    There is some confusion in this verse with the word <b>“You have lifted up the Son of Man.”</b> One may not understand the word “When you have lifted up the Son of Man.” To understand this word correctly, it should be read as “When people lift Jesus over the head” instead of “When you have lifted up Jesus.” Some may ask, “What is it that people lift Jesus over the head?” The answer is this. It means that <b>Jesus should be understood with the head</b> that is over our body. One who understands Jesus with the <b>intellect (Buddhi)</b> will know that Jesus is the Holy Spirit. Furthermore, it is revealed in this verse that the divine wisdom is being taught by Jesus is not his own, and he is teaching as directed by the Holy Spirit. 
    <br><br>
    Instead of saying that humans should understand Jesus with the buddhi in the head, it is said that people have lifted Jesus. It becomes known that Jesus is Paramatma (the Holy Spirit) if one understands him with the <b>buddhi</b> that is up in the body. As long as people have not understood that Jesus is God, <b>"the sins of the people are not forgiven, and they die in their sin,"</b> said in the previous three verses. If they understand as Jesus said, it becomes known that Jesus is God. The secret becomes revealed that the Holy Spirit incarnates as a man to teach his wisdom. When it is learned that Jesus is God, some may think that Jesus himself is saying all the wisdom that Jesus says. However, it is not possible to say that as some people think. The reason is that after saying, <b>“I am he,”</b> he said another word. Here is what he said. 
    <br><br>
    He said, <b>“I do nothing on my own but speak just what the Father has taught me.”</b> Because of it, it seems that the Father and Jesus are different. A lot of people may get a question why he said in two ways. The answer is that Jesus was a man. God is in the form of power and invisible. The invisible God came as a man. If a man perceives the truth with buddhi that God came as man, he will know that the Holy Spirit and Jesus are the same. But when God comes as man, he should not say “I am God” as per spiritual law. One can know that the visible person is God. However, the known truth should not be revealed openly. Because according to spiritual law, one can perceive when God incarnated as man, but should not reveal. According to the rule, Jesus also said likewise. Therefore, without violating spiritual law, he said, <b>“I do nothing on my own but speak just what the Father has taught me.” </b>
    <br><br>
    Jesus said, “I am saying as the Father said.” Both words – I do nothing on my own, and God does everything – mean the same. When people know that Jesus is the Holy Spirit, their sins will be forgiven. Although it is part of wisdom to know that Jesus is the Holy Spirit, it is spiritually wrong to say that the Holy Spirit is Jesus. 
    Hence, Jesus himself said, <b>“Until you know that I am God, your sins will not be forgiven,”</b> and <b>“I am he”</b> so that humans would know who Jesus was. According to the spiritual law, he finally said that I was doing everything my Father told me to do. Therefore, one should not assume that Jesus said in two ways in the verse. Although it is said in the verse that ‘I am God’ and ‘I am doing what God says,’ one should know that both convey the same meaning. If this is not understood, one may think that Jesus spoke contradictory things. One who knows wisdom can know that God comes as a man. But he should not reveal that a particular person is God. Hence, Jesus also said, ‘I am God’ in a word, and ‘My Father is God’ in another word. Both are true. Additionally, Jesus said the following with the people. 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 113,
      verse: `<b>(35)	The Gospel of John, 8th chapter, 29th verse.</b>    
    `, meaning: ` <b> 
    (29) The one who sent me is with me; he has not left me alone, for I always do what pleases him.        </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    This verse is said to indicate that Jesus and the Holy Spirit are one and the same. To support it, Jesus said, “The one who sent me is with me.” It means that the God who sent Jesus is in him, and the Holy Spirit and Jesus are the same. There is something called ‘interest’ in everyone’s body. Jesus said that he would always do things according to God’s will. In a different way he said that God’s will is working in me. It also means that God’s will is working in Jesus. This is a testimony to the fact that God is in Jesus. Jesus also said the Holy Spirit had not left him alone. It is as if Jesus said that God was with me, and God was me. Jesus himself spoke these words to recognize him as God. Although God came as ‘Jesus’ in the Kali Yuga, people did not recognize him. Therefore, it became necessary for Jesus to say these words to recognize his greatness; otherwise, people do not grasp his wisdom. When Jesus said these verses, some of them believed him.

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 114,
      verse: ` <b> (36)	The Gospel of John, 8th chapter, 53rd and 54th verses.</b>    
    `, meaning: ` <b> 
    (53) Are you greater than our father Abraham? He died, and so did the prophets. Who do you think you are?”<br><br>
    (54) Jesus replied, “If I glorify myself, my glory means nothing. My Father, whom you claim as your God, is the one who glorifies me.  </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Although Jesus said in detail to people to understand him, they do not have the power to understand him and hence asked him, “Who are you?” Jesus replied, “If I glorify myself, my glory means nothing”. Jesus already said about himself five times. If he says more than what has already been said, then his saying seems false. Hence, Jesus said,” If I say differently one more time from what has been said so far, My Father, whom you claim as your God, glorifies me.” Indeed, Jesus’ Father, whom we claim as God, and Jesus are the same. But, according to spiritual rule, one should not say that I am God. Hence Jesus said, “I am God” to make him understand him, but
later, he said that God was his Father. “Just because I told you two things differently, you should not get confused. You should understand me with truth,” said Jesus.    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 115,
      verse: `<b> (37)	The Gospel of John, 8th chapter, 55th verse. </b>    
    `, meaning: `<b> 
        
    (55) Though you do not know him, I know him. If I said I did not, I would be a liar like you, but I do know him and obey his word.     </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus said, “You do not know God, I know God.” Because everyone counted Jesus as ordinary man, Jesus had to say like that. Some got a question, “When Jesus and other people are humans, how come Jesus know God when others do not know God?” If we answer that question, we can say the following. Both Jesus and the others have a similar visible body. It is reasonable to ask how come Jesus knows God when he is like other humans. What we should understand here is that Jesus said since the beginning, <b>“I am he”</b> three times in three different verses. According to the method he stated, Jesus does not have Jivatma in his body although he is a man. There is only one soul, the Holy Spirit. The Holy Spirit, posing as Atma, doing all things in his body. No one knows who Jivatma and who Atma in the body. Because people thought that the Atma is the Jivatma hence, they assumed that Jesus did not know Paramatma. Paramatma himself is in Jesus’ body; hence, it can be said that God is known to him. Because the Holy Spirit himself is consciousness in Jesus’ body, Jesus need not know the Holy Spirit separately. Jesus has God as his consciousness. Humans have the mind as consciousness in their bodies, but they do not have either Atma’s consciousness or Paramatma’s consciousness. They do not know God because they do not have Paramatma’s consciousness. Jesus knows God because he contains God as his consciousness. 
<br><br>
If Jesus says, “I do not know God,” it can be said that Jesus, like man, does not contain God’s consciousness. If Jesus says so, then it becomes as if Jesus was telling lies. Hence, he said “If I said I did not know God, I would be a liar like you.” As the Holy Spirit is in Jesus’ body, there is no pair of souls– Atma and Jivatma. Both Atma, which performs the work, and Jivatma, which experiences, are not in Jesus’ body. As the Holy Spirit is the only one in Jesus’ body, he himself is saying every word. Hence Jesus said, “I am conscious of him. I know him, and I obey his word.” Although Jesus spoke like everyone else, those words came from the Holy Spirit. Though he appeared to be an ordinary man, there was nothing unknown to him. So, when Jesus said about Abraham, who had died a long time ago, people wondered and asked a question. See it below. 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 116,
      verse: ` <b>(38)	The Gospel of John, 8th chapter, 57th and 58th verses.</b>    
    `, meaning: `<b> 
    (57) “You are not yet fifty years old,” they said to him, “and you have seen Abraham!”..<br><br>
    (58) “Very truly I tell you,” Jesus answered, “before Abraham was born, I am!”   </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When Jesus said these words, he completed 32 years of age and entered 33. Abraham lived a long time ago and was like great-grandfather to all. When Jesus spoke of Abraham, the Jews asked him how he was talking about a man who had been born and died long ago. Jesus said, “I have been before Abraham was born.” This seemed like a complete lie to the Jews around him. Everyone knows that Jesus belonged to this generation, and Abraham belonged to another generation. Therefore, his statement is unbelievable. What Jesus said seemed untrue according to the Jews around him. According to indirect truth, what Jesus said was the absolute truth. 
    <br><br>
    Let us see how it is true. Jesus’ body was born 32 years ago. But there is only the Holy Spirit in his body, not Jivatma. If Jivatma were in his body, he would not remember anything that happened in his previous births. Jivatma would not have remembered what happened many years ago. Paramatma is in Jesus’ body and is eternal. He has been existing since before the universe was created. He is the one who created the universe. Atma created all living beings with the command of Paramatma. Abraham was once a man, was born, raised, lived, and died. The Holy Spirit watched as a witness. Atma gave life to Abraham. Paramatma, who is God to everything, watched it as a witness. <b>God is witness; Atma is the worker; Jivatma experiences life.</b> Although Abraham was born by Atma, God, who was watching as a witness, knows all about Abraham. Furthermore, Paramatma completely knows how many times Abraham was born earlier. He also knows how many births Abraham got after that. Hence Jesus said, “I have been before Abraham was born.” 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 117,
      verse: `<b>(39)	The Gospel of John, 9th chapter, 39th verse.</b>    
    `, meaning: ` <b> 
    (39) Jesus said, “For judgment I have come into this world, so that the blind will see and those who see will become blind.”      </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When some people said that Jesus was sinner, the person whose karma was removed by Jesus heard those words and said this to them. Look at the information he told them below. 
    <br><br>
    (John 9:25-38) He replied, <b>“Whether he is a sinner or not, I don’t know. One thing I do know. I was blind but now I see!”.</b> Then they asked him, <b>“What did he do to you? How did he open your eyes?”</b> He answered, <b>“I have told you already and you did not listen. Why do you want to hear it again? Do you want to become his disciples too?”</b> Then they hurled insults at him and said, <b>“You are this fellow’s disciple! We are disciples of Moses! We know that God spoke to Moses, but as for this fellow, we don’t even know where he came from.”.</b> The man answered, <b>“Now that is remarkable! You do not know where he came from, yet he opened my eyes. We know that God does not listen to sinners. He listens to the godly person who does his will. Nobody has ever heard of opening the eyes of a man born blind. If this man were not from God, he could do nothing.”</b> To this they replied, <b>“You were steeped in sin at birth; how dare you lecture us!” </b>And they threw him out. Jesus heard that they had thrown him out, and when he found him, he said, <b>“Do you believe in the Son of Man?” “Who is he, sir?”</b> the man asked. <b>“Tell me so that I may believe in him.”</b> Jesus said, <b>“You have now seen him; in fact, he is the 
    one speaking with you.”</b> Then the man said, “Lord, I believe,” and he worshiped him. Then Jesus said, <b>“For judgment I have come into this world, so that the blind will see and those who see will become blind.”</b> is easy to understand why Jesus said this verse based on what happened earlier. 
    <br><br>
    The purpose of Jesus’ statement is that <b>those who have faith in God can see me.</b> Although they do not know who I am, the faith in God tells them who I am. Although those who do not believe in God look at my physical body and speak to me every day, they do not know who I am. Therefore, Jesus said, “I had come into the world to make the unbelievers not to know that I am God and to make the believers know that I am God.” Although God comes as a man and stand next to and talk to the unbeliever, the unbeliever has so much ignorant blindness that he cannot recognize the Son of God. It means that the unbeliever has blindness called ignorance. Hence, they do not know God, who has come as a man. When Jesus said, <b>“A devotee when sees God’s incarnation (the Son of God), may not know that the person is God based on the outward appearance but know based on the intuition,”</b> some people who were with him heard him say this and asked, “What? Are we blind too? We are seeing you now.” Jesus replied to them like this. 
    

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 118,
      verse: `<b>(40)	The Gospel of John, 9th chapter, 41st verse.</b>    
    `, meaning: ` <b> 
        
    (41) Jesus said, “If you were blind, you would not be guilty of sin; but now that you claim you can see, your guilt remains.   </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    In verse 39 above, Jesus described the difference between those who have faith and those who do not have. Jesus said that any blind who has divine faith could see him, and the unbelievers could see him with eyes but could not perceive who he is. But Jesus said in detail in the 41st verse about those who spoke with <b>worldly sense.</b> A person with worldly sense says, “I am seeing.” Hence, the person gets the karma in the task. God gave man the sight to see his wisdom, but man can see or cannot see. But some use the vision to know God. Some are unable to utilize the sight to know God. They became blind, although they have eyes. When it comes to mundane things, every man is blind in the world. In fact, no one is doing any worldly things. No one has any sight or hearing. Although man does not have anything, he says, “I am seeing” as if he had sight. Hence, the man gets the sin in the deed. Although man is blind, he gets the sin when he thinks he is seeing. Jesus said that when a man knows his blindness and realizes <b>the truth</b> that he has not seen anything, he will have no sin. i.e., When man becomes blind in the worldly affairs, he will not get any sin. 
    <br><br>
    Those who do not know the divine wisdom do not know that they do not have the sight in mundane things. It can be said that they did not understand Jesus’ word because they do not know that God has given sight only to know God related things. To understand the verse, the Jiva in every man should first know whether he is blind or has sight in the body. As a matter of fact, Jiva in everyone’s body is utterly blind in all things. Every Jiva thinks that this is my body, and I am doing all the things in the body. There is no independence for Jivatma in the body. The owner and the head of the body is <b>Atma</b>. Atma is always working in the body. In fact, Jiva is not doing any 
    task in the body. Jiva does not have sight and hearing. He is blind, deaf, and disabled in all ways. As Jivatma resides next to the buddhi in the body, every information that arrives at the buddhi will be known to him. Jiva cannot know anything on his own. He thinks that he himself knows what he knows through the <b>buddhi.</b> Jiva thinks that he has seen everything, although he himself has not seen anything. Similarly, Atma is doing everything in the body, but Jiva thinks that he is doing all those things. Jiva must experience the sin that comes from that deed when he confesses that he has done karma of the task. 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 119,
      verse: `<b>(41)	The Gospel of John, 10th chapter, 18th verse.</b>    
    `, meaning: `<b> 
        
    (18) No one takes life from me, but I lay it down of my own accord. I have authority to lay it down and authority to take it up again. This command I received from my Father.
    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    No one knows when an ordinary person leaves life. If someone dies, he will not return to life. This is what we see in every death. Jiva also leaves the body in death. Most people here do not know that the <b>Jiva is separate from life</b> in a man. Many people think that Jiva and life are the same. <b>“No one takes life from me,”</b> said in the verse. It becomes known that Jesus is different, and his life is different. Although everyone has his life as in Jesus’ body, they will not be able to put their life aside, nor take it up again. In the body, there are many internal organs, life, buddhi, and mind. Anything inside the body is under the control of Atma, not under the control of man. Hence, Atma decides whether to set man’s life aside or send it where Atma wants. Atma does this as its task. <b>Jiva</b> has no relation to the life in his body. But, <b>Atma</b> has a relationship with life in the body. 
    <br><br>
    Jesus is not an ordinary Jiva. He is Atma. Therefore, he can put his life aside. No one can take his life from him. Therefore, it becomes known that <b>Jesus does not die in anyone's hands</b>. If Jesus dies, he himself will have to lay aside his life. He can bring back the life that is put aside in the body. No Jiva can do that. Only Atma can do this work. The Holy Spirit gave authority to Atma to do this work. Hence, <b>“No one takes life from me, but I lay it down of my own accord. I have authority to lay it down and authority to take it up again. This command I received from my Father,”</b> Jesus said. As foretold in this way, when Jesus was crucified, he made his life (prana vayu or breathing) hidden in the body and appeared dead to the people. Jesus, who appeared dead on Friday evening, came out alive in the early morning of Sunday. In this way, Paramatma gave the authority to Jesus to lay his life down and take it back. Atma has the authority to take others' life and send it to the second birth. Because Jesus is Atma, he is empowered to put aside his life and die and come back to life in the same body. That authority was given to Atma by his Father, the Holy Spirit. 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 120,
      verse: ` <b> (42)	The Gospel of John, 10th chapter, 30th verse.</b>    
    `, meaning: ` <b> 
    (30) I and the Father are one.    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Atma is the Father of Jiva. Similarly, Paramatma is responsible for Atma’s birth. Therefore, Atma is the Father of man, and the Father of Atma is Paramatma. As Jesus is Atma, he is the Son of God. If a son <b>always pays attention to his father,</b> then it can be said that the son is united with the father. Here Jesus said, <b>“I and my Father are one,”</b> because he focused on his Father, the Holy Spirit. 
  
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 121,
      verse: ` <b>(43)	The Gospel of John, 11th chapter, 25th verse.</b>    
    `, meaning: ` <b> 
    (25) Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die.”
    </b>                                      
    `, pageText: ` 
        <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
        Here resurrection means birth. Here, life means getting liberated (moksha) without birth. Because both birth and moksha are Atma, Jesus said, “The one who believes in me will not be born after death, attaining <b>moksha</b>.”
        </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 122,
      verse: `<b>(44)	The Gospel of John, 11th chapter, 26th verse.</b>    
    `, meaning: ` <b> 
    (26) Whoever lives by believing in me will never die.       </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The one who has attained moksha once will be in eternal life forever. He will never die. Therefore, Jesus said, “Everyone exercising faith in God will attain moksha and never die again.”
        
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 123,
      verse: `<b>(45)	The Gospel of John, 12th chapter, 25th verse.</b>    
    `, meaning: ` <b> 
    (25) Anyone who loves their life will lose it, while anyone who hates their life in this world will keep it for eternal life.      </b>                                       
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    “Anyone who loves their life will lose it,” said in the verse. Here is the explanation for that. Man (Jiva) lives with life. The one who loves his life in this world (ihaloka) will lose his life because he cannot live forever on the earth. Man is born on earth and live for only a few years. He needs breathing (Prana Vayu) in his body to live life. When he dies, his breathing stops. Once the final breath leaves the body and merges with outside air, it will never return. When a man leaves the first birth and goes to the second birth, he gets the new breath (life) but never gets back the old breath (life). Hence, anyone who wants to live in the world and loves their life will lose it. Everyone loves their life more than anything else. That is why everyone wants to live for some more time but does not want to die. Therefore, it is natural for everyone to love their<b> life. </b>
    <br><br>
    Anyone who does not want to live in this world and desires moksha hates their own life. It means that he does not have any<b> interest in his life</b>. Such a person leaves 
    the life that is ruined in every birth and attains moksha and eternal life. It means that he will receive a deathless life. Jesus said in the verse that such a person will always protect his life. Anyone who has attained moksha does not have any special life like an ordinary person, but it said in the verse that he has <b>eternal life</b> for us to understand. It should be known that anyone who attains moksha will be in the same state of eternity forever without birth and death. 
        
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 124,
      verse: `<b>(46)	The Gospel of John, 12th chapter, 40th verse.</b>    
    `, meaning: ` <b> 
    (40) He has blinded their eyes and hardened their hearts, so they can neither see with their eyes, nor understand with their hearts, nor turn—and I would heal them.    </b>                                      
    `, pageText: ` 
          <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
          When God came as a man and told the people the wisdom they needed, Atma, who is God in the body, blinded their eyes and hardened their hearts so that they can neither see with their eyes, nor understand with their hearts, nor rid of karma which is the cause for their sufferings. In this verse, what is important to note is that Atma created by the Holy Spirit is in everyone's body, running everyone. The Holy Spirit, the Creator, is born as a man to teach wisdom, even though Atma is like the Son of the Holy Spirit. Although the born is the Holy Spirit, he is called the Son of God instead of God. According to this, Atma that is in the body becomes the Son of the Holy Spirit. The Holy Spirit’s incarnation as a human being is also called the Son of the Holy Spirit. Atma in the body blinds the ignorant man's eyes and hardens their heart so that they do not understand the Son of God’s words and cannot get rid of their karma. 
          <br><br>
          The Holy Spirit, the Creator, created the son Atma and kept it in man’s body. He also created another Son in the form of man to teach wisdom to ignorant people. The Atma that is in the human body is always there. The <b>Atma</b> that is in the form of a man occasionally comes on earth to teach wisdom. Although the Atma in the form of man teaches wisdom to a man who is not interested and jealous of the Holy Spirit, the Atma in the body makes his buddhi not to comprehend it. The Atma in the body makes him understand the words of the Atma that come with the body if the person has <b>interest and devotion</b> to the Holy Spirit. The <b>true wisdom</b> of the Holy Spirit is not understood unless one knows the Son, who is in the body, and the second Son, who is with the body. 
      </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 125,
      verse: ` <b>(47)	The Gospel of John, 12th chapter, 47th and 48th verses.</b>    
    `, meaning: ` <b> 
    (47) If anyone hears my words but does not keep them, I do not judge that person. For I did not come to judge the world, but to save the world.    <br><br>
    (48) There is a judge for the one who rejects me and does not accept my words; the very words I have spoken will judge them at the last day.    `
    , pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    It can be said that the one who said this word is the Atma that is in the form of a man. When anyone hears and neglects to comprehend the wisdom told when God 
    comes as a man, the Atma that is in human form does not judge their next life based on bad and good karma after the death. The Atma that came as a man to teach wisdom has not come to judge humans' next life. God (Atma) who came as a man came to reveal his wisdom to the people and save them. There is someone else who judges the next life of a man who does not listen to the words of the Atma that is in human form and does not acknowledge him as great. One should know that such a judge is the Atma who is always in the body. The Atma in the human body decides the next birth on the day of death based on the wisdom told by the Atma in human form. <b>One cannot know the Holy Spirit unless he knows the work of the Atma who is in the body and the Atma (Bhagavan) who comes in the human form. </b>
        
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 126,
      verse: ` <b>(48)	The Gospel of John, 12th chapter, 49th and 50th verses.</b>    
    `, meaning: ` <b> 
    (49) For I did not speak on my own, but the Father who sent me commanded me to say all that I have spoken.<br><br>
    (50) I know that his command leads to eternal life. So, whatever I say is just what the Father has told me to say.  </b>                                       
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    One should know that the <b>Atma (Bhagavan)</b>, who came as a human being, said this word. Jesus, who is God in the form of a human being, said this. Whenever God comes as a man, all his wisdom comes from the Holy Spirit. The one who came in human form said that the Holy Spirit made him tell the wisdom. The wisdom that the Atma (Bhagavan) tells in human form gives <b>eternal life (moksha)</b>. Although the one who came in human form is not known as God, the one who came as a human said, <b>“Whatever I say is just what the Father has told me to say,”</b> to reveal that the one who is talking is the Holy Spirit. With this, it becomes known that the one who is talking is the Holy Spirit. Yet, according to spiritual doctrine, it should be said that the Holy Spirit is the Father, the Atma who came in the human form is the Son. 
        
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 127,
      verse: ` <b>(49) The Gospel of John, 14th chapter, 7th verse.</b>    
    `, meaning: ` <b> 
    (7) If you really know me, you will know my Father as well. From now on, you do know him and have seen him.
    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    This verse is similar to the one (John 12:49, 50) mentioned earlier. As I said earlier, the Father and the Son are the same, yet it should be said according to the spiritual doctrine that the Father and the Son are separate. Jesus said as I said, <b>“If you really know me, you will know my Father as well.”</b> Although God, when he came as a human, is called the Son of God, in fact, the Father himself is in the Son form. Hence <b>“If you know the Son, you know the Father,”</b> said in the verse. 

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 128,
      verse: ` <b>(50)The Gospel of John, 14th chapter, 8th and 9th verses.</b>   
    `, meaning: ` <b> 
    (8) Philip said, “Lord, show us the Father and that will be enough for us.”<br><br>
    (9) Jesus answered: “Don’t you know me, Philip, even after I have been among you such a long time? Anyone who has seen me has seen the Father. How can you say, ‘Show us the Father’?    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    In this verse, it becomes known that the one who has a visible form is the Holy Spirit. Hence, he said, 
    <b>“Anyone who has seen me has seen the Father.”</b>
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 129,
      verse: `<b>(51)	The Gospel of John, 14th chapter, 10th verse.
      </b>    
    `, meaning: `<b> 
    (10) Don’t you believe that I am in the Father, and that the Father is in me? The words I say to you I do not speak on my own authority. Rather, it is the Father, living in me, who is doing his work.   </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When a person is in disguise, he and his disguise are together. Thus, when a rich man is in the disguise of a beggar, both the rich and beggar are together. Being in the disguise of a beggar, the rich man appears to be a beggar. Although the beggar goes into a bazaar and begs, the man who is begging is the rich. The unseen rich man is doing his work in the form of the beggar. As the rich man is in the beggar and the beggar’s words are in the rich man, it can be said that the rich man is in the beggar, and the beggar is in the rich man, and they are together. Because the inside person is more important than the upward appearing person, all the things that are done in disguise are done by inside man. As the person who is inside is more important than the one who appears outside, it can be said that all the tasks done by the person who appears outside belong to the person who is inside. Although he appears to be a beggar, he is the rich person inside. In a way, it can be said that the beggar is, in fact, the rich person. The Holy Spirit, who is in human disguise, is important. One should know that the disguise is temporary, but the soul inside is eternal. It can be said that <b>the one who is in Jesus is the Holy Spirit.</b> Hence, Jesus said, “the Father is in me, and I am in the Father.” 
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 130,
      verse: `<b>(52)	The Gospel of John, 14th chapter, 6th verse</b>    
    `, meaning: `<b> 
    (6) Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.
       </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Based on the previous example, the way to know the rich man is through the beggar. If the beggar is caught, the rich man will be known. If the rich man is known, one can get the wealth of the rich man. Likewise, the way to know God is through the one who came as a human. If anyone knows the one who came as a man, they will also know God within him. If one knows God, he will get eternal life that is in God. Hence, Jesus said on one occasion that <b>I am the way and the truth and the life</b>. Jesus said, “I am the way,” which means <b>to know God through me.</b> He also said, ‘I am the truth,’ which means that <b>I am the true God</b>. Besides, he also said, <b>‘I am eternal life.’</b> The reason for saying so is that the true God in the form of Jesus said that anyone who knows me would gain paraloka (moksha) and get eternal life with no death in the paraloka. 
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 131,
      verse: ` <b>(53)	The Gospel of John, 14th chapter, 16th verse.</b>    
    `, meaning: `<b> 
    (16) I will ask the Father, and he will give you another Advocate to help you and be with you forever.        </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The Holy Spirit does not remain permanently in human form among the people. Occasionally when needed, he changes his appearance and comes into the people. When he came as Jesus, he had lived among the people for only 33 years. He taught wisdom for only three years out of 33 years. Even before completing three years, he left from among the people after only two years and three months. Jesus said, “I will beg my Father to send another Advocate second time, who lives longer than me and teach wisdom.” The one who is coming is the same person as the one who says he begs the one who comes. It is the same one who is coming. It is the same one who said that he would request the one who is coming. It is the same one who said he would send another Advocate (Comforter). <b>There is only one.</b> It is the same one who said, it is the same one who asked, and it is the same one who comes. If we do not know that there is only one, the one who says, the one who asks, and the one who comes look different. If we do not know that <b>there is only one who is playing all the characters,</b> then we do not know the God in front of us in human form, we do not know the God who begs, we do not know the God who comes. We should know that the one, who is begging the Father as Jesus, is the coming Comforter. The coming Advocate is the Holy Spirit. 
    
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 132,
      verse: `<b>(54)	The Gospel of John, 14th chapter, 17th verse.</b>    
    `, meaning: `<b> 
    (17) The world cannot accept him because it neither sees him nor knows him. But you know him, for he lives with you and will be in you.     </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
         
    It can be said that the world (Loka) means that those who experience karma on the earth. When God comes as a human, those who experience karma do not see him and know him. Those who do not recognize him cannot receive him. They cannot recognize God, who came as a man of divine wisdom. They do not even try to know. Only you can know when God comes as a Comforter after me in human form. Because you have some wisdom through me, you will know him. He lives with you. You, who know the Comforter, will live with him, and know that he is within you as Atma.    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 133,
      verse: `<b>(55)	The Gospel of John, 14th chapter, 20th verse.</b>    
    `, meaning: ` <b> 
    (20) On that day you will realize that I am in my Father, and you are in me, and I am in you.       </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Before understanding this verse, one should know the true form of God. God is divided into three parts, spreading all over the world. There is only one God, but he is divided into three souls – Jivatma, Atma, and Paramatma. <b>Jivatma is at one place in the body of all living beings, and Atma has spread the entire body of all living 
    beings. Paramatma is spread inside and outside the body and is spread in every molecule.</b> It can be said that anyone who knows this is a complete gnani. Paramatma, the Creator, comes in human form for telling his wisdom to the people. Then he claims that he is the Son, and the Father is Paramatma. This is all said for the sake of division. But it can be said that both the Son and the Father are the same. God comes in the guise of <b>‘Son’</b> and lives on the earth for his entire life, teaching wisdom. This is the method for teaching the wisdom. According to another method, God sent out an Atma from him to produce, kill, and sustain jivas. It can be said that Atma that runs the bodies of living creatures, is also the Son of God. Atma is in the Paramatma, and the Jivatma is on the premises of Atma. Hence, it is said, <b>‘I am (Atma) am in my Father’</b> instead of saying, <b>‘I am (Atma) in my Father, the Paramatma.’</b> As Jiva is in the body spread by Atma, it is said in the verse, ‘You (Jivatmas) are in me (Atma).’ Atma, who has spread in the entire body, has also spread in you (Jivatma), who is at one place in the body. Hence, <b>“The day when you know the souls’ wisdom, you will know that I am in you,”</b> said in the verse. Those who do not know about the three souls do not know who is in whom. Therefore, <b>it is important to know the Thraitha Theorem of three souls. </b>
        </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 134,
      verse: ` <b>(56)	The Gospel of John, 14th chapter, 25th and 26th verses.</b>    
    `, meaning: `<b> 
    (25) All this I have spoken while still with you.  <br><br>
    (26) But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.    
    </b>                                 
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    On one occasion, Jesus said to his disciples, “While I am still with you, I speak these words.” Moreover, he said that another Advocate would come to you after I passed away. <b>He said that the Advocate, who comes like me, reminds you of everything that he has spoken and teaches everything that he has not spoken.</b> The important thing to note here is that Jesus said the name ‘Advocate.’ Describing what the Advocate means, he said, <b>‘Advocate is the Holy Spirit whom the Father will send in my name.’</b> If you notice the verse carefully, it has ‘the Father’ at the beginning and ‘the Holy Spirit’ at the end. It can be said that Jesus’ father is the Holy Spirit. We are saying that the one in disguise is the Son and the one not in disguise is the Father. In fact, both are the same. <b>The one who treats people with wisdom and removes their karma is called the Advocate (Comforter)</b>. To say that God is the one who sends God in the name of the Advocate, Jesus said, ‘The Father is the Holy Spirit who will send in my name.’ It becomes known that God takes the form, <b>comes in the guise of the Advocate, and teaches his wisdom.</b> It should be known that he said this word so that even those who do not know this matter would know. 

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 135,
      verse: ` <b> (57)	The Gospel of John, 15th chapter, 23rd verse. </b>    
    `, meaning: `<b> 
    (23) Whoever hates me hates my Father as well.    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    I have been saying this from the beginning. God is disguised in the form of Jesus. The name given to God’s disguise is Jesus. In fact, there is no one except the Holy Spirit that came in Jesus' name. Therefore, anyone who blasphemes Jesus is also blaspheming Paramatma. Jesus is also the Advocate. Whenever God comes in human form, he should always be called the Advocate. <b>The Advocate teaches the wisdom that cures karma.</b> God is the only one who teaches wisdom that destroys karma. Hence, it can be said that the Advocate is the Holy Spirit. But it is challenging to identify God when he has come to earth as a human being. Therefore, those who claim to be gnanis in Christianity today call Jesus brother. Jesus is not a brother to anyone. Even if he comes as Jesus or by another name, he is the Holy Spirit, so he becomes father but not brother. 
   
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 136,
      verse: `<b> (58)	The Gospel of John, 15th chapter, 24th and 25th verses. </b>    
    `, meaning: ` <b> 
      
    (24) If I had not done among them the works no one else did, they would not be guilty of sin. As it is, they have seen, and yet they have hated both me and my Father.    <br><br>
    (25) But this is to fulfill what is written in their Law: ‘They hated me without reason.’
    </b>                                      
    `, pageText: `  
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The task that no one can do on earth is to forgive and remove the sin of a man. Jesus said that they would not have got the sin if I had not done the work of forgiving the karma of others. When he forgave the sins of some in front of all, those jealous and ignorant of his greatness, hated him. Hating Jesus means hating the Holy Spirit. Those who hated him <b>without valid reason</b> got the sin.   
    </span> 
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 137,
      verse: ` <b> (59)	The Gospel of John, 15th chapter, 26 and 27 verses. </b>    
    `, meaning: `<b> 
    (26) When the Advocate comes, whom I will send to you from the Father—the Spirit of truth who goes out from the Father—he will testify about me.  
    (27) And you also must testify, for you have been with me from the beginning.     </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus came as the Advocate (Bhagavan). Jesus said that he would send another Advocate from the Father to the people. According to spiritual law, he said what he was supposed to say. But there is no other Advocate at the Father. There is only one God. He occasionally comes disguised as Advocate. There is none who sends him. When Jesus and the Holy Spirit are the same, both the sender and coming one are the same. Jesus said, <b>“The Spirit of truth comes as Advocate, and he will testify about me.”</b> When the coming one and the going one are the same, it is no wonder that the coming one will talk about the going one. When the coming Advocate speaks of Jesus, Jesus' disciples surely remember Jesus. Therefore, the disciples will say that Jesus came and taught wisdom. 
         
        
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 138,
      verse: ` <b> (60)	The Gospel of John, 16th chapter, 7th verse. </b>   
    `, meaning: `<b> 
    (7) But very truly I tell you, it is for your good that I am going away. Unless I go away, the Advocate will not come to you; but if I go, I will send him to you.
    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Assume that a single person plays two characters in a play. The second character will come on the stage after the first character goes off the stage. As the same person is playing both roles, the first character must go behind the scenes so that the person in the first character will come in the second character. It is not possible for the second character to come out unless the first character goes inside. It should happen because the same person plays both characters. Similarly, the one who came in Jesus’ role should return to earth in the second character. Therefore, when Jesus disappears from the people, then the one who played in Jesus’s role would come in the second role. The Holy Spirit came in the role of Jesus. If he were to come again to be with the people, he would have to leave his role as Jesus and return in a new role, with a new name, and a new appearance. So, Jesus said, <b>“It is for your good that I am going away. Unless I go away, the Advocate will not come to you.”</b> Without saying that I would come back as an Advocate, he said, “I will send him to you when I leave.” From this word, anyone with intelligence will easily know that the one who is going and the one who will be coming are the same. 

    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 139,
      verse: `<b> (61)	The Gospel of John, 16th chapter, 8th verse.  </b>    
    `, meaning: ` <b>  
    (8) When he comes, he will prove the world to be in the wrong about sin and righteousness and judgment.
    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    After Jesus’ role disappears behind the scenes, the Advocate (Comforter) will come in the second role and second incarnation. The word ‘Advocate’ represents God’s incarnation, but it is not God’s name. The one who came as the Advocate could be with any name in the world. Therefore no one can find that this person is the incarnation of God and the Comforter. While no one knows the advocate's form or name, there is some chance of getting to know him by his actions. Whenthe <b>Advocate</b> comes upon the earth, he talks about sin. He reveals how a person acquires sin, where it is stored until the time of death, and the consequences of sin. He will explain that <b>the divine wisdom is needed to get rid of the sins</b> that man has acquired, sins are like firewood, wisdom is like fire, only through the wisdom man can escape from experiencing sins and how to gain divine wisdom. The sin of the man who does not earn the divine wisdom in life remains until death. That man must be born the same day, the same minute, the same moment after his death. The day of death is called the last day. The last day of life will become the first day of the next life. The man should go to the second birth within a second of his death. It can be said that the time difference between death and birth is only the tenth of a second. In such a short time, Atma will judge according to the sin (paapam) and punya (good karma) of the deceased. In that judgment, <b>Atma</b> decides what the person must eat, drink and experience, etc., in every moment in the second birth. The life of the born will run based on the judgment done in death. How a man will live his next life is determined based on the last day's judgment. Atma that is with the dead person judges correctly 
    based on his deeds from childhood. Things to be done in the next life are decided according to the existing karma. No one can override that decision. Everyone should accept the judgment. 
        
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 140,
      verse: `<b>(62)	The Gospel of John, 16th chapter, 12th verse. </b>    
    `, meaning: `<b> 
    (12) I have much more to say to you, more than you can now bear.
      </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When God comes as a human, he must carefully teach wisdom based on people's moods. Divine wisdom should be taught based on the time and context. If you tell a woman who is engaged to you that you are my wife, she will not accept before the wedding. Not only does she not accept, but she also picks a quarrel with you. But if you tell her the same thing after the wedding, she will be happy and not quarrel with you. If you tell divine wisdom to those who do not tolerate the truth that will happen, they cannot understand and will speak against you. Therefore, even when God came upon the earth as a man, he also had to tell the truth carefully. For instance, if it is said that Ravana Brahma is an incarnation of God, people now understood it somewhat. Had the same thing told 50 years ago, people would disagree. People would have said back that Ravana was evil and a monster. Therefore, the wisdom that is supposed to be said earlier should be said later in some cases. Hence, Jesus said, <b>“I have much more to say to you, more than you can now bear,”</b> to his disciples. He knew that it was time for him to leave humans. Hence, he said to his disciples that the coming Advocate would say what he had not spoken. 
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 141,
      verse: `<b> (63)	The Gospel of John, 16th chapter, 13th verse. </b>    
    `, meaning: `<b> 
      
    (13) But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come.     </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus foretold this word about the coming Advocate. ‘Spirit of truth’ means <b></b>‘God of wisdom.’</b> Jesus said that the God who comes after me would guide you all into the truth. He said that the coming God would only tell the truth. Moreover, the God who comes as a human behaves like a human. Hence Jesus said, “As a man, he teaches nothing on his own; he speaks only what he hears.” If one asks who told when the Advocate listened, there is only one there. Hence, as there is only one who is coming, he is the same who tells the wisdom. Therefore, it becomes known that the visible person can also tell what God has spoken. Only God can tell God’s wisdom. Instead of saying humans cannot tell God’s wisdom, it is said that the Advocate would say the things that he heard.
      
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 142,
      verse: ` <b> The Gospel of John, 16th chapter, 14th and 15th verses. </b>    
    `, meaning: ` <b> 
    (14) He will glorify me because it is from me that he will receive what he will make known to you.<br><br>
    (15) All that belongs to the Father is mine. That is why I said the Spirit will receive from me what he will make known to you.
    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    This verse seems to be a little understandable and a little not understandable. Earlier, Jesus said that the Spirit of truth teaches what he hears. Immediately he said in the next verse that the Advocate would take it from me and let you know. Earlier, he said that the Advocate would also say words that I had not said. Now he said that the Advocate would let you know what he received from me. People cannot understand the truth when it is told properly. Then why he confusingly told the truth in this way? There is a reason for this. It becomes understood that he told this confusingly so that <b>those who want to know his wisdom would know, and those who are not interested in his wisdom would not understand it.</b> Jesus said that the coming Advocate would tell what I had said to glorify me. After that, he said that all that belongs to the Father is mine. Here the Father means the Holy Spirit, God. Because Jesus said that God’s wisdom is mine, and the Advocate will speak what he received from me, it becomes known that the Holy Spirit is Jesus and Jesus is the Holy Spirit. Instead of saying <b>‘I am God’, </b>Jesus said, <b>‘All the words of God are mine.’ </b>
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 143,
      verse: ` <b> (65)	The Gospel of John, 16th chapter, 16th verse. </b>    
    `, meaning: `<b> 
      
    (16) Jesus went on to say, “In a little while you will see me no more, and then after a little while you will see me.”   </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    Jesus said to his disciples that you would see me no more after a while. It means that he would be gone from among the people, not appearing to the people after some time. He also said that you would see me again after a little while. It becomes understood that Jesus would not appear as Jesus and would leave his body. Hence the people cannot see him. But when Jesus said that you would see me again sometime later, they would be surprised not knowing why he said like that. When Jesus said, “In a little while you will see me no more, and then after a little while you will see me,” some may ask if he would hide somewhere for a while and appear after that. Earlier Jesus said, “I will go. The Advocate will not come to you unless I go. I will go and send him.” Suppose that Jesus is gone as per his word. Hence, he said that you would not see me anymore after some time. As the coming Advocate is also Jesus, he said that you would see me again after some time. The verse makes sense when the one (Jesus) who is going and the one (Advocate) who will be returning are the same. Hence Jesus said that if you see either one of them, it equals to seeing only one – Jesus and Advocate are the same.        
    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 144,
      verse: ` <b> The Gospel of John, 16th chapter, 17th, 18th, 19th, 20th, 21st and 22nd verses. </b>   
    `, meaning: `<b> 
      
    (17) At this, some of his disciples said to one another, “What does he mean by saying, ‘In a little while you will see me no more, and then after a little while you will see me,’ and ‘Because I am going to the Father’?” <br><br>
(18) They kept asking, “What does he mean by ‘a little while’? We don’t understand what he is saying.” <br><br>
(19) Jesus saw that they wanted to ask him about this, so he said to them, “Are you asking one another what I meant when I said, ‘In a little while you will see me no more, and then after a little while you will see me’? <br><br>
(20) Very truly I tell you, you will weep and mourn while the world rejoices. You will grieve, but your grief will turn to joy. <br><br>
(21) A woman giving birth to a child has pain because her time has come; but when her baby is born, she forgets the anguish because of her joy that a child is born into the world. <br><br>
(22) So, with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy. 

      </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    When Jesus said, “In a little while you will see me no more, and then after a little while you will see me,” people did not understand it. Then Jesus told a parable of a woman giving birth and said that you would be glad as she was when I would come back to you. Jesus said to those who were there, “You will get some pain because of my leaving. After that you will forget the pain with my arrival.”    </span>  
    `
    },
    {
      chapterName: "The Gospel of John",
      chapterNumber: 5,
      pageNumber: 145,
      verse: ` <b> (67)	The Gospel of John, 16th chapter, 25th verse. </b>    
    `, meaning: ` <b> 
    (25) Though I have been speaking figuratively, a time is coming when I will no longer use this kind of language but will tell you plainly about my Father.    </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    
    We already said that Jesus’ earlier words are obscure. It is difficult to understand them, and people will fall into confusion. Jesus also confessed that he had been speaking figuratively so that people do not understand. He also said, “I will not say so in time to come. I will tell you everything clearly.” In fact, this word is also obscure. Jesus said that he would go in a little while, and then the Advocate with the Holy Spirit would come and would elaborate everything. He also said that the Advocate would not come unless I go. He also added that you would be sad that I am going, but you will rejoice when you see me. Now he said, 
    <b>“So far, I said obscurely. When I come back, I will tell you everything clearly.”</b> Based on this, there is a suspicion that the one coming is another Advocate or Jesus would come back. This word also creates doubt here.
    </span>  
    `
    },
    {
      chapterName: "The Scripture of John Revelation",
      chapterNumber: 6,
      pageNumber: 146,
      verse: ` <b> (14)	The John Revelation, 9th chapter, 4th, 5th and 6th verses.</b>    
    `, meaning: `<b> 
      
    (4) They were told not to harm the grass of the earth or any plant or tree, but only those people who did not have the seal of God on their foreheads.  
    <p style="text-align:center;margin-right:5px">
     <img style="max-height:250px;" src="assets/img/Devunimudra_inside.png"/>
   </p>
   (5) They were not allowed to kill them but only to torture them for five months. And the agony they suffered was like that of the sting of a scorpion when it strikes.
    <br><br>
    (6) During those days people will seek death but will not find it; they will long to die, but death will elude them.

   </b>                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    The third verse ahead of these verses is as follows. The verse 9:3 says, <b>“Out of the smoke locusts came down on the earth and were given power like that of scorpions of the earth.”</b> Here it says that the locusts came from the smoke. The smoke here is not the smoke caused by firewood. One should know that it is a foggy cloud that will appear at dawn on a winter day when the Sun is not up. Such a cloud would reduce sunshine and be dark. The locust swarms come from the darkness of the cloud. As locusts come in groups onto the earth like an army, they are formerly called ‘locust swarms.’ No one can imagine where the locusts originated from. In fact, the locusts come from the cloud in the sky. No one knows the birth of the locusts which are coming from a foggy cloud. They come from smoke in the void without knowing how they were born and where they grew up. They may be a few hundred, a few thousand, and even millions. 
    <br><br>
    The locusts carry many diseases that plague people. Although they appear to be locusts, they are an army of angels (God’s servants) sent by God. God commanded the locusts to plague humans. By the command of God, the army of locusts will have its effect on men. They come from an invisible place, hide, and bite people. They can get into the body in the form of diseases and torture humans. God gave them as much poison as scorpions in the ground. Humans must suffer a lot due to locusts coming into this world from the invisible world. They come here to make humans suffer for sin. They were ordered not to harm the grass of the earth or any plant or tree, except humans. The general assumption is that locusts harm grass, plants, and trees. It becomes known from the verse that this kind of locust does not harm grass, plants, and trees except for man. Humans do not know what locusts’ birth is, their food, and their task. 
    <br><br>
    It becomes known from the four verses mentioned here that the army of angels in the form of locusts merely comes to plague humans. The army of God’s servants in the form of locusts have the power to torture man for up to five months, but they do not have the authority to kill them. When the locusts bite invisibly, man will suffer in the form of the disease with pain like the sting of a scorpion. Depending on the karma, 
    the suffering will vary from a little pain to as much as a scorpion sting. As no one escapes man from the pain, he must suffer. In verse, it is said that when the suffering is severe, people cannot bear the pain and seek death. They must suffer. It is said that even death goes far away from them. It is said in the verse that the angels were not authorized to kill humans. Hence, humans should experience the pain. 
    <br><br>
    If the locusts which originate from invisible smoky clouds come a hundred times, they may be visible once. They come invisible and have effects in multiple ways on humans. They cause harm in the form of disease or other ways. It is stated that they only harm humans. Harm may be in any form. The verse said that man would suffer from that harm. Because they are commanded to do so, man seeks death because of the pain but will not get it. Even if a man wishes to die because of unbearable suffering, death will run away from them. Although man is suffering multiple ways from invisible locusts (servants) that God has sent, he does not think for a moment what causes those suffering. They are not getting out of suffering through God’s words. 
    <br><br>
    There are many new diseases that do not exist in the world are coming. But man does not think about where they originate from. When a new disease comes, it takes a while to find out that it is a new disease. It takes some more time to find a drug for the cure. In a year after finally finding a cure for a new disease, another elusive new disease comes to humans. Apart from diseases, man is also suffering from non-diseases. There are many undiagnosable diseases and suffering. Although some know that invisible forces cause suffering, no one knows how to deal with them. There is no way other than to experience the suffering and diseases caused by invisible angels. <b>To avoid all such suffering, the only way is to wear the Seal of God, a symbol for God and God’s power, as God said to his angels. God commanded his servants to persecute only those who do not wear the Seal of God.</b> Although some think that the visible locusts will damage grasses, trees, and plants, <b>God commanded his angels, who are in the form of invisible locusts, to harm only those who did not have the Seal of God on their foreheads.</b> In the final divine scripture, verses 5:22 and 22:32 mentioned the Seal of God. The Akshara Parabrahma Yogam of the first divine scripture, Bhagavad-Gita, has hinted about the Seal of God. In my scripture <b>“The Seal of God,”</b> we have detailed how the Seal of God looks like. You should have faith in God and wear the Seal of God rather than thinking why I should listen to what others said. God and God’s Seal are not related to any religion. The Seal of God is mentioned in the three divine scriptures. The Revelation of the Bible explained the disasters caused by not wearing the Seal of God. Yet, it would be foolish and a lack of faith for Christians to avoid wearing God’s seal. <b>Get protected from suffering. Listen to me, people of all religions, and wear the ‘Seal of God,’ which is unknown so far. Get protected from suffering. </b>
    
    
    </span>  
    `
    },
    {
      chapterName: "Three Fingers",
      chapterNumber: 7,
      pageNumber: 147,
      verse: `    
    `, meaning: `                                      
    `, pageText: `
   
          <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
          The portrait of Jesus rarely appears to you. When you look at the portrait closely, you will see <b>Jesus showing three fingers with his right hand.</b> Jesus taught divine wisdom for about three years. After he died, he also appears to be teaching wisdom to the people in his portrait. Whatever others perceive from the portrait, but what my intellect grasped when my eyes saw the picture is that it contains an essential word from the wisdom Jesus told. In the first divine scripture, God is said to be in three parts - <b>Kshara, Akshara, and Purushottama.</b> In the last divine scripture also, God is said to be in three aspects - <b>Passenger, Driver, and Witness.</b> Similarly, it is said in the second divine scripture that God is in three parts - <b>Son, Father, and the Holy Spirit.</b> The three aspects of God are told in the Bhagavad-Gita, the Bible, and the Quran as the same wisdom. The essential wisdom in the three scriptures is to know the three aspects of God. The day when the three aspects of God are known, God’s wisdom is entirely understood. 
          <br><br>
          However, the Hindus who read the Bhagavad-Gita did not know who <b>Jivatma</b> (Kshara) and <b>Atma</b> (Akshara) are. In the same way, Christians do not know who the <b>Son </b>and the <b>Father</b> are. Similarly, Muslims do not know who the <b>Passenger</b> and the <b>Driver</b> are. In the Bhagavad-Gita I wrote, I said that the Hindus are not aware of the destroyable Jiva and eternal God, who are in the body. I also said in the Bible that Christians do not know the details of the two sons - the <b>Son</b>, and the <b>Father</b>. Similarly, in the scripture “Vajra Vakyalu (Quran),” I said that the Muslims do not know about the two Allahs. The people of three religions have no idea of the other two parts of God, which are the main essence of their scripture. The only word everyone knows is ‘God.’ All of them are unknowingly worshipping the third part, who is Purushottama in Bhagavad-Gita, the Holy Spirit in the Bible, and the Witness in the Quran. God himself said that it is not right to worship the third part of God (the Holy Spirit), who is beyond all worships and all dharmas. Yet, everyone worships <b>“the God who does not need anything.”</b> It can be said that it is humans’ ignorance not to know that he does not need our worships. 
          <br><br>
          As for the Christians, they are unaware of the <b>"two Sons"</b> mentioned in their scripture. Two Sons are mentioned in their scripture, but they say that there is only one Son. They do not know anything about the wisdom of two Sons. They do not know that there are two Sons – <b>Permanent Son and Temporary Son.</b> The Bible names them as <b>the Son </b>and the <b>only begotten Son,</b> but the Christians do know anything about who the Son is and who the only begotten Son is. No one in any religion knows that there are two Gods - <b>the God who is the Father</b> and <b>the God who is the Grandfather</b>. Although the truth is scientifically shown in the scripture, some are in a state of disbelief, and some others say that there are no two Gods. They say that there is only one God. It is also said in the scriptures that there is only one God you should worship. However, it became unknown whether the only one God is Father or Grandfather. 
          <br><br>
          Those who know some divine wisdom and those who read the scriptures are worshiping only one God based on their understanding. They are worshipping Grandfather-God, who is not supposed to be worshipped. They should worship Father-God, who is supposed to be worshipped. The <b>Father-God</b> and the <b>Grandfather-God</b> seem to be a new word. But they do not know that this matter is in their scriptures. They are unable to understand truthful wisdom. If someone tells them the truth, they reply angrily that what you said is not wisdom. I said in my Bible that there are two Sons - the Son of Man and 
          the Son of God - and the Holy Spirit who is in Grandfather position should not be worshipped. When I said that, those who say that the Holy Spirit is God and worship him as God so far are in a state of confusion. Jesus told significantly about the two Sons and the Holy Spirit in his teachings. He also showed <b>“The two Sons and their Father the Holy Spirit”</b> through his fingers in the portrait. Jesus showed the two fingers - index finger and the middle finger - with the right hand. He also showed the thumb. My intellect grasped that the thumb is an indication of the Holy Spirit in the portrait. Since God is the one who gives the perceptive power to the intellect, according to the truthful wisdom, Jesus showed both the Father (Atma) and the Son (Bhagavan) with two fingers (index and middle). It becomes known that they are the permanent Son and the temporary Son. The scripture summarizes that <b>the Holy Spirit will not be known until those two Sons are known.</b> Everyone should know that the spiritual secret which should be known to the entire human society is <b>the matter of the two Sons. </b>Look at his three fingers in the picture of Jesus on the next page. It reminds the Holy Spirit and the two Sons – Atma and the only begotten Son. 
          
         
          <p style="text-align: center">

                              <img src="assets/img/jesus.png"/>

                            </p>
                        
                          
                      </span> 

    `
    },
    {
      chapterName: "Good Friday! - Bad Friday!",
      chapterNumber: 8,
      pageNumber: 148,
      verse: `    
    `, meaning: `                                      
    `, pageText: ` 
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
    
    Some events in life bring happiness, and some other events sorrow to man. Man is cheerful in happiness and depressed in sorrow. When a man is in sorrow, he does not pay attention to food and drink. When he is happy, he will eat good food and wear good clothes. Diwali festival is celebrated with firecrackers because wicked man Narakasura was killed on that day. In the olden days, the scribes, Pharisees, and scholars, who put Jesus before the court and got him executed, rejoiced over the death of their rival Jesus, and used to celebrate Jesus' death anniversary every year as Good Friday. As the day was a happy day for them, they used to celebrate it as a festival. Since then, the festival has been going with the name ‘Good Friday.’ 
    <br><br>
    In the early days, those who did not know Jesus’ greatness used to celebrate the festival along with scribes and scholars. This happened when Jesus’ value and his wisdom unknown. In the present time, even those who know Jesus’ wisdom are also celebrating the day of Jesus’ death as Good Friday. You can celebrate with joy on a good day. But the day Jesus died is supposed to be a painful day for his devotees. Yet, it is surprising to see Christians who claim that Jesus is their God happily wearing new clothes and eating good food without grieving at Jesus’ death on that day. 
    <br><br>
    In fact, the day that Jesus was killed should be labeled as ‘Bad Day.’ Jesus’ devotees should express sorrow and not eat food on the day. But it is bizarre to celebrate the day as a festival and name it ‘Good Friday’ as if it were a good day. When even those who consider Jesus to be family God are celebrating the day, we must say that they do not know the value of Jesus. Anyone who worships Jesus greatly should count that day as Bad Friday. The preachers must take responsibility to educate the people who act indiscriminately about the Bad Friday and tell them not to celebrate. Those who live without knowing the difference between death day and birthday do not even know the greatness of God’s wisdom. If the head of the family dies in our house, the entire family will cry and mourn. In such cases, when Jesus, who should be respected more than the family member, dies, we must mourn more than what we experience when the owner of our house dies. It is a big mistake to celebrate it as a festival without grief, assuming it as an auspicious day. Jesus said, <b>“Anyone who loves their father or mother more than me is not worthy of me; anyone who loves their son or daughter more than me is not worthy of me.”</b> When those who cry when a family member dies do not mourn at Jesus’ death but celebrate it as a festival, how can they be worthy of Jesus’ mercy? Therefore, from now on, let us call Good Friday, which everyone thinks, as a Bad Friday. It becomes honoring Jesus when we count that day as an evil day and mourn without celebrating it. Otherwise, <b>we admire Jesus only on the lips but not in heart.</b> If you honor, love, worship, and pray to Jesus, then propagate Good Friday as Bad Friday and make everyone understand it. Then you will become a true devotee of Jesus. When you abandon Good Friday, nothing bad happens to you; Good happens to you. 

     <p style="text-align:center"> 
        Yours<br>
        The Only Guru of Three Religions<br>
        <b> Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu</b> 
     </p>
       <p>
       Although one thousand persons support - a lie cannot become truth <br>
       Although one thousand persons negate - truth cannot become a lie
       </p>
        
    </span>  
    `
    },
    {
      chapterName: "A Letter From A Hindu",
      chapterNumber: 9,
      pageNumber: 149,
      verse: `    
    `, meaning: `                                      
    `, pageText: `
    <span  [ngStyle] = "{'font-size':this.globaldata.fontSize+'px'}">
      
    <i>First, prostrations to Swami.... </i>
    <br><br>
    Jai Srirama! My name is Pittala Thirumalesha, age 36, Nalgonda village, Telangana district. Occupation: Job, Caste: Mudiraju (Boya caste), Religion: Hindu religion, Father’s occupation: First farmer later rickshaw puller, Mother’s occupation: fruit seller, My education: <b>M.Sc., B.Ed. (Mathematics). </b>
    <br><br>
    
    Sir, I am writing this letter with the intent that my spiritual introduction will do something good for this society. After reading your scripture, <b>“Gems in the Second Divine Scripture,” </b>I wanted to write this letter. It seems that writing scripture on the Bible is the most audacious act of a Hindu (Indhu) Swamiji. Many think that a Swamiji may write Bhagavad-Gita but not Bible. I have already read your scriptures the Bhagavad-Gita and the Quran. Now I have also learned the wisdom of the Bible through your writing. I understood the divine wisdom in the three scriptures of the three religions through you. Knowing the current state of society, I am expressing some of my views with good intentions through this letter. 
    <br><br>
    The first scripture that I read is <b>“The Secret of Bermuda Triangle.”</b> Through this scripture, I learned the secret of why planes and ships disappear into the Bermuda Triangle. I am so glad to have realized this strange fact that was like a Hollywood movie. Then read the scripture <b>“Ghosts - Bhutas (The Real Incidents)”</b> and came to know scientific information about the “invisible(subtle) world.” Besides, I was so surprised when I came to know how God’s government and the Divine Law operate, and I thank my God for knowing the greatest mystery. I then read the scriptures <b>“The Story of a Truth Seeker”</b> and <b>“Sri Krishna God or Bhagavan?”</b> I was so happy to learn a great secret from the scripture “Sri Krishna God or Bhagavan?” Now that I have found a destination for my life, I am happy to have visited Krishna temple at Prabodhashramamu, Chinna Podamala, and worshipped Lord Krishna. Since visiting the Prabodhashramam in July 2012, I am thrilled with joy every day for absorbing the wisdom from your 93 scriptures and 150 lectures. 
    <br><br>
    Through the scripture <b>“Temple Traditions (Hidden Truths),”</b> I learned about the significance of temples. I have grasped the true meaning of the suppressed traditions from <b>“Indu Sampradayas (Traditions).”</b> From the scripture <b>“Mana Pandugalu (Our Festivals)”</b> I have not only understood the meaning of ‘Pandu (fruit)’ in “Panduga (festival)” but also understood the essential purpose of festivals and the intent of our elders’ pre-planned thought. As you said in this scripture, it is a hundred percent true that first spiritual development and then personal development and later social development take place. Every scripture that comes from you is a wisdom mine. Every preaching is a dharma treasure. Your words are beneficial not only to the human but also to all living things. This is the truth that I am telling after experiencing over the past six years. 
    <br><br>
    I was despondent when your religion Hindus said the derogatory words against you, the great emperor. But I am sharing some information through this letter to make everyone aware of the facts. 
    Thraitha Theorem Bhagavad-Gita conveyed the real message of Lord Krishna. Swami’s scriptures <b>“Wisdom words in the Last Divine Scripture (704 pages)”</b> and <b>“Diamonds in the Last Divine Scripture”</b> made the world understand the divine wisdom which Gabriel sent to Prophet Mohammed. The scripture of the Yogeeswarlu <b>“Gems in the Second Divine Scripture (352 pages)”</b> conveyed the real message of Jesus’ Gospels. 
    <br><br>
    Here is my appeal to the intellectuals dwarfed with religious hatred, merciless religious demons, incomplete gnanis who are mad about the religion, political monsters who do not know the value of ashram, false prophets who mislead society with caste scabies and religious madness, rationalists who do not know the reason, truth-finding communities that are not aware of the truth, and elders who are pushing the society into superstition using the words God, Soul, worship, and wisdom. Please read at least one of Swami’s scriptures thoroughly to know the greatness of the “Thraitha Theorem” and pay close attention to what it says. Let us observe one of Swami’s words. 
    <br><br>
    <b>
    “Religions are prohibited. Castes are irrational. All three - The Bhagavad- Gita, the Bible, and the Quran - are parts of the same divine scripture. If your feeling goes beyond caste, immediately join the Prabodha Seva Samithi. God wants you to be gnani – Sri. Sri. Sri. Acharya Prabodhananda Yogeeswarlu” </b>
    <br><br>
    Swamiji not only said above words but also performed inter-caste and inter- religion marriages. He also married another caste woman. Is it a religious hatred and poisonous writing on such a great Swami? Men, you think once with discretion. 
    <br><br>
    Swami’s scriptures conveyed the real wisdom of Vemana poems. They tell the real meaning of philosophical poems of Veerabrahmam. The AtmalingaShatakam conveyed spiritual information. He has provided many of the greatest secrets unknown to the world and the divine information that contributes to humanity’s spiritual prosperity. Many atheists who have grasped the wisdom from his scriptures have become true believers. Even the fools became rationalists. Blind believers became spiritual scientists with the scientific approach. Even terrorists have changed and became gnanis. 
    <br><br><b>
    A Hindu who knows his wisdom is a true Indu (true gnani).<br>A Christian who knows his wisdom is a true Christian (true believer of God).<br> A Muslim who knows his wisdom is a true Muslim (truly obedient to God). </b>
    <br><br>
    His scriptures eradicate karma and forgive sin. If you put His scripture on the body where you have pain with devotion and belief, it will cling without any support until it destroys the karma that caused it and provide relief. While this may come as a surprise, it is a blatant truth told based on my experience. 
    <br><br>
    It is through His writings that the world has come to know the truth about ‘Bhagavan Ravana Brahma,’ the incarnation of God in Thraitha Yuga. Even Sita Devi, who everyone claims to be the victim, did not accuse Ravana Brahma. Why couldn't the Aryans who wrote the Ramayana tell the age of Ravana Brahma at the time of Sita's kidnap? If this question were answered, the original hidden stories of the 
    Ramayana would come out. Ravana Brahma visited Sita Devi in Ashokavana with wife Mandodari and Meghnaad, but why was he portrayed as a vicious man? Even though the elderly Ravana Brahma did not attend Sita’s swayamvara, is it not a shame to write that he was unable to lift the Shiva’s bow in the Sita’s swayamvara? When he took Sita, his daughter, without touching her to his kingdom Sri Lanka, would you falsely write that he was a lustful man? Some selfish people have planned conspiracies against him, saying that he took her with lust; how is this possible based on what you said that anyone who touched Sita would be burnt to death? At least for now, this community should know the truth in Ramayana. Mandodari Devi, who knew the secret that Sita’s suffering, and incarnation of Bhagavan Ravana Brahma would end soon, used to tell people of her kingdom that Ravana Brahma brought Sita to Lanka for the welfare of Sita. We wish to see the portrait of the great Sri Bhagavan Ravana Brahma and Srimati Mandodari Devi. 
    <br><br>
    You do not really know who you are. Do not put unnecessary junk messages on Facebook and YouTube, and when you blaspheme, you will accumulate years of karma. Do not listen if you do not have to. When you do not know dharma’s definition and how many dharmas, do not call gnanis for debate on the public TV. 
    <br><br>
    Thraitha Theorem is the real standard. This standard is used to measure the level of religious hatred. The world will come to know how much wisdom there is in religions, and how much hatred there is in religions through wisdom in Thraitha Theorem. Thraitha Theorem wisdom reveals to this world how much wisdom there is in religions, and how much hatred there is in religions. Prabodha Seva Samiti and its five affiliates firmly believe that whatever happens will happen with God’s permission. 
    <br><br>
    
    <b>Prabodhashramam is the only organization that brings spiritual development.</b> All other organizations work for personality development and a better society. But everyone should recognize that if spiritual development does not happen, personality and social development will not occur. 
    <br><br>
    The wisdom of Yogeeswarlu is caste-free and religion-free. That is why people of all religions - Hindus, Muslims, and Christians - come to him with harmony and are happy to know the real divine wisdom. As Veerabrahmam said, His wisdom is uniting all three religions. Brahmam said in Kalagnanam (prophecy), <b>“All the great demi- gods (devatas) are at Anandashramam.”</b> Devatas came and spoke with joy for knowing the wisdom of their father. He also said, <b>“Prabodhashramam has the highest level of wisdom. Those in Prabodhashramam consist attributes of Almighty. That almighty was only Ananda Guru. Ananda Guru is Guru to you and me as well.”</b> You should grasp God’s wisdom with discretion diligence. 
    <br><br>
    Are those who do not read Bhagavad-Gita are saviors of Hindu dharmas? Will the fools, who do not know the injustice in history, uphold the Hindu religion? Can you build an equal society without knowing the “Secret of the beginning” and “Secret of creation?” Recognize the goodness in the scriptures by reading with patience and without religious hatred. If you feel bad, leave it. There is no rule that everyone should believe it. The Thraitha Siddantha scriptures and teachings, which are so beneficial to humanity and have a rational scientific and spiritual consciousness and reveal the 
    secrets of Brahma, Karma and Bhakti Yogams in detail with Jivatma, Atma and Paramatma, are essential to the present society. 
    <br><br>
    The organizations - UNO, World Peace Council, Police Act, IPC, CrPC, Prison Acts, CBI, CBCID, Intelligence Reports, ACB, Human Rights Watch, Woman Rights, SC ST Atrocities Act, Indian Trusts Act, Muslim Law, Christian Law, Labor Acts, Central Government GOs, State Government GOs, Election Commission, Indian Constitution, Indian Courts, RTI Act, Information Technology Act 2000 – exist, in fact, for the sake of human welfare. Spiritual institutions have a responsibility for telling people what kind of wisdom is suitable for their welfare. Prabodhashramam and its affiliates take first place in such responsible institutions. Above all, we must not forget that there is also <b>“Divine Law and Divine Administration.” </b>
    <br><br>
    The essence of the three divine scriptures is to explain about the three souls. Life without divine wisdom is waste. God gave life to man only to know God’s wisdom. God’s wisdom is beyond caste and religion. Yogeeswarlu provided the true meaning of Lord Krishna’s wisdom through the ‘first divine scripture Bhagavad-Gita.’ He gave us the Quran wisdom, which came to Prophet Muhammad through Gabriel, in the scriptures ‘Wisdom words in the Last Divine Scripture’ and ‘Diamonds in the Last Divine Scripture.’ He told us Jesus’ Gospel wisdom in ‘Gems in the Second Divine Scripture.’ He is giving us practical real divine wisdom through scriptures and teachings. Know the wisdom that He said and wear the Seal of God and receive forgiveness of sins. If you listen carefully and practice it, you are lucky. If you do not listen, that is your karma. Everything is happening according to God’s will, and God knows it. 
    <br><br><b>
    Hindus should know which God to worship. Muslims need to know who the two Allahs (the two creators) are. Christians need to know who the two sons are. </b>
    <br><br>
    A man never becomes God, but God can come as a man. To recognize the God who is in human form, we must first have his wisdom in us. To recognize God, we need to know these two principles that elders said. Those, who are thoughtful and intellect, can understand Thraitha wisdom. 
    <br><br>
    At least now, quit the thought of caste and religion and know the real divine wisdom. If you do not know now, you will never know. Time is Short. Do it Now. 
    <br><br>
    I offer fragrance flowers to Yogeeswarlu feet to give us more divine wisdom. I offer unlimited salutations with all my heart and all my soul and mind. 
    <br><br>
    Your Obedient Servant <br>
    <b>Thirumalesu </b>

    </span>
    `
    },
    {
      chapterName: "",
      chapterNumber: 10,
      pageNumber: 150,
      verse: `    
    `, meaning: `                                      
    `, pageText: `
    <p style="text-align:center;">
    <img style="min-height:550px;min-width:200px" src="assets/img/endpage.png"/>
  </p>  
    `
    },
    {
      chapterName: "Glossary",
      chapterNumber: 11,
      pageNumber: 151,
      verse: `    
    `, meaning: `                                      
    `, pageText: ` <ion-row><ion-col></ion-col><ion-col style="text-align:center:font-size:25px"> <b>GLOSSARY</b></ion-col><ion-col></ion-col></ion-row>
    <br><b>Achara Prakruti:</b> Unchanging and motionless Prakruti. Nature consisting of Sky, Air, Fire, Water and Earth. Prapancha.
    <br><b>Adharmas:</b>They are against dharmas. Satan establishes them. They cause good karma, bad karma, or both. Adharmas mentioned in Bhagavad-Gita - studying Vedas, doing charities, performing sacrifices, yagnas etc.
    <br><b> Agami karma:</b>Newly coming sins and punyas from birth to death. 
    <br><b> Agnani:</b>Ignorant. A person who does not know divine wisdom.
    <br><b> Aham:</b>Subtle body part. Its job is to convince man that he has done every deed - good or bad. Agreeing with it gets new karma. Ego.
    <br><b> Antahkaranams:</b>Five subtle body parts - Jiva (Jivatma), Mind (Manas), Buddhi (Intellect), Chitta (Decision maker), and Aham (Ego).
    <br><b> Artharthi:</b>A person who pray for wealth.
    <br><b> Astrology:</b>It is the science of knowing the sins and punyas in a man's karma with divine wisdom and explaining the results of them scientifically.
    <br><b> Atma:</b>Undestroyable soul hidden in the body. It co-exists with Jivatma. It is representative to Paramatma and head to Jivatma. It performs all deeds in the body based on the karma. Akshara purusha. Immortal soul.
    <br><b> Bhagavan:</b>Incarnation of God as a man on earth to establish dharmas. He is born alive from the mother's womb. Christ, Svayambhu or Comforter or the only begotten Son. Advocate or Helper.
    <br><b> Body:</b>It contains two parts – invisible (subtle) and visible (physical). Visible body contains 10 parts - 5 karmendriyas and 5 gnanendriyas. Subtle body contains 15 parts – 5 tanmatras, 5 vayus (5 types of air) and 5 antahkaranams.
    <br><b> Buddhi:</b>It is intellect in the body, which analyzes pros and cons of an action. Intellect.
    <br><b> Chara Prakruti:</b>The changing Prakruti. Living nature. Jagath.
    <br><b> Covenant blood:</b>God’s wisdom without the bonds of ignorance. Wisdom with dharmas.
    <br><b> Devatas:</b>They are invisible humans (demi-gods).
    <br><b> Dharma Shastra:</b>A scripture with dharmas (wisdom). It reveals God in the body. It contains God’s commandments. Brahma Vidya.
    <br><b> Dharmas:</b>They reveal the divine doctrines or principles. They remove the karma that causes everything - pleasures, sorrows, birth, death, etc. They help man to know invisible God. Commandments. Following dharmas leads to liberation from life and death.
    <br><b> Ghost:</b>It is state in which a man lives with subtle body until the end of life when he dies prematurely. Devil or demon.
    <br><b> Gnana drushti:</b>An invisible eye that shows the matter of God.
    <br><b> Gnana shakti:</b>The invisible power that comes from practicing the yogam. It has power to burn or destroy karma. Gnanagni.
    <br><b> Gnanendriyas:</b>Five sensory organs - eye, ear, nose, tongue, and skin. 
    <br><b>Gnani:</b>A person who knows divine wisdom and dharmas. Brahma gnani.
    <br><b> Gunas:</b>Dispositions. The six bad qualities (gunas) are greed (kaama), anger (krodha), selfishness (lobha), emotional attachment (moha), arrogance (madam), jealousy (matsara). Similarly, six good qualities are donation (dana), mercy (daya), unselfishness (audarya), detachment (vairagya), humility (vinaya), kindness (prema).
    <br><b> Guru:</b>Incarnation of God. He teaches true wisdom to mankind. There is only one Guru on earth at any given time. Man can never be a Guru.
    <br><b> Indu:</b>Moon. Head of wisdom. Everyone who knows wisdom and believes in God is Indu.
    <br><b> Jagath:</b>It has birth and death. Every living thing is a part of it. Chara Prakruti. 
    <br><b>Jivatma:</b>Destroyable soul in the body. It is bound to karma and experiences pleasures and sorrows because of karma. Kshara purusha or Jiva. It ceases to be existing when liberated from life and death. Mortal soul.
    <br><b> Judgement:</b>At the very moment of man’s death, Atma determines the karma for the second life based on man’s past life sin and punya and immediately takes him to the second life. Doomsday or Final Judgement Day or Last Day.
    <br><b> Karma:</b>Both sin and punya karma. Destiny. New karma is born through gnanendriyas. Karma leads to action and action produces karma.
    <br><b> Karma Chakra:</b>It is a set of 108 parts. Each of the 12 parts of the Karma chakra has a different type of karma. Each type of karma is further divided into nine parts. Twelve parts have 108 (12*9) types of karma.
    <br><b> Karma visarga:</b>Dividing karma into tiny parts.
    <br><b> Karma Yogam:</b>When a Jivatma recognizes aham (ego) in his body and does not listen to what the ego says, then he does not get any karma.
    <br><b> Karma Yogi:</b>A person who knows wisdom and practices Karma Yogam. 
    <br><b>Karmendriyas:</b>Five physical (visible) body parts - Hand, leg, mouth, anus, and sexual organ.
    <br><b> Kruta Yuga:</b>Name given to God who created the universe. It is an era of 17,28,000 years.
    <br><b> Manas:</b>Mind. It stores and recollects memories.
    <br><b> Moksha:</b>Liberation from birth, death, life, sufferings, etc. Getting rid of six bad and six good gunas. Jivatma gets liberated when there is no karma. Union with God. Paraloka, Mukti or Salvation.
    <br><b> Paramatma:</b>He is the creator of the universe. It is absolute soul different from Jivatma and Atma. God, The Holy Spirit, Allah, Purushottama, Uttama Purusha or the father of paraloka. It is not a name but designation. Supreme soul.
    <br><b> Prakruti:</b>Nature. it consists of Sky, Air, Fire, Water and Earth. Pancha Bhootas. Prapancha or world.
    <br><b> Prarabdha karma:</b>Everything that happens in this life from birth to death is because of the prarabdha karma. Decision is made when man is born. Brahma vrata.
    <br><b> Punya(m):</b>It comes from the good deeds. It is the result of six good gunas (dispositions). Man experiences pleasures because of it. Punya karma.
    <br><b> Purusha:</b>Male. Paramatma related soul.
    <br><b> Sanchita karma:</b>When prarabdha karma is decided for the current life from accumulated karma from prior births, the leftover karma is called sanchita karma. 
    <br><b>Satan:</b>Maya. It is in the gunas form and diverts man from God.
    <br><b> Scripture:</b>Stimulates the tear gland in the body. When you read scriptures, the tears of happiness come from the eye.
    <br><b> Sin:</b>It comes from the bad deeds. It is the result of six bad gunas. Man experiences difficulties, sorrow, etc. because of it. Paapa karma.
    <br><b> Tanmatras:</b>Five subtle body parts - sight, hearing, smell, taste, and touch. These are powers behind gnanendriyas.
    <br><b> Upadesa:</b>Donating gnana shakti. Neighboring country.
    <br><b> Wisdom:</b>Knowing the details of God. God’s commandments or dharmas.
    <br><b> Yogi:</b>A person who knows divine wisdom and practices dharmas.
    <br><b> Yuga:</b>It is an era within a four-age cycle. Each cycle starts with the Krita yuga, via Treta yuga and Dvapara yuga into a Kali yuga. Currently, we are in Kali yuga.

    `
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
              <span><b> Click on the below link to share this app among your friends and family members</b></span>

            </ion-col>
          </ion-row>
         
          <ion-row>
            <ion-col>
     <span><b> Whatsapp: <a href="https://wa.me/?text=https://play.google.com/store/apps/dev?id=7706717796953849920">Thraitha Theorem Apps For Android</a></b></span>
              <br>
              <span><b>Whatsapp <a href="https://wa.me/?text=https://apps.apple.com/us/developer/three-souls/id1541256362">Thraitha Theorem For iOS</a></b></span>
              <br>
     <span><b> Telegram <a href="https://play.google.com/store/apps/dev?id=7706717796953849920">Thraitha Theorem Apps For Android</a></b></span>
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

    { title: "God's Path", component: 0, chapterNumber: 0, subs: null, icon: 'information' },
    { title: 'The Secret of Creation', component: 1, chapterNumber: 1, subs: null, icon: 'information' },
    {
      title: 'The Gospel Of Mathew', component: null, chapterNumber: 2, icon: 'book',
      subs: [
        {
          shloka: "3rd Chapter, 7th Verse",
          component: 2,
          subs: null
        },
        {
          shloka: "3rd Chapter, 11th Verse",
          component: 3,
          subs: null
        },
        {
          shloka: "3rd Chapter, 12th Verse",
          component: 4,
          subs: null
        },
        {
          shloka: "3rd Chapter, 16, 17 Verses",
          component: 5,
          subs: null
        },
        {
          shloka: "4th Chapter, 10th Verse",
          component: 6,
          subs: null
        },
        {
          shloka: "5th Chapter, 10th Verse",
          component: 7,
          subs: null
        },
        {
          shloka: "5th Chapter, 17th Verse",
          component: 8,
          subs: null
        },
        {
          shloka: "5th Chapter, 18th Verse",
          component: 9,
          subs: null
        },
        {
          shloka: "5th Chapter, 19th Verse",
          component: 10,

          subs: null
        },
        {
          shloka: "5th Chapter, 20th Verse",
          component: 11,
          subs: null
        },
        {
          shloka: "5th Chapter, 28th Verse",
          component: 12,
          subs: null
        },
        {
          shloka: "5th Chapter, 29, 30 Verses",
          component: 13,

          subs: null
        },
        {
          shloka: "6th Chapter, 3, 4 Verses",
          component: 14,

          subs: null
        },
        {
          shloka: "6th Chapter, 6th Verse",
          component: 15,

          subs: null
        },
        {
          shloka: "6th Chapter, 7, 8 Verses",
          component: 16,

          subs: null
        },
        {
          shloka: "7th Chapter, 13, 14 Verses",
          component: 17,
          subs: null
        },
        {
          shloka: "7th Chapter, 7, 8 Verses",
          component: 18,
          subs: null
        },
        {
          shloka: "7th Chapter, 15th Verse",
          component: 19,
          subs: null
        },
        {
          shloka: "7th Chapter, 21th Verse.",
          component: 20,
          subs: null
        },
        {
          shloka: "7th Chapter, 22, 23 Verses",
          component: 21,
          subs: null
        },
        {
          shloka: "8th Chapter, 22th Verse",
          component: 22,

          subs: null
        },
        {
          shloka: "9th Chapter, 12, 13 Verses",
          component: 23,

          subs: null
        },
        {
          shloka: "8th Chapter, 23, 24, 25, 26 Verses",
          component: 24,

          subs: null
        },
        {
          shloka: "9th Chapter, 6th Verse",
          component: 25,

          subs: null
        },
        {
          shloka: "10th Chapter, 20th Verse",
          component: 26,

          subs: null
        },
        {
          shloka: "10th Chapter, 30th Verse",
          component: 27,

          subs: null
        },
        {
          shloka: "10th Chapter, 34, 35, 36 Verses",
          component: 28,

          subs: null
        },
        {
          shloka: "10th Chapter, 37th Verse",
          component: 29,
          subs: null
        },
        {
          shloka: "10th Chapter, 38th Verse",
          component: 30,
          subs: null
        },
        {
          shloka: "10th Chapter, 40th Verse",
          component: 31,
          subs: null
        },
        {
          shloka: "11th Chapter, 9th Verse",
          component: 32,
          subs: null
        },
        {
          shloka: "11th Chapter, 28th Verse",
          component: 33,
          subs: null
        },
        {
          shloka: "12th Chapter 17, 18, 19, 20, 21 Verses",
          component: 34,
          subs: null
        },
        {
          shloka: "12th Chapter, 31st Verse",
          component: 35,
          subs: null
        },
        {
          shloka: "12th Chapterలో 32nd Verse",
          component: 36,

          subs: null
        },
        {
          shloka: "12th Chapter, 36, 37 Verses",
          component: 37,
          subs: null
        },
        {
          shloka: "12th Chapter, 40th Verse",
          component: 38,

          subs: null
        },
        {
          shloka: "13th Chapter, 13, 14, 15 Verses",
          component: 39,
          subs: null
        },
        {
          shloka: "15th Chapter, 7, 8, 9 Verses",
          component: 40,
          subs: null
        },
        {
          shloka: "15th Chapter, 11th Verse",
          component: 41,
          subs: null
        },
        {
          shloka: "15th Chapter, 12, 13th Verses",
          component: 42,
          subs: null
        },
        {
          shloka: "15th Chapter, 14th Verse",
          component: 43,
          subs: null
        },
        {
          shloka: "16th Chapter, 21, 22 Verses",
          component: 44,
          subs: null
        },
        {
          shloka: "19th Chapter, 23, 24 Verses",
          component: 45,
          subs: null
        },
        {
          shloka: "22nd Chapter, 36, 37, 38, 39, 40 Verses",
          component: 46,
          subs: null
        },
        {
          shloka: "23rd Chapter, 8, 9, 10 Verses",
          component: 47,
          subs: null
        },
        {
          shloka: "23rd Chapter, 15th Verse",
          component: 48,
          subs: null
        },
        {
          shloka: " 24th Chapter, 35th Verse",
          component: 49,
          subs: null
        },
        {
          shloka: "24th Chapter, 42nd Verse",
          component: 50,
          subs: null
        },
        {
          shloka: "26th Chapter, 26, 27, 28 Verses",
          component: 51,
          subs: null
        },
        {
          shloka: "28th Chapter, 18th Verse",
          component: 52,
          subs: null
        },
        {
          shloka: "28th Chapter, 19, 20 Verses",
          component: 53,
          subs: null
        },

      ]
    },
    {
      title: 'The Gospel of Mark', component: null, chapterNumber: 3, icon: 'book',
      subs: [
        {
          shloka: "2nd Chapter, 19, 20 Verses",
          component: 54,
          subs: null
        },
        {
          shloka: "4th Chapter, 38, 39 Verses",
          component: 55,
          subs: null
        },
        {
          shloka: "5th Chapter, 38, 39, 40, 41, 42, 43 Verses",
          component: 56,
          subs: null
        },
        {
          shloka: "7th Chapter, 15, 16, 17, 18, 19, 20,     21, 22, 23 Verses",
          component: 57,
          subs: null
        },
        {
          shloka: "3rd Chapter, 35th Verse",
          component: 58,
          subs: null
        },
        {
          shloka: "4th Chapter, 17th Verse",
          component: 59,
          subs: null
        },
        {
          shloka: "4th Chapter, 21, 22 Verses",
          component: 60,
          subs: null
        },
        {
          shloka: "6th Chapter, 4th Verse",
          component: 61,
          subs: null
        },
        {
          shloka: "8th Chapter, 38th Verse",
          component: 62,

          subs: null
        },

        {
          shloka: ` 9th Chapter, 7th Verse.`,
          component: 63,

          subs: null
        },
        {
          shloka: `10th Chapter, 17, 18th Verses`,
          component: 64,

          subs: null
        },


      ]
    },
    {
      title: 'The Gospel of Luke', component: null, chapterNumber: 4, icon: 'book',
      subs: [


        {
          shloka: `16th Chapter, 15, 16 Verses`,
          component: 65,

          subs: null
        },
        {
          shloka: `2nd Chapter, 49th Verse `,
          component: 66,

          subs: null
        },
        {
          shloka: `11th Chapter, 37, 38, 39, 40, 41 Verses`,
          component: 67,

          subs: null
        },
        {
          shloka: `12th Chapter, 4, 5 Verses`,
          component: 68,

          subs: null
        },
        {
          shloka: `12th Chapter, 25th Verse`,
          component: 69,

          subs: null
        },
        {
          shloka: "12th Chapter, 33, 34 Verses",
          component: 70,
          subs: null
        },
        {
          shloka: "12th Chapter, 49th Verse",
          component: 71,
          subs: null
        },
        {
          shloka: "12th Chapter, 51, 52, 53 Verses",
          component: 72,
          subs: null
        },
        {
          shloka: "13th Chapter, 3th Verse",
          component: 73,
          subs: null
        },
        {
          shloka: "14th Chapter, 26th Verse",
          component: 74,

          subs: null
        },
        {
          shloka: "14th Chapter, 27th Verse",
          component: 75,
          subs: null
        },
        {
          shloka: "18th Chapter, 29th Verse",
          component: 76,
          subs: null
        },
        {
          shloka: "21st Chapter, 15th Verse",
          component: 77,

          subs: null
        },
        {
          shloka: "21st Chapter, 17th Verse",
          component: 78,
          subs: null
        }



      ]

    },
    {
      title: 'The Gospel Of John ', component: null, chapterNumber: 5, icon: 'book',
      subs: [
        {
          shloka: "1st Chapter, 1st Verse",
          component: 79,
          subs: null
        },
        {
          shloka: "1st Chapter, 9th Verse",
          component: 80,
          subs: null
        },
        {
          shloka: "1st Chapter, 10th Verse",
          component: 81,
          subs: null
        },
        {
          shloka: "1st Chapter, 11th Verse",
          component: 82,
          subs: null
        },
        {
          shloka: "1st Chapter, 12th Verse",
          component: 83,
          subs: null
        },
        {
          shloka: "1st Chapter, 13th Verse",
          component: 84,
          subs: null
        },
        {
          shloka: "1st Chapter, 14th Verse",
          component: 85,
          subs: null
        },
        {
          shloka: "1st Chapter, 18th Verse",
          component: 86,
          subs: null
        },
        {
          shloka: "1st Chapter, 51th Verse",
          component: 87,
          subs: null
        },
        {
          shloka: "3rd Chapter, 3rd Verse",
          component: 88,
          subs: null
        },
        {
          shloka: "3rd Chapter, 4, 5, 6, 7, 8 Verses",
          component: 89,

          subs: null
        },
        {
          shloka: "3rd Chapter, 13th Verse",
          component: 90,
          subs: null
        },
        {
          shloka: "3rd Chapter, 15th Verse",
          component: 91,
          subs: null
        },
        {
          shloka: "3rd Chapter, 17th Verse ",
          component: 92,
          subs: null
        },
        {
          shloka: "3rd Chapter, 18th Verse",
          component: 93,
          subs: null
        },
        {
          shloka: "3rd Chapter, 19, 20, 21 Verses",
          component: 94,
          subs: null
        },
        {
          shloka: "5th Chapter, 19th Verse",
          component: 95,
          subs: null
        },
        {
          shloka: "5th Chapter, 20th Verse",
          component: 96,
          subs: null
        },
        {
          shloka: "5th Chapter, 21, 22, 23 Verses",
          component: 97,
          subs: null
        },
        {
          shloka: "5th Chapter, 24th Verse",
          component: 98,
          subs: null
        },
        {
          shloka: "5th Chapter, 26th Verse",
          component: 99,
          subs: null
        },
        {
          shloka: "5th Chapter, 37th Verse",
          component: 100,
          subs: null
        },
        {
          shloka: "5th Chapter, 38th Verse",
          component: 101,

          subs: null
        },
        {
          shloka: "6th Chapter, 25, 26, 27 Verses",
          component: 102,
          subs: null
        },
        {
          shloka: "6th Chapter, 32nd Verse",
          component: 103,
          subs: null
        },
        {
          shloka: "6th Chapter, 47th Verse",
          component: 104,
          subs: null
        },
        {
          shloka: "7th Chapter, 37, 38 Verses",
          component: 105,
          subs: null
        },
        {
          shloka: "8th Chapter, 12th Verse",
          component: 106,
          subs: null
        },
        {
          shloka: "8th Chapter, 14th Verse",
          component: 107,
          subs: null
        },
        {
          shloka: "8th Chapter, 19th Verse",
          component: 108,
          subs: null
        },
        {
          shloka: "8th Chapter, 21st Verse",
          component: 109,
          subs: null
        },
        {
          shloka: "8th Chapter, 23, 24 Verses",
          component: 110,
          subs: null
        },
        {
          shloka: "8th Chapter, 24th Verse",
          component: 111,
          subs: null
        },
        {
          shloka: "8th Chapter, 28th Verse",
          component: 112,
          subs: null
        },
        {
          shloka: "8th Chapter, 29th Verse",
          component: 113,
          subs: null
        },
        {
          shloka: "8th Chapter, 53, 54 Verses",
          component: 114,

          subs: null
        },
        {
          shloka: "8th Chapter, 55th Verse",
          component: 115,
          subs: null
        },
        {
          shloka: "8th Chapter, 57, 58 Verses",
          component: 116,

          subs: null
        },
        {
          shloka: "9th Chapter, 39th Verse",
          component: 117,
          subs: null
        },
        {
          shloka: "9th Chapter, 41st Verse",
          component: 118,

          subs: null
        },
        {
          shloka: "10th Chapter, 18th Verse",
          component: 119,

          subs: null
        },
        {
          shloka: "10th Chapter, 30th Verse",
          component: 120,
          subs: null
        },
        {
          shloka: "11th Chapter, 25th Verse",
          component: 121,
          subs: null
        },
        {
          shloka: "11th Chapter, 26th Verse",
          component: 122,
          subs: null
        },
        {
          shloka: "12th Chapter, 25th Verse",
          component: 123,
          subs: null
        },
        {
          shloka: "12th Chapter, 40th Verse",
          component: 124,
          subs: null
        },
        {
          shloka: "12th Chapter, 47, 48 Verses",
          component: 125,
          subs: null
        },
        {
          shloka: "12th Chapter, 49, 50 Verses",
          component: 126,
          subs: null
        },
        {
          shloka: "14th Chapter, 7th Verse",
          component: 127,
          subs: null
        },
        {
          shloka: "14th Chapter, 8, 9 Verses",
          component: 128,
          subs: null
        },
        {
          shloka: "14th Chapter, 10th Verse",
          component: 129,
          subs: null
        },
        {
          shloka: "14th Chapter, 6th Verse",
          component: 130,
          subs: null
        },
        {
          shloka: "14th Chapter, 16th Verse",
          component: 131,
          subs: null
        },
        {
          shloka: " 14th Chapter, 17th Verse",
          component: 132,
          subs: null
        },

        {
          shloka: "14th Chapter, 20th Verse",
          component: 133,
          subs: null
        },
        {
          shloka: "14th Chapter, 25, 26 Verses",
          component: 134,
          subs: null
        },
        {
          shloka: " 15th Chapter, 23th Verse",
          component: 135,
          subs: null
        },
        {
          shloka: "15th Chapter, 24, 25 Verses",
          component: 1376,
          subs: null
        },
        {
          shloka: "15th Chapter, 26, 27 Verse",
          component: 137,
          subs: null
        },
        {
          shloka: "16th Chapter, 7th Verse",
          component: 138,
          subs: null
        },
        {
          shloka: "16th Chapter, 8th Verse",
          component: 139,
          subs: null
        },
        {
          shloka: "16th Chapter, 12th Verse",
          component: 140,
          subs: null
        },
        {
          shloka: "16th Chapter, 13th Verse",
          component: 141,
          subs: null
        },
        {
          shloka: "16th Chapter, 14, 15 Verses",
          component: 142,
          subs: null
        },
        {
          shloka: "16th Chapter, 16th Verse",
          component: 143,
          subs: null
        },
        {
          shloka: "16th Chapter, 17, 18, 19, 20, 21,    22, Verses",
          component: 144,

          subs: null
        },
        {
          shloka: "16th Chapter, 25th Verse",
          component: 145,

          subs: null
        },


      ]

    },
    {
      title: 'The Revelations ', component: 146, chapterNumber: 6, subs: null, icon: 'information'
    },
    {
      title: 'The Three Fingers', component: 147, chapterNumber: 7, subs: null, icon: 'information'

    },
    {
      title: 'Good Friday - Bad Friday', component: 148, chapterNumber: 8, subs: null, icon: 'information'

    },
    {
      title: 'A Letter From A Hindu', component: 149, chapterNumber: 9, subs: null, icon: 'information'

    },

    {
      title: 'Glossary', component: 151, chapterNumber: 11, subs: null, icon: 'information'

    },

    {
      title: 'Videos', component: 152, chapterNumber: 12, subs: null, icon: 'videocam'

    }
    ,
    {
      title: 'Share', component: 153, chapterNumber: 13, subs: null, icon: 'share'

    }
  ];



}
