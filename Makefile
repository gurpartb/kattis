CC = g++

test: mr_anaga3
	cat sample.txt | ./mr_anaga3

mr_anaga3: mr_anaga3.o
	$(CC) -o mr_anaga3 mr_anaga3.o

mr_anaga3.o: mr_anaga3.cpp
	$(CC) -c mr_anaga3.cpp

test2: mr_anaga3
	cat smaple.txt | ./mr_anaga3

clean:
	rm *.o mr_anaga mr_anaga2 mr_anaga3
