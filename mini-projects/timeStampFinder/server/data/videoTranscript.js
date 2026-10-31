const data = [
  {
    "time": "00:00:00",
    "text": "Hello everyone, welcome to my channel,"
  },
  {
    "time": "00:00:01",
    "text": "Code Server with Mike. So today, we are"
  },
  {
    "time": "00:00:03",
    "text": "going to do LeetCode 365. It is marked"
  },
  {
    "time": "00:00:05",
    "text": "as medium. Let’s look at the motivation"
  },
  {
    "time": "00:00:07",
    "text": ". You don’t need to have a remarkable"
  },
  {
    "time": "00:00:09",
    "text": "beginning to create a remarkable life."
  },
  {
    "time": "00:00:12",
    "text": "Right? Ups and downs will definitely"
  },
  {
    "time": "00:00:14",
    "text": "come. It won’t always be completely"
  },
  {
    "time": "00:00:16",
    "text": "smooth."
  },
  {
    "time": "00:00:17",
    "text": "Okay? So, let’s look at the problem."
  },
  {
    "time": "00:00:19",
    "text": "Twisted Mirror Path Count: You are given"
  },
  {
    "time": "00:00:22",
    "text": "an m by n binary grid, where the value"
  },
  {
    "time": "00:00:25",
    "text": "is either zero or one. Zero means it is"
  },
  {
    "time": "00:00:28",
    "text": "an empty cell, and one means, you know"
  },
  {
    "time": "00:00:30",
    "text": "what, there is a mirror there. Now let’s"
  },
  {
    "time": "00:00:33",
    "text": "see, a robot starts at the top-left"
  },
  {
    "time": "00:00:36",
    "text": "corner, that is grid 0, 0, and wants to"
  },
  {
    "time": "00:00:39",
    "text": "reach the bottom-right corner, m-1, n-1"
  },
  {
    "time": "00:00:42",
    "text": ". It can only move right or down. Okay?"
  },
  {
    "time": "00:00:45",
    "text": "Meaning, from a given cell, it can"
  },
  {
    "time": "00:00:47",
    "text": "either go right or go down."
  },
  {
    "time": "00:00:50",
    "text": "If the robot attempts to move into a"
  },
  {
    "time": "00:00:52",
    "text": "mirror cell, it is reflected before"
  },
  {
    "time": "00:00:54",
    "text": "entering that cell. This means if it"
  },
  {
    "time": "00:00:57",
    "text": "tries to enter a mirror cell."
  },
  {
    "time": "00:01:00",
    "text": "Let’s assume this cell of mine is a"
  },
  {
    "time": "00:01:03",
    "text": "mirror cell."
  },
  {
    "time": "00:01:04",
    "text": "Its value is one, so it will be"
  },
  {
    "time": "00:01:06",
    "text": "reflected. Now, it explains where it"
  },
  {
    "time": "00:01:09",
    "text": "will be reflected. If it tries to move"
  },
  {
    "time": "00:01:11",
    "text": "right into a mirror, it is turned down."
  },
  {
    "time": "00:01:14",
    "text": "This means that if the robot is standing"
  },
  {
    "time": "00:01:17",
    "text": "here, let’s say, and it went in this"
  },
  {
    "time": "00:01:21",
    "text": "right direction into this cell, then it"
  },
  {
    "time": "00:01:24",
    "text": "means it will be deflected down. Okay?"
  },
  {
    "time": "00:01:28",
    "text": "This means it was moving in the right"
  },
  {
    "time": "00:01:30",
    "text": "direction from here. Or you could also"
  },
  {
    "time": "00:01:33",
    "text": "say, from which direction did it arrive"
  },
  {
    "time": "00:01:35",
    "text": "at this cell? It arrived at this cell"
  },
  {
    "time": "00:01:37",
    "text": "from the left direction."
  },
  {
    "time": "00:01:39",
    "text": "What is written after that? If it tries"
  },
  {
    "time": "00:01:41",
    "text": "to move down into a mirror. This means"
  },
  {
    "time": "00:01:43",
    "text": "that if it"
  },
  {
    "time": "00:01:47",
    "text": "is coming from above, coming in the down"
  },
  {
    "time": "00:01:49",
    "text": "direction, which in other words I can"
  },
  {
    "time": "00:01:51",
    "text": "say, from where is it coming into this"
  },
  {
    "time": "00:01:52",
    "text": "cell?"
  },
  {
    "time": "00:01:54",
    "text": "It is coming from up. Because I can see"
  },
  {
    "time": "00:01:56",
    "text": "it coming from above, right? Then it"
  },
  {
    "time": "00:01:58",
    "text": "will be deflected to the right. Like"
  },
  {
    "time": "00:02:01",
    "text": "this. It is turned right and moved into"
  },
  {
    "time": "00:02:03",
    "text": "a cell directly to the right of the"
  },
  {
    "time": "00:02:05",
    "text": "mirror. Okay? If this reflection would"
  },
  {
    "time": "00:02:08",
    "text": "cause the robot to move outside the grid"
  },
  {
    "time": "00:02:11",
    "text": "boundaries, the path is considered"
  },
  {
    "time": "00:02:13",
    "text": "invalid. Obviously, it is never supposed"
  },
  {
    "time": "00:02:15",
    "text": "to go outside the grid."
  },
  {
    "time": "00:02:17",
    "text": "Return the number of unique valid paths"
  },
  {
    "time": "00:02:20",
    "text": "from 0, 0 to m-1, n-1, so it looks like"
  },
  {
    "time": "00:02:23",
    "text": "a DP and grids type of problem."
  },
  {
    "time": "00:02:26",
    "text": "In DP and grids, we have created"
  },
  {
    "time": "00:02:28",
    "text": "problems where we had to find unique"
  },
  {
    "time": "00:02:30",
    "text": "valid paths from 0 to m-1, n-1, but what"
  },
  {
    "time": "00:02:33",
    "text": "is the extra thing added here?"
  },
  {
    "time": "00:02:36",
    "text": "A concept of a mirror has been added. So"
  },
  {
    "time": "00:02:38",
    "text": "let's see, the answer can be very large"
  },
  {
    "time": "00:02:41",
    "text": ". Do it using modulo 10 ^ 9 + 7. And if"
  },
  {
    "time": "00:02:44",
    "text": "a reflection moves the robot into a"
  },
  {
    "time": "00:02:47",
    "text": "mirror cell, the robot is immediately"
  },
  {
    "time": "00:02:49",
    "text": "reflected again based on the direction"
  },
  {
    "time": "00:02:51",
    "text": "it used to enter that mirror. Meaning,"
  },
  {
    "time": "00:02:54",
    "text": "what it wants to say is, let's assume"
  },
  {
    "time": "00:02:56",
    "text": "this was a mirror and there is another"
  },
  {
    "time": "00:02:59",
    "text": "mirror next to it. For example. So if"
  },
  {
    "time": "00:03:02",
    "text": "let's assume the robot was coming from"
  },
  {
    "time": "00:03:04",
    "text": "this side."
  },
  {
    "time": "00:03:06",
    "text": "Then I can say, right, that in this cell"
  },
  {
    "time": "00:03:08",
    "text": ", where is it coming from? It is coming"
  },
  {
    "time": "00:03:11",
    "text": "from the left-hand side direction. Okay"
  },
  {
    "time": "00:03:13",
    "text": "? So it will go this way. But if it was"
  },
  {
    "time": "00:03:16",
    "text": "coming from here, if let's assume the"
  },
  {
    "time": "00:03:18",
    "text": "robot was coming like this. I mean, in"
  },
  {
    "time": "00:03:21",
    "text": "other words, I want to say that it"
  },
  {
    "time": "00:03:23",
    "text": "entered this cell from the up direction"
  },
  {
    "time": "00:03:25",
    "text": ". So obviously, it will deflect towards"
  },
  {
    "time": "00:03:27",
    "text": "the right direction."
  },
  {
    "time": "00:03:29",
    "text": "Now notice, this mirror cell, where did"
  },
  {
    "time": "00:03:31",
    "text": "it come from?"
  },
  {
    "time": "00:03:32",
    "text": "It came from the left-hand side. It came"
  },
  {
    "time": "00:03:34",
    "text": "from the left direction, so it will"
  },
  {
    "time": "00:03:36",
    "text": "deflect downwards. Meaning, this will"
  },
  {
    "time": "00:03:37",
    "text": "keep applying recursively. I mean, not"
  },
  {
    "time": "00:03:39",
    "text": "recursively, I mean if mirrors keep"
  },
  {
    "time": "00:03:41",
    "text": "coming, then deflection will keep"
  },
  {
    "time": "00:03:42",
    "text": "happening. Let's assume there is another"
  },
  {
    "time": "00:03:44",
    "text": "mirror here. Okay? So when it came down"
  },
  {
    "time": "00:03:46",
    "text": "from here, you see it entered this cell"
  },
  {
    "time": "00:03:48",
    "text": "from the up direction, so it will go"
  },
  {
    "time": "00:03:50",
    "text": "right here. So it will keep happening"
  },
  {
    "time": "00:03:51",
    "text": "like that. So it is explaining the same"
  },
  {
    "time": "00:03:52",
    "text": "thing here. The robot is immediately"
  },
  {
    "time": "00:03:54",
    "text": "reflected again based on the direction"
  },
  {
    "time": "00:03:56",
    "text": "it is used to enter that mirror. If it"
  },
  {
    "time": "00:03:58",
    "text": "entered while moving right it will be"
  },
  {
    "time": "00:03:59",
    "text": "turned down. If it entered while moving"
  },
  {
    "time": "00:04:01",
    "text": "down it will be turned right and this"
  },
  {
    "time": "00:04:03",
    "text": "process will go on as long as mirrors"
  },
  {
    "time": "00:04:05",
    "text": "keep appearing. Okay? So let's look at"
  },
  {
    "time": "00:04:08",
    "text": "the input grid. There is an example here"
  },
  {
    "time": "00:04:10",
    "text": ", 01 01 100, there are a total of five"
  },
  {
    "time": "00:04:13",
    "text": "possible paths here. To go from here to"
  },
  {
    "time": "00:04:16",
    "text": "there. Let's see what those paths are."
  },
  {
    "time": "00:04:19",
    "text": "The very first path I can see is if I go"
  },
  {
    "time": "00:04:21",
    "text": "from here to here. So I have entered"
  },
  {
    "time": "00:04:24",
    "text": "this mirror cell from the left direction"
  },
  {
    "time": "00:04:28",
    "text": ". Right? So I will go downwards. Now"
  },
  {
    "time": "00:04:32",
    "text": "from here, I can either go here or I can"
  },
  {
    "time": "00:04:35",
    "text": "go there. Let's do one thing. Let's go"
  },
  {
    "time": "00:04:37",
    "text": "this way first and see. Now in this"
  },
  {
    "time": "00:04:39",
    "text": "mirror cell, I have come from the left"
  },
  {
    "time": "00:04:41",
    "text": "direction. So I will go down. So I found"
  },
  {
    "time": "00:04:44",
    "text": "this path. What is the second path?"
  },
  {
    "time": "00:04:46",
    "text": "Let's see, if I went from here to here,"
  },
  {
    "time": "00:04:49",
    "text": "then from here to here, I could go this"
  },
  {
    "time": "00:04:52",
    "text": "way. This is the second path. And what"
  },
  {
    "time": "00:04:55",
    "text": "other path is there? I see this one path"
  },
  {
    "time": "00:04:59",
    "text": ". Went from here to here. Went from here"
  },
  {
    "time": "00:05:01",
    "text": "to here."
  },
  {
    "time": "00:05:03",
    "text": "Then from here to here; that makes three"
  },
  {
    "time": "00:05:07",
    "text": ". And one more could be this. Let's"
  },
  {
    "time": "00:05:09",
    "text": "erase this a little bit. Right?"
  },
  {
    "time": "00:05:11",
    "text": "So it doesn't look too messy, we found"
  },
  {
    "time": "00:05:14",
    "text": "three paths. See this possible path. One"
  },
  {
    "time": "00:05:16",
    "text": ", two, and from here, this makes four"
  },
  {
    "time": "00:05:19",
    "text": "paths. I think there is a fifth path,"
  },
  {
    "time": "00:05:21",
    "text": "this one. One, two, like this. Okay? So"
  },
  {
    "time": "00:05:25",
    "text": "there are a total of five possible paths"
  },
  {
    "time": "00:05:27",
    "text": "."
  },
  {
    "time": "00:05:28",
    "text": "You just have to keep one thing in mind"
  },
  {
    "time": "00:05:30",
    "text": ", that when you arrive at a mirror cell"
  },
  {
    "time": "00:05:32",
    "text": ", you must know from where you entered"
  },
  {
    "time": "00:05:34",
    "text": "this mirror cell."
  },
  {
    "time": "00:05:36",
    "text": "The whole problem is based on this."
  },
  {
    "time": "00:05:37",
    "text": "Because the rule is based on exactly"
  },
  {
    "time": "00:05:39",
    "text": "where you entered the mirror cell from,"
  },
  {
    "time": "00:05:41",
    "text": "which I have specially mentioned here."
  },
  {
    "time": "00:05:44",
    "text": "So if we assume the robot came into this"
  },
  {
    "time": "00:05:46",
    "text": "cell, it must know where it came from?"
  },
  {
    "time": "00:05:49",
    "text": "Did it come from up? Did it come from"
  },
  {
    "time": "00:05:52",
    "text": "the left cell? Right? Did it come from"
  },
  {
    "time": "00:05:56",
    "text": "the up cell?"
  },
  {
    "time": "00:05:58",
    "text": "Did it come from the left cell? This"
  },
  {
    "time": "00:06:01",
    "text": "must be known. Because if it comes from"
  },
  {
    "time": "00:06:04",
    "text": "up, where will it deflect? If it came"
  },
  {
    "time": "00:06:07",
    "text": "from up, it will have to deflect here to"
  },
  {
    "time": "00:06:10",
    "text": "the right-hand side. So let me write it"
  },
  {
    "time": "00:06:12",
    "text": "here. It will deflect to the right-hand"
  },
  {
    "time": "00:06:14",
    "text": "side."
  },
  {
    "time": "00:06:15",
    "text": "If it came from the left-hand side into"
  },
  {
    "time": "00:06:18",
    "text": "this mirror cell, it would deflect down"
  },
  {
    "time": "00:06:20",
    "text": ", meaning to the cell below."
  },
  {
    "time": "00:06:23",
    "text": "You just need to keep this in mind. Okay"
  },
  {
    "time": "00:06:25",
    "text": "? So, keeping this point in mind, let's"
  },
  {
    "time": "00:06:28",
    "text": "try to build our thought process. So"
  },
  {
    "time": "00:06:30",
    "text": "look, you must remember this, or you"
  },
  {
    "time": "00:06:33",
    "text": "must have surely understood that this is"
  },
  {
    "time": "00:06:35",
    "text": "clearly a DP on grids problem. Because"
  },
  {
    "time": "00:06:38",
    "text": "most DP on grids problems are like this"
  },
  {
    "time": "00:06:40",
    "text": ". Right? So generally, in DP on grids,"
  },
  {
    "time": "00:06:43",
    "text": "what do I do? I just write the bottom-up"
  },
  {
    "time": "00:06:45",
    "text": "code. Because writing bottom-up is very"
  },
  {
    "time": "00:06:47",
    "text": "easy. But today, I will show you"
  },
  {
    "time": "00:06:49",
    "text": "recursion, memoization, and bottom-up,"
  },
  {
    "time": "00:06:51",
    "text": "all three. Okay? So we generally take a"
  },
  {
    "time": "00:06:56",
    "text": "DP array and I will show you what we"
  },
  {
    "time": "00:07:01",
    "text": "store there."
  },
  {
    "time": "00:07:03",
    "text": "Let's assume there is a given cell, and"
  },
  {
    "time": "00:07:06",
    "text": "I need to find the answer for this. How"
  },
  {
    "time": "00:07:09",
    "text": "many ways are there to reach this cell?"
  },
  {
    "time": "00:07:12",
    "text": "So, what do we do in DP on grids? We"
  },
  {
    "time": "00:07:14",
    "text": "look at where this person could possibly"
  },
  {
    "time": "00:07:16",
    "text": "come from to reach this cell. The"
  },
  {
    "time": "00:07:18",
    "text": "problem clearly states that from a given"
  },
  {
    "time": "00:07:21",
    "text": "cell, I can either go right or go down."
  },
  {
    "time": "00:07:23",
    "text": "So, from where can I reach this cell?"
  },
  {
    "time": "00:07:26",
    "text": "Either I can come from above. If I take"
  },
  {
    "time": "00:07:28",
    "text": "a right from here, or I can come from"
  },
  {
    "time": "00:07:31",
    "text": "here. If I take a down move from above,"
  },
  {
    "time": "00:07:34",
    "text": "or take a right move from this left cell"
  },
  {
    "time": "00:07:36",
    "text": "."
  },
  {
    "time": "00:07:37",
    "text": "So, it's clear here that to reach this i"
  },
  {
    "time": "00:07:40",
    "text": ", j, I can reach either from up or from"
  },
  {
    "time": "00:07:42",
    "text": "the left-hand side."
  },
  {
    "time": "00:07:46",
    "text": "It is very easy to calculate that DP of"
  },
  {
    "time": "00:07:50",
    "text": "i, j, meaning the total ways to reach"
  },
  {
    "time": "00:07:55",
    "text": "this i, j cell."
  },
  {
    "time": "00:08:00",
    "text": "To reach i, j is equal to the total ways"
  },
  {
    "time": "00:08:04",
    "text": "to reach the one above, i.e., i-1, j,"
  },
  {
    "time": "00:08:08",
    "text": "plus the ways to reach this cell,"
  },
  {
    "time": "00:08:11",
    "text": "because you can go here from there, so"
  },
  {
    "time": "00:08:14",
    "text": "those ways will also be added."
  },
  {
    "time": "00:08:19",
    "text": "Meaning, we will add up the ways to"
  },
  {
    "time": "00:08:21",
    "text": "reach the same row and the cell in the"
  },
  {
    "time": "00:08:23",
    "text": "column just to the left."
  },
  {
    "time": "00:08:26",
    "text": "Generally, this is the logic used in DP"
  },
  {
    "time": "00:08:28",
    "text": "on grids. Right? But there is a twist"
  },
  {
    "time": "00:08:31",
    "text": "here, isn't there?"
  },
  {
    "time": "00:08:33",
    "text": "When you are at this i, j and if it"
  },
  {
    "time": "00:08:36",
    "text": "turns out to be a mirror cell, you will"
  },
  {
    "time": "00:08:38",
    "text": "need one more piece of information:"
  },
  {
    "time": "00:08:40",
    "text": "where did I come from to reach this"
  },
  {
    "time": "00:08:43",
    "text": "mirror cell?"
  },
  {
    "time": "00:08:44",
    "text": "Did I come from above, or did I come"
  },
  {
    "time": "00:08:47",
    "text": "from this left cell? You know, this"
  },
  {
    "time": "00:08:49",
    "text": "makes us realize one thing: we need to"
  },
  {
    "time": "00:08:52",
    "text": "pass on one more piece of information. i"
  },
  {
    "time": "00:08:54",
    "text": ", j is not enough. Now, we will also"
  },
  {
    "time": "00:08:57",
    "text": "have to pass on which side we came from"
  },
  {
    "time": "00:09:00",
    "text": ". Where we came from. So, we will have"
  },
  {
    "time": "00:09:03",
    "text": "to keep one more variable."
  },
  {
    "time": "00:09:05",
    "text": "And if I came from the left-hand cell,"
  },
  {
    "time": "00:09:09",
    "text": "let's do this."
  },
  {
    "time": "00:09:12",
    "text": "Let's take a variable named 'left'. We"
  },
  {
    "time": "00:09:15",
    "text": "will set its value to zero. And if I"
  },
  {
    "time": "00:09:17",
    "text": "came from the cell above, we will set"
  },
  {
    "time": "00:09:20",
    "text": "its value to one. Okay? So, if I am in"
  },
  {
    "time": "00:09:23",
    "text": "this cell. Look here, if I have reached"
  },
  {
    "time": "00:09:26",
    "text": "this cell, I will check where I came"
  },
  {
    "time": "00:09:28",
    "text": "from. Where I came from. If the value of"
  },
  {
    "time": "00:09:31",
    "text": "'came from' equals 'left', meaning it"
  },
  {
    "time": "00:09:33",
    "text": "equals zero, then I will understand that"
  },
  {
    "time": "00:09:36",
    "text": "I have come from the left-hand side. If"
  },
  {
    "time": "00:09:39",
    "text": "the value of 'came from' is not 'left'"
  },
  {
    "time": "00:09:41",
    "text": "but equals 'up'. The value of 'up' is"
  },
  {
    "time": "00:09:43",
    "text": "one, so I will understand that I have"
  },
  {
    "time": "00:09:44",
    "text": "come from above. So with this help, I"
  },
  {
    "time": "00:09:46",
    "text": "can make a decision that if I have come"
  },
  {
    "time": "00:09:48",
    "text": "from above into this mirror cell, then"
  },
  {
    "time": "00:09:50",
    "text": "what will be my next cell? My next cell"
  },
  {
    "time": "00:09:52",
    "text": "will be i, j + 1 because I am going to"
  },
  {
    "time": "00:09:54",
    "text": "deflect to the right-hand side. Look, if"
  },
  {
    "time": "00:09:56",
    "text": "I have come from above, I will deflect"
  },
  {
    "time": "00:09:58",
    "text": "this way. So, I moved to i, j + 1. Right"
  },
  {
    "time": "00:10:01",
    "text": "? So, do you know why I just want to"
  },
  {
    "time": "00:10:03",
    "text": "focus on this?"
  },
  {
    "time": "00:10:04",
    "text": "To help you realize that we will need"
  },
  {
    "time": "00:10:06",
    "text": "one more parameter to solve this problem"
  },
  {
    "time": "00:10:09",
    "text": "."
  },
  {
    "time": "00:10:10",
    "text": "i, j is not enough. Isn't it? And why"
  },
  {
    "time": "00:10:13",
    "text": "did this parameter come about? Because,"
  },
  {
    "time": "00:10:15",
    "text": "man, it has only come about due to this"
  },
  {
    "time": "00:10:17",
    "text": "mirror situation. In the cell where the"
  },
  {
    "time": "00:10:20",
    "text": "cell value is zero, there is no such"
  },
  {
    "time": "00:10:22",
    "text": "issue at all."
  },
  {
    "time": "00:10:24",
    "text": "But in the cell where the value is one,"
  },
  {
    "time": "00:10:26",
    "text": "we now have to check where you came from"
  },
  {
    "time": "00:10:28",
    "text": "to this cell."
  },
  {
    "time": "00:10:29",
    "text": "From above or from the left-hand side"
  },
  {
    "time": "00:10:31",
    "text": "here. So, only an extra parameter has"
  },
  {
    "time": "00:10:33",
    "text": "been added because of this mirror cell."
  },
  {
    "time": "00:10:35",
    "text": "So, we have now agreed that we will need"
  },
  {
    "time": "00:10:36",
    "text": "three parameters. Now let us solve this"
  },
  {
    "time": "00:10:39",
    "text": ". The relation I told you about is"
  },
  {
    "time": "00:10:41",
    "text": "generally used like this when we solve"
  },
  {
    "time": "00:10:44",
    "text": "bottom-up. But today's problem is a"
  },
  {
    "time": "00:10:47",
    "text": "little bit different. So, I will not"
  },
  {
    "time": "00:10:48",
    "text": "just create a bottom-up solution. I will"
  },
  {
    "time": "00:10:50",
    "text": "also show you how to write the recursion"
  },
  {
    "time": "00:10:52",
    "text": "code. Okay? So, let's start from the"
  },
  {
    "time": "00:10:54",
    "text": "very basics with recursion. So, let's"
  },
  {
    "time": "00:10:57",
    "text": "take some generic cell. Let's assume"
  },
  {
    "time": "00:10:59",
    "text": "this is i, j. Right? This is i, j. Now,"
  },
  {
    "time": "00:11:03",
    "text": "let's assume the value at this i, j was"
  },
  {
    "time": "00:11:08",
    "text": "zero."
  },
  {
    "time": "00:11:10",
    "text": "Now, if the value is zero, then it's"
  },
  {
    "time": "00:11:12",
    "text": "fine, there is no problem. I can go"
  },
  {
    "time": "00:11:14",
    "text": "right from here. I can go down from here"
  },
  {
    "time": "00:11:18",
    "text": ". Because that is what the problem says"
  },
  {
    "time": "00:11:19",
    "text": ": from a given cell you can either go"
  },
  {
    "time": "00:11:21",
    "text": "right or down. Then there is no problem"
  },
  {
    "time": "00:11:23",
    "text": ". What will I do? We just need to make a"
  },
  {
    "time": "00:11:25",
    "text": "simple recursion call. So, in recursion"
  },
  {
    "time": "00:11:27",
    "text": ", I will find the total count like this"
  },
  {
    "time": "00:11:29",
    "text": ". I'll take total = 0. Total plus equals"
  },
  {
    "time": "00:11:33",
    "text": "to, go to the right-hand side and find"
  },
  {
    "time": "00:11:35",
    "text": "how many number of paths there are. So,"
  },
  {
    "time": "00:11:38",
    "text": "we will write a recursive function named"
  },
  {
    "time": "00:11:41",
    "text": "solve."
  },
  {
    "time": "00:11:42",
    "text": "I will tell him, hey, this is my grid."
  },
  {
    "time": "00:11:46",
    "text": "And now, which cell am I going to? If I"
  },
  {
    "time": "00:11:48",
    "text": "am currently at i j, then what will be"
  },
  {
    "time": "00:11:50",
    "text": "my next cell? It will be i j + 1."
  },
  {
    "time": "00:11:53",
    "text": "Because if I am moving right from here,"
  },
  {
    "time": "00:11:55",
    "text": "then I am going this way. So, tell me"
  },
  {
    "time": "00:11:58",
    "text": "one thing, when you come here to this"
  },
  {
    "time": "00:12:01",
    "text": "cell—let's put a question mark here—"
  },
  {
    "time": "00:12:03",
    "text": "where did you come from? You came to"
  },
  {
    "time": "00:12:06",
    "text": "this cell from the cell on this side. So"
  },
  {
    "time": "00:12:08",
    "text": ", you know, it is this cell's duty that"
  },
  {
    "time": "00:12:10",
    "text": "when it goes to the next one, it tells"
  },
  {
    "time": "00:12:13",
    "text": "it, \"Look brother, I came from here.\" So"
  },
  {
    "time": "00:12:15",
    "text": "for this cell, it means it has arrived"
  },
  {
    "time": "00:12:19",
    "text": "from the left. So here, I am doing the"
  },
  {
    "time": "00:12:22",
    "text": "same thing, that if I am at i j"
  },
  {
    "time": "00:12:26",
    "text": "j"
  },
  {
    "time": "00:12:27",
    "text": "going to I J + 1. Meaning I am moving to"
  },
  {
    "time": "00:12:30",
    "text": "the cell on the right."
  },
  {
    "time": "00:12:32",
    "text": "So I will tell it, right, that I know"
  },
  {
    "time": "00:12:34",
    "text": "where I came from?"
  },
  {
    "time": "00:12:35",
    "text": "I have come from the left side. Okay? So"
  },
  {
    "time": "00:12:37",
    "text": "here in the comma, look, I am using the"
  },
  {
    "time": "00:12:40",
    "text": "'left' variable. Left. Okay? So keep"
  },
  {
    "time": "00:12:43",
    "text": "this thing in mind. You have taken a"
  },
  {
    "time": "00:12:46",
    "text": "right direction from i J. But the cell"
  },
  {
    "time": "00:12:48",
    "text": "you arrived in needs to know where you"
  },
  {
    "time": "00:12:50",
    "text": "came from, right? So for that cell, you"
  },
  {
    "time": "00:12:52",
    "text": "are from the left, aren't you? You have"
  },
  {
    "time": "00:12:53",
    "text": "arrived from the left towards it. Okay?"
  },
  {
    "time": "00:12:56",
    "text": "Similarly, total plus equals to, we can"
  },
  {
    "time": "00:12:59",
    "text": "either go right or we can go down. So"
  },
  {
    "time": "00:13:02",
    "text": "for going down, what will we do? The row"
  },
  {
    "time": "00:13:04",
    "text": "will change. i + 1, column will remain"
  },
  {
    "time": "00:13:06",
    "text": "the same. Now think for yourself, when"
  },
  {
    "time": "00:13:09",
    "text": "you are going down from here, then this"
  },
  {
    "time": "00:13:12",
    "text": "i + 1 j needs to know where you came"
  },
  {
    "time": "00:13:15",
    "text": "from, right? So I will tell it that, hey"
  },
  {
    "time": "00:13:17",
    "text": ", I have come from the cell above you."
  },
  {
    "time": "00:13:20",
    "text": "Meaning, I came from 'up'."
  },
  {
    "time": "00:13:22",
    "text": "So, you know, the benefit of this is"
  },
  {
    "time": "00:13:25",
    "text": "that if in the future this cell, if in"
  },
  {
    "time": "00:13:28",
    "text": "the future this cell was a one, then now"
  },
  {
    "time": "00:13:31",
    "text": "I know where I came from in this cell."
  },
  {
    "time": "00:13:34",
    "text": "Because look, I had already sent the '"
  },
  {
    "time": "00:13:36",
    "text": "left' variable here. So when I come to"
  },
  {
    "time": "00:13:38",
    "text": "this one, I will see, oh, I came from '"
  },
  {
    "time": "00:13:40",
    "text": "left', right?"
  },
  {
    "time": "00:13:42",
    "text": "So if I came from 'left', I will go '"
  },
  {
    "time": "00:13:44",
    "text": "down', because I am a mirror, and if I"
  },
  {
    "time": "00:13:45",
    "text": "come to a mirror from the left, I will"
  },
  {
    "time": "00:13:47",
    "text": "go down."
  },
  {
    "time": "00:13:48",
    "text": "If I come from up, I will go right."
  },
  {
    "time": "00:13:50",
    "text": "That's why I am passing on to the next"
  },
  {
    "time": "00:13:53",
    "text": "cell that hey, for you, I was from the"
  },
  {
    "time": "00:13:56",
    "text": "left, and hey, for you, I was up. Okay?"
  },
  {
    "time": "00:14:01",
    "text": "i j tells the next cell. So, this means"
  },
  {
    "time": "00:14:05",
    "text": "if my current cell is zero, I can go"
  },
  {
    "time": "00:14:09",
    "text": "both right and down."
  },
  {
    "time": "00:14:12",
    "text": "But what if my current cell was one?"
  },
  {
    "time": "00:14:15",
    "text": "Let's assume if i j were one, then what"
  },
  {
    "time": "00:14:18",
    "text": "would happen? So let's see how to write"
  },
  {
    "time": "00:14:20",
    "text": "that. This was for when my i j was zero"
  },
  {
    "time": "00:14:23",
    "text": ", then I could go right and down. If my"
  },
  {
    "time": "00:14:27",
    "text": "current cell is one, then let me draw a"
  },
  {
    "time": "00:14:31",
    "text": "picture here to make it easier. Let's"
  },
  {
    "time": "00:14:35",
    "text": "assume my i j value was one. So remember"
  },
  {
    "time": "00:14:39",
    "text": "what the problem stated, that if you"
  },
  {
    "time": "00:14:40",
    "text": "come to a mirror cell, you don't have to"
  },
  {
    "time": "00:14:42",
    "text": "do anything. You just have to directly"
  },
  {
    "time": "00:14:44",
    "text": "reflect or deflect. But to deflect, you"
  },
  {
    "time": "00:14:46",
    "text": "must know where you came from to reach"
  },
  {
    "time": "00:14:48",
    "text": "this cell, right? Right? So I will"
  },
  {
    "time": "00:14:52",
    "text": "simply write here that if my grid of i j"
  },
  {
    "time": "00:14:57",
    "text": "equals one. Then I just want to know"
  },
  {
    "time": "00:15:00",
    "text": "where I came from to reach this cell. So"
  },
  {
    "time": "00:15:02",
    "text": "I will use the same variable. If"
  },
  {
    "time": "00:15:06",
    "text": "What value of 'came from' was passed to"
  },
  {
    "time": "00:15:09",
    "text": "me?"
  },
  {
    "time": "00:15:10",
    "text": "If 'left' was passed. Meaning I have"
  },
  {
    "time": "00:15:14",
    "text": "come to this cell from the left. Then I"
  },
  {
    "time": "00:15:18",
    "text": "have to deflect downwards. So what will"
  },
  {
    "time": "00:15:21",
    "text": "I do?"
  },
  {
    "time": "00:15:22",
    "text": "I will call the solve function and count"
  },
  {
    "time": "00:15:25",
    "text": "all the paths going down to the"
  },
  {
    "time": "00:15:27",
    "text": "destination."
  },
  {
    "time": "00:15:28",
    "text": "Grid i + 1"
  },
  {
    "time": "00:15:33",
    "text": "j, and when you go down, which variable"
  },
  {
    "time": "00:15:36",
    "text": "do you pass? You pass 'up'. So that the"
  },
  {
    "time": "00:15:39",
    "text": "one below knows that you have come to it"
  },
  {
    "time": "00:15:41",
    "text": "from the cell above. Right?"
  },
  {
    "time": "00:15:44",
    "text": "This is simple. We will return all the"
  },
  {
    "time": "00:15:47",
    "text": "paths I get from here. And if you didn't"
  },
  {
    "time": "00:15:50",
    "text": "come from the left, then in the 'else',"
  },
  {
    "time": "00:15:52",
    "text": "it means you came from up. And if you"
  },
  {
    "time": "00:15:55",
    "text": "come from up, you have to deflect to the"
  },
  {
    "time": "00:15:57",
    "text": "right-hand side. So here, return solve"
  },
  {
    "time": "00:16:01",
    "text": "and go to the right-hand side. What does"
  },
  {
    "time": "00:16:05",
    "text": "the right-hand side mean?"
  },
  {
    "time": "00:16:06",
    "text": "i j + 1 and when you go to the"
  },
  {
    "time": "00:16:09",
    "text": "right-hand side, tell the right-hand"
  },
  {
    "time": "00:16:11",
    "text": "side cell that you came from its left."
  },
  {
    "time": "00:16:15",
    "text": "This is very important."
  },
  {
    "time": "00:16:16",
    "text": "This variable is the whole game; if you"
  },
  {
    "time": "00:16:18",
    "text": "go into any mirror cell, you must know"
  },
  {
    "time": "00:16:20",
    "text": "at that moment where you came from."
  },
  {
    "time": "00:16:23",
    "text": "Whether you came from the left or from"
  },
  {
    "time": "00:16:24",
    "text": "above. So, all things considered, these"
  },
  {
    "time": "00:16:26",
    "text": "were the only two important parts. One"
  },
  {
    "time": "00:16:28",
    "text": "thing is that if my current cell is one"
  },
  {
    "time": "00:16:30",
    "text": ", then where did I come from to get"
  },
  {
    "time": "00:16:32",
    "text": "there?"
  },
  {
    "time": "00:16:34",
    "text": "If the current cell is zero, then well,"
  },
  {
    "time": "00:16:36",
    "text": "nothing. I just have to either go right"
  },
  {
    "time": "00:16:39",
    "text": "to find the answer or go down to find"
  },
  {
    "time": "00:16:41",
    "text": "the answer and simply add them up. Okay"
  },
  {
    "time": "00:16:45",
    "text": "?"
  },
  {
    "time": "00:16:45",
    "text": "That's it. That was all we had. We will"
  },
  {
    "time": "00:16:48",
    "text": "add both these logics inside a simple"
  },
  {
    "time": "00:16:49",
    "text": "solve function. Right? Meaning, my solve"
  },
  {
    "time": "00:16:53",
    "text": "function. What all am I passing there? I"
  },
  {
    "time": "00:16:56",
    "text": "am passing the grid. My row or i, j,"
  },
  {
    "time": "00:16:58",
    "text": "whatever variable name you want to keep"
  },
  {
    "time": "00:17:00",
    "text": ", take that. And here we are passing one"
  },
  {
    "time": "00:17:03",
    "text": "more variable, 'came from', right?"
  },
  {
    "time": "00:17:06",
    "text": "And when doing memoization, take a"
  },
  {
    "time": "00:17:08",
    "text": "memoization vector here, named T or DP."
  },
  {
    "time": "00:17:11",
    "text": "So we will do the memoization while"
  },
  {
    "time": "00:17:14",
    "text": "coding, but these are the four variables"
  },
  {
    "time": "00:17:16",
    "text": "we are passing and we are writing two"
  },
  {
    "time": "00:17:19",
    "text": "cases."
  },
  {
    "time": "00:17:20",
    "text": "First of all, this is my case number one"
  },
  {
    "time": "00:17:23",
    "text": ", this is my case number two, right?"
  },
  {
    "time": "00:17:26",
    "text": "So we will write case number A and case"
  },
  {
    "time": "00:17:30",
    "text": "number B here, right? And at the top, we"
  },
  {
    "time": "00:17:34",
    "text": "will write the base case that, look, if"
  },
  {
    "time": "00:17:38",
    "text": "i is greater than or equal to m or j > ="
  },
  {
    "time": "00:17:41",
    "text": "if it becomes the number of columns,"
  },
  {
    "time": "00:17:44",
    "text": "then you are out of bounds. Return zero"
  },
  {
    "time": "00:17:47",
    "text": ". Or it could be that you have reached"
  },
  {
    "time": "00:17:49",
    "text": "the destination. If i = m-1. And j = n-"
  },
  {
    "time": "00:17:55",
    "text": "1. Meaning you have reached the"
  },
  {
    "time": "00:17:57",
    "text": "destination. Meaning you have found a"
  },
  {
    "time": "00:17:59",
    "text": "path, so return one. So you found one"
  },
  {
    "time": "00:18:00",
    "text": "path to reach the destination. Return"
  },
  {
    "time": "00:18:02",
    "text": "one from here. So as you can see, my"
  },
  {
    "time": "00:18:05",
    "text": "recursion code was this simple. We will"
  },
  {
    "time": "00:18:07",
    "text": "memoize this as well. Okay? But there is"
  },
  {
    "time": "00:18:10",
    "text": "one more thing I want to explain to you"
  },
  {
    "time": "00:18:13",
    "text": ": when you call this recursion for the"
  },
  {
    "time": "00:18:16",
    "text": "first time, how will you call it? So,"
  },
  {
    "time": "00:18:18",
    "text": "you will remember that the robot is"
  },
  {
    "time": "00:18:22",
    "text": "starting from 0,0. Meaning your"
  },
  {
    "time": "00:18:25",
    "text": "recursion is starting from here. And"
  },
  {
    "time": "00:18:26",
    "text": "this value will always be zero. There"
  },
  {
    "time": "00:18:28",
    "text": "will be no mirror here. There won't be a"
  },
  {
    "time": "00:18:29",
    "text": "mirror at the destination either. So you"
  },
  {
    "time": "00:18:31",
    "text": "see, your recursion is starting from"
  },
  {
    "time": "00:18:33",
    "text": "here. So when you call the solve"
  },
  {
    "time": "00:18:35",
    "text": "function for the first time, you will"
  },
  {
    "time": "00:18:37",
    "text": "pass the grid and pass what?"
  },
  {
    "time": "00:18:39",
    "text": "0, 0, and you will also have to put in"
  },
  {
    "time": "00:18:42",
    "text": "where you came from to this cell."
  },
  {
    "time": "00:18:44",
    "text": "Right? Because you are starting the"
  },
  {
    "time": "00:18:46",
    "text": "recursion from here for the first time,"
  },
  {
    "time": "00:18:48",
    "text": "right? So, you have just started from"
  },
  {
    "time": "00:18:50",
    "text": "this cell. Right? After this, wherever"
  },
  {
    "time": "00:18:53",
    "text": "you go, you will pass the 'came from'"
  },
  {
    "time": "00:18:56",
    "text": "variable."
  },
  {
    "time": "00:18:57",
    "text": "But since you just started here, it"
  },
  {
    "time": "00:19:00",
    "text": "doesn't matter what value you put for '"
  },
  {
    "time": "00:19:02",
    "text": "came from' because this is the starting"
  },
  {
    "time": "00:19:05",
    "text": "point, so just put anything there—zero"
  },
  {
    "time": "00:19:07",
    "text": "or one, or sorry, I mean left or up—it"
  },
  {
    "time": "00:19:10",
    "text": "doesn't matter."
  },
  {
    "time": "00:19:12",
    "text": "Okay, from here, when the recursion goes"
  },
  {
    "time": "00:19:15",
    "text": "further right or left, we will correctly"
  },
  {
    "time": "00:19:17",
    "text": "set the 'came from' value to left or up"
  },
  {
    "time": "00:19:20",
    "text": ", whatever is needed."
  },
  {
    "time": "00:19:22",
    "text": "But here, you have just started; you"
  },
  {
    "time": "00:19:24",
    "text": "haven't come from above or from the side"
  },
  {
    "time": "00:19:26",
    "text": ". So, I will just put any random value"
  },
  {
    "time": "00:19:29",
    "text": "here. Right? So, we will simply call"
  },
  {
    "time": "00:19:32",
    "text": "this solve function, and this recursion"
  },
  {
    "time": "00:19:34",
    "text": "will do everything and give the final"
  },
  {
    "time": "00:19:36",
    "text": "answer. The total number of paths to"
  },
  {
    "time": "00:19:38",
    "text": "reach from 0 to m-1, n-1. So, let's"
  },
  {
    "time": "00:19:41",
    "text": "write this recursion code. We will also"
  },
  {
    "time": "00:19:43",
    "text": "memoize it and then convert the same"
  },
  {
    "time": "00:19:46",
    "text": "recursion code into bottom-up. So, let's"
  },
  {
    "time": "00:19:48",
    "text": "start the code for this. Recursion with"
  },
  {
    "time": "00:19:50",
    "text": "memoization. First, let's define some"
  },
  {
    "time": "00:19:52",
    "text": "variables. m and n, which are my number"
  },
  {
    "time": "00:19:55",
    "text": "of rows. These are my number of columns"
  },
  {
    "time": "00:19:57",
    "text": ". This is my module. And remember, I"
  },
  {
    "time": "00:20:00",
    "text": "said I would keep two more variables."
  },
  {
    "time": "00:20:03",
    "text": "int left, int up."
  },
  {
    "time": "00:20:07",
    "text": "Right? What do left and up mean?"
  },
  {
    "time": "00:20:10",
    "text": "Left means you were coming from the left"
  },
  {
    "time": "00:20:12",
    "text": ", and up means you were coming from"
  },
  {
    "time": "00:20:14",
    "text": "above. Right? So, its value is zero."
  },
  {
    "time": "00:20:16",
    "text": "Let's assume its value is one."
  },
  {
    "time": "00:20:18",
    "text": "So, I will also write here that arrived"
  },
  {
    "time": "00:20:22",
    "text": "at current cell from left cell."
  },
  {
    "time": "00:20:27",
    "text": "It means it was moving in the right"
  },
  {
    "time": "00:20:30",
    "text": "direction. Right? Similarly, arrived at"
  },
  {
    "time": "00:20:35",
    "text": "current cell from the cell above. It"
  },
  {
    "time": "00:20:39",
    "text": "means it was moving down. Now, let's"
  },
  {
    "time": "00:20:42",
    "text": "start from here. First, let's populate m"
  },
  {
    "time": "00:20:45",
    "text": "and n."
  },
  {
    "time": "00:20:47",
    "text": "grid.size (), n = grid [0] .size ()."
  },
  {
    "time": "00:20:54",
    "text": "Now after this, it's simple; we will"
  },
  {
    "time": "00:20:56",
    "text": "call our solve function."
  },
  {
    "time": "00:20:58",
    "text": "Return solve, and what will we pass in"
  },
  {
    "time": "00:21:00",
    "text": "it?"
  },
  {
    "time": "00:21:01",
    "text": "We will pass the grid. Pass zero. Pass"
  },
  {
    "time": "00:21:03",
    "text": "zero. I am starting from zero, zero. And"
  },
  {
    "time": "00:21:05",
    "text": "for the 'came from' variable, just put"
  },
  {
    "time": "00:21:08",
    "text": "any value. Zero or one; I will put left"
  },
  {
    "time": "00:21:11",
    "text": "."
  },
  {
    "time": "00:21:11",
    "text": "Left or up, just put anything; it"
  },
  {
    "time": "00:21:13",
    "text": "doesn't matter. Uh, we aren't doing"
  },
  {
    "time": "00:21:15",
    "text": "memoization right now. So, let's leave"
  },
  {
    "time": "00:21:17",
    "text": "it as is. Now, let's start here."
  },
  {
    "time": "00:21:21",
    "text": "In the solve function, we are passing"
  },
  {
    "time": "00:21:24",
    "text": "the grid."
  },
  {
    "time": "00:21:26",
    "text": "Int i, int j—instead of i and j, you can"
  },
  {
    "time": "00:21:30",
    "text": "use row and column if you want. And int"
  },
  {
    "time": "00:21:33",
    "text": "'cameFrom', to track where you came from"
  },
  {
    "time": "00:21:36",
    "text": "."
  },
  {
    "time": "00:21:36",
    "text": "Right? So this was a quite important"
  },
  {
    "time": "00:21:38",
    "text": "part, and I found it to be a good"
  },
  {
    "time": "00:21:40",
    "text": "problem. It made the normal DP on grids"
  },
  {
    "time": "00:21:42",
    "text": "a bit tricky."
  },
  {
    "time": "00:21:44",
    "text": "If my i is > = m, sorry, or if my j"
  },
  {
    "time": "00:21:47",
    "text": "becomes > = n, then obviously return"
  },
  {
    "time": "00:21:51",
    "text": "zero."
  },
  {
    "time": "00:21:52",
    "text": "You have gone into an invalid path."
  },
  {
    "time": "00:21:55",
    "text": "And if my i equals m-1 and j equals n-1"
  },
  {
    "time": "00:21:59",
    "text": ". That means you have found a path to"
  },
  {
    "time": "00:22:03",
    "text": "reach the destination. And if that's not"
  },
  {
    "time": "00:22:05",
    "text": "the case, then let's check. First of all"
  },
  {
    "time": "00:22:07",
    "text": ", let's check for the mirror. What will"
  },
  {
    "time": "00:22:10",
    "text": "be needed to check the mirror? If grid"
  },
  {
    "time": "00:22:12",
    "text": "of i, j equals 1, then we need to check"
  },
  {
    "time": "00:22:16",
    "text": "that, hey, this is a mirror. I will"
  },
  {
    "time": "00:22:20",
    "text": "write it here. This is a mirror."
  },
  {
    "time": "00:22:22",
    "text": "So find out where we came from; check if"
  },
  {
    "time": "00:22:25",
    "text": "'cameFrom' equals 'left'."
  },
  {
    "time": "00:22:28",
    "text": "If I came from the left-hand side, then"
  },
  {
    "time": "00:22:30",
    "text": "I will be able to go down now. Right? So"
  },
  {
    "time": "00:22:33",
    "text": "I will simply call the solve function"
  },
  {
    "time": "00:22:36",
    "text": "grid, i + 1, j, and now when you are"
  },
  {
    "time": "00:22:38",
    "text": "going down, tell it that you just came"
  },
  {
    "time": "00:22:41",
    "text": "from the up cell. Right?"
  },
  {
    "time": "00:22:44",
    "text": "Else, return solve grid. If you didn't"
  },
  {
    "time": "00:22:49",
    "text": "come from left but came from up, then"
  },
  {
    "time": "00:22:51",
    "text": "you will go right. i, j + 1, and when"
  },
  {
    "time": "00:22:54",
    "text": "going right, tell it that you came from"
  },
  {
    "time": "00:22:56",
    "text": "the left-hand side. So we have handled"
  },
  {
    "time": "00:22:58",
    "text": "cell 1, in case it is a mirror cell. And"
  },
  {
    "time": "00:23:01",
    "text": "if it's not cell 1, meaning its value is"
  },
  {
    "time": "00:23:03",
    "text": "0, then how will the total path count be"
  },
  {
    "time": "00:23:06",
    "text": "calculated? You can either go right or"
  },
  {
    "time": "00:23:08",
    "text": "you can go down."
  },
  {
    "time": "00:23:10",
    "text": "So total path count will be equal to"
  },
  {
    "time": "00:23:12",
    "text": "total path count plus go right."
  },
  {
    "time": "00:23:14",
    "text": "How will you go right? Grid of i, j + 1"
  },
  {
    "time": "00:23:16",
    "text": ", and when you go right, tell it that"
  },
  {
    "time": "00:23:20",
    "text": "you came from the left-hand side. And do"
  },
  {
    "time": "00:23:24",
    "text": "modulo mode here. Similarly, besides"
  },
  {
    "time": "00:23:27",
    "text": "right, you can also go down. So we have"
  },
  {
    "time": "00:23:30",
    "text": "to look at both possibilities."
  },
  {
    "time": "00:23:32",
    "text": "So for down, i + 1, j, and write 'up'"
  },
  {
    "time": "00:23:35",
    "text": "here."
  },
  {
    "time": "00:23:37",
    "text": "Return whatever total path count came"
  },
  {
    "time": "00:23:40",
    "text": "here. Now you can also memoize this. So"
  },
  {
    "time": "00:23:42",
    "text": "let's memoize it right now. For"
  },
  {
    "time": "00:23:44",
    "text": "memoization, you see, this i, j is"
  },
  {
    "time": "00:23:47",
    "text": "changing, and one more variable is"
  },
  {
    "time": "00:23:49",
    "text": "changing: 'cameFrom'."
  },
  {
    "time": "00:23:52",
    "text": "So what is happening is that for my"
  },
  {
    "time": "00:23:55",
    "text": "memoization, the data structure I use"
  },
  {
    "time": "00:23:57",
    "text": "will need to store i and j; it will have"
  },
  {
    "time": "00:24:00",
    "text": "to be 2D."
  },
  {
    "time": "00:24:02",
    "text": "But as you can see, there are two"
  },
  {
    "time": "00:24:04",
    "text": "possible values for 'came from', zero"
  },
  {
    "time": "00:24:05",
    "text": "and one. So let's do one thing, let's"
  },
  {
    "time": "00:24:08",
    "text": "take a 2D vector, but the value inside"
  },
  {
    "time": "00:24:11",
    "text": "it can be one of two things: if it came"
  },
  {
    "time": "00:24:14",
    "text": "from 'left', what is the answer? So for"
  },
  {
    "time": "00:24:17",
    "text": "now, let's set it to -1. If it came from"
  },
  {
    "time": "00:24:19",
    "text": "'right', what is the answer?"
  },
  {
    "time": "00:24:22",
    "text": "Let's set -1 here as well. So for"
  },
  {
    "time": "00:24:24",
    "text": "memoization, what will I simply do? I"
  },
  {
    "time": "00:24:26",
    "text": "will take a 3D vector. Or you can do"
  },
  {
    "time": "00:24:29",
    "text": "this: I have created these two vectors"
  },
  {
    "time": "00:24:31",
    "text": "of vectors for this i. And the value"
  },
  {
    "time": "00:24:34",
    "text": "inside it will either be for the left"
  },
  {
    "time": "00:24:36",
    "text": "one or for the up one 'came from'. So"
  },
  {
    "time": "00:24:39",
    "text": "let's do one thing. We can just take an"
  },
  {
    "time": "00:24:41",
    "text": "array here. We can take an array of ints"
  },
  {
    "time": "00:24:44",
    "text": "of size two. Right? We took a vector of"
  },
  {
    "time": "00:24:47",
    "text": "vectors for i and j, and for the two"
  },
  {
    "time": "00:24:50",
    "text": "values inside, we took an array of size"
  },
  {
    "time": "00:24:52",
    "text": "two. You can do it this way too,"
  },
  {
    "time": "00:24:54",
    "text": "whatever feels right or easy to you."
  },
  {
    "time": "00:24:56",
    "text": "Let's define this. Let's take m + 1 rows"
  },
  {
    "time": "00:24:59",
    "text": "in total for safety."
  },
  {
    "time": "00:25:01",
    "text": "And a vector of arrays of ints of size"
  },
  {
    "time": "00:25:05",
    "text": "two."
  },
  {
    "time": "00:25:08",
    "text": "It will have n."
  },
  {
    "time": "00:25:09",
    "text": "There will be n columns. Let's"
  },
  {
    "time": "00:25:11",
    "text": "initialize all values to -1, -1. If you"
  },
  {
    "time": "00:25:14",
    "text": "find this complex, you can also just"
  },
  {
    "time": "00:25:15",
    "text": "take a normal vector of vectors of"
  },
  {
    "time": "00:25:17",
    "text": "vectors. You can also take a vector of"
  },
  {
    "time": "00:25:18",
    "text": "vectors of pairs. Because you only need"
  },
  {
    "time": "00:25:20",
    "text": "two types of values, for left and for up"
  },
  {
    "time": "00:25:23",
    "text": ". However you want to memoize, you can"
  },
  {
    "time": "00:25:26",
    "text": "do it. So now we will have to pass this"
  },
  {
    "time": "00:25:28",
    "text": "t as well. Let's pass t."
  },
  {
    "time": "00:25:33",
    "text": "Vector of ints, here T...sorry, I passed"
  },
  {
    "time": "00:25:38",
    "text": "T. Now, before doing everything here,"
  },
  {
    "time": "00:25:42",
    "text": "let's check if 't of i, j and came from"
  },
  {
    "time": "00:25:46",
    "text": "' value is not equal to -1, meaning the"
  },
  {
    "time": "00:25:51",
    "text": "answer has already been calculated, then"
  },
  {
    "time": "00:25:55",
    "text": "we will simply return 't of i, j, came"
  },
  {
    "time": "00:26:00",
    "text": "from'. Right? And if that is not the"
  },
  {
    "time": "00:26:03",
    "text": "case, then wherever I am returning the"
  },
  {
    "time": "00:26:05",
    "text": "answer, I will memoize it here. I will"
  },
  {
    "time": "00:26:07",
    "text": "memoize it there as well. And here at"
  },
  {
    "time": "00:26:09",
    "text": "the end, I will add the memoization. And"
  },
  {
    "time": "00:26:11",
    "text": "here, everywhere I call solve, I will"
  },
  {
    "time": "00:26:14",
    "text": "have to pass t. I have to pass T here as"
  },
  {
    "time": "00:26:17",
    "text": "well. I have to pass t here too. Now"
  },
  {
    "time": "00:26:19",
    "text": "let's try submitting this. Great, we"
  },
  {
    "time": "00:26:21",
    "text": "have passed all these cases. What will"
  },
  {
    "time": "00:26:23",
    "text": "be the time complexity? How many total"
  },
  {
    "time": "00:26:24",
    "text": "states will there be? It's m*n, and here"
  },
  {
    "time": "00:26:28",
    "text": "we have two, right? Two values are"
  },
  {
    "time": "00:26:30",
    "text": "possible in every grid. So you can say m"
  },
  {
    "time": "00:26:33",
    "text": "*n*2. But if you look at it, two is a"
  },
  {
    "time": "00:26:35",
    "text": "constant. So the time complexity for the"
  },
  {
    "time": "00:26:37",
    "text": "total states I will visit will be m*n*2"
  },
  {
    "time": "00:26:40",
    "text": "; remove the two, it is a constant."
  },
  {
    "time": "00:26:42",
    "text": "Similarly, my space will also be the"
  },
  {
    "time": "00:26:44",
    "text": "same. O (m*n*2); remove the 2, as two is"
  },
  {
    "time": "00:26:47",
    "text": "constant. Now let's convert this same"
  },
  {
    "time": "00:26:50",
    "text": "code into bottom-up. So let's write the"
  },
  {
    "time": "00:26:52",
    "text": "bottom-up code. And we will use the"
  },
  {
    "time": "00:26:54",
    "text": "exact same code we used in recursion. We"
  },
  {
    "time": "00:26:56",
    "text": "always do bottom-up using the recursion"
  },
  {
    "time": "00:26:58",
    "text": "code itself. And if you have watched my"
  },
  {
    "time": "00:27:00",
    "text": "DP concepts playlist, you would have"
  },
  {
    "time": "00:27:02",
    "text": "understood how easy this is. To convert"
  },
  {
    "time": "00:27:05",
    "text": "any recursion code to bottom-up. I have"
  },
  {
    "time": "00:27:08",
    "text": "explained many things in detail there."
  },
  {
    "time": "00:27:09",
    "text": "So I will do exactly the same thing here"
  },
  {
    "time": "00:27:11",
    "text": "."
  },
  {
    "time": "00:27:12",
    "text": "Just like the 3D memoization vector here"
  },
  {
    "time": "00:27:14",
    "text": ", I will take a DP vector here too."
  },
  {
    "time": "00:27:18",
    "text": "Every grid, whatever grid this is, will"
  },
  {
    "time": "00:27:20",
    "text": "have two values. So I can say it like"
  },
  {
    "time": "00:27:23",
    "text": "this, equals to, it will have two values"
  },
  {
    "time": "00:27:25",
    "text": ". Do you see? It is a vector of vectors"
  },
  {
    "time": "00:27:28",
    "text": "of an array of size two. So here, this"
  },
  {
    "time": "00:27:31",
    "text": "is an array of size two. For now, let's"
  },
  {
    "time": "00:27:33",
    "text": "keep zero and zero here. Do you know"
  },
  {
    "time": "00:27:35",
    "text": "what this means?"
  },
  {
    "time": "00:27:37",
    "text": "If I write it like this, t of i j, if"
  },
  {
    "time": "00:27:41",
    "text": "there is a left here, remember what left"
  },
  {
    "time": "00:27:44",
    "text": "means?"
  },
  {
    "time": "00:27:46",
    "text": "Left means zero, so understand it like"
  },
  {
    "time": "00:27:49",
    "text": "this: t of i j, its zeroth index, and"
  },
  {
    "time": "00:27:52",
    "text": "this is the first index, so you can say"
  },
  {
    "time": "00:27:55",
    "text": "this zeroth is my left and first is my"
  },
  {
    "time": "00:27:59",
    "text": "up. Okay? So I am saying the same thing"
  },
  {
    "time": "00:28:01",
    "text": "here."
  },
  {
    "time": "00:28:01",
    "text": "T of i j's array, its left, what does"
  },
  {
    "time": "00:28:04",
    "text": "this mean?"
  },
  {
    "time": "00:28:07",
    "text": "The total number of ways to reach t of i"
  },
  {
    "time": "00:28:09",
    "text": "j if you come from the left will be"
  },
  {
    "time": "00:28:12",
    "text": "equal to whatever its value is."
  },
  {
    "time": "00:28:15",
    "text": "Let's assume its value is x. Similarly,"
  },
  {
    "time": "00:28:17",
    "text": "t of i j."
  },
  {
    "time": "00:28:20",
    "text": "Up. What does this mean? Let's assume"
  },
  {
    "time": "00:28:24",
    "text": "the total number of ways to reach i, j"
  },
  {
    "time": "00:28:26",
    "text": "if you come from above = y. If it were x"
  },
  {
    "time": "00:28:29",
    "text": ", y instead of zero, zero here. So that"
  },
  {
    "time": "00:28:31",
    "text": "is just its definition. So we have"
  },
  {
    "time": "00:28:33",
    "text": "already done our state definition, it"
  },
  {
    "time": "00:28:35",
    "text": "will be this."
  },
  {
    "time": "00:28:36",
    "text": "And now, pay attention to one thing, the"
  },
  {
    "time": "00:28:40",
    "text": "DP array or memoization array I actually"
  },
  {
    "time": "00:28:43",
    "text": "took, it was nothing but a simple 2D"
  },
  {
    "time": "00:28:46",
    "text": "array, or you could also call it a 3D"
  },
  {
    "time": "00:28:49",
    "text": "array."
  },
  {
    "time": "00:28:51",
    "text": "This 2D array has two vectors. It is a"
  },
  {
    "time": "00:28:54",
    "text": "vector of size two everywhere. So now"
  },
  {
    "time": "00:28:56",
    "text": "pay attention to one thing. If I ask you"
  },
  {
    "time": "00:28:58",
    "text": "what t of 0"
  },
  {
    "time": "00:29:02",
    "text": "is, the cell, this is the cell. In this"
  },
  {
    "time": "00:29:05",
    "text": ", this is a vector."
  },
  {
    "time": "00:29:08",
    "text": "Consider this an array. This is left and"
  },
  {
    "time": "00:29:12",
    "text": "this is up. Or you can also write it"
  },
  {
    "time": "00:29:15",
    "text": "like this. t of 0"
  },
  {
    "time": "00:29:19",
    "text": "left."
  },
  {
    "time": "00:29:21",
    "text": "That will give you this entry. t of 0"
  },
  {
    "time": "00:29:28",
    "text": "up, that will give you this entry. So,"
  },
  {
    "time": "00:29:31",
    "text": "do you know what t of 0 left means?"
  },
  {
    "time": "00:29:34",
    "text": "That you reached 0 from the left."
  },
  {
    "time": "00:29:37",
    "text": "So how many possible ways are there to"
  },
  {
    "time": "00:29:39",
    "text": "reach here? It's simple. There is only"
  },
  {
    "time": "00:29:41",
    "text": "one possible way to reach. Because there"
  },
  {
    "time": "00:29:43",
    "text": "is only one possible way to come to 0"
  },
  {
    "time": "00:29:45",
    "text": "from 0, since you are already standing"
  },
  {
    "time": "00:29:47",
    "text": "there. Right? So 0"
  },
  {
    "time": "00:29:52",
    "text": "left = 1. Similarly, 0 up = 1. Because"
  },
  {
    "time": "00:29:55",
    "text": "you are standing right there and there"
  },
  {
    "time": "00:29:57",
    "text": "is only one way to reach there. So that"
  },
  {
    "time": "00:29:59",
    "text": "is one. Now look at the tricky part,"
  },
  {
    "time": "00:30:01",
    "text": "let's look at this one first. How many"
  },
  {
    "time": "00:30:04",
    "text": "possible ways are there to come here?"
  },
  {
    "time": "00:30:05",
    "text": "There is only one way to come here. Only"
  },
  {
    "time": "00:30:08",
    "text": "from the left. Okay? So you know, and"
  },
  {
    "time": "00:30:11",
    "text": "look here too. There is only one"
  },
  {
    "time": "00:30:12",
    "text": "possible way here too. Only from the"
  },
  {
    "time": "00:30:14",
    "text": "left. There is only one possible way"
  },
  {
    "time": "00:30:15",
    "text": "here too. Only from the left. Only from"
  },
  {
    "time": "00:30:18",
    "text": "the left. Right? And pay attention to"
  },
  {
    "time": "00:30:20",
    "text": "one more thing here. If at any point of"
  },
  {
    "time": "00:30:23",
    "text": "time, let's assume my original grid,"
  },
  {
    "time": "00:30:26",
    "text": "suppose there is a 1 here. If I have a 1"
  },
  {
    "time": "00:30:29",
    "text": "here in the zeroth row, will you ever be"
  },
  {
    "time": "00:30:32",
    "text": "able to go to this cell or if there were"
  },
  {
    "time": "00:30:34",
    "text": "more cells ahead, would you be able to"
  },
  {
    "time": "00:30:36",
    "text": "go there? You will not be able to. Why?"
  },
  {
    "time": "00:30:38",
    "text": "Because look, you cannot come to this"
  },
  {
    "time": "00:30:40",
    "text": "cell from above because it's out of"
  },
  {
    "time": "00:30:42",
    "text": "bounds, and if you want to come from"
  },
  {
    "time": "00:30:44",
    "text": "here, you see, it will never let you"
  },
  {
    "time": "00:30:47",
    "text": "come because when you go from here to"
  },
  {
    "time": "00:30:49",
    "text": "here, it will deflect you downwards. Do"
  },
  {
    "time": "00:30:51",
    "text": "you know what this means? If there is a"
  },
  {
    "time": "00:30:54",
    "text": "one anywhere in the zeroth row, you"
  },
  {
    "time": "00:30:56",
    "text": "cannot go to any cells after that. Okay"
  },
  {
    "time": "00:30:59",
    "text": "?"
  },
  {
    "time": "00:31:00",
    "text": "Similarly, if I talk about the zeroth"
  },
  {
    "time": "00:31:02",
    "text": "column. Let's assume this is the zeroth"
  },
  {
    "time": "00:31:04",
    "text": "column. If a one appears anywhere here,"
  },
  {
    "time": "00:31:06",
    "text": "you will never be able to go to the"
  },
  {
    "time": "00:31:08",
    "text": "cells below it. Cross here, cross here,"
  },
  {
    "time": "00:31:10",
    "text": "cross here. Because if you came from"
  },
  {
    "time": "00:31:12",
    "text": "above to this one, you would be"
  },
  {
    "time": "00:31:13",
    "text": "deflected like this. Right? So, one"
  },
  {
    "time": "00:31:16",
    "text": "thing you can do is that its value here"
  },
  {
    "time": "00:31:21",
    "text": "is zero, sorry, 1. Isn't it? Or I can"
  },
  {
    "time": "00:31:24",
    "text": "write it like this. There is one"
  },
  {
    "time": "00:31:26",
    "text": "possible way to come from the left in 0"
  },
  {
    "time": "00:31:29",
    "text": ". There is one possible way to come from"
  },
  {
    "time": "00:31:31",
    "text": "above in 0. Now, let me do one thing. I"
  },
  {
    "time": "00:31:34",
    "text": "will fill the zeroth row. Similarly, we"
  },
  {
    "time": "00:31:39",
    "text": "can fill the zeroth column beforehand as"
  },
  {
    "time": "00:31:41",
    "text": "well. Right? So, I am filling the zeroth"
  },
  {
    "time": "00:31:43",
    "text": "row right now. Look, watch carefully"
  },
  {
    "time": "00:31:45",
    "text": "what I am writing. For int column = 1,"
  },
  {
    "time": "00:31:48",
    "text": "let's start. Because in the zeroth row,"
  },
  {
    "time": "00:31:52",
    "text": "I have already filled the zeroth column"
  },
  {
    "time": "00:31:54",
    "text": "part, right? I need to fill this. I need"
  },
  {
    "time": "00:31:56",
    "text": "to fill this. I need to fill this and"
  },
  {
    "time": "00:31:58",
    "text": "this. Right? So to fill the zeroth row,"
  },
  {
    "time": "00:32:02",
    "text": "column = 1, column < n, column ++. Now,"
  },
  {
    "time": "00:32:06",
    "text": "tell me one thing, I am at the zeroth"
  },
  {
    "time": "00:32:09",
    "text": "row of t. And where can I come from? I"
  },
  {
    "time": "00:32:11",
    "text": "can only come from the left. I just told"
  },
  {
    "time": "00:32:13",
    "text": "you that. You can only come from the"
  },
  {
    "time": "00:32:16",
    "text": "left. So, in whichever column you are in"
  },
  {
    "time": "00:32:18",
    "text": "the zeroth row, you will always come"
  },
  {
    "time": "00:32:20",
    "text": "from the left. Left. Okay? And there is"
  },
  {
    "time": "00:32:23",
    "text": "only one possible way, so put one here."
  },
  {
    "time": "00:32:25",
    "text": "And put a check, the most important one"
  },
  {
    "time": "00:32:29",
    "text": ", if grid of this i, sorry, this zeroth"
  },
  {
    "time": "00:32:32",
    "text": "row, col has a value of one, it means"
  },
  {
    "time": "00:32:36",
    "text": "you cannot go any further. So, just"
  },
  {
    "time": "00:32:39",
    "text": "break from here. Right?"
  },
  {
    "time": "00:32:42",
    "text": "You cannot go beyond that."
  },
  {
    "time": "00:32:44",
    "text": "Let's assume there is a one here, then"
  },
  {
    "time": "00:32:46",
    "text": "all the values after that, or you won't"
  },
  {
    "time": "00:32:48",
    "text": "be able to reach those cells."
  },
  {
    "time": "00:32:51",
    "text": "So, for them, it will remain 0, 0, 0, 0"
  },
  {
    "time": "00:32:55",
    "text": ", 0. Okay? My zeroth row is filled."
  },
  {
    "time": "00:32:58",
    "text": "Similarly, what will I do now? The"
  },
  {
    "time": "00:33:01",
    "text": "zeroth column, which is mine. You fill"
  },
  {
    "time": "00:33:03",
    "text": "the zeroth column. These are all base"
  },
  {
    "time": "00:33:06",
    "text": "cases that you can fill separately. So,"
  },
  {
    "time": "00:33:08",
    "text": "who all do I need to fill? Look. So, who"
  },
  {
    "time": "00:33:10",
    "text": "needs to be filled in the zeroth column"
  },
  {
    "time": "00:33:12",
    "text": "? We need to handle this and this."
  },
  {
    "time": "00:33:13",
    "text": "Meaning, we will start from row number"
  },
  {
    "time": "00:33:14",
    "text": "one."
  },
  {
    "time": "00:33:15",
    "text": "For row = 1, row is < n, row ++"
  },
  {
    "time": "00:33:23",
    "text": "Now pay close attention, in this row, in"
  },
  {
    "time": "00:33:26",
    "text": "this zeroth column, I can only come from"
  },
  {
    "time": "00:33:29",
    "text": "above."
  },
  {
    "time": "00:33:30",
    "text": "There is only one possible way."
  },
  {
    "time": "00:33:32",
    "text": "So put one here and add a check that if"
  },
  {
    "time": "00:33:35",
    "text": "the value in the grid at this row,"
  },
  {
    "time": "00:33:38",
    "text": "column is one, then I cannot go below it"
  },
  {
    "time": "00:33:40",
    "text": "."
  },
  {
    "time": "00:33:41",
    "text": "Then break right here. So now the first"
  },
  {
    "time": "00:33:44",
    "text": "row and first column are populated, so"
  },
  {
    "time": "00:33:46",
    "text": "we can now populate the remaining cells"
  },
  {
    "time": "00:33:48",
    "text": "."
  },
  {
    "time": "00:33:50",
    "text": "But you know, one way to populate the"
  },
  {
    "time": "00:33:53",
    "text": "remaining cells is to write the exact"
  },
  {
    "time": "00:33:57",
    "text": "same logic as this code, or use the"
  },
  {
    "time": "00:34:00",
    "text": "normal bottom-up relation I told you at"
  },
  {
    "time": "00:34:04",
    "text": "the very beginning."
  },
  {
    "time": "00:34:06",
    "text": "If I scroll up a bit, do you remember? I"
  },
  {
    "time": "00:34:09",
    "text": "told you that in DP on grids, we often"
  },
  {
    "time": "00:34:11",
    "text": "write relations like this: if you are at"
  },
  {
    "time": "00:34:14",
    "text": "i, j, where could you have come from?"
  },
  {
    "time": "00:34:16",
    "text": "You would come from i-1, j. You would"
  },
  {
    "time": "00:34:18",
    "text": "come from i, j-1. So you can write it"
  },
  {
    "time": "00:34:20",
    "text": "like that too. So let's do one thing."
  },
  {
    "time": "00:34:21",
    "text": "I'll give you a little bonus now. I will"
  },
  {
    "time": "00:34:24",
    "text": "explain both methods to you. Okay? So"
  },
  {
    "time": "00:34:26",
    "text": "first, let's do one thing. Let's solve"
  },
  {
    "time": "00:34:28",
    "text": "it the way DP on grids is usually solved"
  },
  {
    "time": "00:34:31",
    "text": ". Let's fill the remaining cells. Now"
  },
  {
    "time": "00:34:34",
    "text": "filling the remaining cells. I have"
  },
  {
    "time": "00:34:36",
    "text": "normally started from row = 1, column ="
  },
  {
    "time": "00:34:39",
    "text": "1 because I have already filled row zero"
  },
  {
    "time": "00:34:41",
    "text": "and column zero. Okay? In DP on grids,"
  },
  {
    "time": "00:34:44",
    "text": "that's what it's all about, right? What"
  },
  {
    "time": "00:34:46",
    "text": "do I need to fill now? I need to fill t"
  },
  {
    "time": "00:34:50",
    "text": "of i, j now."
  },
  {
    "time": "00:34:52",
    "text": "Right? So, my first question should be,"
  },
  {
    "time": "00:34:55",
    "text": "where am I coming from right now? Am I"
  },
  {
    "time": "00:34:57",
    "text": "coming from the left? So which cell"
  },
  {
    "time": "00:34:59",
    "text": "would be on the left? If I am at i, j,"
  },
  {
    "time": "00:35:01",
    "text": "which will be my left cell? It will be i"
  },
  {
    "time": "00:35:04",
    "text": ", j-1. So now I will show this by"
  },
  {
    "time": "00:35:06",
    "text": "drawing a diagram. Let's assume this is"
  },
  {
    "time": "00:35:09",
    "text": "my i, j and if I have come here from the"
  },
  {
    "time": "00:35:12",
    "text": "left, then which cell is on the left? i"
  },
  {
    "time": "00:35:15",
    "text": ", j-1. Now look, there is one problem:"
  },
  {
    "time": "00:35:18",
    "text": "there are two possibilities on the"
  },
  {
    "time": "00:35:21",
    "text": "left-hand side."
  },
  {
    "time": "00:35:23",
    "text": "It could be one or it could be zero here"
  },
  {
    "time": "00:35:26",
    "text": ". If it is one here, do you know what I"
  },
  {
    "time": "00:35:29",
    "text": "will have to do? Now think for yourself"
  },
  {
    "time": "00:35:32",
    "text": ", if there is a one here and you arrived"
  },
  {
    "time": "00:35:34",
    "text": "this way, it means you definitely came"
  },
  {
    "time": "00:35:36",
    "text": "from above; you must have reached this"
  },
  {
    "time": "00:35:38",
    "text": "one from above to come here, right?"
  },
  {
    "time": "00:35:40",
    "text": "Otherwise, if you had come to this one"
  },
  {
    "time": "00:35:42",
    "text": "from the side, you would have gone that"
  },
  {
    "time": "00:35:43",
    "text": "way. But I just told you that I arrived"
  },
  {
    "time": "00:35:46",
    "text": "at this i, j from here, so I must have"
  },
  {
    "time": "00:35:48",
    "text": "certainly come from above. So, if I"
  },
  {
    "time": "00:35:51",
    "text": "write this diagram in code, look how it"
  },
  {
    "time": "00:35:54",
    "text": "will be written: i, j, I am coming from"
  },
  {
    "time": "00:35:57",
    "text": "1, so if...I will have to check if this"
  },
  {
    "time": "00:36:00",
    "text": "grid, the left-hand side cell of mine i"
  },
  {
    "time": "00:36:03",
    "text": ", j-1, is it a one? If it is one, where"
  },
  {
    "time": "00:36:06",
    "text": "will I get its answer from? From here."
  },
  {
    "time": "00:36:11",
    "text": "Where would I have come from to get here"
  },
  {
    "time": "00:36:12",
    "text": "? I must have come from above, right? So"
  },
  {
    "time": "00:36:14",
    "text": "look at how I will calculate the answer"
  },
  {
    "time": "00:36:15",
    "text": ". Before calculating the answer, I'll do"
  },
  {
    "time": "00:36:17",
    "text": "one thing: to avoid confusion, I'll"
  },
  {
    "time": "00:36:20",
    "text": "replace i, j with row, col, because the"
  },
  {
    "time": "00:36:22",
    "text": "for-loop variables are row and col. So,"
  },
  {
    "time": "00:36:25",
    "text": "I'll write row here, and col-1 here;"
  },
  {
    "time": "00:36:29",
    "text": "over here, it will be row. Over here, it"
  },
  {
    "time": "00:36:32",
    "text": "will be col-1. I am just replacing i and"
  },
  {
    "time": "00:36:35",
    "text": "j with row and col. Row, col and here"
  },
  {
    "time": "00:36:38",
    "text": "row, col-1. So now look, what do I need"
  },
  {
    "time": "00:36:41",
    "text": "to find?"
  },
  {
    "time": "00:36:42",
    "text": "I need to find, for this current row and"
  },
  {
    "time": "00:36:45",
    "text": "current column, where am I trying to"
  },
  {
    "time": "00:36:47",
    "text": "come from?"
  },
  {
    "time": "00:36:48",
    "text": "I am trying to come from the left-hand"
  },
  {
    "time": "00:36:50",
    "text": "side. Left. What does that mean?"
  },
  {
    "time": "00:36:53",
    "text": "That the total number of paths to reach"
  },
  {
    "time": "00:36:56",
    "text": "row, col if I come from the left-hand"
  },
  {
    "time": "00:36:59",
    "text": "side will be equal to me asking this"
  },
  {
    "time": "00:37:02",
    "text": "left-hand side cell, \"Hey, how many ways"
  },
  {
    "time": "00:37:05",
    "text": "did you have to be reached?\""
  },
  {
    "time": "00:37:08",
    "text": "Do you know what it will say? \"Do you"
  },
  {
    "time": "00:37:09",
    "text": "know how many ways there were to reach"
  },
  {
    "time": "00:37:11",
    "text": "me?\""
  },
  {
    "time": "00:37:12",
    "text": "t of row, col-1, meaning the total"
  },
  {
    "time": "00:37:14",
    "text": "number of ways to reach this cell from—"
  },
  {
    "time": "00:37:17",
    "text": "remember?"
  },
  {
    "time": "00:37:19",
    "text": "You could only have come here from above"
  },
  {
    "time": "00:37:20",
    "text": ". Only then would you come here. So for"
  },
  {
    "time": "00:37:23",
    "text": "this, it will be \"up.\" For this cell, I"
  },
  {
    "time": "00:37:25",
    "text": "will have to take the total count from"
  },
  {
    "time": "00:37:27",
    "text": "above. So I will write exactly that here"
  },
  {
    "time": "00:37:29",
    "text": ". I am calculating the answer from t of"
  },
  {
    "time": "00:37:34",
    "text": "row, col-1. But I need the answer for"
  },
  {
    "time": "00:37:37",
    "text": "its \"up.\" Because only if I come to this"
  },
  {
    "time": "00:37:40",
    "text": "cell from above can I reach this cell,"
  },
  {
    "time": "00:37:42",
    "text": "row, col. So this is quite tricky, but I"
  },
  {
    "time": "00:37:44",
    "text": "think you should be able to visualize it"
  },
  {
    "time": "00:37:46",
    "text": "this way as well. Okay?"
  },
  {
    "time": "00:37:49",
    "text": "And what if the left cell's value wasn't"
  },
  {
    "time": "00:37:52",
    "text": "one, but zero instead?"
  },
  {
    "time": "00:37:54",
    "text": "Let me draw a diagram here to show you"
  },
  {
    "time": "00:37:57",
    "text": "that as well. So, what are you doing"
  },
  {
    "time": "00:38:00",
    "text": "right now?"
  },
  {
    "time": "00:38:01",
    "text": "You are calculating the count of ways to"
  },
  {
    "time": "00:38:03",
    "text": "reach the row, column from this left"
  },
  {
    "time": "00:38:05",
    "text": "cell."
  },
  {
    "time": "00:38:06",
    "text": "Which one is the left cell? It is row,"
  },
  {
    "time": "00:38:08",
    "text": "column-1, and this time its value is"
  },
  {
    "time": "00:38:12",
    "text": "zero instead of one. So, it's obvious"
  },
  {
    "time": "00:38:15",
    "text": "that I can simply calculate it this way"
  },
  {
    "time": "00:38:18",
    "text": ": t of row, column from the left cell,"
  },
  {
    "time": "00:38:22",
    "text": "meaning how many ways can we reach here"
  },
  {
    "time": "00:38:25",
    "text": "from the left? It will be equal to the"
  },
  {
    "time": "00:38:27",
    "text": "number of ways to reach that cell. And"
  },
  {
    "time": "00:38:29",
    "text": "since this is zero, right? Since this is"
  },
  {
    "time": "00:38:31",
    "text": "zero, one could have arrived here from"
  },
  {
    "time": "00:38:33",
    "text": "this side and also from that side. So,"
  },
  {
    "time": "00:38:35",
    "text": "what will I do simply? It will be equal"
  },
  {
    "time": "00:38:38",
    "text": "to asking t of row, column-1: \"Hey, tell"
  },
  {
    "time": "00:38:41",
    "text": "me, how many ways did you have to be"
  },
  {
    "time": "00:38:44",
    "text": "reached?\" It will say, \"Since I am zero"
  },
  {
    "time": "00:38:46",
    "text": ", I could have been reached from the"
  },
  {
    "time": "00:38:48",
    "text": "left.\""
  },
  {
    "time": "00:38:49",
    "text": "Plus, that same cell says, \"Since I am"
  },
  {
    "time": "00:38:52",
    "text": "zero, I could also have been reached"
  },
  {
    "time": "00:38:55",
    "text": "from above.\" Okay? So you can come from"
  },
  {
    "time": "00:38:58",
    "text": "here like this, and you can also come"
  },
  {
    "time": "00:39:00",
    "text": "straight here like that. Is it clear up"
  },
  {
    "time": "00:39:01",
    "text": "to here? So, this was quite important."
  },
  {
    "time": "00:39:04",
    "text": "I would suggest that you watch this part"
  },
  {
    "time": "00:39:07",
    "text": "again so that you understand how to"
  },
  {
    "time": "00:39:09",
    "text": "visualize a 2D array and how easily we"
  },
  {
    "time": "00:39:12",
    "text": "can write these conditions with its help"
  },
  {
    "time": "00:39:14",
    "text": "."
  },
  {
    "time": "00:39:15",
    "text": "The relations that we are able to write"
  },
  {
    "time": "00:39:17",
    "text": ". So, did you notice what we filled just"
  },
  {
    "time": "00:39:20",
    "text": "now?"
  },
  {
    "time": "00:39:21",
    "text": "We filled the ways to reach t of row,"
  },
  {
    "time": "00:39:25",
    "text": "column from the left cell."
  },
  {
    "time": "00:39:28",
    "text": "That's why you see we filled the left"
  },
  {
    "time": "00:39:30",
    "text": "part here."
  },
  {
    "time": "00:39:31",
    "text": "Now, we can come to the current cell"
  },
  {
    "time": "00:39:33",
    "text": "from the left or we can come from above"
  },
  {
    "time": "00:39:36",
    "text": ". So, here I will write t of row, column"
  },
  {
    "time": "00:39:42",
    "text": "from up, and what does up mean?"
  },
  {
    "time": "00:39:48",
    "text": "We will ask the same question to the row"
  },
  {
    "time": "00:39:51",
    "text": "-1, column cell."
  },
  {
    "time": "00:39:53",
    "text": "So there too, we will write that if the"
  },
  {
    "time": "00:39:57",
    "text": "grid of row-1, meaning the cell above,"
  },
  {
    "time": "00:40:02",
    "text": "has a value of one, then we will apply"
  },
  {
    "time": "00:40:06",
    "text": "the exact same logic there: where is t"
  },
  {
    "time": "00:40:10",
    "text": "of row, column coming from? It is coming"
  },
  {
    "time": "00:40:14",
    "text": "from up. It will be equal to asking the"
  },
  {
    "time": "00:40:17",
    "text": "cell above."
  },
  {
    "time": "00:40:18",
    "text": "Row-1, column."
  },
  {
    "time": "00:40:21",
    "text": "Now remember the cell above, notice this"
  },
  {
    "time": "00:40:24",
    "text": ". You just want to know how many ways"
  },
  {
    "time": "00:40:26",
    "text": "there are from the cell above, right? So"
  },
  {
    "time": "00:40:28",
    "text": "let's assume you are currently at row,"
  },
  {
    "time": "00:40:32",
    "text": "column, and the cell above is row-1,"
  },
  {
    "time": "00:40:35",
    "text": "column, right? Okay, and you want to"
  },
  {
    "time": "00:40:39",
    "text": "find out how many ways there are to"
  },
  {
    "time": "00:40:42",
    "text": "reach this cell if I come here from"
  },
  {
    "time": "00:40:45",
    "text": "above? So, I am asking the one above, \""
  },
  {
    "time": "00:40:47",
    "text": "Hey, how many ways do you have to be"
  },
  {
    "time": "00:40:49",
    "text": "reached?\" And if the one above was my"
  },
  {
    "time": "00:40:51",
    "text": "mirror, do you see how I can come down?"
  },
  {
    "time": "00:40:54",
    "text": "Only when the path from here must have"
  },
  {
    "time": "00:40:57",
    "text": "gone to the one above, right? Meaning,"
  },
  {
    "time": "00:40:59",
    "text": "paths must have come to the one above"
  },
  {
    "time": "00:41:01",
    "text": "from the left, only then would it have"
  },
  {
    "time": "00:41:03",
    "text": "gone down to this row, column. So, that"
  },
  {
    "time": "00:41:06",
    "text": "is why I will check in the one above,"
  },
  {
    "time": "00:41:07",
    "text": "pay attention."
  },
  {
    "time": "00:41:09",
    "text": "I will ask the one above, \"Hey, how many"
  },
  {
    "time": "00:41:11",
    "text": "total ways do you have to be reached"
  },
  {
    "time": "00:41:13",
    "text": "from the left,\" because only paths"
  },
  {
    "time": "00:41:16",
    "text": "coming from the left will go down and"
  },
  {
    "time": "00:41:18",
    "text": "come here."
  },
  {
    "time": "00:41:19",
    "text": "They will come to this. That is why you"
  },
  {
    "time": "00:41:21",
    "text": "see I am only asking it about the left."
  },
  {
    "time": "00:41:23",
    "text": "And if that is not the case, meaning if"
  },
  {
    "time": "00:41:26",
    "text": "the value of grid is zero instead of one"
  },
  {
    "time": "00:41:28",
    "text": ", then it's chill."
  },
  {
    "time": "00:41:30",
    "text": "Meaning, in the else block, I will write"
  },
  {
    "time": "00:41:32",
    "text": "that I will ask the cell above, \"How"
  },
  {
    "time": "00:41:34",
    "text": "many ways do you have to be reached from"
  },
  {
    "time": "00:41:36",
    "text": "the left and from above?\" I can come"
  },
  {
    "time": "00:41:38",
    "text": "this way and also this way."
  },
  {
    "time": "00:41:41",
    "text": "So, I will ask T of row, column about"
  },
  {
    "time": "00:41:45",
    "text": "both from above."
  },
  {
    "time": "00:41:48",
    "text": "How many ways did you have to be reached"
  },
  {
    "time": "00:41:51",
    "text": "from the left?"
  },
  {
    "time": "00:41:54",
    "text": "And plus, how many ways did you have to"
  },
  {
    "time": "00:41:57",
    "text": "be reached from row-1, column from above"
  },
  {
    "time": "00:42:00",
    "text": "?"
  },
  {
    "time": "00:42:01",
    "text": "Okay? So, I can reach this current cell"
  },
  {
    "time": "00:42:05",
    "text": "through both ways. That's why we added"
  },
  {
    "time": "00:42:08",
    "text": "both here."
  },
  {
    "time": "00:42:10",
    "text": "This entire for loop of mine will just"
  },
  {
    "time": "00:42:13",
    "text": "finish."
  },
  {
    "time": "00:42:14",
    "text": "Both conditions will be finished."
  },
  {
    "time": "00:42:17",
    "text": "In the end, what will happen is that my"
  },
  {
    "time": "00:42:20",
    "text": "m-1 and n-1 cell will store two values."
  },
  {
    "time": "00:42:23",
    "text": "One coming from the left and one coming"
  },
  {
    "time": "00:42:25",
    "text": "from above. I need both paths. So, we"
  },
  {
    "time": "00:42:28",
    "text": "will add both. Meaning, what will I"
  },
  {
    "time": "00:42:30",
    "text": "return?"
  },
  {
    "time": "00:42:31",
    "text": "I will return t of m-1, n-1 cell's"
  },
  {
    "time": "00:42:35",
    "text": "possible paths from the left plus t of m"
  },
  {
    "time": "00:42:39",
    "text": "-1, n-1 (from the right, sorry, from"
  },
  {
    "time": "00:42:43",
    "text": "above) possible paths, and don't forget"
  },
  {
    "time": "00:42:48",
    "text": "to take the modulo."
  },
  {
    "time": "00:42:50",
    "text": "We will take the modulo, so we will get"
  },
  {
    "time": "00:42:53",
    "text": "the total paths."
  },
  {
    "time": "00:42:56",
    "text": "Is it clear up to here, because look,"
  },
  {
    "time": "00:42:58",
    "text": "when you come to the last cell m-1 and n"
  },
  {
    "time": "00:43:01",
    "text": "-1, how do you reach it?"
  },
  {
    "time": "00:43:03",
    "text": "You can arrive at this either from here"
  },
  {
    "time": "00:43:05",
    "text": "or from here."
  },
  {
    "time": "00:43:06",
    "text": "That is why I returned the count of"
  },
  {
    "time": "00:43:09",
    "text": "paths coming from the left and paths"
  },
  {
    "time": "00:43:13",
    "text": "coming from above, added to whatever"
  },
  {
    "time": "00:43:16",
    "text": "value was stored here. Did you"
  },
  {
    "time": "00:43:19",
    "text": "understand this? So, this method I have"
  },
  {
    "time": "00:43:20",
    "text": "written for bottom-up is a very common"
  },
  {
    "time": "00:43:23",
    "text": "approach. Do you know what we do in this"
  },
  {
    "time": "00:43:24",
    "text": "? I generally call this DP on Grids."
  },
  {
    "time": "00:43:29",
    "text": "You know what we do is, for a given cell"
  },
  {
    "time": "00:43:32",
    "text": "(i, j), we write the relation based on"
  },
  {
    "time": "00:43:34",
    "text": "where you can come from."
  },
  {
    "time": "00:43:37",
    "text": "Look here, for a given cell, if you are"
  },
  {
    "time": "00:43:40",
    "text": "coming from the left, what will be its"
  },
  {
    "time": "00:43:42",
    "text": "relation? If you are coming from above,"
  },
  {
    "time": "00:43:44",
    "text": "what will the relation be? Why did we"
  },
  {
    "time": "00:43:46",
    "text": "have to add an extra trick here? Because"
  },
  {
    "time": "00:43:49",
    "text": "there could be a mirror here as well."
  },
  {
    "time": "00:43:51",
    "text": "But we are following the same principle"
  },
  {
    "time": "00:43:53",
    "text": ", that from where can we reach cell (i,"
  },
  {
    "time": "00:43:56",
    "text": "j)? We add the paths from there into"
  },
  {
    "time": "00:43:58",
    "text": "this."
  },
  {
    "time": "00:43:59",
    "text": "Okay. So, I get the total paths for (i,"
  },
  {
    "time": "00:44:01",
    "text": "j) here as well. Now, another way that I"
  },
  {
    "time": "00:44:03",
    "text": "sometimes use is to simply copy-paste my"
  },
  {
    "time": "00:44:07",
    "text": "recursion and memoization code into the"
  },
  {
    "time": "00:44:10",
    "text": "bottom-up approach. The code starts"
  },
  {
    "time": "00:44:12",
    "text": "looking exactly the same. Many people"
  },
  {
    "time": "00:44:15",
    "text": "prefer this because it is an exact"
  },
  {
    "time": "00:44:17",
    "text": "copy-paste of the recursion code."
  },
  {
    "time": "00:44:20",
    "text": "But this one is more fun because you"
  },
  {
    "time": "00:44:21",
    "text": "have to visualize and see how many paths"
  },
  {
    "time": "00:44:23",
    "text": "you get if you come from above."
  },
  {
    "time": "00:44:26",
    "text": "How many paths you get if you come from"
  },
  {
    "time": "00:44:27",
    "text": "below here. And so on. So, let's do one"
  },
  {
    "time": "00:44:28",
    "text": "thing."
  },
  {
    "time": "00:44:29",
    "text": "Just as a bonus, I will show you this"
  },
  {
    "time": "00:44:31",
    "text": "approach too, of how the code would look"
  },
  {
    "time": "00:44:33",
    "text": "if I copy-paste the recursion-memo code"
  },
  {
    "time": "00:44:35",
    "text": "into bottom-up."
  },
  {
    "time": "00:44:36",
    "text": "So look, so the video doesn't get too"
  },
  {
    "time": "00:44:38",
    "text": "long. I have written both styles of"
  },
  {
    "time": "00:44:41",
    "text": "bottom-up, and I will navigate and show"
  },
  {
    "time": "00:44:44",
    "text": "them to you here. The first approach was"
  },
  {
    "time": "00:44:46",
    "text": "the proper way of DP on Grids, where you"
  },
  {
    "time": "00:44:49",
    "text": "visualize and derive the relation. This"
  },
  {
    "time": "00:44:51",
    "text": "is that method. See, I have taken the"
  },
  {
    "time": "00:44:53",
    "text": "bottom-up vector. Where t [row][col]["
  },
  {
    "time": "00:44:55",
    "text": "left] tells us what? Number of ways to"
  },
  {
    "time": "00:44:57",
    "text": "reach this cell by entering from the"
  },
  {
    "time": "00:44:59",
    "text": "left. And what will this become? By"
  },
  {
    "time": "00:45:01",
    "text": "entering from the above. And here I"
  },
  {
    "time": "00:45:04",
    "text": "stored t [0][0][left] = 1. Because you"
  },
  {
    "time": "00:45:07",
    "text": "are at the starting cell itself here."
  },
  {
    "time": "00:45:09",
    "text": "And what did I do first of all? Filled"
  },
  {
    "time": "00:45:11",
    "text": "the zeroth row. Filled the zeroth column"
  },
  {
    "time": "00:45:14",
    "text": ". Right? I have written full comments so"
  },
  {
    "time": "00:45:16",
    "text": "that everything is clear here. After"
  },
  {
    "time": "00:45:18",
    "text": "that, I am filling the rest. Remember, I"
  },
  {
    "time": "00:45:20",
    "text": "just showed you writing this entire code"
  },
  {
    "time": "00:45:22",
    "text": ". So, just to save my time."
  },
  {
    "time": "00:45:24",
    "text": "I am just showing you the code already"
  },
  {
    "time": "00:45:27",
    "text": "written here. Right? And at the"
  },
  {
    "time": "00:45:29",
    "text": "destination, you just had to send the"
  },
  {
    "time": "00:45:32",
    "text": "sum of both left and up. So, the entire"
  },
  {
    "time": "00:45:34",
    "text": "code is exactly what I showed you. If"
  },
  {
    "time": "00:45:37",
    "text": "you submit this, it will pass all the"
  },
  {
    "time": "00:45:38",
    "text": "test cases. Now, let me show you the"
  },
  {
    "time": "00:45:40",
    "text": "second code as well. See, it is the same"
  },
  {
    "time": "00:45:42",
    "text": "normal one. Left, up, everything is"
  },
  {
    "time": "00:45:44",
    "text": "completely the same. It is just a copy"
  },
  {
    "time": "00:45:46",
    "text": "of that recursion memoization code."
  },
  {
    "time": "00:45:49",
    "text": "Right? The bonus one I told you about."
  },
  {
    "time": "00:45:51",
    "text": "Reached the destination or not?"
  },
  {
    "time": "00:45:53",
    "text": "If you reached, and if the current cell"
  },
  {
    "time": "00:45:56",
    "text": "has a value of 1, then where will you"
  },
  {
    "time": "00:45:58",
    "text": "get the answer from?"
  },
  {
    "time": "00:46:01",
    "text": "Row + 1, column up if you came from left"
  },
  {
    "time": "00:46:03",
    "text": ", otherwise row, column + 1 left if you"
  },
  {
    "time": "00:46:06",
    "text": "came from up."
  },
  {
    "time": "00:46:07",
    "text": "See, it is exactly the same relation we"
  },
  {
    "time": "00:46:09",
    "text": "wrote in recursion."
  },
  {
    "time": "00:46:11",
    "text": "Okay? So, finally, we got the answer"
  },
  {
    "time": "00:46:15",
    "text": "from 0, left. So, I hope you have"
  },
  {
    "time": "00:46:17",
    "text": "understood this. If you have any doubts"
  },
  {
    "time": "00:46:18",
    "text": ", raise them in the comment section, I"
  },
  {
    "time": "00:46:19",
    "text": "will try to help out. See you in the"
  },
  {
    "time": "00:46:20",
    "text": "next video. Thank you."
  }
]
export default data;