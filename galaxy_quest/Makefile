CC = g++

galaxy_quest: galaxy_quest.o
	$(CC) -o galaxy_quest galaxy_quest.o

galaxyquest.o: galaxy_quest.cpp
	$(CC) -c galaxy_quest.cpp

clean:
	rm *.o galaxy_quest

test: galaxy_quest
	cat galaxy_quest_data.txt | ./galaxy_quest
