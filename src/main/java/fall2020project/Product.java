package fall2020project;

import java.util.ArrayList;

class Product {
	private int price ; 
	private String proName ; 
	public Product (String s,Integer i) {
		this.price=i;
		this.proName=s;
	}
	public String getName() {
		return this.proName ; 
	} 
	public int getPrice() {
		return this.price ; 
	}
	public static Integer getPrice(String string,ArrayList <Product> a) {
		int p=0 ; 
		for(int i=0 ; i<a.size();i++) {
			if(a.get(i).getName().equalsIgnoreCase(string)) {
				p= a.get(i).getPrice();
			}
		}
		return p ;
	}

}