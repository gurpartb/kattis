CC = g++

all: helpaphd.o
	cat sample.txt | ./helpaphd.o

helpaphd.o: helpaphd.cpp
	$(CC) -o helpaphd.o helpaphd.cpp

clean:
	rm helpaphd.o