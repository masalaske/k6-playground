export interface CreateCrocodile {
    name: string;
    sex: 'M' | 'F';
    date_of_birth: string;
}

export class CreateCrocodileBuilder {
    private crocodile: CreateCrocodile;

    constructor() {
        this.crocodile = {
            name: '',
            sex: 'M',
            date_of_birth: '',
        };
    }

    withName(name: string): CreateCrocodileBuilder {
        this.crocodile.name = name;
        return this;
    }

    withSex(sex: 'M' | 'F'): CreateCrocodileBuilder {
        this.crocodile.sex = sex;
        return this;
    }

    withDateOfBirth(date: string): CreateCrocodileBuilder {
        this.crocodile.date_of_birth = date;
        return this;
    }

    build(): CreateCrocodile {
        return this.crocodile;
    }
}

export function someCreateCrocodile(): CreateCrocodile {
    return new CreateCrocodileBuilder()
        .withName('Crocy42')
        .withSex('M')
        .withDateOfBirth('2024-04-26')
        .build();
}  
