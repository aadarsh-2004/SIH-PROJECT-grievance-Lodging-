#include <iostream>
using namespace std;
class Userinfo {
public:
    char name[20];
    int id;
    int age;
};

int main() {
    Userinfo u1 = {"Ravi", 111, 35};
    Userinfo* ptr = &u1;

    cout << "User Name= " << ptr->name<<"\n" ;
    cout << "User id= " << ptr->id<<"\n"  ;
    cout << "User Age= " << ptr->age<<"\n" ;

    return 0;
}
