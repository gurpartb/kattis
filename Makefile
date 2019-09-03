CC = g++

all: baconeggsandspam.out
	cat sample.txt | ./baconeggsandspam.out

baconeggsandspam.out: baconeggsandspam.o
	$(CC) -o baconeggsandspam.out baconeggsandspam.cpp

baconeggsandspam.o: baconeggsandspam.cpp
	$(CC) -c baconeggsandspam.cpp

clear:
	make clean

clear-all:
	make clear

clean:
	rm baconeggsandspam.out baconeggsandspam.o