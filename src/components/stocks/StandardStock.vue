<template>
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <div class="card-header bg-outline-success">
                <h4 class="card-title"> {{ stock.name }}
                    <small class="float-right">${{ stock.price }}</small>
                </h4>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <label>
                        <input
                            v-model.number="quantity"
                            class="form-control"
                            placeholder="quantity"
                            type="number"/>
                    </label>
                </div>
                <div class="float-right">
                    <button
                        :class="purchaseButtonClass"
                        :disabled="!canPurchaseStock"
                        class="btn"
                        @click="handleStockPurchase"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StandardStock",
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        handleStockPurchase() {
            const purchaseOrder = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                totalPrice: this.stock.price * this.quantity,
                quantity: this.quantity
            }
            console.log(purchaseOrder);
            this.quantity = 0;
        }
    },
    computed: {
        canPurchaseStock() {
            return this.quantity > 0 && Number.isInteger(this.quantity);
        },
        purchaseButtonClass() {
            return this.canPurchaseStock ? 'btn-success' : 'btn-outline-danger';
        }
    }
}
</script>

<style scoped>
.card {
    margin-top: 20px;
}

.card-title {
    margin: 0;
}

</style>
